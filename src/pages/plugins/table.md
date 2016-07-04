# 表格(table)

表格组件是一个增强版本的HTML标准&lt;table&gt;例如：当鼠标hove和click时，单行会出现阴影的效果，并且用户可以进行多行选择。

##如何使用

1、创建含有thread、tbody的table元素。

  <table>
    <thead>
    </thead>
    <tbody>
    </tbody>
  </table>
2、对table添加"u-table"样式
    
    <table class="u-table">
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
3、在table中添加tr、th、td内容。

##具体示例

![](img/table.png)

	<table class="u-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>iphone 6</td>
          <td>25</td>
          <td>$2.90</td>
        </tr>
        <tr class="is-selected">
          <td>小米Note</td>
          <td>50</td>
          <td>$1.25</td>
        </tr>
        <tr>
          <td>华为P8</td>
          <td>10</td>
          <td>$2.35</td>
        </tr>
      </tbody>
    </table>



[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/datatable "试一试")










