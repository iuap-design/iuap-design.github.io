var viewModel = {
    treeSetting:{
        view:{
            showLine:false,
            selectedMulti:false
        },
        callback:{
            onClick:function(e,id,node){
                // alert(id)
                // alert(node)
                var rightInfo = node.name + '被选中';
                u.showMessage({msg:rightInfo,position:"top"})


            }
        }
    },
    dataTable: new u.DataTable({
        meta: {
            'id': {
                'value':""
            },
            'pid': {
                'value':""
            },
            'title':{
                'value':""
            }
        }
    })
};
var app = u.createApp({
    el: document.body,
    model: viewModel
})
var data = {
  "pageIndex": 1,
  "pageSize": 10,
  "rows": [
    {
      "status": "nrm",
      "data": {
        "id": "01",
        "pid": "root",
        "title": "Parent1"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "02",
        "pid": "root",
        "title": "Parent2"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "101",
        "pid": "01",
        "title": "Child11"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "102",
        "pid": "01",
        "title": "mChild12"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "201",
        "pid": "02",
        "title": "Child21"
      }
    }
  ]
}
viewModel.dataTable.setData(data);

var Expanding = document.querySelector('#Expanding'),
    Collapsing = document.querySelector('#Collapsing');
    Searching = document.querySelector('#SearchTreeNode');

    /*
       展开全部节点
    */
    u.on(Expanding, "click",function(){
        $("#tree5")[0]['u-meta'].tree.expandAll(true);
    });
    /*
       合上全部节点
    */
    u.on(Collapsing, "click",function(){
       
        $("#tree5")[0]['u-meta'].tree.expandAll(false);
    });
    /*
       实时过滤节点
    */
    u.on(Searching, "keyup",function(){

       var searchkey = $(this).val();
       if(searchkey !== ""){
          console.log(searchkey);

          // 定义过滤条件
          var filter = function(node){
              return node.name.indexOf(searchkey)>-1;
          }
          // 过滤出节点
          var nodes = $("#tree6")[0]['u-meta'].tree.getNodesByFilter(filter);

          // 没有匹配，去掉被搜索状态
          if(nodes.length === 0){
            $(".selected").removeClass("seached");
          }
          // 循环匹配节点 展开父节点并添加搜索状态
          for(var n=0;n<nodes.length;n++){
            $("#tree6")[0]['u-meta'].tree.expandNode(nodes[n].getParentNode(),true,true,true);
            $("#"+nodes[n].tId).addClass("seached")
          }
       }else{
          // searchkey为空 则去掉被搜索状态
          $(".selected").removeClass("seached");
       }
        
    });




