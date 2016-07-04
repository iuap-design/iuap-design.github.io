var gulp = require('gulp');
var del = require('del');
var fs = require( 'fs' );
var stat = fs.stat;
var template = require( 'art-template' );

/**
 * 直接进行编译
 * @param  {[type]} src [description]
 * @return {[type]}     [description]
 */
var compile = function( src ){
    // 读取目录中的所有文件/目录
    // 异步加载
    /*fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                readable, writable;       
            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 编译
                    if ( /\.html$/.test(_src) ) {
                        var filePath = _src.replace(/\.html$/g, '');
                        var html = template( filePath, data);
                        fs.writeFile( filePath + '.html', html); 
                    }
                } else if(st.isDirectory()){
                    compile(_src);
                }
            });
        });
    });*/

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
                    if(isexist){
                        var data = require(dataPath + '.json');
                        var html = template( filePath, data);
                        // var html = template.render( filePath );
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

gulp.task('compile', ['copy'], function() {
    return compile('./dist');
});

gulp.task('del', ['compile'], function() {
    del(['./dist/public', './dist/data']);
});

gulp.task('default', ['del']);



