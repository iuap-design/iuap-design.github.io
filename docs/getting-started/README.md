# 关于 `iUAP Design` 的介绍

![iUAP Design 前端集成解决方案](http://design.yyuap.com/dist/static/img/all/design.png)

# 获取iuap-design

- 直接从github获取我们的源码

```
git clone git@github.com:iuap-design/iuap-design.git
```

- 使用CDN

```
<!--css-->
http://design.yyuap.com/static/uui/latest/css/u.css
<!--如需使用grid,tree插件，加载grid.css,tree.css-->
http://design.yyuap.com/static/uui/latest/css/grid.css 
http://design.yyuap.com/static/uui/latest/css/tree.css

<!--js-->
http://design.yyuap.com/static/uui/latest/js/u.js
http://design.yyuap.com/static/uui/latest/js/u-polyfill.js
<!--如需使用grid,tree插件，加载u-grid.js,u-tree.js-->
http://design.yyuap.com/static/uui/latest/js/u-grid.js
http://design.yyuap.com/static/uui/latest/js/u-tree.js

```

- 使用npm安装

```
npm install iuap-design
```

- 使用bower下载

暂未发布，敬请期待...

# 开发文档

## 概述

为了给开发者提供良好的开发体验，我们在开发文档上投入了大量的工作。

文档全部采用markdown格式编写，使用gitbook及其相应的插件完成编译输出。

## 开发文档资源

- [iuap-design docs on github](https://github.com/iuap-design/iuap-design.github.io/tree/master/docs)
  <!-- - [iuap-design detail develop docs](http://design.yyuap.com/) -->

## 设计语言文档

`iUAP Design` 提供清晰、易用、高效、一致的用户体验。

`iUAP Design` 注重产品逻辑交互的清晰，关注高效率的可用性、易用性 、 一致性，并提供悦目的审美展示。

[查看iUAP Design设计语言详细说明](http://design.yyuap.com/dist/pages/design-language/iuapdesign.html)

## 组件库文档

iuap-design框架将提供40+个控件和30+个插件，[查看详细开发文档](http://design.yyuap.com/dist/pages/components/index.html)。

# 目录及文件说明

提供的资源目录结构

```
.
├── css
│   ├── font-awesome.css    // 图标字体样式
│   ├── font-awesome.min.css// 图标字体样式-压缩
│   ├── grid.css            // grid图表相关插件样式
│   ├── grid.min.css        // grid图表相关插件样式-压缩
│   ├── tree.css            // tree目录嵌套相关插件样式
│   ├── tree.min.css        // tree目录嵌套相关插件样式-压缩
│   ├── u-extend.css        // 插件样式集合
│   ├── u-extend.min.css    // 插件样式集合-压缩
│   ├── u.css               // 核心样式（不包含grid,tree,font-awesome）
│   └── u.min.css           // u.css压缩
├── fonts // 图标字体，适配不同浏览器
│   ├── FontAwesome.otf
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   └── fontawesome-webfont.woff2
└── js
    ├── u-date.js        // 日期相关插件
    ├── u-date.min.js    // 日期相关插件-压缩
    ├── u-grid.js        // grid图表相关插件
    ├── u-grid.min.js    // grid图表相关插件-压缩
    ├── u-model.js       // kero相关插件
    ├── u-model.min.js   // kero相关插件 -压缩
    ├── u-polyfill.js    // ie8补丁
    ├── u-polyfill.min.js// ie8补丁-压缩
    ├── u-tree.js        // tree目录嵌套相关插件
    ├── u-tree.min.js    // tree目录嵌套相关插件-压缩
    ├── u-ui.js          // 常用核心插件集（不包含model模型，grid图表，tree嵌套，date日期）
    ├── u-ui.min.js      // u-ui.js压缩
    ├── u.js             // 核心插件集(不包含grid图表，tree嵌套)
    └── u.min.js         // 核心插件集 - 压缩
```

# 快速创建一个页面

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
  <title>iUAP Design Demo</title>

  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp"/>
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="iUAP Design"/>

  <!-- 整体样式u.css,必须引入 -->
  <link rel="stylesheet" href="http://design.yyuap.com/static/iuap-design/3.0.1/css/u.css">
  
  <!-- 可选：使用字体图标，加载font-awesomecss -->
  <link rel="stylesheet" type="text/css" href="http://design.yyuap.com/static/uui/latest/css/font-awesome.css">
  
  <!-- 可选：使用grid图表相关插件，加载grid.css -->
  <link rel="stylesheet" type="text/css" href="http://design.yyuap.com/static/uui/latest/css/grid.css">
  
  <!-- 可选：使用tree相关插件，加载tree.css -->
  <link rel="stylesheet" type="text/css" href="http://design.yyuap.com/static/uui/latest/css/tree.css">

</head>
<body>
  <h1> Hi, iUAP Design </h1>

  <!-- 你的代码 -->

  <!-- 依赖jQuery,必须在核心js加载前引入 -->
  <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>

  <!--[if lte IE 8 ]>
  <!-- 针对ie8,性能检测及Polyfill -->
  <script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
  <script src="http://design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
  <![endif]-->

  <!-- 核心js 必须引入 -->
  <script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>

  <!-- 可选：使用grid图表相关插件，加载u-grid.js -->
  <script src="http://design.yyuap.com/static/uui/latest/js/u-grid.js"></script>

  <!-- 可选：使用tree相关插件，加载u-tree.js -->
  <script src="http://design.yyuap.com/static/uui/latest/js/u-tree.js"></script>

</body>
</html>
```

# 版本说明

iuap-design基于用友网络内部前端框架UUI进行的升级，做了科学化的架构分拆和整合。只为给大家提供最好的前端框架。

在此之前，UUI已经走过了2个年头，服务过用友集团内外近百家公司和项目。

基于以上的考虑，本次全新的iuap-design框架的首次版本为3.0.1。

## 版本升级

我们有一个专业的前端团队在进行框架及其生态的开发和维护，我们会持续迭代升级，并且保持版本之间的平滑过渡。

## 参与

当然，我们非常欢迎广大开发者的热忱参与，一起打造一个属于我们的轻量、自由、强大、美观的前端框架。如果你在某个版本的使用过程中发现了BUG，或是对某个功能有更好的实现方案等，都欢迎大家给我们提 [issue](https://github.com/iuap-design/iuap-design/issues) 或发送 `pull request`。

# 参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/iuap-design/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）
