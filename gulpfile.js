var gulp = require('gulp');
var del = require('del');
var fs = require( 'fs' );
var stat = fs.stat;
var template = require( 'art-template' );
var zip = require('gulp-zip');
var flatmap = require('gulp-flatmap');
var git = require('gulp-git');

var fileDir = fs.readdirSync('./');
var uuiDir = fileDir.indexOf('generate-uui');

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
                    if(filePath === './dist/index') {
                        var data = require('./src/data/index.json');
                        var html = template(filePath, data);
                        return fs.writeFileSync( filePath + '.html', html); 
                    }
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
// gulp.task('zip', function() {
//     return gulp.src('./dist/website/*')
//         .pipe(flatmap(function(stream, file){
//             var fileName = file.path.substr(file.path.lastIndexOf('/') + 1);
//             gulp.src(file.path + '/**/*')
//                 .pipe(zip(fileName+'.zip'))
//                 .pipe(gulp.dest('./dist/download'));
//             return stream;
//         }));
// });


/**
 * 更新仓库
 * @return {[type]} [description]
 */
function pullFun(){

    git.pull('origin', 'master',function(){
        console.log('仓库pull完毕');
        zipFun();      
    });
}

/**
 * 压缩框架内容
 * @return {[type]} [description]
 */

function zipFun(){
    var version = require('./generate-uui/package.json').version;
    console.log('版本号:' + version);
    return gulp.src('./generate-uui/dist/uui/' + version + '/**')
        .pipe(gulp.dest('./dist/website/iuapdesign'))
        .on('end', function() {
            return gulp.src('./dist/website/iuapdesign/**')
                .pipe(zip('iuapdesign.zip'))
                .pipe(gulp.dest('./dist/download'));
    });        
}

/**
 * clone/pull仓库并生成首页框架下载资源
 * @param  {[type]} ) {               var fileDir [description]
 * @return {[type]}   [description]
 */
gulp.task('clone', function() {
    if(uuiDir === -1) {
        git.clone('git@github.com:iuap-design/generate-uui.git', function(err){
            if (err) {
                throw err;
            } else {
                console.log('Clone仓库完毕');
                zipFun();
            }
        });        
    } else {
        pullFun();
    }
});


gulp.task('newpack', ['clone']);
gulp.task('default', ['del']);



