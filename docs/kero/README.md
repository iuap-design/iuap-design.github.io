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

## Kero定位

Kero是一个包含了UI控件库以及模型框架(基于MVVM)的前端类库。主要解决问题：

+ 提供了一系列UI控件，方便开发者使用
+ 定义了页面基础样式及颜色等规范，解决页面UE风格一致的问题
+ 提供了数据模型，实现数据与UI双向绑定，构建数据驱动型页面。解决具有复杂交互的页面开发问题。

## Kero优势

+ **完善的控件体系**：包含所有常见的控件。
+ **兼容IE8以上的主要浏览器**：IE 8+、Firefox、Chrome、safari
+ **多端适配**： 使用响应式的CSS在电脑、手机和平板电脑上看起来都很好看
+ **声明式绑定**：使用简明易读的语法很容易地将模型数据关联到DOM元素上
+ **双向数据绑定**：模型与UI之间的双向自动更新
+ **多维数据模型**：解决了字段关联、主子数据、主子孙等多维数据模型的绑定问题。

## Kero设计理念

### UI控件

UI控件遵循Google发布的material design设计规范，构建跨平台和超越设备尺寸的统一体验。遵循基本的移动设计定则，同时支持触摸、语音、鼠标、键盘等输入方式。

![](img/materialdesign.png)


UI控件的使用，采用了类似bootstrap的用法，通过定义class名称来声明控件，如按钮控件的定义：

```html
<button class="u-button">BUTTON</button>
```

开发者不需要通过js代码创建控件，简单易用。

### 模型结构

#### 数据模型


数据模型主要是对MVVM架构中的Model层做增强处理。主要功能有：

+ 以行、列的形式对数据做存储，并对外暴露一批增删改查的API，方便开发者对页面数据的处理，而且所有开发者之间做到统一，减少出错概率。
+ 数据增加状态标识新增或修改，方便开发者使用。
+ 具有分页缓存能力，可在前台处理分页(非必要情况下，不推荐前台分页)。
+ 具有事件触发器，把数据变化触发出去，供开发者监听使用。

![](img/datatable.png)


#### 控件模型

控件模型是为解决复杂交互页面中，业务逻辑对数据存在一系列处理需求而设计的。用来简化开发者对相关逻辑的开发。比如：数据的必填、数据的各种校验、数据的显示格式等。

控件模型与UI和数据模型之间的关系表现为：

![](img/mvvm.png)

在一般的场景中，数据模型可以直接与UI进行数据绑定。当有数据处理需求时，可以通过控件模型来处理UI和数据模型之间的数据通信。控件模型在处理数据的同时，会进行相关业务逻辑的处理。

下面的例子处理了字段必填：

js:

```javascript
//数据模型的定义
var viewModel = {
	dt: new u.DataTable({
		meta:{
			field1:{required:true}
		}
	})
}


//执行数据绑定,绑定的范围为body内部
u.createApp({
	el:'body',
	model:viewModel
})
```

html:
```html
//控件模型的定义
<input type="text" u-meta='{"type":"string","data":"dt","field":"field1"}'/>	
```

控件模型的声明，在html的UI对象属性中，以`u-meta`做为属性名。属性值中指定了数据模型以及数据模型中的字段。属性中的`type`为控件模型的类型，示例中使用的是string字符串输入控件模型。该控件模型会解析dataTable中field1字段的required属性，并控制input中的值不能为空，如果为空，则弹出警告提示。
