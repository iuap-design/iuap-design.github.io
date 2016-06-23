var viewModel = {
    treeSetting:{
        view:{
            showLine:false,
            selectedMulti:false
        },
        callback:{
            onClick:function(e,id,node){
                alert(id)
                alert(node)
            }
        },
        check: {
            enable: true,
            chkboxType:{ "Y" : "ps", "N" : "ps" }
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
    el: '.demo',
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
        "title": "f1"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "02",
        "pid": "root",
        "title": "f2"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "101",
        "pid": "01",
        "title": "f11"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "102",
        "pid": "01",
        "title": "f12"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "201",
        "pid": "02",
        "title": "f21"
      }
    }
  ]
}
viewModel.dataTable.setData(data);

var addOneRow1 = document.querySelector('#addOneRow1'),
    deleteOneRow = document.querySelector('#deleteOneRow'),
    deleteAllRows = document.querySelector('#deleteAllRows');
u.on(addOneRow1, "click",function(){
    var row={
        "status": "nrm",
        "data": {
            "id": "202",
            "pid": "02",
            "title": "f22"
        }};
    //先创建行模型，然后将数据插入行
    var r=new u.Row({parent:viewModel.dataTable});
    r.setData(row);
    //新增一行
    viewModel.dataTable.addRow(r);
});

u.on(deleteOneRow, "click",function(){
    var indices=viewModel.dataTable.getSelectedIndices();
    viewModel.dataTable.removeRows(indices)
});
u.on(deleteAllRows, "click",function(){
    viewModel.dataTable.removeAllRows();
})
