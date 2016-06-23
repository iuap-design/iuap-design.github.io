


# 示例



##不同颜色的progress

 `.u-progress-primary` `.u-progress-danger` `.u-progress-info` `.u-progress-success` `.u-progress-warning` `.u-progress-dark` 六种颜色可供选择
<div class="example-content"><div class="example">
    <label class="u-switch u-switch-primary" for="switch-primary">
        <input type="checkbox" id="switch-primary" class="u-switch-input" checked="true">
        <span class="u-switch-label"></span>
    </label>
</div>

<div class="example">
    <label class="u-switch u-switch-success" for="switch-success">
        <input type="checkbox" id="switch-success" class="u-switch-input" checked>
        <span class="u-switch-label"></span>
    </label>
</div>

<div class="example">
    <label class="u-switch u-switch-info" for="switch-info">
        <input type="checkbox" id="switch-info" class="u-switch-input" checked>
        <span class="u-switch-label"></span>
    </label>
</div>

<div class="example">
    <label class="u-switch u-switch-warning" for="switch-warning">
        <input type="checkbox" id="switch-warning" class="u-switch-input" checked>
        <span class="u-switch-label"></span>
    </label>
</div>

<div class="example">
    <label class="u-switch u-switch-danger" for="switch-danger">
        <input type="checkbox" id="switch-danger" class="u-switch-input" checked>
        <span class="u-switch-label"></span>
    </label>
</div>

<div class="example">
    <label class="u-switch u-switch-dark" for="switch-dark">
        <input type="checkbox" id="switch-dark" class="u-switch-input" checked>
        <span class="u-switch-label"></span>
    </label>
</div>

</div>
</div>
<script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});
</script>
<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;label class="u-switch u-switch-primary" for="switch-primary">
        &lt;input type="checkbox" id="switch-primary" class="u-switch-input" checked="true">
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;div class="example">
    &lt;label class="u-switch u-switch-success" for="switch-success">
        &lt;input type="checkbox" id="switch-success" class="u-switch-input" checked>
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;div class="example">
    &lt;label class="u-switch u-switch-info" for="switch-info">
        &lt;input type="checkbox" id="switch-info" class="u-switch-input" checked>
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;div class="example">
    &lt;label class="u-switch u-switch-warning" for="switch-warning">
        &lt;input type="checkbox" id="switch-warning" class="u-switch-input" checked>
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;div class="example">
    &lt;label class="u-switch u-switch-danger" for="switch-danger">
        &lt;input type="checkbox" id="switch-danger" class="u-switch-input" checked>
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;div class="example">
    &lt;label class="u-switch u-switch-dark" for="switch-dark">
        &lt;input type="checkbox" id="switch-dark" class="u-switch-input" checked>
        &lt;span class="u-switch-label">&lt;/span>
    &lt;/label>
&lt;/div>

&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});</code></pre>
</div>

##不同尺寸的progress

`.u-progress-md` `.u-progress-sm`提供了额外可供选择的尺寸
<script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});
</script>
<div class="example-content"><div id="p22" class="u-progress u-progress-lg"></div>
<br/>
<div id="p23" class="u-progress u-progress-md"></div>
<br/>
<div id="p24" class="u-progress u-progress-sm"></div>
<br/>
<div id="p25" class="u-progress"></div>
</div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div id="p22" class="u-progress u-progress-lg">&lt;/div>
&lt;br/>
&lt;div id="p23" class="u-progress u-progress-md">&lt;/div>
&lt;br/>
&lt;div id="p24" class="u-progress u-progress-sm">&lt;/div>
&lt;br/>
&lt;div id="p25" class="u-progress">&lt;/div></code></pre>
</div>

##不确定progress

<div class="example-content"><div id="p2" class="u-progress u-progress__indeterminate"></div>
</p>
</div>
<script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});
</script>
<div class="examples-code"><pre><code>&lt;div id="p2" class="u-progress u-progress__indeterminate">&lt;/div>
&lt;/p></code></pre>
</div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});</code></pre>
</div>

##缓冲progress

有缓冲标识的进度条
<script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});
</script>
<div class="example-content"><div id="p3" class="u-progress"></div>
</div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p11')['u.Progress'].setProgress(69);
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
    document.querySelector('#p12')['u.Progress'].setProgress(69);
    document.querySelector('#p13')['u.Progress'].setProgress(69);
    document.querySelector('#p14')['u.Progress'].setProgress(69);
    document.querySelector('#p15')['u.Progress'].setProgress(69)
    document.querySelector('#p16')['u.Progress'].setProgress(69);
    document.querySelector('#p17')['u.Progress'].setProgress(69);
    document.querySelector('#p22')['u.Progress'].setProgress(69);
    document.querySelector('#p23')['u.Progress'].setProgress(69)
    document.querySelector('#p24')['u.Progress'].setProgress(69);
    document.querySelector('#p25')['u.Progress'].setProgress(69);

});</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div id="p3" class="u-progress">&lt;/div></code></pre>
</div>





## 方法

setProgress:获取dom调用此方法，自动生成progress插件


### 方法2

setBuffer:让滚动条具有缓冲效果
