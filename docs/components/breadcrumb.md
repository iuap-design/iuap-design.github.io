
# breadcrumb控件

## `/`为分隔符

<div class="example-content">
<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>

</div>
<div class="examples-code"><pre><code>
&lt;ol class="u-breadcrumb">
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li class="active">Library&lt;/li>
&lt;/ol>
&lt;ol class="u-breadcrumb">
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Library&lt;/a>&lt;/li>
    &lt;li class="active">Data&lt;/li>
&lt;/ol>
</code></pre>
</div>

## `>>`为分隔符



<div class="example-content">
<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>
</div>
<style>.md-home:before {
    content: "\f015";
    font-family: 'FontAwesome';
}
</style>
<div class="examples-code"><pre><code>
&lt;ol class="u-breadcrumb u-breadcrumb-arrow">
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li class="active">Library&lt;/li>
&lt;/ol>
&lt;ol class="u-breadcrumb u-breadcrumb-arrow">
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Library&lt;/a>&lt;/li>
    &lt;li class="active">Data&lt;/li>
&lt;/ol></code></pre>
</div>

## `/`为分隔符,并添加Home icon

<style>.md-home:before {
    content: "\f015";
    font-family: 'FontAwesome';
}
</style>
<div class="example-content">
<ol class="u-breadcrumb">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Data</li>
</ol>
<ol class="u-breadcrumb breadcrumb-arrow">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>
</div>
<div class="examples-code"><pre><code>
&lt;ol class="u-breadcrumb">
    &lt;li>&lt;a class="icon md-home u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li class="active">Data&lt;/li>
&lt;/ol>
&lt;ol class="u-breadcrumb breadcrumb-arrow">
    &lt;li>&lt;a class="icon md-home u-link" href="javascript:void(0)">Home&lt;/a>&lt;/li>
    &lt;li>&lt;a class="u-link" href="javascript:void(0)">Library&lt;/a>&lt;/li>
    &lt;li class="active">Data&lt;/li>
&lt;/ol></code></pre>
</div>
