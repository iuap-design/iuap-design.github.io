var path = require('path');


//uui定制
var customized = require("./customized");
var down = require("./down");

module.exports = {
  setRouters: function(router ,ctx){
    router.get('/loadMenu', function *(next) {
        var demos = require('../conf/snippets.conf.json');
        this.body = demos;//JSON.stringify('test');
    });

    router.get('/loadMenuPure', function *(next) {
        var demos = require('./demos-pure.json');
        this.body = demos;//JSON.stringify('test');
    });

    router.post('/getWidgets', function *(next) {
      var fs = require("fs");
      var url = this.request.body.wUrl;
      var datas = {}
      var _html  = _css = _script = '';
      
      if (fs.existsSync('./root/' + url + '/widget.html'))
        _html = fs.readFileSync('./root/' + url + '/widget.html');
      if (fs.existsSync('./root/' + url + '/widget.css'))
        _css = fs.readFileSync('./root/' + url + '/widget.css');
      if (fs.existsSync('./root/' + url + '/widget.js'))
        _script = fs.readFileSync('./root/' + url + '/widget.js');

      datas.html = _html.toString();
      datas.css = _css.toString();
      datas.script = _script.toString();
      this.body = datas;
    });

    router.post('/runDemo', function *(next) {
        // this.request.body;
        // console.log(this.request.body.html_code);
        var styles = this.request.body.css_code;
        var htmls = this.request.body.html_code;
        var scripts = this.request.body.script_code;
        var tpl = [
          '<!DOCTYPE html>',
          '<html lang="en">',
          '<head>',
          '<meta charset="UTF-8">',
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
          '<title>Title</title>',
		  '<link rel="stylesheet" href="'+ ctx +'/vendor/font-awesome/css/font-awesome.css">',
          '<link rel="stylesheet" type="text/css" href="'+ ctx +'/vendor/uui/css/u.css">',
          '<link rel="stylesheet" type="text/css" href="'+ ctx +'/vendor/uui/css/u-extend.css">',
		      '<link rel="stylesheet" type="text/css" href="'+ ctx +'/vendor/uui/css/tree.css">',
          '<link rel="stylesheet" type="text/css" href="'+ ctx +'/vendor/uui/css/grid.css">',
          '<style id="demo-style" media="screen">',
          styles,
          '</style>',
          '</head>',
          '<body>',
          htmls,
          '<script src="'+ ctx +'/vendor/jquery/jquery-1.11.2.js"></script>',
    	  '<script src="'+ ctx +'/vendor/knockout/knockout-3.2.0.debug.js"></script>',
          '<script src="'+ ctx +'/vendor/uui/js/u-polyfill.js"></script>',
          '<script src="'+ ctx +'/vendor/uui/js/u.js"></script>',
          '<script src="'+ ctx +'/vendor/uui/js/u-tree.js"></script>',
          '<script src="'+ ctx +'/vendor/uui/js/u-grid.js"></script>',
			'<script src="'+ ctx +'/vendor/requirejs/require.debug.js"></script>',
          '<script>',
          scripts,
          '</script>',
          '</body>',
          '</html>'
        ]
        this.body = tpl.join(""); ;//JSON.stringify('test');
    });

    //uui定制相关
    router.post('/customized', function *(next) {
      var self = this;
      yield function(cb){
          customized.run(self,cb);
      }

    });

    router.get('/down', function *(next) {
      var self = this;
      yield function(cb){
          down.run(self,cb);
      }
    });

  }

}
