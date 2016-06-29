# 关于 `iUAP Design` 的介绍

<img src="/dist/static/img/all/design.png" />

# 获取iuap-design

- 直接从github获取我们的源码

```
git clone git@github.com:iuap-design/iuap-design.git
```

- 使用CDN

```
http://design.yyuap.com/static/iuap-design/3.0.1/js/u-ui.js
http://design.yyuap.com/static/iuap-design/3.0.1/js/u-polyfill.js

http://design.yyuap.com/static/iuap-design/3.0.1/css/u.css
http://design.yyuap.com/static/iuap-design/3.0.1/css/u-extend.css
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

- [iuap-design docs on github](https://github.com/iuap-design/iuap-design/tree/master/docs)
- [iuap-design detail develop docs](http://design.yyuap.com/)

## 设计语言文档

`iUAP Design` 提供清晰、易用、高效、一致的用户体验。

`iUAP Design` 注重产品逻辑交互的清晰，关注高效率的可用性、易用性 、 一致性，并提供悦目的审美展示。

[查看iUAP Design设计语言详细说明](http://design.yyuap.com/dist/pages/design-language/iuapdesign.html)

## 组件库文档

iuap-design框架将提供40+个控件和30+个插件，[查看详细开发文档](http://design.yyuap.com/dist/pages/components/button.html)。

# 目录及文件说明

提供的资源目录结构

```
dist
│
├─css
│      font-awesome.css
│      u-extend.css
│      u-extend.min.css
│      u.css
│      u.min.css
│
├─fonts
│      fontawesome-webfont.eot
│      fontawesome-webfont.svg
│      fontawesome-webfont.ttf
│      fontawesome-webfont.woff
│      fontawesome-webfont.woff2
│      FontAwesome.otf
│
└─js
        u-polyfill.js
        u-polyfill.min.js
        u-ui.js
        u-ui.min.js


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
  <link rel="stylesheet" href="http://design.yyuap.com/static/iuap-design/3.0.1/css/u.css">
</head>
<body>
  <h1> Hi, iUAP Design </h1>

  <!-- 你的代码 -->

  <!--[if (gte IE 9)|!(IE)]><!-->
  <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
  <!--<![endif]-->
  <!--[if lte IE 8 ]>
  <script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
  <script src="http://design.yyuap.com/static/iuap-design/3.0.1/js/u-polyfill.js"></script>
  <![endif]-->
  <script src="http://design.yyuap.com/static/iuap-design/3.0.1/js/u-ui.js"></script>
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
