# combobox插件

combobox组合框是由一个文本输入控件和一个下拉菜单组成的，类似于select元素。用户可以从一个预先定义的列表里选择一个或者多个选项。

# 插件依赖

依赖于 http://design.yyuap.com/static/uui/3.0.6/js/u.js


# 用法

1.定义样式为`u-combo`的div父元素，具体dom结构见示例

2.手动调用

```
u.compMgr.updateComp();
document.getElementById('domid')['u.Combo'].setComboData(dataArray);

```
domid: 需绑定的dom的id

dataArray：下拉数据，数组形式如：`[{value:'01',name:'男'},{value:'02',name:'女'}]`


# 示例


添加 `mutil-select` 支持多选
<div class="example-content"><div class="u-combo mutil-select" id="combo3">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button"></span>
    </div>
</div></div>
<div class="example-content ex-hide"><script>u.compMgr.updateComp();
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
</script></div>
<div class="examples-code"><pre><code>u.compMgr.updateComp();
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="u-combo mutil-select" id="combo3">
    &lt;div class="u-input-group u-has-feedback">
        &lt;input class="u-form-control" />
        &lt;span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
</div>


<div class="example-content"><div class="u-combo" id="combo1" style="margin: 10px">
    <div class="u-input-group u-has-feedback">
        <div class="u-input-group-before" style="color: red;">*</div>
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button"></span>
    </div>
</div></div>
<div class="example-content ex-hide"><script>u.compMgr.updateComp();
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
</script></div>
<div class="examples-code"><pre><code>&lt;div class="u-combo" id="combo1" style="margin: 10px">
    &lt;div class="u-input-group u-has-feedback">
        &lt;div class="u-input-group-before" style="color: red;">*&lt;/div>
        &lt;input class="u-form-control" />
        &lt;span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>u.compMgr.updateComp();
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);</code></pre>
</div>






