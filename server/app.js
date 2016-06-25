var fs = require('fs');
var path = require('path');
var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var koaBody = require('koa-body');
var gzip = require('koa-gzip');


var app = koa();
var iwebRouter = require('./router');

// uui定制
var customized = require("./customized");
var down = require("./down");

iwebRouter.setRouters(router, '.');

app.use(gzip());

app.use(koaBody({
  formidable: {uploadDir: __dirname},
  textLimit: '50mb',
  formLimit: '50mb'
}));

app.use(router.routes())
  .use(router.allowedMethods());

app.use(serve(path.join(__dirname, '../')));

app.listen( 8000 );

// 起服务时清楚定制生成的临时文件
deleteFolderRecursive(path.resolve(__dirname, '../dist/pages/custom/temp/'));

console.log('server started at http://localhost:8000');

function deleteFolderRecursive(path) {
    var files = [];
    if( fs.existsSync(getResolvePath(path)) ) {
        files = fs.readdirSync(getResolvePath(path));
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(getResolvePath(curPath)).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(getResolvePath(curPath));
            }
        });
        fs.rmdirSync(getResolvePath(path));
    }
};

function getResolvePath(p){
	return path.resolve(__dirname, p)
}
