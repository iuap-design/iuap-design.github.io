
var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var path = require('path');

module.exports = function(viewCode, self, cb){

	var zipName = 'download.zip';
    var downPath = '../dist/pages/webIDE/temp';
    var tempDir = path.resolve(__dirname, downPath);
    fs.exists( tempDir, function(exist) {
      if(!exist){
        fs.mkdirSync(tempDir);
      }
    });

    fs.writeFileSync(path.resolve(__dirname, downPath+'/download.html'), viewCode );

    
    
    gulp.task('downzip',['createZip']);
    // 生成zip
    gulp.task('createZip',['removeZip'],function(){
      
        return gulp.src(path.resolve(__dirname, downPath+'/download.html'))
            .pipe(zip(zipName))
            .pipe(gulp.dest(path.resolve(__dirname,downPath)))

    });
   
    gulp.task('removeZip',function(){
        fs.unlink(path.resolve(__dirname, downPath+'/'+zipName), function(err) {
           if (err) {
               return console.error(err);
           }
           
        });
    });
    gulp.start('downzip',function(){
		self.body = downPath+"/"+zipName;
		cb(null,"");
	});
}