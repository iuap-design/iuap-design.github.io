# iuap-design 官网

## 简介

iUAP Deisgn 的官网

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
