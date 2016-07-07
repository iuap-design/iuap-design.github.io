# table控件

常用于多列数据的展示

# 如何使用

为 `<table>` 增加基本样式--很少的内补`padding`

# 示例
##基础table
也是最基本的表格
表头与表体背景色区分，表体斑马背景区分。表格整体具有边框


<div class="example-content"><table class="u-table">
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
</div>

<div class="examples-code"><pre><code>&lt;table class="u-table">
    ...
&lt;/table></code></pre>
</div>

##常用table
父级`<table>`添加通用`.u-table`

<div class="example-content"><div class="example table-responsive">
    <table class="u-table-base">
        <thead>
            <tr>
                <th>#</th>
                <th>名</th>
                <th>姓氏</th>
                <th>用户名</th>
                <th>角色</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Teagan</td>
                <td>Prohaska</td>
                <td>@Elijah</td>
                <td>admin</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Andy</td>
                <td>Gaylord</td>
                <td>@Ramiro</td>
                <td>member</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Veronica</td>
                <td>Gusikowski</td>
                <td>@Maxime</td>
                <td>developer</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bruce</td>
                <td>Rogahn</td>
                <td>@Maggio</td>
                <td>supporter</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Carolina</td>
                <td>Hickle</td>
                <td>@Hammes</td>
                <td> member</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Madaline</td>
                <td>Eichmann</td>
                <td>@Amaya</td>
                <td>supporter</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div class="examples-code"><pre><code>&lt;div class="example table-responsive">
    &lt;table class="u-table-base">
        ...
    &lt;/table>
&lt;/div></code></pre>
</div>

##边框table


div上添加class名table-responsive
table上添加class名u-table-bordered

<div class="example-content"><div class="example table-responsive">
    <table class="u-table-base u-table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>名</th>
                <th>姓氏</th>
                <th>用户名</th>
                <th>角色</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Teagan</td>
                <td>Prohaska</td>
                <td>@Elijah</td>
                <td>
                    admin
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Andy</td>
                <td>Gaylord</td>
                <td>@Ramiro</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Veronica</td>
                <td>Gusikowski</td>
                <td>@Maxime</td>
                <td>
                    developer
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bruce</td>
                <td>Rogahn</td>
                <td>@Maggio</td>
                <td>
                   supporter
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Carolina</td>
                <td>Hickle</td>
                <td>@Hammes</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Madaline</td>
                <td>Eichmann</td>
                <td>@Amaya</td>
                <td>
                    supporter
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div class="examples-code"><pre><code>.u-table-base{
    width: 600px;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="example table-responsive">
    &lt;table class="u-table-base u-table-bordered">
       ...
    &lt;/table>
&lt;/div></code></pre>
</div>



##hove背景table


`<div>`上添加`.table-responsive`
`<table>`上添加`.u-table-hover` 鼠标经过表行具有背景色

<div class="example-content"><div class="example table-responsive">
    <table class="u-table-base u-table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>名</th>
                <th>姓氏</th>
                <th>用户名</th>
                <th>角色</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Teagan</td>
                <td>Prohaska</td>
                <td>@Elijah</td>
                <td>
                    admin
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Andy</td>
                <td>Gaylord</td>
                <td>@Ramiro</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Veronica</td>
                <td>Gusikowski</td>
                <td>@Maxime</td>
                <td>
                    developer
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bruce</td>
                <td>Rogahn</td>
                <td>@Maggio</td>
                <td>
                   supporter
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Carolina</td>
                <td>Hickle</td>
                <td>@Hammes</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Madaline</td>
                <td>Eichmann</td>
                <td>@Amaya</td>
                <td>
                    supporter
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div class="examples-code"><pre><code>&lt;div class="example table-responsive">
    &lt;table class="u-table-base u-table-hover">
        ...
    &lt;/table>
&lt;/div></code></pre>
</div>



##斑马table


表体斑马背景区分两行
table上加class u-table-striped

<style>.u-table-base{
    width: 600px;
}
</style>
<div class="example-content"><div class="example table-responsive">
    <table class="u-table-base u-table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>名</th>
                <th>姓氏</th>
                <th>用户名</th>
                <th>角色</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Teagan</td>
                <td>Prohaska</td>
                <td>@Elijah</td>
                <td>
                    admin
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Andy</td>
                <td>Gaylord</td>
                <td>@Ramiro</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Veronica</td>
                <td>Gusikowski</td>
                <td>@Maxime</td>
                <td>
                    developer
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bruce</td>
                <td>Rogahn</td>
                <td>@Maggio</td>
                <td>
                   supporter
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Carolina</td>
                <td>Hickle</td>
                <td>@Hammes</td>
                <td>
                    member
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Madaline</td>
                <td>Eichmann</td>
                <td>@Amaya</td>
                <td>
                    supporter
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div class="examples-code">
</div>
<div class="examples-code"><pre><code>&lt;div class="example table-responsive">
    &lt;table class="u-table-base u-table-striped">
        ...
    &lt;/table>
&lt;/div></code></pre>
</div>

