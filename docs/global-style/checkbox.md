# 复选框

创建含有`u-checkbox`样式的label元素，并添加for属性，for的属性值用于标记唯一的checkbox。在label标签中创建type为checkbox的输入框，并且输入框的样式为`u-checkbox-input`，添加id属性，属性值要与lable中的for属性值一致。在label标签中继续添加含有`u-checkbox-label`样式的span元素用于描述checkbox的内容。




##基础checkbox
* `checked` - 被选中的复选框
* `disabled` - 无效的复选框

<div class="example-content">
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">选中的复选框</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label">复选框</span>
</label>
<label  class="u-checkbox"  >
    <input type="checkbox" class="u-checkbox-input" disabled>
    <span class="u-checkbox-label">无效的复选框</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" disabled checked>
    <span class="u-checkbox-label">无效的被选中的复选框</span>
</label>
</div>
<div class="examples-code"><pre><code>&lt;label  class="u-checkbox">
    &lt;input type="checkbox" class="u-checkbox-input" >
    &lt;span class="u-checkbox-label">复选框&lt;/span>
&lt;/label>
</code></pre>
</div>
<div class="example-content"><label  class="u-checkbox w-xs">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label"><img src="../../static/img/website/checkbox/checkbox-1.png" height="30" width="30"></span>
</label>


<label  class="u-checkbox w-xs">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label"><img src="../../static/img/website/checkbox/checkbox-2.png" height="30" width="30"></span>
</label></div>

##不同颜色的复选框
* `.u-checkbox-success`-绿色复选框
* `.u-checkbox-info`-蓝色复选框
* `.u-checkbox-warning`-黄色复选框
* `.u-checkbox-danger`-红色复选框
* `.u-checkbox-dark`-灰色复选框

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
</label>
</div>
<div class="examples-code"><pre><code>&lt;label  class="u-checkbox u-checkbox-success w-xs">
    &lt;input type="checkbox" class="u-checkbox-input"  checked>
    &lt;span class="u-checkbox-label">green&lt;/span>
&lt;/label>
</code></pre>
</div>

##个性的checkbox
* 在复选框`u-checkbox`上添加`u-checkbox-labelauty`或任何自定义样式

<div class="example-content ex-hide"><style>.u-checkbox-labelauty {
    width: auto;
    height: 32px;
    padding: 2px 8px;
    border: solid 1px #ccc;
}
.u-checkbox-labelauty:hover {
    border: solid 2px #e4393c;
    padding: 1px 7px;
    color: #e4393c;
}
.u-checkbox-labelauty.u-checkbox.is-upgraded {
    padding-left: 8px;
}
.u-checkbox-labelauty:hover.u-checkbox.is-upgraded, .u-checkbox-labelauty.is-upgraded.is-checked {
    padding-left: 7px;
}
.u-checkbox-labelauty.is-checked {
    border: solid 2px #e4393c;
    padding: 1px 7px;
}
.u-checkbox-labelauty .u-checkbox-label {
    display: inline-block;
}
.u-checkbox-labelauty .u-checkbox-outline {
    display: none;
}
.u-checkbox-labelauty.is-checked:before {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    content: ' ';
    border-left: 12px solid transparent;
    border-bottom: 12px solid #e4393c;
}
.u-checkbox-labelauty.is-checked:after {
    -webkit-transform: rotate(45deg) scale(.8);
    transform: rotate(45deg) scale(.8);
    position: absolute;
    right: 0;
    bottom: 0;
    display: table;
    width: 5px;
    height: 8px;
    box-sizing: border-box;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
}
</style></div>
<div class="example-content"><label  class="u-checkbox u-checkbox-labelauty">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">30天免息</span>
</label></div>
<div class="examples-code"><pre><code>//css
.u-checkbox-labelauty {
    width: auto;
    height: 32px;
    padding: 2px 8px;
    border: solid 1px #ccc;
}
.u-checkbox-labelauty:hover {
    border: solid 2px #e4393c;
    padding: 1px 7px;
    color: #e4393c;
}
.u-checkbox-labelauty.u-checkbox.is-upgraded {
    padding-left: 8px;
}
.u-checkbox-labelauty:hover.u-checkbox.is-upgraded, .u-checkbox-labelauty.is-upgraded.is-checked {
    padding-left: 7px;
}
.u-checkbox-labelauty.is-checked {
    border: solid 2px #e4393c;
    padding: 1px 7px;
}
.u-checkbox-labelauty .u-checkbox-label {
    display: inline-block;
}
.u-checkbox-labelauty .u-checkbox-outline {
    display: none;
}
.u-checkbox-labelauty.is-checked:before {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    content: ' ';
    border-left: 12px solid transparent;
    border-bottom: 12px solid #e4393c;
}
.u-checkbox-labelauty.is-checked:after {
    -webkit-transform: rotate(45deg) scale(.8);
    transform: rotate(45deg) scale(.8);
    position: absolute;
    right: 0;
    bottom: 0;
    display: table;
    width: 5px;
    height: 8px;
    box-sizing: border-box;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
}

&lt;label  class="u-checkbox u-checkbox-labelauty">
    &lt;input type="checkbox" class="u-checkbox-input" checked>
    &lt;span class="u-checkbox-label">30天免息&lt;/span>
&lt;/label>
</code></pre>
</div>



[试一试](../webIDE/index.html#/demos/ui/step)
