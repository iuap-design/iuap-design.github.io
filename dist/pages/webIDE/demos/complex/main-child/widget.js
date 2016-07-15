  var data1 = {
    values: [{
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '张三',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '李四',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '王五',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '郭六',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '田七',
            tel: '13610068888'
        }]
    };
  var data2 = {
    values: 
      [
        {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '王五',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }
      ]

    };

  var colu1 = [{
        field: "name",
        title: "姓名"
    }, {
        field: "tel",
        title: "手机"
    }, {
        field: "email",
        title: "邮件"
    }, {
        field: "depart",
        title: "部门"
    }, {
        field: "company",
        title: "公司"
    }];
    var colu2 = [{
        field: "name",
        title: "报销人"
    }, {
        field: "date",
        title: "日期"
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
        columns: colu1,
        onRowSelected: function(obj){
          var filterName = obj.rowObj.value.name;
          var newData = filterData(data2,filterName);
          console.log(newData.length);
          $("#grid-comp2").data("gridComp").setDataSource(newData);
        }

    });
    $("#grid-comp2").grid({
        dataSource: "", 
        id: 'case-g2',
        editable: true,
        keyField: 'name',
        parentKeyField: 'pname',
        columns: colu2

    });

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