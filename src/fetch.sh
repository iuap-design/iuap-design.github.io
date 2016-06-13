#!/bin/sh

cdir=`pwd`

prodName=(
  "iuap-design"
  "datatable"
  "datetimepicker"
  "tree"
  "grid"
)

# 代码下载
for name in ${prodName[@]}
do
  prodDir="$cdir/$name"
  remoteDir="git@github.com:iuap-design/${name}.git"

  if [ ! -d $prodDir ]
  then
    echo "--- 开始下载${name} ---"
    git clone ${remoteDir}
  	echo "--- ${name}下载完成~~! ---"
  fi
done

# 分支切换到 release
for name in ${prodName[@]}
do
	cd ${name}
  echo "--- ${name}进行分支切换和代码更新 ---"
  git checkout master
  git pull origin master
  cd ..
  echo "--- 分支切换和代码更新完成 ---"
done
