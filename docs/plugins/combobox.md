# combobox插件

combobox组合框是由一个文本输入控件和一个下拉菜单组成的，类似于select元素。用户可以从一个预先定义的列表里选择一个或者多个选项。

# 示例


默认单选下拉框
<div class="example-content"><div class="u-combo" id="combo1">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button"></span>
    </div>
</div></div>
<div class="example-content ex-hide"><script>u.compMgr.updateComp();
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
</script></div>
<div class="examples-code"><pre><code>&lt;div class="u-combo" id="combo1">
    &lt;div class="u-input-group u-has-feedback">
        &lt;input class="u-form-control" />
        &lt;span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);</code></pre>
</div>

添加 `mutil-select`样式 支持多选
<div class="example-content"><div class="u-combo mutil-select" id="combo3">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button"></span>
    </div>
</div></div>
<div class="example-content ex-hide"><script>u.compMgr.updateComp();
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
</script></div>
<div class="examples-code"><pre><code>&lt;div class="u-combo mutil-select" id="combo3">
    &lt;div class="u-input-group u-has-feedback">
        &lt;input class="u-form-control" />
        &lt;span class="u-form-control-feedback uf uf-anglearrowdown" data-role="combo-button">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);</code></pre>
</div>



# API

## Combo

* 类型：`Object`
* 说明： Combo表示一个下拉对象
* 用法：

获取方式：1、获取绑定下拉框的dom元素 ； 2、读取dom元素上的属性'u.Combo'

```

var comboObject = document.getElementById('domId')['u.Combo'];

```

## Combo.setComboData(dataArray)

* 类型： `Function`
* 说明：给下拉框对象添加数据源
* 参数：
	* `{Array} dataArray`
* 用法：

```

var dataArray = [{value:'01',name:'男'},{value:'02',name:'女'}];//value为：下拉框真实值，name为下拉显示值

document.getElementById('domId')['u.Combo'].setComboData(dataArray);

```


