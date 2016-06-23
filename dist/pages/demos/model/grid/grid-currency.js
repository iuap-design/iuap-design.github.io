$(document).ready(function () {
	var viewModel = {
		radiodata: [{
			"pk": "001",
			"name": "是"
		}, {
			"pk": "002",
			"name": "否"
		}, {
			"pk": "003",
			"name": "待议"
		}],
		comItems: [{
			"pk": "001",
			"name": "1122"
		}, {
			"pk": "002",
			"name": "3344"
		}, {
			"pk": "003",
			"name": "4455"
		}, {
			"pk": "004",
			"name": "5566"
		}, {
			"pk": "005",
			"name": "6677"
		}, {
			"pk": "006",
			"name": "7788"
		}, {
			"pk": "007",
			"name": "8899"
		}],
		comItems2: [{
			'pk': "a1",
			'name': "天一"
		}, {
			"pk": "a2",
			"name": "正水"
		}],
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
			comp.modelValueChange(obj.value);
		}
	
	};
	var app = new u.createApp();
	//console.log(viewModel)
	app.init(viewModel);
	window.app = app;
	$.ajax({
		type: "get",
		url: "grid-currency.json",
		dataType: "json",
		async: true,
		success: function(data) {
			viewModel.dataTable.removeAllRows();
			viewModel.dataTable.setData(data)
		}
	});
	$("#addOneRow1").on("click", function() {
		var row = {
			"status": "nrm",
			"data": {
				"name": "天冬素",
				"time": "2015-03-21 15:22",
				"distance": "123",
				"currency": "12",
				"pass": "003",
				"pid": "01",
				"id": "001",
				"combobox": "002",
				"check": "Y",
				"combobox2": "001,002"
			}
		};
		//先创建行模型，然后将数据插入行
		var r = new u.Row({
			parent: viewModel.dataTable
		});
		r.setData(row);
		//新增一行
		viewModel.dataTable.addRow(r);
	});
	$("#selectOneRow1").on("click", function() {
		viewModel.dataTable.setRowSelect(2)
	});
	$("#deleteOneRow1").on("click", function() {
		viewModel.dataTable.removeRow(2)
	});
	$("#changecell").on("click", function() {
		viewModel.dataTable.setValue("name", "xin2")
	});
	$("#setUnSelect1").on("click", function() {
		viewModel.dataTable.setRowUnSelect(2);
	});
	$("#setFocus1").on("click", function() {
		viewModel.dataTable.setRowFocus(1)
	});
	$("#setUnFocus1").on("click", function() {
		viewModel.dataTable.setRowUnFocus(1)
	});
	$("#setAllRowsS1").on("click", function() {
		viewModel.dataTable.setAllRowsSelect()
	});
	$("#setAllRowsUnS1").on("click", function() {
		viewModel.dataTable.setAllRowsUnSelect()
	})

});

