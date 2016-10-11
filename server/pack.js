var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var zip = require('gulp-zip');
var clean = require('gulp-clean');

// 获取Neoui es6模块依赖关系
var neojson = require('./neoui.json');
var neoModule = neojson.es6;
var koModule = neojson.ko;

var zipPath;

var tinperPoly = 'tinper-neoui-polyfill';
var tinperNeoui = 'tinper-neoui';

module.exports = function(data, self, cb){

	/**
	 * Poly Match: polyselect
	 * Neoui Match: neoselect  已作废
	 * CSS Match:cssselect
	 * JS Match: jsselect
	 */
	var dataJson = data;
	console.log(dataJson);
	var basePath = '../node_modules/';

	/**
	 * polyfill定制部分
	 */
	var polyBasePath = path.resolve(__dirname, basePath + tinperPoly);
	var polyJs = [];

	if(dataJson.polyselect) {
		for(var pi = 0, polyLen = dataJson.polyselect.length; pi < polyLen; pi++) {
			polyJs.push(polyBasePath + '/dist/' + dataJson.polyselect[pi] + '.js');
		}
	}
	gulp.task('poly', function(){
		if(polyJs.length === 2){
			return gulp.src(polyJs)
				.pipe(concat('u-polyfill.js'))
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		} else if (polyJs.length === 1 && dataJson.polyselect[0] === 'u-polyfill-core') {
			return gulp.src(polyJs)
				.pipe(rename('u-polyfill.js'))
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		} else if (polyJs.length === 1 && dataJson.polyselect[0] === 'u-polyfill-respond') {
			return gulp.src(polyJs)
				.pipe(rename('u-polyfill.js'))
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		} else {
			return ;
		}
	});

	/**
	 * 模板颜色定制部分
	 */
	var dataColor = dataJson.themeColor;
	var corPath = path.resolve(__dirname, basePath + tinperNeoui +'/scss/core/minxin-themeColors.scss');
	var corData = fs.readFileSync(corPath, 'utf-8');
	var corNewData = corData.replace(/(\$color-primary: ).*(;)/g,`$1"${dataColor}"$2`);
	fs.writeFileSync(corPath,corNewData, 'utf-8');
	
	/**
	 * neoui定制部分
	 */
	// 数组填充
	var neouiBasePath = path.resolve(__dirname,basePath + tinperNeoui);
	var neouiCss =[];
	var neouiJs =[];
	if(dataJson.cssselect) {
		for (var ci=0; ci<dataJson.cssselect.length; ci++) {
			neouiCss.push(neouiBasePath + '/scss/ui/' + dataJson.cssselect[ci] + '.scss');
		}
	}
	if(dataJson.jsselect) {
		for (var ji=0; ji<dataJson.jsselect.length; ji++) {
			neouiCss.push(neouiBasePath + '/scss/ui/' + dataJson.jsselect[ji] + '.scss');
			neouiJs.push(neouiBasePath + '/js/' + dataJson.jsselect[ji] + '.js');
		}

		if(dataJson.adselect){
			console.log('选择ko');
		}
	}


	// js内容
	var entryPath = path.resolve(__dirname,'../entry.js');
	var dataNeo = ["import {extend} from \'tinper-sparrow/js/extend\';"];
	var ex = {};

	var entryFun = function() {
		if(dataJson.jsselect){
			for(var i=0, neoLength = dataJson.jsselect.length; i < neoLength; i++ ) {
				var pluginModule = neoModule[dataJson.jsselect[i]];
				for (var key in pluginModule) {
					dataNeo.push(pluginModule[key]);
					ex[key] = key;
				}
			}
		}
	};
	entryFun();

	// kero-adapter内容
	var dataKo = [""];
	var koFun = function(){
		if(dataJson.adselect && dataJson.jsselect) {
			for(var i=0, neoLength = dataJson.jsselect.length; i < neoLength; i++ ) {
				var koName = 'keroa-' + dataJson.jsselect[i].substr(6);
				var koObj = koModule[koName];
				for(var key in koObj) {
					dataKo.push(koObj[key]);
					ex[key] = key;
				}
			}
		}		
	};
	koFun();

	// 写入入口文件
	var dataImport = dataNeo.concat(dataKo).join('\n');
	// var dataNeoStr = dataNeo.join('\n');
	fs.writeFileSync(entryPath,dataImport);
	var exBefore = '\nvar ex = ';
	var exStr = JSON.stringify(ex);
	var exAfter = [
		"\nextend(ex,window.u || {});",
		"window.u = ex;",
		"export {ex as u};"
	].join("\n");
	var exportStr = exBefore + exStr + exAfter;
	fs.appendFileSync(entryPath,exportStr);

	// 入口文件字符串替换
	var dataFsOrigin = fs.readFileSync(entryPath, 'utf-8');
	var dataFs = dataFsOrigin.replace(/:"([\w-]+)"/g,":$1");
	fs.writeFileSync(entryPath, dataFs);




	
	

	// sass部分
	gulp.task('sass', function() {
		return gulp.src(neouiCss)
			.pipe(sass())
			.pipe(concat('u.css'))
			.pipe(gulp.dest(path.resolve(__dirname,'../download')))
	});

	// js部分
	gulp.task('webpack', ['sass','poly'], function() {
		return gulp.src(path.resolve(__dirname, '../entry.js'))
			.pipe(webpack({
				module:{
					loaders:[
						{
							test: /(\.jsx|\.js)$/,
							loader: 'babel',
							exclude: /(bower_components)/ 
						}
					]				
				},
				output:{
					filename:'u.js',
					libraryTarget:'umd',
					umdNamedDefine: true
				},
				resolve:{
					extensions: ['','.js','.jsx']
				},
				resolveLoader: {
					root: path.join(__dirname, "../node_modules") 
				}
			}))
			.pipe(gulp.dest(path.resolve(__dirname,'../download')));
	});

	var downFiles = path.resolve(__dirname, '../download/');
	// zip压缩
	gulp.task('zip', ['webpack'], function() {
		
		return gulp.src([downFiles + '/*.js', downFiles + '/*.css'])
			.pipe(zip('down.zip'))
			.pipe(gulp.dest(path.resolve(__dirname, '../download')));
	});

	gulp.task('clean',['zip'], function(){
		return gulp.src([downFiles + '/*.js', downFiles + '/*.css'])
			.pipe(clean());
	})

	gulp.start('clean', function(){
		zipPath = '/download/down.zip';
		console.log(zipPath);
		self.body = zipPath;
		cb(null,"");
	});
	// gulp.watch(path.resolve(__dirname, '../entry.js'), ['zip']);


	

};
