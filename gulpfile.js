var gulp = require('gulp');
var del = require('del');
var fs = require( 'fs' );
var stat = fs.stat;
var template = require( 'art-template' );
var zip = require('gulp-zip');
var flatmap = require('gulp-flatmap');

var zipPath = [
    './dist/website/cooperating/**/*',
    './dist/website/e-commerce/**/*',
    './dist/website/hr/**/*',
    './dist/website/eccm/**/*',
    './dist/website/tenxcloud/**/*'
    ];

/**
 * 编译导出
 * @param  {[type]} src [编译路径]
 * @return {[type]}     [description]
 */
var compile = function( src ){

    // 同步加载
    var paths = fs.readdirSync(src);
    paths.forEach(function( path ){
        var _src = src + '/' + path;     
        stat( _src, function( err, st ){
            if( err ){
                throw err;
            }
            // 判断是否为文件
            if( st.isFile() ){
                // 编译
                if ( /\.html$/.test(_src) ) {
                    var filePath = _src.replace(/\.html$/g, '');
                    var dataPath = filePath.replace(/\/pages\//,'/data/');
                    var isexist = fs.existsSync(dataPath + '.json');
                    // var data = require(dataPath + '.json');
                    // if(filePath === './dist/index') {
                    //     var data = require('./dist/data/index.json');
                    //     var html = template(filePath, data);
                    //     fs.writeFileSync( filePath + '.html', html); 
                    // }
                    if (isexist){
                        var data = require(dataPath + '.json');
                        var html = template( filePath, data);
                        fs.writeFileSync( filePath + '.html', html);     
                    }
                }
            } else if(st.isDirectory()){
                compile(_src);
            }
        });
    });
};
gulp.task('copy', function() {
    return gulp.src(['./src/**'])
        .pipe(gulp.dest('./dist'));    
});
gulp.task('common', ['copy'], function() {
    return gulp.src(['./src/common/**'])
        .pipe(gulp.dest('./dist/pages/common'));
});
gulp.task('compile', ['common'], function() {
    return compile('./dist');
});
gulp.task('del', ['compile'], function() {
    del(['./dist/public', './dist/data','./dist/common']);
});

/**
 * 压缩模板
 * @param  {[type]} ) {}          [description]
 * @return {[type]}   [description]
 */
gulp.task('zip', function() {
    return gulp.src('./dist/website/*')
        .pipe(flatmap(function(stream, file){
            var fileName = file.path.substr(file.path.lastIndexOf('/') + 1);
            gulp.src(file.path + '/**/*')
                .pipe(zip(fileName+'.zip'))
                .pipe(gulp.dest('./dist/download'));
            return stream;
        }));
});


gulp.task('default', ['del','zip']);



