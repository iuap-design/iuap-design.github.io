# 按钮组

是多个按钮的集合，实现各种排列与样式

# 如何使用

添加含有`u-button-group`样式的父元素，然后包裹一个以上的类为`u-button`button元素

# 示例


## 基础按钮组
类`u-group-button`包裹类`u-button`的button
<div class="example-content"><div class="u-button-group">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div></div>
<div class="examples-code"><pre><code>&lt;div class="u-button-group">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
&lt;/div></code></pre>
</div>

## 嵌套

按钮组里嵌套下拉
<div class="example-content"><div class="u-button-group">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default" id="demo-menu-default">
	    danger
	    <span class="u-right-icon uf uf-anglearrowdown"></span>
	</button>
	<ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-default">
	    <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
	    <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
	    <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
	    <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
	</ul>
</div>
</div>
<div class="examples-code"><pre><code>&lt;div class="u-button-group">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default" id="demo-menu-default">
	    danger
	    &lt;span class="u-right-icon uf uf-anglearrowdown">&lt;/span>
	&lt;/button>
	&lt;ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-default">
	    &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action zero&lt;/a>&lt;/li>
	    &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action one&lt;/a>&lt;/li>
	    &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action two&lt;/a>&lt;/li>
	    &lt;li class="u-menu-item">&lt;a href="javascript:void(0)">action three&lt;/a>&lt;/li>
	&lt;/ul>
&lt;/div>
</code></pre>
</div>

## 尺寸
`u-button-group`后添加尺寸类`u-button-group-lg`,'u-button-group-sm','u-button-group-xs',不添加是默认尺寸
<div class="example-content ex-hide"><style>.example-content .u-button-group{
	margin: 5px;
}
</style></div>
<div class="example-content"><div class="u-button-group u-button-group-xg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-lg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group ">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-xs">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div></div>
<div class="examples-code"><pre><code>.example-content .u-button-group{
	margin: 5px;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="u-button-group u-button-group-xg">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
&lt;/div>
&lt;br>
&lt;div class="u-button-group u-button-group-lg">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
&lt;/div>
&lt;br>
&lt;div class="u-button-group ">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
&lt;/div>
&lt;br>
&lt;div class="u-button-group u-button-group-xs">	
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
	&lt;button class="u-button raised u-button-border default">BUTTON&lt;/button>
&lt;/div></code></pre>
</div>

## 基础按钮组
在 `u-button` 后添加`default`,`primary`,`u-button-danger`,`u-button-warning`,`u-button-info`,`u-button-success` ,来改变button背景
<div class="example-content"><div class="u-button-group">	
	<button class="u-button raised u-button-border default">default</button>
	<button class="u-button raised u-button-border primary">primary</button>
	<button class="u-button raised u-button-border u-button-danger">danger</button>
	<button class="u-button raised u-button-border u-button-warning">warning</button>
	<button class="u-button raised u-button-border u-button-info">info</button>
	<button class="u-button raised u-button-border u-button-success">success</button>
</div></div>
<div class="examples-code"><pre><code>&lt;div class="u-button-group">	
	&lt;button class="u-button raised u-button-border default">default&lt;/button>
	&lt;button class="u-button raised u-button-border primary">primary&lt;/button>
	&lt;button class="u-button raised u-button-border u-button-danger">danger&lt;/button>
	&lt;button class="u-button raised u-button-border u-button-warning">warning&lt;/button>
	&lt;button class="u-button raised u-button-border u-button-info">info&lt;/button>
	&lt;button class="u-button raised u-button-border u-button-success">success&lt;/button>
&lt;/div></code></pre>
</div>


