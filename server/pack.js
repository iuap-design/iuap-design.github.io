var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');


module.exports = function(data){

	var dataJson = data;
	var basePath = '../node_modules/';
	var neouiBasePath = path.resolve(__dirname,basePath + 'neoui');
	var neouiCss =[];
	var neouiJs =[];
	if(dataJson.neoselect) {
		for(var i=0; i<dataJson.neoselect.length; i++) {
		  neouiCss.push(neouiBasePath + '/scss/ui/' + dataJson.neoselect[i] + '.scss');
		  neouiJs.push(neouiBasePath + '/js/' + dataJson.neoselect[i] + '.js');
		}
	}

	gulp.task('concat', function() {
		return gulp.src(neouiCss)
			.pipe(concat('te'))
			.pipe(gulp.dest(path.resolve(__dirname,'../')))
	});

	// gulp.task('webpack', function() {
	// 	return gulp.src('')
	// 		.pipe(webpack(
	// 			module:{

	// 			},
	// 			output:{

	// 			},
	// 			resolve:{
					
	// 			}
	// 		))
	// 		.pipe(gulp.dest(''));
	// })









	gulp.run('concat');
};
