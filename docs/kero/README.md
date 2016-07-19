# 概述

## Kero依赖

* 优先加载jQuery + Knockout,再引入u.js

  ```
  <script src="http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js"></script>
  <script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
  <script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>
  ```


* 如需兼容ie8，需要单独引入`polyfill.js`

  ```
  <script src="http://design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
  ```

  ​

## Kero定位

Kero是一个包含了UI控件库以及模型结构(基于MVVM)的前端类库。主要解决问题：

+ 提供数据模型
+ 实现数据与UI双向绑定
+ 构建数据驱动型页面。
+ 解决具有复杂交互的页面开发问题。

## Kero优势

+ **兼容IE8以上的主要浏览器**：IE 8+、Firefox、Chrome、safari
+ **声明式绑定**：使用简明易读的语法很容易地将模型数据关联到DOM元素上
+ **双向数据绑定**：模型与UI之间的双向自动更新
+ **多维数据模型**：解决了字段关联、主子数据、主子孙等多维数据模型的绑定问题。