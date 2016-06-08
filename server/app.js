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

console.log('server started at http://localhost:8000')
