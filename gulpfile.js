var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var exec = require('child_process').exec;

var uuiPkg = require('./package.json');

var uuiDist = 'dist/assets/' + uuiPkg.version;

var distModules = ['iuap-design','datatable','datetimepicker','grid']

var pathOfJS = [
  'bin/iuap-design/dist/js/u-ui.js',
  'bin/datatable/dist/js/u-model.js',
  'bin/datetimepicker/dist/js/u-date.js'
]

var pathOfCSS = [
  'bin/iuap-design/dist/css/u.css',
  'bin/datetimepicker/dist/css/date.css'
]

var pathOfCopyCSS = [
  'bin/iuap-design/dist/css/u-extend.css',
  'bin/iuap-design/dist/css/font-awesome.css',
  'bin/grid/dist/css/grid.css',
  'bin/grid/dist/css/grid.min.css',
  'bin/tree/dist/css/tree.css'
]

var pathOfCopyJS = [
  'bin/iuap-design/dist/js/u-ui.js',
  'bin/iuap-design/dist/js/u-ui.min.js',
  'bin/iuap-design/dist/js/u-polyfill.js',
  'bin/iuap-design/dist/js/u-polyfill.min.js',
  'bin/datatable/dist/js/u-model.js',
  'bin/grid/dist/js/u-grid.js',
  'bin/grid/dist/js/u-grid.min.js',
  'bin/tree/dist/js/u-tree.js',
  'bin/tree/dist/js/u-tree.min.js'
]

gulp.task('shell', function() {
  exec('sh bin/fetch.sh', function(err) {
    if (err) return err;
  });
});

gulp.task('copymdOfiUAPDesign', function(){
  gulp.src('bin/iuap-design/docs/*.md')
    .pipe(gulp.dest('docs'))
})

function getDistDir(moduleDir){
  var publishPkg = require('./bin/' + moduleDir + '/package.json');
  var publishDist = 'dist/assets/' + moduleDir + '/' + publishPkg.version;

  return publishDist;
}

function publishModule(moduleName){
  gulp.src('bin/' + moduleName + '/dist/**')
    .pipe(gulp.dest(getDistDir(moduleName)));
}

gulp.task('publishModules', function(){
  for(var pm of distModules){
    publishModule(pm);
  }
})

gulp.task('default', ['publishModules'])
