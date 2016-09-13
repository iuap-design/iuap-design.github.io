# 复选框

checkbox提供了基础复选框、不同色彩复选框、图片复选框、个性复选框

# 如何使用
1、创建含有`u-checkbox`样式的label元素，并添加for属性，for的属性值用于标记唯一的checkbox。在label标签中创建type为checkbox的输入框，并且输入框的样式为`u-checkbox-input`，添加id属性，属性值要与lable中的for属性值一致。在label标签中继续添加含有`u-checkbox-label`样式的span元素用于描述checkbox的内容。

	<label class="u-checkbox" for="checkbox-1">
		<input type="checkbox" id="checkbox-1" class="u-checkbox-input">
		<span class="u-checkbox-label">我是描述</span>
	</label>

# 示例


##基础checkbox
在复选框中input元素添加`checked`、`disabled`来实现选中和不可用效果
<div class="example-content">
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox"  >
    <input type="checkbox" class="u-checkbox-input" disabled>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" disabled checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
</div>

##不同颜色的checkbox
在复选框中label里面添加`u-checkbox-success`、`u-checkbox-info`、`u-checkbox-warning`、`u-checkbox-danger`、`u-checkbox-dark`样式来实现不同色彩的复选框
<div class="example-content"><label  class="u-checkbox u-checkbox-success w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">green</span>
</label>

<label  class="u-checkbox u-checkbox-info w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">blue</span>
</label>
<label  class="u-checkbox u-checkbox-warning w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">yellow</span>
</label>
<label  class="u-checkbox u-checkbox-danger w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">red</span>
</label>
<label  class="u-checkbox u-checkbox-dark w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">grey</span>
</label></div>


[试一试](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/ui/checkbox)

相关内容：

[复选框在kero中使用](http://design.yyuap.com/dist/pages/kero/ex_checkbox.html)    

[复选框在grid中使用](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/grids/edit)
