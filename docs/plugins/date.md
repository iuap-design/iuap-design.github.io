# date插件

用户可以自定义日期类型，返回日期默认是年月日，也可以返回年月日时分秒。

# 插件依赖

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/css/u.css


# 用法

##引入文件
在header中引入u.css
```
<link rel="stylesheet" type="text/css" href='http://design.yyuap.com/static/uui/latest/css/u.css'>
```
在文件尾部加入u.js
 
```
<script type="text/javascript" src='http://design.yyuap.com/static/uui/latest/js/u.js'></script>

```

##代码

定义样式为`u-datepicker`的div父元素，包裹类`u-input`的input

```
<div class='u-datepicker'>
    <input class="u-input" type="text">
</div>

```

js会根据`u-datepicker`来定位dom，然后绑定事件。


# 示例



<div class="example-content"><div class='u-datepicker'>
    <input class="u-input" type="text">
</div></div>
<div class="examples-code"><pre><code>&lt;div class='u-datepicker'>
    &lt;input class="u-input" type="text">
&lt;/div></code></pre>
</div>






