# 按钮控件

按钮控件包括了普通按钮、文字按钮、圆形按钮、不同色彩按钮、多尺寸按钮、款按钮、圆角按钮、下拉按钮、菜单按钮。

# 如何使用

添加含有`u-button`样式的元素，即可实现一个按钮。其他效果的按钮实现只需添加相应的样式

# 示例


##基础按钮
在含有`u-button`样式的button元素上添加`raised`样式。如果添加`primary`样式，按钮的背景色为系统的主色，如果添加`accent`样式,按钮的背景色为系统的副色。
<div class="example-content"><button class="u-button raised">BUTTON</button>
<button class="u-button raised accent">BUTTON</button>
<button class="u-button raised primary">BUTTON</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button raised">BUTTON&lt;/button>
&lt;button class="u-button raised accent">BUTTON&lt;/button>
&lt;button class="u-button raised primary">BUTTON&lt;/button></code></pre>
</div>

##色彩按钮
色彩按钮请添加类`u-button-success`、`u-button-info`、`u-button-danger`、`u-button-warning`
<div class="example-content"><button class="u-button  u-button-success">success</button>
<button class="u-button   u-button-info">info</button>
<button class="u-button   u-button-danger">danger</button>
<button class="u-button  u-button-warning">warning</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button  u-button-success">success&lt;/button>
&lt;button class="u-button   u-button-info">info&lt;/button>
&lt;button class="u-button   u-button-danger">danger&lt;/button>
&lt;button class="u-button  u-button-warning">warning&lt;/button></code></pre>
</div>

## 文字按钮
<div class="example-content"><button class="u-button">BUTTON</button>
<button class="u-button accent">BUTTON</button>
<button class="u-button primary">BUTTON</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button">BUTTON&lt;/button>
&lt;button class="u-button accent">BUTTON&lt;/button>
&lt;button class="u-button primary">BUTTON&lt;/button></code></pre>
</div>

##圆形按钮
在含有`u-button`样式的button上添加`floating`样式，即可实现圆形按钮。
<div class="example-content"><button class="u-button floating">
    <i class="uf uf-plusblacksymbol"></i>
</button>
<button class="u-button floating accent">
    <i class="uf uf-plusblacksymbol"></i>
</button>
<button class="u-button floating primary">
    <i class="uf uf-plusblacksymbol"></i>
</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button floating">
    &lt;i class="uf uf-plusblacksymbol">&lt;/i>
&lt;/button>
&lt;button class="u-button floating accent">
    &lt;i class="uf uf-plusblacksymbol">&lt;/i>
&lt;/button>
&lt;button class="u-button floating primary">
    &lt;i class="uf uf-plusblacksymbol">&lt;/i>
&lt;/button></code></pre>
</div>

##宽按钮
如果想按钮充满，添加类 `.u-button-block `
<div class="example-content"><button class="u-button raised primary u-button-block">宽按钮</button>   
</div>
<div class="examples-code"><pre><code>&lt;button class="u-button raised primary u-button-block">宽按钮&lt;/button>   
</code></pre>
</div>

##左半圆按钮、右半圆按钮
左半圆按钮的样式：`.u-button-pill-left`和 `.u-button-round`一起使用

右半圆按钮的样式： `.u-button-pill-right` 和 `.u-button-round`一起使用

<div class="example-content"><button class="u-button raised primary u-button-pill-left u-button-round">左半圆按钮
</button>
<button class="u-button raised primary u-button-pill-right u-button-squared">右半圆按钮
</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button raised primary u-button-pill-left u-button-round">左半圆按钮
&lt;/button>
&lt;button class="u-button raised primary u-button-pill-right u-button-squared">右半圆按钮
&lt;/button></code></pre>
</div>

##多尺寸响应
不同尺寸的按钮需添加类`.u-button-xg`, `.u-button-lg`,`.u-button-sm`
<div class="example-content"><button class="u-button raised primary u-button-xg">特大尺寸</button>

<button class="u-button raised primary u-button-lg">大尺寸</button>
<button class="u-button raised primary">默认尺寸
</button>
<button class="u-button raised primary u-button-sm">小尺寸</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button raised primary u-button-xg">特大尺寸&lt;/button>

&lt;button class="u-button raised primary u-button-lg">大尺寸&lt;/button>
&lt;button class="u-button raised primary">默认尺寸
&lt;/button>
&lt;button class="u-button raised primary u-button-sm">小尺寸&lt;/button></code></pre>
</div>

##圆角按钮
圆角和直角按钮来区分不同的行为风格.对应的样式分别为：`u-button-round` ，`.u-button-squared`
<div class="example-content"><button class="u-button raised primary u-button-round">圆形按钮
</button>
<button class="u-button raised primary u-button-squared">圆形按钮
</button></div>
<div class="examples-code"><pre><code>&lt;button class="u-button raised primary u-button-round">圆形按钮
&lt;/button>
&lt;button class="u-button raised primary u-button-squared">圆形按钮
&lt;/button></code></pre>
</div>


<!--### 示例1

示例1说明

### 示例2

示例2说-->

