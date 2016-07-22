# iuap-design 官网

## 介绍

[iUAP Deisgn](http://design.yyuap.com/)官方网站请访问 `http://design.yyuap.com/`。官网内容包含`iUAP Design`的整体说明和开发指导、设计指导、`NeoUI`前端`UI`框架和定制功能、`Kero Library`使用教程、样式板、`Web`页面设计器等内容。

## 目录说明

```

├─conf 项目配置文件
├─dist 生产环境资源
│  ├─pages 页面目录
│  │  ├─custom
│  │  └─snippet
│  ├─static 公共静态资源
│  │  ├─css
│  │  │  └─vendor
│  │  ├─fonts
│  │  ├─img
│  │  ├─ionicons
│  │  └─js
│  │      ├─libs
│  │      └─plugins
│  └─vendor 第三方类库或框架
├─docs MD文档源码，使用Gitbook构建
├─server web服务目录
├─snippets 所有的代码片段
└─res 待构建的源代码
    ├─compatible
    ├─core
    ├─model
    ├─polyfill
    ├─ui
    └─ui-extend

```

## 如何开发

### 使用gitbook编译MD文档

一键编译docs下目录所有的资源

```
sh bin/gitbook-build.sh
```

> gitbook产出的资源在代码库中ignore掉了，文档推送之后服务器会自动build编译并部署

### Git基本操作

1.切到你本地的某个目录，比如直接到本地D盘

```
cd /d
```

2.拉取远程仓库代码

```
git clone git@github.com:iuap-design/iuap-design.github.io.git
npm install
```

3.修改代码

4.代码提交
```
git add -A && git commit -m "update"
```

5.推送到远程服务器
```
git push origin master
```

6.如果仓库代码有更新，导致代码推送不成功
```
git pull origin master
```

## 定制

到src目录下执行脚本获取所有工程的源码

```
cd bin && sh fetch.sh
```

构建产出各版本资源

```
gulp
```
