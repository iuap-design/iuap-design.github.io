# 输入框组

由input和按钮组成,按钮里可以是单纯的字体或者是checkbox、radio,还可以是下拉框

# 如何使用

添加含有`u-button-group`样式的父元素，然后包裹一个以上的类为`u-button`button元素

# 示例




<div class="example-content ex-hide"><style>.example-content .u-button-group{
	margin: 5px;
}
</style></div>
<div class="example-content"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Title</title>
<link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
<link rel="stylesheet" type="text/css" href="widget.css">
</head>
<body>
<div class="u-input-group u-input-group-lg">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group u-input-group-sm">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js"></script>
<script src="widget.js"></script>
</body>
</html></div>
<div class="examples-code"><pre><code>.example-content .u-button-group{
	margin: 5px;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1">
&lt;title>Title&lt;/title>
&lt;link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
&lt;link rel="stylesheet" type="text/css" href="widget.css">
&lt;/head>
&lt;body>
&lt;div class="u-input-group u-input-group-lg">
  &lt;span class="u-input-group-addon">@&lt;/span>
  &lt;input type="text" class="u-form-control" placeholder="Username">
&lt;/div>
&lt;div class="u-input-group">
  &lt;span class="u-input-group-addon">@&lt;/span>
  &lt;input type="text" class="u-form-control" placeholder="Username">
&lt;/div>
&lt;div class="u-input-group u-input-group-sm">
  &lt;span class="u-input-group-addon">@&lt;/span>
  &lt;input type="text" class="u-form-control" placeholder="Username">
&lt;/div>
&lt;script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js">&lt;/script>
&lt;script src="widget.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
</div>



<div class="example-content"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Title</title>
<link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
<link rel="stylesheet" type="text/css" href="widget.css">
</head>
<body>
<div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">@example.com</span>
</div>
<div class="u-input-group">
<span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">.00</span>
</div>

<script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js"></script>
<script src="widget.js"></script>
</body>
</html></div>
<div class="examples-code"><pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1">
&lt;title>Title&lt;/title>
&lt;link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
&lt;link rel="stylesheet" type="text/css" href="widget.css">
&lt;/head>
&lt;body>
&lt;div class="u-input-group">
  &lt;span class="u-input-group-addon">@&lt;/span>
  &lt;input type="text" class="u-form-control" placeholder="Username">
&lt;/div>
&lt;div class="u-input-group">
  &lt;input type="text" class="u-form-control" placeholder="Username">
  &lt;span class="u-input-group-addon">@example.com&lt;/span>
&lt;/div>
&lt;div class="u-input-group">
&lt;span class="u-input-group-addon">@&lt;/span>
  &lt;input type="text" class="u-form-control" placeholder="Username">
  &lt;span class="u-input-group-addon">.00&lt;/span>
&lt;/div>

&lt;script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js">&lt;/script>
&lt;script src="widget.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
</div>



<div class="example-content"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Title</title>
<link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
<link rel="stylesheet" type="text/css" href="widget.css">
</head>
<body>
<div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-checkbox">
        <input type="checkbox" class="u-checkbox-input" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-radio">
        <input type="radio" class="u-radio-button" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div>

<script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js"></script>
<script src="widget.js"></script>
</body>
</html></div>
<div class="examples-code"><pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1">
&lt;title>Title&lt;/title>
&lt;link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
&lt;link rel="stylesheet" type="text/css" href="widget.css">
&lt;/head>
&lt;body>
&lt;div class="u-input-group">
  &lt;span class="u-input-group-addon">
    &lt;label  class="u-checkbox">
        &lt;input type="checkbox" class="u-checkbox-input" checked>
    &lt;/label>
  &lt;/span>
  &lt;input type="text" class="u-form-control">
&lt;/div>
&lt;div class="u-input-group">
  &lt;span class="u-input-group-addon">
    &lt;label  class="u-radio">
        &lt;input type="radio" class="u-radio-button" checked>
    &lt;/label>
  &lt;/span>
  &lt;input type="text" class="u-form-control">
&lt;/div>

&lt;script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js">&lt;/script>
&lt;script src="widget.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
</div>



<div class="example-content"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Title</title>
<link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
<link rel="stylesheet" type="text/css" href="widget.css">
</head>
<body>
<div class="u-input-group">
    <div class="u-input-group-btn">
   		 <button class="u-button  u-button-default" id="demo-menu">
            success
            <span class="u-right-icon uf uf-anglearrowdown"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <input type="text" class="u-form-control">
</div
<div class="u-input-group">
	<input type="text" class="u-form-control">
    <div class="u-input-group-btn">
   		 <button class="u-button  u-button-u-button-default" id="demo-menu-sucess">
            success
            <span class="u-right-icon uf uf-anglearrowdown"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu-sucess">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    
</div

<script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js"></script>
<script src="widget.js"></script>
</body>
</html></div>
<div class="examples-code"><pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1">
&lt;title>Title&lt;/title>
&lt;link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
&lt;link rel="stylesheet" type="text/css" href="widget.css">
&lt;/head>
&lt;body>
&lt;div class="u-input-group">
    &lt;div class="u-input-group-btn">
   		 &lt;button class="u-button  u-button-default" id="demo-menu">
            success
            &lt;span class="u-right-icon uf uf-anglearrowdown">&lt;/span>
        &lt;/button>
        &lt;ul class="u-menu u-menu-default" for="demo-menu">
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action zero&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action one&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action two&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;input type="text" class="u-form-control">
&lt;/div
&lt;div class="u-input-group">
	&lt;input type="text" class="u-form-control">
    &lt;div class="u-input-group-btn">
   		 &lt;button class="u-button  u-button-u-button-default" id="demo-menu-sucess">
            success
            &lt;span class="u-right-icon uf uf-anglearrowdown">&lt;/span>
        &lt;/button>
        &lt;ul class="u-menu u-menu-default" for="demo-menu-sucess">
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action zero&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action one&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action two&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    
&lt;/div

&lt;script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js">&lt;/script>
&lt;script src="widget.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
</div>



<div class="example-content"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Title</title>
<link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
<link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
<link rel="stylesheet" type="text/css" href="widget.css">
</head>
<body>
<div class="u-input-group">
    <div class="u-input-group-btn">
    	<button class="u-button  u-button-default">
            success
        </button>
   		 <button class="u-button  u-button-default" id="demo-menu">
            <span class="u-right-icon uf uf-anglearrowdown"></span>
        </button>
        <ul class="u-menu u-menu-u-menu-default" for="demo-menu">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <input type="text" class="u-form-control">
</div
<div class="u-input-group">
	<input type="text" class="u-form-control">
    <div class="u-input-group-btn">
   		 <button class="u-button  u-button-default">
            info
        </button>
   		 <button class="u-button  u-button-default" id="demo-menu-info">
            <span class="u-right-icon uf uf-anglearrowdown"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu-info">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    
</div

<script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js"></script>
<script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js"></script>
<script src="widget.js"></script>
</body>
</html></div>
<div class="examples-code"><pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1">
&lt;title>Title&lt;/title>
&lt;link rel="stylesheet" href="http://iuap.yonyou.com/fe/vendor/font-awesome/css/font-awesome.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/u-extend.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/tree.css">
&lt;link rel="stylesheet" type="text/css" href="http://iuap.yonyou.com/fe/vendor/uui/css/grid.css">
&lt;link rel="stylesheet" type="text/css" href="widget.css">
&lt;/head>
&lt;body>
&lt;div class="u-input-group">
    &lt;div class="u-input-group-btn">
    	&lt;button class="u-button  u-button-default">
            success
        &lt;/button>
   		 &lt;button class="u-button  u-button-default" id="demo-menu">
            &lt;span class="u-right-icon uf uf-anglearrowdown">&lt;/span>
        &lt;/button>
        &lt;ul class="u-menu u-menu-u-menu-default" for="demo-menu">
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action zero&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action one&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action two&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;input type="text" class="u-form-control">
&lt;/div
&lt;div class="u-input-group">
	&lt;input type="text" class="u-form-control">
    &lt;div class="u-input-group-btn">
   		 &lt;button class="u-button  u-button-default">
            info
        &lt;/button>
   		 &lt;button class="u-button  u-button-default" id="demo-menu-info">
            &lt;span class="u-right-icon uf uf-anglearrowdown">&lt;/span>
        &lt;/button>
        &lt;ul class="u-menu u-menu-default" for="demo-menu-info">
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action zero&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action one&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action two&lt;/a>&lt;/li>
            &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    
&lt;/div

&lt;script src="http://iuap.yonyou.com/fe/vendor/jquery/jquery-1.11.2.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/knockout/knockout-3.2.0.debug.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-polyfill.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-tree.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/uui/js/u-grid.js">&lt;/script>
&lt;script src="http://iuap.yonyou.com/fe/vendor/requirejs/require.debug.js">&lt;/script>
&lt;script src="widget.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
</div>
