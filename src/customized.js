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

/*gridComp通过定制来选中
var gridJs = ['src/ui/grid/gridComp.js']
var modelGridJs = ['src/ui/grid/gridComp.js',
            'src/model/comp-adp/grid.js']*/
var gridJs = []
var modelGridJs = ['custom/src/model/comp-adp/grid.js']
var treeJs = ['custom/src/ui/tree/treeComp.js']
var modeTreeJs = ['custom/src/ui/tree/treeComp.js',
            'custom/src/model/comp-adp/tree.js']
var polyfillJs = [
            'custom/src/polyfill/core.js',
            'custom/src/polyfill/JsExtensions.js'
        ]
var gridCss = 'custom/src/ui/grid/grid.css';
var treeCss = 'custom/src/ui/tree/tree.css';
var assets = 'customizedAssets/**';

flagObj = {};

function errHandle(err) {
    console.log(err.fileName + '文件编译出错，出错行数为' + err.lineNumber + '，具体错误信息为：' + err.message);
    this.end();
};

function run(app,cb){
	// var req = options.req,
	// 	res = options.res,
	// 	pathname = options.pathname,
	// 	responseString = '';
	// req.on('data', function(data) {
	// 	responseString += data;
	// });
  //
	// req.on('end', function() {
	// 	//这里接收的参数是字符串形式,需要格式化成json格式使用
	// 	var params = qs.parse(responseString.toString('utf-8'));
	// 	var obj = {
	// 		params:params,
	// 		req:req,
	// 		res:res
	// 	}
	// 	gulpRun(obj);
	// });
  gulpRun(app,cb);
}


function gulpRun(app,cb){
	var params = app.request.body,
		// req = options.req,
		// res = options.res,
		jsArr = params.jsArr?params.jsArr.split(','):[],
		cssArr = params.cssArr?params.cssArr.split(','):[],
		colorArr = params.colorArr?params.colorArr.split(','):[],
		hasGrid = jsArr.indexOf('hasGrid'),
		hasTree = jsArr.indexOf('hasTree'),
		hasPolyfill = jsArr.indexOf('hasPolyfill'),
		hasModel = jsArr.indexOf('custom/src/model/core/core.js'),
		jsHashStr = hash(params.jsArr + params.colorArr),
		baseURL =  'root/custom/dist/customized/' + jsHashStr,
		settingStr = params.settingStr;

	gulp.task('customizedGridTreePolyfill',function(){
		
		if(hasGrid > -1){
			/*压缩grid*/
			jsArr.splice(hasGrid,1)
			var arr = [];
			if(hasModel > -1){
				arr = modelGridJs;
			}else{
				arr = gridJs;
			}
			/* 将jsArr中的grid相关的放入arr */
			for(var i = 0;i<jsArr.length;i++){
				var jsStr =  jsArr[i];
				if(jsStr.indexOf('src/ui/grid/') > -1){
					jsArr.splice(i,1);
					arr.push(jsStr);
				}
			}
			
			gulp.src(arr)
		        .pipe(concat('u-grid.js'))
		        .pipe(gulp.dest(baseURL + '/js'))
		        .pipe(uglify())
		        .on('error', errHandle)
		        .pipe(rename('u-grid.min.js'))
		        .pipe(gulp.dest(baseURL + '/js'));
		    gulp.src(gridCss)
		        .pipe(gulp.dest(baseURL + '/css'))
		}

		if(hasTree > -1){
			/*压缩tree*/
			jsArr.splice(hasTree,1)
			var arr = [];
			if(hasModel > -1){
				arr = modeTreeJs;
			}else{
				arr = treeJs;
			}
			gulp.src(arr)
			    .pipe(concat('u-tree.js'))
			    .pipe(gulp.dest(baseURL + '/js'))
			    .pipe(uglify())
			    .on('error', errHandle)
			    .pipe(rename('u-tree.min.js'))
			    .pipe(gulp.dest(baseURL + '/js'));
			gulp.src(treeCss)
			    .pipe(gulp.dest(baseURL + '/css'))
		}
		if(hasPolyfill > -1){
			/*压缩grid*/
			jsArr.splice(hasPolyfill,1)
			gulp.src(polyfillJs)
		        .pipe(concat('u-polyfill.js'))
		        .pipe(gulp.dest(baseURL + '/js'))
		        .pipe(uglify())
		        .on('error', errHandle)
		        .pipe(rename('u-polyfill.min.js'))
		        .pipe(gulp.dest(baseURL + '/js'));

		}
	});

	gulp.task('customizedAssets',['customizedGridTreePolyfill'],function(){
		return gulp.src(assets)
    			.pipe(gulp.dest(baseURL))
	});

	gulp.task('customizedCss',['customizedAssets'],function(){
		/*压缩css*/
		return gulp.src(customizedCssFilePath)
        .pipe(sass().on('error',errHandle))
        .pipe(base64().on('error',errHandle))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(rename('u.css'))
        .pipe(gulp.dest(baseURL + '/css'))
        //.pipe(sourcemaps.init())
        .pipe(minifycss())
        //.pipe(sourcemaps.write())
        .pipe(rename('u.min.css'))
        .pipe(gulp.dest(baseURL + '/css'));
	});

	gulp.task('customizedJs',['customizedCss'],function(){
		/*压缩js*/
		return gulp.src(jsArr)
				.pipe(concat('u.js'))
				.pipe(gulp.dest(baseURL + '/js'))
				.pipe(uglify())
				.on('error', errHandle)
				.pipe(rename('u.min.js'))
				.pipe(gulp.dest(baseURL + '/js'))
	});

	gulp.task('customizedZip',['customizedJs'],function(){
		return	gulp.src(baseURL + '/**')
			.pipe(zip('UUI-1.0.0.zip'))
			.pipe(gulp.dest(baseURL))
	});

	gulp.task('customizedConcurrent',['customizedZip'],function(){
		flagObj[jsHashStr] = 'done';
	});


	gulp.task('customized',['customizedConcurrent'],function(){
	});


	function downFun(){
		/*将主题颜色还原*/
		fs.writeFileSync(colorFilePath,baseColorStr);

		var filePath = baseURL + '/UUI-1.0.0.zip';
    if (fs.existsSync(filePath)){
      app.body=filePath;
      flagObj[jsHashStr] = 'finish';
    }else{
        console.log('file not find!');
    }

    cb(null,"");

		// fs.exists(filePath, function(exist) {
		// 	if(exist) {
		// 		res.writeHead(200, 'Partial Content', {
		// 			'Content-Type' : 'text/html',
		// 			"Access-Control-Allow-Origin":"*",
		// 		});
		// 		res.write(filePath);
		// 		res.end();
		// 		flagObj[jsHashStr] = 'finish';
		// 	}else{
		// 		res.writeHead(400, 'Partial Content', {
		// 			'Content-Type' : 'text/html',
		// 			"Access-Control-Allow-Origin":"*",
		// 		});
		// 		res.write(filePath);
		// 		res.end();
		// 		flagObj[jsHashStr] = 'finish';
		// 	}
		// });
	}
	/* 标记状态
		doing 构建中
		done 构建完成
		down 第一次下载
		finish 完成
	*/

	/*设置主题颜色*/
	var baseColorStr = '$color-primary: $palette-indigo-500 !default;';
		baseColorStr += '$color-primary-dark: $palette-indigo-700 !default;';
		baseColorStr += '$color-accent: $palette-pink-A200 !default;';
	var colorStr = '$color-primary: ' + colorArr[0] + ',' + colorArr[1] + ',' + colorArr[2] + ' !default;';
	colorStr += '$color-primary-dark: ' + colorArr[3] + ',' + colorArr[4] + ',' + colorArr[5] + ' !default;';
	colorStr += '$color-accent: ' + colorArr[6] + ',' + colorArr[7] + ',' + colorArr[8] + ' !default;';
	//themeColors写入主题颜色
	//customized 写入需要压缩的css
	var colorFilePath = 'custom/src/ui/themeColors.scss';
	var customizedCssFilePath = 'custom/src/ui/customized.scss';
	var setttingFilePath = baseURL + '/setting.txt';
	fs.exists('root/custom/dist/customized', function(exist) {
		if(!exist){
			fs.mkdirSync('root/custom/dist');
			fs.mkdirSync('root/custom/dist/customized');
		}
	});
	fs.exists(baseURL, function(exist) {
		if(!exist){
			fs.mkdirSync(baseURL);
		}
	});
	setTimeout(function(){
		var writerStream = fs.createWriteStream(setttingFilePath);
		writerStream.write(settingStr);
		writerStream.end();
	},100)


	fs.writeFile(colorFilePath,colorStr,function(e){
		fs.writeFile(customizedCssFilePath,cssArr.toString().replace(/\,/g,";"),function(e){
			if(flagObj[jsHashStr]){
				// console.log('not new');
			}else{
				// console.log('new');
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

/*
对jsStr和cssStr进行hash，用于判断是否生成过对应文件（未确定是否前端控制）
*/

var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
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


exports.run = run;
