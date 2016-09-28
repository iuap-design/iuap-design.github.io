viewModel = {
    dataTable: new u.DataTable({
      meta: {
          "name": "",
          "startdate":"",
          "enddate":"",
          "time": "",
          "distance": "",
          "currency": "",
          "pass": "",
          "pid": "",
          "id": "",
          "combobox": "",
          "check": "",
          "combobox2": ""
      }
    }, this),
    radiodata: [{
        "value": "001",
        "name": "是"
    }, {
        "value": "002",
        "name": "否"
    }, {
        "value": "003",
        "name": "待议"
    }],
    comItems: [{
        "value": "001",
        "name": "1122"
    }, {
        "value": "002",
        "name": "3344"
    }, {
        "value": "003",
        "name": "4455"
    }, {
        "value": "004",
        "name": "5566"
    }, {
        "value": "005",
        "name": "6677"
    }, {
        "value": "006",
        "name": "7788"
    }, {
        "value": "007",
        "name": "8899"
    }],
    comItems2: [{
        'value': "a1",
        'name': "天一"
    }, {
        "value": "a2",
        "name": "正水"
    }],
    editTypeCurrency: function(obj) {
        //	obj.gridObj
        //	obj.element
        //	obj.value
        //	obj.field
        //	obj.rowObj
        var htmlStr = '';
        obj.element.innerHTML = htmlStr;

        $('input', $(obj.element)).on('focus', function() {
            alert("121")
        });

    },
    onBeforeRowSelected1: function(obj) {
        //console.log("选中前触发")
        return true
    },
    onRowSelected1: function(obj) {
        //console.log("选中后触发")
    },
    onBeforeRowUnSelected1: function(obj) {
        //console.log("反选前触发")
        return true;
    },
    onRowUnSelected1: function(obj) {
        //console.log("反选后触发")
    },
    onBeforeAllRowSelected1: function(obj) {
        //console.log("全部选中前触发")
        return true
    },
    onAllRowSelected1: function(obj) {
        //console.log("全选后触发")
    },
    onBeforeAllRowUnSelected1: function(obj) {
        //console.log("全反选前触发1")
        return true
    },
    onAllRowUnSelected1: function(obj) {
        //console.log("全反选后触发")
    },
    onBeforeRowUnFocus1: function(obj) {
        //console.log("行失去焦点前")
        return true
    },
    onRowFocus1: function(obj) {
        //console.log("行焦点后")
    },
    onBeforeRowFocus1: function(obj) {
        //console.log("行焦点前")
        return true
    },
    onRowUnFocus1: function(obj) {
        //console.log("行失去焦点")
    },
    onDblClickFun1: function(obj) {
        //			    obj.gridObj = this;
        //				obj.rowObj = this.dataSourceObj.rows[index];
        //				obj.rowIndex = index;
        //console.log("双击" + obj.rowIndex)
    },
    onValueChange1: function(obj) {
        //console.log("编辑" + obj.rowIndex)
    },
    eidtTypeFun:function(obj){
        var gridObj = obj.gridObj;
        var viewModel = gridObj.viewModel;
        var field = obj.field;
        var ele = obj.element;
        var dataTableId = gridObj.dataTable.id;
        var innerStr = '<div class=\'u-datepicker\' style="width:100%;padding:0px;" u-meta=\'{"id":"' + field + '","type":"u-date","data":"' + dataTableId + '","field":"' + field + '"}\'><input class="u-input" type="text"></div>';
        var innerDom = u.makeDOM(innerStr);
        ele.innerHTML = '';
        ele.appendChild(innerDom);
        var comp = app.createComp(innerDom,viewModel);
        comp.comp.on('select',function(){
            gridObj.nextEditShow();
        });
        comp.modelValueChange(obj.value);
    },
    endEidtTypeFun:function(obj){
        var gridObj = obj.gridObj;
        var viewModel = gridObj.viewModel;
        var field = obj.field;
        var ele = obj.element;
        var dataTableId = gridObj.dataTable.id;
        var innerStr = '<div class=\'u-datepicker\' style="width:100%;padding:0px;" u-meta=\'{"id":"' + field + '","type":"u-date","data":"' + dataTableId + '","field":"' + field + '","startfield":"startdate"}\'><input class="u-input" type="text"></div>';
        var innerDom = u.makeDOM(innerStr);
        ele.innerHTML = '';
        ele.appendChild(innerDom);
        var comp = app.createComp(innerDom,viewModel);
        comp.comp.on('select',function(){
            gridObj.nextEditShow();
        });
        comp.modelValueChange(obj.value);
    },
    afterCreateFun:function(objs){
        // debugger;
    }
  };
  var app = new u.createApp();
  //console.log(viewModel)
  app.init(viewModel);
  var data = {
      "pageIndex": 1,
      "pageSize": 10,
      "rows": [
          {
              "status": "nrm",
              "data": {
                  "name": "赵四",
                  "time": "12:22:00",
                  "distance": "25",
                  "datetime": "2015-10-1 12:22:00",
                  "num":"1",
                  "date":"2015-10-09",
                  "year":"2015",
                  "month":"8",
                  "yearmonth":"2015-08",
                  "url":"www.yonyou.com",
                  "password":"110",
                  "percent":"110",
                  "password":"110",
                  "password":"110",
                  "currency": {
                      "value": "200.00",
                      "meta": {
                          "precision": "2",
                          "max": "3000",
                          "min": "0",
                          "curSymbol": "$"
                      }
                  },
                  "pass": "Y",
                  "pid": "",
                  "id": "04",
                  "combobox": "002",
                  "combobox2": "a1",
                  "check": "Y"
              }
          }, {
              "status": "nrm",
              "data": {
                  "name": "王一",
                  "time": "14:42:14",
                  "distance": "25",
                  "datetime": "2015-10-1 12:22:00",
                  "num":"21",
                  "date":"2015-10-09",
                  "year":"2015",
                  "month":"10",
                  "yearmonth":"2015-08",
                  "url":"www.yonyou.com",
                  "password":"110",
                  "percent":"110",
                  "password":"110",
                  "password":"110",
                  "currency": {
                      "value": "200.00",
                      "meta": {
                          "precision": "2",
                          "max": "3000",
                          "min": "0",
                          "curSymbol": "$"
                      }
                  },
                  "pass": "002",
                  "pid": "04",
                  "id": "01",
                  "combobox": "007",
                  "combobox2": "a1",
                  "check": "Y"
              }
          }, {
              "status": "nrm",
              "data": {
                  "name": "李三",
                  "time": "13:54:23",
                  "distance": "50",
                  "datetime": "2015-10-1 12:22:00",
                  "num":"14",
                  "date":"2015-10-09",
                  "year":"2015",
                  "month":"10",
                  "yearmonth":"2015-08",
                  "url":"www.yonyou.com",
                  "password":"110",
                  "percent":"110",
                  "password":"110",
                  "password":"110",
                  "currency": {
                      "value": "300.00",
                      "meta": {
                          "precision": "2",
                          "max": "3000",
                          "min": "0",
                          "curSymbol": "$"
                      }
                  },
                  "pass": "001",
                  "pid": "",
                  "id": "02",
                  "combobox": "001",
                  "combobox2": "a1",
                  "check": "N"
              }
          }, {
              "status": "nrm",
              "data": {
                  "name": "彰武",
                  "time": "04:44:22",
                  "distance": "50",
                  "datetime": "2015-10-1 12:22:00",
                  "num":"59",
                  "date":"2015-10-09",
                  "year":"2015",
                  "month":"10",
                  "yearmonth":"2015-08",
                  "url":"www.yonyou.com",
                  "password":"110",
                  "percent":"110",
                  "password":"110",
                  "password":"110",
                  "currency": {
                      "value": "300.00",
                      "meta": {
                          "precision": "2",
                          "max": "3000",
                          "min": "0",
                          "curSymbol": "$"
                      }
                  },
                  "pass": "003",
                  "pid": "01",
                  "id": "03",
                  "combobox": "005",
                  "combobox2": "a2",
                  "check": "Y"
              }
          }
      ]
  }
  u.compMgr.updateComp();
  viewModel.dataTable.removeAllRows();
  viewModel.dataTable.setData(data);
