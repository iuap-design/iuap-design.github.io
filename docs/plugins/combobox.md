
#下拉框(combo)
combobox组合框是由一个文本输入控件和一个下拉菜单组成的，类似于select元素。用户可以从一个预先定义的列表里选择一个或者多个选项。
##如何使用
1、创建含有“u-combo”样式的div元素，如果comboBox为多选框需加上“mutil-select”样式
	
	<div class="u-combo">
	</div>

2、在第一步生成的div元素中添加含有“u-input”样式的input元素，用户所选内容将会放在此元素中。

	<div class="u-combo">
		<input class="u-input"/>
	</div>

3、在第一步生成的div元素中添加含有“u-label”样式的label元素，用户不选择时，label中的内容将作为提示信息

	<div class="u-combo">
	    <input class="u-input"/>
	    <label class="u-label">提示信息</label>
	</div>
4、在第一步生成的div元素中添加option元素，所有的option值组成列表内容。

	<div class="u-combo">
	    <input class="u-input"/>
	    <label class="u-label"></label>
	    <option value="01">男</option>
	    <option value="02">女</option>
	</div>

option中的value属性值为用户传递给后端参数，option中的innerHtml作为界面的显示值

##示例
1.  下拉单选
  

<!-- ![](../../static/plugins/img/combo1.png) -->
 

	<div class="u-combo">
	    <input class="u-input"/>
	    <label class="u-label"></label>
	    <span class="u-combo-icon"></span>
	    <option value="01">男</option>
	    <option value="02">女</option>
	</div>




2.下拉多选  

![](../../static/img/plugins/combo2.png)

	<div class="u-combo mutil-select">
	    <input class="u-input"/>
	    <label class="u-label"></label>
	    <span class="u-combo-icon"></span>
	    <option value="01">java</option>
	    <option value="02">javascript</option>
	    <option value="03">C</option>
	    <option value="04">C++</option>
	</div>


[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/combobox "试一试")




