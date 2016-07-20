var qs = require('querystring');
var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var zip = require('gulp-zip');
var base64 = require('gulp-base64');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
	'ie >= 11',
	'edge >= 20',
	'ff >= 44',
	'chrome >= 48',
	'safari >= 8',
	'opera >= 35',
	'ios >= 8'
];
var gridCss = getResolvePath('../bin/neoui-grid/css/grid.css');
var treeJs = [getResolvePath('../bin/neoui-tree/js/treeComp.js')]
var modeTreeJs = [
  	getResolvePath('../bin/neoui-tree/js/treeComp.js'),
  	getResolvePath('../bin/kero/js/dtJs/tree.js')
]
var treeCss = getResolvePath('../bin/neoui-tree/css/tree.css');
var polyfillJs = [
  	getResolvePath('../bin/neoui/vendor/polyfill/core.js'),
  	getResolvePath('../bin/neoui/vendor/polyfill/JsExtensions.js'),
  	getResolvePath('../bin/neoui/vendor/polyfill/respond.js')
]
var assets = ''; //暂时没处理，后续考虑

var baseColorStr = '$color-primary: $palette-indigo-500 !default;';
	baseColorStr += '$color-primary-dark: $palette-indigo-700 !default;';
	baseColorStr += '$color-accent: $palette-pink-A200 !default;';

/**
	标记状态
		doing 构建中
		done 构建完成
		down 第一次下载
		finish 完成
**/
flagObj = {};

function errHandle(err) {
    console.log(err.fileName + '文件编译出错，出错行数为' + err.lineNumber + '，具体错误信息为：' + err.message);
    this.end();
};

function run(app, cb){
	try{
		gulpRun(app,cb);
	}catch(e){

	}
  	
}

/**
 * [gulpRun description]
 * @param  {[type]}   app [description]
 * @param  {Function} cb  [description]
 * @return {[type]}       [description]
 */
function gulpRun(app, cb){
	var params = app.request.body,
  		baseJsArr = params.jsArr?params.jsArr.split(','):[],
  		jsArr = [];

  	// 处理jsArr，转为getResolvePath( p)
  	for(var i = 0; i < baseJsArr.length; i++){
  		if(baseJsArr[i] != 'hasGrid' && baseJsArr[i] != 'hasTree' && baseJsArr[i] != 'hasPolyfill'){
  			jsArr.push(getResolvePath(baseJsArr[i]));
  		}else{
  			jsArr.push(baseJsArr[i]);
  		}
  	}

  	var	cssArr = params.cssArr?params.cssArr.split(','):[],
  		colorArr = params.colorArr?params.colorArr.split(','):[],
  		hasModel = jsArr.indexOf(getResolvePath('../bin/kero/js/app.js')),
  		jsHashStr = hash(params.jsArr + params.colorArr),
  		baseURL =  '../dist/pages/custom/temp/customized/' + jsHashStr,
  		settingStr = params.settingStr;
  	var colorStr = '$color-primary: ' + colorArr[0] + ',' + colorArr[1] + ',' + colorArr[2] + ' !default;';
	colorStr += '$color-primary-dark: ' + colorArr[3] + ',' + colorArr[4] + ',' + colorArr[5] + ' !default;';
	colorStr += '$color-accent: ' + colorArr[6] + ',' + colorArr[7] + ',' + colorArr[8] + ' !default;';
	// 存储主色 辅色文件
	var colorFilePath = '../dist/pages/custom/themeColors.scss'; 
	// 存储引用css文件
	var customizedCssFilePath = '../dist/pages/custom/customized.scss';
	var setttingFilePath = baseURL + '/setting.txt';
	//压缩包名称取package.json
	var data = fs.readFileSync(getResolvePath('../bin/neoui/package.json'), 'utf8');
	var packageObj = JSON.parse( data );
	var zipName = packageObj.name + '-' + packageObj.version + '.zip'; 
  	// 处理grid、tree、polyfill的压缩
	gulp.task('customizedGridTreePolyfill',function(){
		var hasGrid = jsArr.indexOf('hasGrid');
		if(hasGrid > -1){
			jsArr.splice(hasGrid,1)
			var arr = [];
			// 将jsArr中的grid相关的放入arr 
			for(var i = 0; i < jsArr.length;i++){
				var jsStr =  jsArr[i];
				if(jsStr.indexOf('bin\\grid\\js') > -1){
					arr.push(jsStr);
				}
			}
			for(var i = 0; i < arr.length; i++){
				var index = jsArr.indexOf(arr[i]);
				jsArr.splice(index,1);
			}
			if(hasModel > -1){
				arr.push(getResolvePath('../bin/kero/js/dtJs/grid.js'));
			}else{
			}
			gulp.src(arr)
	        	.pipe(concat('u-grid.js'))
	        	.pipe(gulp.dest(getResolvePath(baseURL + '/js')))
	        	.pipe(uglify())
	        	.on('error', errHandle)
	        	.pipe(rename('u-grid.min.js'))
	        	.pipe(gulp.dest(getResolvePath(baseURL + '/js')));

	    	gulp.src(gridCss)
	      		.pipe(gulp.dest(getResolvePath(baseURL + '/css')))
		}
		var hasTree = jsArr.indexOf('hasTree');
		if(hasTree > -1){
			jsArr.splice(hasTree,1)
			var arr = [];
			if(hasModel > -1){
				arr = modeTreeJs;
			}else{
				arr = treeJs;
			}
			gulp.src(arr)
			    .pipe(concat('u-tree.js'))
			    .pipe(gulp.dest(getResolvePath(baseURL + '/js')))
			    .pipe(uglify())
			    .on('error', errHandle)
			    .pipe(rename('u-tree.min.js'))
			    .pipe(gulp.dest(getResolvePath(baseURL + '/js')));

			gulp.src(treeCss)
				.pipe(gulp.dest(getResolvePath(baseURL + '/css')))
		}
		var hasPolyfill = jsArr.indexOf('hasPolyfill');
		if(hasPolyfill > -1){
			jsArr.splice(hasPolyfill,1)
			gulp.src(polyfillJs)
		        .pipe(concat('u-polyfill.js'))
		        .pipe(gulp.dest(getResolvePath(baseURL + '/js')))
		        .pipe(uglify())
		        .on('error', errHandle)
		        .pipe(rename('u-polyfill.min.js'))
		        .pipe(gulp.dest(getResolvePath(baseURL + '/js')));
		}
	});

	// 处理asset
	gulp.task('customizedAssets',['customizedGridTreePolyfill'],function(){
		return  gulp.src(assets)
    				.pipe(gulp.dest(getResolvePath(baseURL)))
	});

	// 处理css压缩
	gulp.task('customizedCss',['customizedAssets'],function(){
		return  gulp.src(getResolvePath(customizedCssFilePath))
				    .pipe(sass().on('error',errHandle))
				    .pipe(base64().on('error',errHandle))
				    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
				    .pipe(rename('u.css'))
				    .pipe(gulp.dest(getResolvePath(baseURL + '/css')))
				    .pipe(minifycss())
				    .pipe(rename('u.min.css'))
				    .pipe(gulp.dest(getResolvePath(baseURL + '/css')));
	});

	// 处理js压缩
	gulp.task('customizedJs',['customizedCss'],function(){
		return  gulp.src(jsArr)
					.pipe(concat('u.js'))
					.pipe(gulp.dest(getResolvePath(baseURL + '/js')))
					.pipe(uglify())
					.on('error', errHandle)
					.pipe(rename('u.min.js'))
					.pipe(gulp.dest(getResolvePath(baseURL + '/js')))
	});

	// 生成zip
	gulp.task('customizedZip',['customizedJs'],function(){
		return	gulp.src(getResolvePath(baseURL + '/**'))
					.pipe(zip(zipName))
					.pipe(gulp.dest(getResolvePath(baseURL)))
	});

	// 执行完成之后修改状态
	gulp.task('customizedConcurrent',['customizedZip'],function(){
		flagObj[jsHashStr] = 'done';
	});


	gulp.task('customized',['customizedConcurrent']);

	function downFun(){
		// 将主题颜色还原
		fs.writeFileSync(getResolvePath(colorFilePath),baseColorStr);

		
		var filePath = baseURL + '/' + zipName;
	    if (fs.existsSync(getResolvePath(filePath))){
	      app.body=filePath;
	      flagObj[jsHashStr] = 'finish';
	    }else{
	        console.log('file not find!');
	    }
    	cb(null,"");
	}

	// 正式开始执行程序，创建临时文件夹
  	var tempPath = getResolvePath('../dist/pages/custom/temp/customized');
	fs.exists( tempPath, function(exist) {
		if(!exist){
			fs.mkdirSync(getResolvePath('../dist/pages/custom/temp'));
			fs.mkdirSync(getResolvePath('../dist/pages/custom/temp/customized'));
		}
	});
	// 创建本次对应文件夹
	fs.exists(getResolvePath(baseURL), function(exist) {
		if(!exist){
 			fs.mkdirSync(getResolvePath(baseURL));
		}
		// 写入setting.txt,延迟是为了保证基准目录已经创建
		setTimeout(function(){
			var writerStream = fs.createWriteStream(getResolvePath(setttingFilePath));
			writerStream.write(settingStr);
			writerStream.end();
		},100);
		
	});

	// 写入主色、辅色变量文件
	fs.writeFile(getResolvePath(colorFilePath),colorStr,function(e){
		// 写入引入css文件
		fs.writeFile(getResolvePath(customizedCssFilePath),cssArr.toString().replace(/\,/g,";"),function(e){
			if(flagObj[jsHashStr]){
			}else{
				flagObj[jsHashStr] = 'doing';
				gulp.run('customized');
			}

			var ii = setInterval(function(){
				if((flagObj[jsHashStr] == 'done' || flagObj[jsHashStr] == 'finish') && flagObj[jsHashStr] != 'down'){
					if(flagObj[jsHashStr] == 'done')
						flagObj[jsHashStr] = 'down';
					downFun();
					clearInterval(ii);
				}
			},100);
		});
	});
}

var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
/**
 * [hash 对jsStr和cssStr进行hash，用于判断是否生成过对应文件（未确定是否前端控制）]
 * @param  {[string]}   input [js及css拼接的字符串]
 * @return {[string]}       [hash值]
 */
function hash(input){
    var hash = 5381;
    var i = input.length - 1;

    if(typeof input == 'string'){
        for (; i > -1; i--)
            hash += (hash << 5) + input.charCodeAt(i);
    }else{
        for (; i > -1; i--)
            hash += (hash << 5) + input[i];
    }
    var value = hash & 0x7FFFFFFF;
  
    var retValue = '';
    do{
        retValue += I64BIT_TABLE[value & 0x3F];
    }
    while(value >>= 6);
  
    return retValue;
}


function getResolvePath(p){
	return path.resolve(__dirname, p)
}

exports.run = run;
