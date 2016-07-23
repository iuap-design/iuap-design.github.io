# 起步

## 引入Kero文件及相关依赖

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kero Getting Started</title>
</head>
<body>

  <script src="http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js"></script>
  <!--引入knockout依赖-->
  <script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
  <!--引入核心js文件-->
  <script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>
</body>
</html>

```

## 兼容IE8

如需兼容IE8,需要在引入其他JS文件之前加载`u-polyfill.js`

```javascript
<!--[if lte IE 8]>
  <script src="http://design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
<![endif]-->
```

## 快速上手

使用`data-bind`绑定数据。

js内容解读

* `viewModel = {...}`创建`u.DataTable`实例集合
* `dt1` 创建名为`dt1`的`u.DataTable`实例集合
* `f1` 定义名为`f1`的实例中某一条件组合，为`dt1`的一个子集
* `app = u.createApp({...})`,页面初始化
* `setValue`绑定数据

html内容解读

* `data-bind`进行数据绑定
* `"text:dt1.ref('f1')">`指定绑定的实例集合：`dt1`下的`f1`

<div class="example-content"><div data-bind="text:dt1.ref('f1')"></div></div>
<div class="example-content ex-hide"><script>var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                maxLength:12
            }
        }
    })
};

app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1','Hello World');

</script></div>
<div class="examples-code"><pre><code>var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                maxLength:12
            }
        }
    })
};

app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1','Hello World');
</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div data-bind="text:dt1.ref('f1')">&lt;/div></code></pre>
</div>
