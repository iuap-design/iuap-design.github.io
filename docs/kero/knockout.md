# Knockout 学习

## 简单示例

<div class="example-content"><!-- ko通过data-bind绑定数据 -->
<p>First name: <input data-bind="value: firstName" /></p>
<p>Last name: <input data-bind="value: lastName" /></p>
<h2>Hello, <span data-bind="text: fullName"> </span>!</h2></div>
<div class="example-content ex-hide"><script>// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};

ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout
</script></div>
<div class="examples-code"><pre><code>&lt;!-- ko通过data-bind绑定数据 -->
&lt;p>First name: &lt;input data-bind="value: firstName" />&lt;/p>
&lt;p>Last name: &lt;input data-bind="value: lastName" />&lt;/p>
&lt;h2>Hello, &lt;span data-bind="text: fullName"> &lt;/span>!&lt;/h2></code></pre>
</div>
<div class="examples-code"><pre><code>// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};

ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout</code></pre>
</div>


## Ko学习
了解基本的Knockout可查看由刘绍振同学写的[Knockout入门](https://github.com/iuap-design/blog/issues/26)，涵盖了绑定常用的API。

Ko的官网除了提供[Live examples](http://knockoutjs.com/examples/),还提供了交互式学习的[快速入门](http://learn.knockoutjs.com/),很容易轻松上手。

## 其他Ko学习资料

- 中文文档下载：[KnockoutJS.chm](http://design.yyuap.com/dist/static/handbook/KnockoutJS.chm)
  (如果有下载打不开，请右键点击文件--》选择“属性”--》点击“解除锁定”，重新打开就可以了)
