var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var uuiPkg = require('../package.json');

var uuiDist = 'dist/uui/' + uuiPkg.version;


var distModules = ['iuap-design','datatable','datetimepicker','grid']

var pathOfJS = [
  'iuap-design/dist/js/u-ui.js',
  'datatable/dist/js/u-model.js',
  'datetimepicker/dist/js/u-date.js'
]

var pathOfCSS = [
  'iuap-design/dist/css/u.css',
  'datetimepicker/dist/css/date.css'
]

var pathOfCopyCSS = [
  'iuap-design/dist/css/u-extend.css',
  'iuap-design/dist/css/font-awesome.css',
  'grid/dist/css/grid.css',
  'grid/dist/css/grid.min.css',
  'tree/dist/css/tree.css'
  // 'tree/dist/css/tree.min.css',
]

var pathOfCopyJS = [
  'iuap-design/dist/js/u-ui.js',
  'datatable/dist/js/u-model.js',
  'grid/dist/js/u-grid.js',
  'grid/dist/js/u-grid.min.js',
  'tree/dist/js/u-tree.js',
  'tree/dist/js/u-tree.min.js'
]

gulp.task('js', function(){
  gulp.src( pathOfJS )
    .pipe(concat('u.js'))
    .pipe(gulp.dest( uuiDist + '/js'))
    .pipe(uglify())
    .pipe(rename('u.min.js'))
    .pipe(gulp.dest(uuiDist + '/js'))
})

gulp.task('css', function(){
  gulp.src( pathOfCSS )
    .pipe(concat('u.css'))
    .pipe(gulp.dest(uuiDist + '/css'))
})

gulp.task('copycss', function(){
  gulp.src( pathOfCopyCSS )
    .pipe(gulp.dest(uuiDist + '/css'))
})

gulp.task('copyjs', function(){
  gulp.src(pathOfCopyJS)
    .pipe(gulp.dest(uuiDist + '/js'))
})

gulp.task('copyfont', function(){
  gulp.src('iuap-design/dist/fonts/*')
    .pipe(gulp.dest(uuiDist + '/fonts'))
})

function getDistDir(moduleDir){
  var publishPkg = require('./' + moduleDir + '/package.json');
  var publishDist = 'dist/' + moduleDir + '/' + publishPkg.version;
  return publishDist;
}

function publishModule(moduleName){
  gulp.src(moduleName + '/dist/**').pipe(gulp.dest(getDistDir(moduleName)));
}

gulp.task('publishModules', function(){
  for(var pm of distModules){
    publishModule(pm);
  }
})

gulp.task('default', ['css', 'js', 'copycss', 'copyjs','copyfont', 'publishModules'])
