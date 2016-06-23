	var app, viewModel, basicDatas, computes, events;

	basicDatas = {
		listData: new u.DataTable({
			meta: {
				field1: {
					type: 'string'
				},
				field2: {
					type: 'string'
				},
				field3: {
					type: 'string'
				},
				field4: {
					type: 'string'
				},
				field5: {
					type: 'string'
				},
				field6: {
					type: 'string'
				},
				field7: {
					type: 'string'
				},
				field8: {
					type: 'string'
				},
				field9: {
					type: 'string'
				}
			}
		})

	};

	computes = {
		
	}

	events = {
		addClick: function() {
			var r = viewModel.listData.createEmptyRow()
			viewModel.listData.setRowFocus(r)
			r.originData = r.getSimpleData();
		},
		editClick: function(row) {
			viewModel.listData.setRowFocus(row)
			row.originData = row.getSimpleData();
		},
		delClick: function(row) {
			viewModel.listData.removeRow(row);
		},
		saveClick: function(row) {
			viewModel.listData.setRowUnFocus();
		},
		cancelClick: function(row) {
			row.setSimpleData(row.originData);
			viewModel.listData.setRowUnFocus();
		},
		afterAdd:function(element, index, data){
            if (element.nodeType === 1) {
                u.compMgr.updateComp(element);
            }
        }

	}


	viewModel = u.extend({}, basicDatas, computes, events)

	// 实际使用加载数据方法，请注回
	//	app.serverEvent().addDataTable("listData", 'all').fire({
	//		ctrl: 'iweb.DemoController',
	//		method: 'method1',
	//		success: function(data) {},
	//		error: function() {}
	//	})



	app = u.createApp({
				el: '.demoe-page-content',
				model: viewModel
			})
			
			viewModel.listData.setSimpleData([{
		"field1": "用友",
		"field2": "field3",
		"field4": "张紫琼",
		"field5": "male",
		"field6": "用友",
		"field7": "张紫琼",
		"field8": "male",
		"field9": "male",
		"childpk": [{"f1":"xx","f2":"yy"},{"f1":"xx2","f2":"yy"}]
	}, {
		"field1": "用友2",
		"field2": "field3",
		"field4": "张紫琼",
		"field5": "male",
		"field6": "用友",
		"field7": "张紫琼",
		"field8": "male",
		"field9": "male",
		"childpk": [{"f1":"aa","f2":"bb"},{"f1":"aa2","f2":"bb"}]
	}]);
	