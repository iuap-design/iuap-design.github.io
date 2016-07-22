#示例介绍
该示例为一个输入框，可以将用户输入的内容绑定到datatable对象当中，输入的值可以在页面中立即显示，默认输入“hello World！”。

# 引入文件
相关文件的下载请参考基础开发内容。
## 引入css文件
在页头引入u.css

```
<link href="//design.yyuap.com/static/uui/latest/css/u.css" rel="stylesheet">

```
## 引入js文件

kero模板依赖于knockout，所以需要先引入knockout文件，再引入u.js

```
<script src="//design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
<script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>

```
#具体代码
+ 创建`datatable`对象dt1，定义字段信息，初始化页面适配器app。

```
var app, viewModel;

viewModel = {
          dt1: new u.DataTable({
              meta: {
                  field1: {}
              }
          })
          
}

app = u.createApp({
              el: 'body',
              model: viewModel
      });
      
//创建空行
var r = viewModel.dt1.createEmptyRow();
//对字段1赋值
r.setValue('field1', 'hello World!');
//将第0行最为当前行
viewModel.dt1.setRowSelect(0);

```
+ 使用`u-meta`进行datatable和html页面进行绑定，此时输入的field1的值可以立即显示到下面的span标签中。

```
<div class="u-text" u-meta='{"id":"field1","type":"u-text","data":"dt1","field":"field1"}'>
  <input class="u-input" />
  <label class="u-label">field1</label>
</div>
<br>
<br> 您输入的值为：
<span data-bind="text:dt1.ref('field1')"></span>
```
[试一试](../webIDE/index.html#/demos/quitstart/kero)
