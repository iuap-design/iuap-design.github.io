#!/bin/sh

cdir=`pwd`

bookName=("components" "design-language" "getting-started" "kero" "plugins" "global-style")

for name in ${bookName[@]}
do

  docDir="$cdir/docs/$name"
  pageDir="$cdir/dist/pages/$name"

  echo "--- 正在删除dist/pages/${name}资源 ---"
  rm -rf $pageDir
  echo "--- 删除完成 ---"

  cd $docDir && npm install && gitbook install

  echo "--- 开始编译${name} ---"
  gitbook build --ouput=../../dist/pages/$pageDir
  echo "--- ${name}资源编译完成 ---"

done

# 安装依赖包 && 最新kero-adapter包
modulePre="$cdir/node_modules/"
moduleName=(
  "kero-adapter"
  "tinper-neoui-polyfill"
  "tinper-neoui"
  )

if [ -d "$modulePre" ]
then
  for name in ${moduleName[@]}
  do
    modulePath="${modulePre}${name}"
    if [ -d $modulePath ]
    then
      echo "卸载旧版$name"
      npm uninstall $name
      echo "安装新版$name"
      npm install $name@latest
      echo "已安装成功新版$name"
    else
      echo "安装新版$name"
      npm install $name
      echo "已安装成功新版$name"
    fi
  done
else
    npm install
fi
