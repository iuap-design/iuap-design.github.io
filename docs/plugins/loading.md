# loading
loading 组件以一个圆环顺时针方向运动，用来传达某一事件已经开始但尚未完成的。圆环的颜色可以是单一的或者变化的。
##如何使用
1、创建样式为“u-loading”的div元素。

	<div class="u-loading"></div>
2、在第一步创建的loading是未激活的状态，加上“is-active”样式使其激活，这时会有一个颜色变化的圆环顺时针运动。

	<div class="u-loading is-active"></div>

3、在div元素可以添加“u-loading-single-color”样式，这时圆环的颜色就是单一蓝色。

	<div class="u-loading is-active u-loading-single-color"></div>

##具体示例
![](../../static/img/plugins/loading.png)

	<div class="u-loading is-active u-loading-single-color"></div>



[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/loading "试一试")










