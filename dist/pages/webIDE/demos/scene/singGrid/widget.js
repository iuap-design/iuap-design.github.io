var viewModel = {
	dataTable1: new u.DataTable({
		meta: {
			'person': {},
			'phone': {},
			'email': {},
			'department': {},
			'company': {}
		}
	})

}

u.createApp({
    model: viewModel
});

// 实际使用时请用ajax
var data = {
    "statusCode": 200,
    "message": "操作成功",
    "method": null,
    "data": {
            "data1": [
                {
					"person": "张三",
					"phone": "13610068888",
					"email": "li@126.com",
					"department": "UAPweb",
					"company": "UAP"
                },
                {
					"person": "李四",
					"phone": "13610068888",
					"email": "li@126.com",
					"department": "UAPweb",
					"company": "UAP"
                },
                {
					"person": "王五",
					"phone": "13610068888",
					"email": "li@126.com",
					"department": "UAPweb",
					"company": "UAP"
                }
            ]
    },
    "callbackType": null
}
viewModel.dataTable1.setSimpleData(data.data.data1);
