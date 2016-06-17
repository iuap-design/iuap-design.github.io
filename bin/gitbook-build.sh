#!/bin/sh

cdir=`pwd`

bookName=("components" "design-language" "getting-started" "global-style")

for name in ${bookName[@]}
do

  docDir="$cdir/docs/$name"
  pageDir="$cdir/dist/pages/$name"

  echo "--- 正在删除dist/pages/${name}资源 ---"
  rm -rf $pageDir
  echo "--- 删除完成 ---"

  cd $docDir && gitbook install
  echo "--- 开始编译${name} ---"
  gitbook build --ouput=../../dist/pages/$pageDir
  echo "--- ${name}资源编译完成 ---"

done
