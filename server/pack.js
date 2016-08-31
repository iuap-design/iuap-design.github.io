var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');

// 获取Neoui的scss & js目录 
// var neouijson = require('./neoui.json');


module.exports = function(data){

	/**
	 * Poly Match: polyselect
	 * Neoui Match: neoselect
	 */
	var dataJson = data;
	var basePath = '../node_modules/';

	/**
	 * polyfill定制部分
	 */
	var polyBasePath = path.resolve(__dirname, basePath + 'neoui-polyfill');
	var polyJs = [];

	var polyFun = function(){
		if(dataJson.polyselect) {
			for(var i = 0, polyLen = dataJson.polyselect.length; i < polyLen; i++) {
				polyJs.push(polyBasePath + '/dist/' + dataJson.polyselect[i] + '.js');
			}
		}
		
		gulp.task('poly', function(){

			if(polyJs.length === 2){
				return gulp.src(polyJs)
					.pipe(concat('u-polyfill.js'))
					.pipe(gulp.dest(path.resolve(__dirname,'../')));
			} else if (polyJs.length === 1 && polyJs[0] === 'u-polyfill-core') {
				return gulp.src(polyJs)
					.pipe(rename('u-polyfill.js'))
					.pipe(gulp.dest(path.resolve(__dirname,'../')));
			} else if (polyJs.length === 1 && polyJs[0] === 'u-polyfill-repsond') {
				return gulp.src(polyJs)
					.pipe(rename('u-polyfill.js'))
					.pipe(gulp.dest(path.resolve(__dirname,'../')));
			}
		});

		if(dataJson.length != 0) {
			gulp.run('poly');
		};
	};
	polyFun();
	
	/**
	 * neoui定制部分
	 */
	var neouiBasePath = path.resolve(__dirname,basePath + 'neoui');
	var neouiCss =[];
	var neouiJs =[];
	if(dataJson.neoselect) {
		for(var i=0; i<dataJson.neoselect.length; i++) {
		  neouiCss.push(neouiBasePath + '/scss/ui/' + dataJson.neoselect[i] + '.scss');
		  neouiJs.push(neouiBasePath + '/js/' + dataJson.neoselect[i] + '.js');
		}
	}

	// sass部分
	gulp.task('sass', function() {
		return gulp.src(neouiCss)
			.pipe(sass())
			.pipe(concat('u.css'))
			.pipe(gulp.dest(path.resolve(__dirname,'../')))
	});

	// js部分
	gulp.task('webpack', ['sass'], function() {
		return gulp.src(path.resolve(__dirname, '../entry.js'))
			.pipe(webpack({
				module:{
					loaders:[
						{
							test: /(\.jsx|\.js)$/,
							loader: 'babel',
							exclude: /(node_modules|bower_components)/ 
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
				}
			}))
			.pipe(gulp.dest(path.resolve(__dirname,'../')));
	});

	gulp.run('webpack');

};
