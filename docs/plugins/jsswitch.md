# switch控件

两种状态的切换

# 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

# 用法

1.详情见示例

# 示例


##基础switch

`<input>` 的`id`与`<label>`的`for`属性值保持一致
<div class="example-content">
<label class="u-switch u-switch-info" for="switch-info-unchecked">
    <input type="checkbox" id="switch-info-unchecked" class="u-switch-input">
    <span class="u-switch-label"></span>
</label>

<label class="u-switch u-switch-info" for="switch-info-checked">
    <input type="checkbox" id="switch-info-checked" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label></div>
<div class="examples-code"><pre><code>
&lt;label class="u-switch u-switch-info" for="switch-info-unchecked">
    &lt;input type="checkbox" id="switch-info-unchecked" class="u-switch-input">
    &lt;span class="u-switch-label">&lt;/span>
&lt;/label>

&lt;label class="u-switch u-switch-info" for="switch-info-checked">
    &lt;input type="checkbox" id="switch-info-checked" class="u-switch-input" checked>
    &lt;span class="u-switch-label">&lt;/span>
&lt;/label></code></pre>
</div>


# API

## css 参数

<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>颜色</td>
	    <td>1.u-switch-primary 2.u-switch-success 3.u-switch-info 4. u-switch-warning 5.u-switch-danger 6.u-switch-dark</td>
	    <td>颜色类加在父元素的类后面 设置不同的色值</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>大小</td>
	    <td>1.u-switch-lg 2.u-switch-default 3.u-switch-sm</td>
	    <td>大小类名父元素的类u-switch后面 设置不同的尺寸</td>
	    <td></td>
	  </tr>
	</tbody>
</table>

