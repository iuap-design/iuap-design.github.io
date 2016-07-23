
# 下载文件

进入[iuap design 官网](http://design.yyuap.com/)，点击右下角的“体验下载 iuap design”按钮进行下载。

项目中需要引入的css、js文件可以从下载css、js目录中查找。以下为相关文件说明：

整个文件分为三大类：

* u.js、u.css——项目开发必须引入的文件
* u-grid.js、grid.css——表格相关文件
* u-tree.js、tree.css——树相关文件
* u-polyfill.js——兼容ie浏览器相关文件

其中u.js可以拆分为u-model.js（kero开发相关文件）、u-date.js(时间开发相关文件)、u-ui.js(基础控件相关文件)


# 引入文件

引入文件的路径有2种方式,分别为：通过cdn地址引入、将下载的文件放到项目中根据实际路径引入

* 通过cdn引入

```
<link href="//design.yyuap.com/static/uui/latest/css/u.css" rel="stylesheet">

```

* 通过具体路径引入

```
<link href="yourPath/uui/css/u.css" rel="stylesheet">

```

## 引入css文件

在Header标签内，引入css文件。u.css文件是必要要引入的，其余的css文件可根据具体的需求引入。以cdn方式引入为例：


```
<link href="//design.yyuap.com/static/uui/latest/css/u.css" rel="stylesheet">

```

## 引入js文件

在文件的尾部引入js文件。
```
<script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>
<script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>

```
如果开发kero相关项目，需要在引入u.js前引入knouckout.js

```
<script src="//design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
```

#编写页面内容

在开发中需要的基础css、js插件、组件请参考[neoui](http://design.yyuap.com/dist/pages/neoui/index.html)中的内容.

#代码
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport"
        content="width=device-width, initial-scale=1">
  <title>iuap design Demo</title>

  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp"/>
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="iuap design"/>

  <!-- 整体样式u.css,必须引入 -->
  <link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/u.css">
  
  <!-- 可选：使用grid图表相关插件，加载grid.css -->
  <link rel="stylesheet" type="text/css" href="//design.yyuap.com/static/uui/latest/css/grid.css">
  
  <!-- 可选：使用tree相关插件，加载tree.css -->
  <link rel="stylesheet" type="text/css" href="//design.yyuap.com/static/uui/latest/css/tree.css">

</head>
<body>
  <h1> Hi, iuap design </h1>

  <!-- 你的代码 -->

  <!-- 依赖jQuery,必须在核心js加载前引入 -->
  <script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>

  <!--[if lte IE 8 ]>
  <!-- 针对ie8,Polyfill -->
  
  <script src="//design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
  <![endif]-->

  <!-- 核心js 必须引入 -->
  
  <script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>
  <!-- 可选：使用grid图表相关插件，加载u-grid.js -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-grid.js"></script>

  <!-- 可选：使用tree相关插件，加载u-tree.js -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-tree.js"></script>

</body>
</html>
```