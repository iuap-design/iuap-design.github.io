# 浏览器兼容性

iuap-design 支持所有的主流浏览器和平台的最新的、稳定的版本。 在 Windows 中, **我们支持 Internet Explorer 9-11，同时提供兼容 Internet Explorer 8 的polyfill支持**。下面提供了更多详细的支持信息。

## 支持Internet Explorer 8

你可以使用我们官方提供的u-polyfill.js文件来进行兼容处理

```
http://design.yyuap.com/static/uui/latest/js/u-polyfill.js
```

也可以添加一些第三方的 `JavaScript` 类库来处理 `iuap-design` 对Internet Explorer 8的支持，比如在项目中添加以下类库：

- The HTML5 shiv
```
<!DOCTYPE html>
<html>
 <head>
  <!--[if lt IE 9]>
  <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
  <![endif]-->
 </head>
 <body>
 </body>
</html>
```
- Respond.js

请访问
```
https://github.com/scottjehl/Respond
```

- Rem unit polyfill

请访问
```
https://github.com/chuckcarpenter/REM-unit-polyfill
```

## IE兼容模式

为了确保你正在使用IE的最新的渲染模式，请在你的网页的合适位置放置下面这个<meta>标签：

```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 移动设备

## 桌面浏览器
