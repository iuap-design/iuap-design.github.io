var fs = require('fs'),
url = require("url");

var qs = require('querystring');

function run(app,cb){
	var req = options.req,
		res = options.res,
		pathname = options.pathname,
		resonseString = '';

	var params = url.parse(req.url,true).query;
	var filePath = params.patch;
	var transfer = new Transfer(req, res);
	transfer.Download(filePath);

}
exports.run = run;



function Transfer(req, res) {
	this.req = req;
	this.res = res;
}

/**
 * [@description](/user/description) 计算上次的断点信息
 * [@param](/user/param) {string} Range 请求http头文件中的断点信息，如果没有则为undefined，格式（range: bytes=232323-）
 * [@return](/user/return) {integer} startPos 开始的下载点
 */
Transfer.prototype._calStartPosition = function(Range) {
	var startPos = 0;
	if( typeof Range != 'undefined') {
		var startPosMatch = /^bytes=([0-9]+)-$/.exec(Range);
		startPos = Number(startPosMatch[1]);
	}
	return startPos;
}
/**
 * [@description](/user/description) 配置头文件
 * [@param](/user/param) {object} Config 头文件配置信息（包含了下载的起始位置和文件的大小）
 */
Transfer.prototype._configHeader = function(Config) {
	var startPos = Config.startPos,
		fileSize = Config.fileSize,
		res = this.res;
	// 如果startPos为0，表示文件从0开始下载的，否则则表示是断点下载的。
	if(startPos == 0) {
		res.setHeader('Accept-Range', 'bytes');
	} else {
		res.setHeader('Content-Range', 'bytes ' + startPos + '-' + (fileSize - 1) + '/' + fileSize);
	}
	res.writeHead(206, 'Partial Content', {
		'Content-Type' : 'application/octet-stream',
		"Access-Control-Allow-Origin":"*",
		"Content-Disposition":"attachment;filename=UUI-1.0.0.zip"
	});
}

/**
 * [@description](/user/description) 初始化配置信息
 * [@param](/user/param) {string} filePath
 * [@param](/user/param) {function} down 下载开始的回调函数
 */
Transfer.prototype._init = function(filePath, down) {
	var config = {};
	var self = this;
	fs.stat(filePath, function(error, state) {
		if(error)
			throw error;

		config.fileSize = state.size;
		var range = self.req.headers.range;
		config.startPos = self._calStartPosition(range);
		self.config = config;
		self._configHeader(config);
		down();
	});
}
/**
 * [@description](/user/description) 生成大文件文档流，并发送
 * [@param](/user/param) {string} filePath 文件地址
 */
Transfer.prototype.Download = function(filePath) {
	var self = this;

	function d(exist){
		if(exist) {
			self._init(filePath, function() {
				var config = self.config
					res = self.res;
				var fReadStream = fs.createReadStream(filePath, {
					encoding : 'binary',
					//bufferSize : 1024 * 1024,
					//start : config.startPos,
					//end : config.fileSize
				});
				var c = '';
				fReadStream.on('data', function(chunk) {
					c += chunk;
				});
				fReadStream.on('end', function() {
					self.res.write(c, 'binary');
					self.res.end();
				});
			});
		} else {
			console.log('文件不存在！');
			return;
		}
	}
	fs.exists(filePath, function(exist) {
		d(exist)
	});
}
