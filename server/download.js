
var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var path = require('path');

module.exports = function(viewCode, self, cb){

	var zipName = 'download.zip';
	// var viewCode = "", zipName = 'download.zip';
 //    var styles = data.cssCode;
 //    var htmls = data.htmlCode;
 //    var scripts = data.jsCode;

 //    var tpl = getTpl(styles,htmls,scripts);
 //    viewCode = tpl.join('\r\n');
    var downPath = '../dist/pages/webIDE/temp';
    var tempDir = path.resolve(__dirname, downPath);
    fs.exists( tempDir, function(exist) {
      if(!exist){
        fs.mkdirSync(tempDir);
      }
    });

    fs.writeFileSync(downPath+'/download.html', viewCode );

    
    
    gulp.task('downzip',['createZip']);
    // 生成zip
    gulp.task('createZip',['removeZip'],function(){
      
        return gulp.src(downPath+'/download.html')
            .pipe(zip(zipName))
            .pipe(gulp.dest(downPath))

    });
   
    gulp.task('removeZip',function(){
        fs.unlink(downPath+'/'+zipName, function(err) {
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