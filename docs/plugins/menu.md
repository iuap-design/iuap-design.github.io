# 菜单(menu)
菜单选项总是包含两个或两个以上的设置和选项，当用户点击菜单进行选择时，菜单会出现，并且在选择之后被隐藏。菜单组件显示效果有4种，分别为：显示在按钮下方，左对齐、显示在按钮下方，右对齐、显示在按钮上方，左对齐、显示在按钮上方，右对齐。
##如何使用
1、创建button元素，添加id属性，属性值可以自己定义 点击它时，菜单会进行隐藏或者显示。
	
	<button   id="menu-btn" class="u-button floating u-button-icon">
	    菜单
	</button>

2、创建样式为“u-menu”的ul下拉列表，用于包括菜单内容。ul上定义for属性，属性值与第一步创建button中的id对应。菜单的样式还可以选择“u-menu-bottom-left”、“u-menu-bottom-right”、“u-menu-top-left”、“u-menu-top-right”中的一个来表示菜单相对于按钮的显示位置。

	<ul class="u-menu u-menu-bottom-left" for="menu-btn">

	</ul>

3、在ul标签内，使用样式为“u-menu-item”的li标签定义菜单的具体内容，当li标签不可用时，可以添加“disabled”属性。

	<ul class="u-menu u-menu-bottom-left" for="menu-btn">
		<li class="u-menu-item">新增</li>
		<li class="u-menu-item">修改</li>
		<li disabled class="u-menu-item">删除</li>
	</ul>
##具体示例

此例为菜单内容显示在按钮的下方，并且左对齐。

![](../../static/plugins/img/menu.png)

	<button  id="demo-menu-lower-left" class="u-button floating u-button-icon">
	    <i class="fa fa-ellipsis-v"></i>
	</button>
	<ul class="u-menu u-menu-bottom-left" for="demo-menu-lower-left">
	    <li class="u-menu-item">新增</li>
	    <li class="u-menu-item">修改</li>
	    <li disabled class="u-menu-item">删除</li>
	    <li class="u-menu-item">审核</li>
	</ul>



[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/menu "试一试")