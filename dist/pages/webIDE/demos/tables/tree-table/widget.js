  var data1 = {
    values:
      [
        {
            type: "加班打车费用",
            detail: "加班",
            name: '李一',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '李二',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '李三',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '张四',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '王五',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '郭七',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }, {
            type: "加班打车费用",
            detail: "加班",
            name: '田八',
            count: '60'
        }
      ]

    };

   var colu1 = [{
        field: "name",
        title: "报销人"
    }, {
        field: "type",
        title: "费用类型"
    }, {
        field: "detail",
        title: "事由"
    }, {
        field: "count",
        title: "报销金额"
    }
    ];

    $("#grid-comp1").grid({
        dataSource: data1,
        id: 'case-g1',
        keyField: 'name',
        columns: colu1
    });

var viewModel = {
    treeSetting:{
        view:{
            showLine:false,
            selectedMulti:false
        },
        callback:{
            onClick:function(e,id,node){

                var filterName = node.name;
                var newData = filterData(data1,filterName);
                $("#grid-comp1").data("gridComp").setDataSource(newData);
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
var filterData = function(data,filtername){
    var temp = {
        values:[]
    }
    for(var i in data.values){
        if(data.values[i].name === filtername){
            temp.values.push(data.values[i]);
        }
    }
    return temp;
}

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
        "title": "张"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "02",
        "pid": "root",
        "title": "李"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "03",
        "pid": "root",
        "title": "王"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "04",
        "pid": "root",
        "title": "田"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "05",
        "pid": "root",
        "title": "郭"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "101",
        "pid": "01",
        "title": "张三"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "102",
        "pid": "01",
        "title": "张四"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "201",
        "pid": "02",
        "title": "李一"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "202",
        "pid": "02",
        "title": "李二"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "203",
        "pid": "02",
        "title": "李三"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "301",
        "pid": "03",
        "title": "王五"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "401",
        "pid": "04",
        "title": "田八"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "401",
        "pid": "04",
        "title": "田七"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "501",
        "pid": "05",
        "title": "郭七"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "501",
        "pid": "05",
        "title": "郭六"
      }
    }
  ]
}
viewModel.dataTable.setData(data);
