var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');


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

		gulp.run('poly');
	};
	polyFun();
	

	



	/**
	 * neoui定制部分
	 */
	// var neouiBasePath = path.resolve(__dirname,basePath + 'neoui');
	// var neouiCss =[];
	// var neouiJs =[];
	// if(dataJson.neoselect) {
	// 	for(var i=0; i<dataJson.neoselect.length; i++) {
	// 	  neouiCss.push(neouiBasePath + '/scss/ui/' + dataJson.neoselect[i] + '.scss');
	// 	  neouiJs.push(neouiBasePath + '/js/' + dataJson.neoselect[i] + '.js');
	// 	}
	// }

	// gulp.task('concat', function() {
	// 	return gulp.src(neouiCss)
	// 		.pipe(concat('te'))
	// 		.pipe(gulp.dest(path.resolve(__dirname,'../')))
	// });





	/**
	 * webpack部分
	 */

	// gulp.task('webpack', function() {
	// 	return gulp.src('')
	// 		.pipe(webpack(
	// 			module:{

	// 			},
	// 			output:{

	// 			},
	// 			resolve:{
					
	// 			}	// 		))
	// 		.pipe(gulp.dest(''));
	// })



	// gulp.run('concat');
};
