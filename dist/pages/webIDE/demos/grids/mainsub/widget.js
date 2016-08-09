var viewModel = {
	dataTable1: new u.DataTable({
		meta: {
			'person': {},
			'phone': {},
			'email': {},
			'department': {},
			'company': {},
			'costId': {}
		}
	}),
	dataTable2: new u.DataTable({
		meta: {
			'person': {},
			'datatime': {},
			'arriveAddress': {},
			'costType': {},
			'reason': {},
			'money': {}
		}
	})
}

viewModel.dataTable1.on('select', function(e) {
	var costId = viewModel.dataTable1.getRowByRowId(e.rowIds[0]).getValue('costId')
	
// 正常情况请用下面的代码	
//	app.serverEvent().addDataTable("dataTable2", "all").fire({
//		url: costId + 'Cost.json',
//		ctrl: '',
//		method: '',
//		type: 'GET', //注意：正常开发时请去掉此参数，默认为post
//		success: function(data) {
			//viewModel.dataTable2.removeAllRows();
			//viewModel.dataTable2.setData(data);
//		}
//	})
	var data = {
		"dataTables": {
			"dataTable2": {
				"select": null,
				"current": 0,
				"pageSize": 20,
				"pageIndex": 0,
				"totalPages": 0,
				"rows": [
					{
						"id": "r40077",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}, {
						"id": "r40076",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}, {
						"id": "r40075",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}, {
						"id": "r40074",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}, {
						"id": "r40073",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}, {
						"id": "r40072",
						"status": "new",
						"data": {
							"person": "张三",
							"datatime": "2015-5-15",
							"arriveAddress": "家",
							"costType": "加班打车费用",
							"reason": "加班",
							"money": "60"
						}
					}
				],
				"meta": null
			}
		},
		"comps": "",
		"contentType": "",
		"custom": ""
	}
	
	viewModel.dataTable2.setData(data.dataTables.dataTable2);


}
)

u.createApp({
    model: viewModel
});

// 正常情况请用下面的代码
//app.serverEvent().addDataTable("dataTable1", "all").fire({
//	url: 'personInfo.json',
//	ctrl: '',
//	method: '',
//	type: 'GET', //注意：正常开发时请去掉此参数，默认为post
//	success: function(data) {
		
//	}

var data = {
	"dataTables": {
		"dataTable1": {
			"select": null,
			"current": 0,
			"pageSize": 20,
			"pageIndex": 0,
			"totalPages": 0,
			"rows": [
				{
					"id": "r40077",
					"status": "new",
					"data": {
						"person": "张三",
						"phone": "13610068888",
						"email": "li@126.com",
						"department": "UAPweb",
						"company": "UAP",
						"costId": "zhangsan"
					}
				}, {
					"id": "r40076",
					"status": "new",
					"data": {
						"person": "李四",
						"phone": "13610068888",
						"email": "li@126.com",
						"department": "UAPweb",
						"company": "UAP",
						"costId": "lisi"
					}
				}, {
					"id": "r40075",
					"status": "new",
					"data": {
						"person": "王五",
						"phone": "13610068888",
						"email": "li@126.com",
						"department": "UAPweb",
						"company": "UAP",
						"costId": "wangwu"
					}
				}, {
					"id": "r40074",
					"status": "new",
					"data": {
						"person": "郭六",
						"phone": "13610068888",
						"email": "li@126.com",
						"department": "UAPweb",
						"company": "UAP",
						"costId": "guoliu"
					}
				}, {
					"id": "r40073",
					"status": "new",
					"data": {
						"person": "田七",
						"phone": "13610068888",
						"email": "li@126.com",
						"department": "UAPweb",
						"company": "UAP",
						"costId": "tianqi"
					}
				}
			],
			"meta": null
		}
	},
	"comps": "",
	"contentType": "",
	"custom": ""
}

viewModel.dataTable1.setData(data.dataTables.dataTable1);

viewModel.dataTable1.setRowSelect(0);
