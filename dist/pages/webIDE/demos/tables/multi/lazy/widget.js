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
			childpk: {
				type: 'child',
				meta: {
					f1: {
						type: 'string'
					},
					f2: {
						type: 'string'
					},
					f3: {
						type: 'string'
					},
					f4: {
						type: 'string'
					},
					f5: {
						type: 'string'
					},
					f6: {
						type: 'string'
					}
				}
			}
		}
	})

};

computes = {

}

events = {
	afterAdd: function(element, index, data) {
		if (element.nodeType === 1) {
			u.compMgr.updateComp(element);
		}
	},
	rowClick: function(row, e) {
		if (u.hasClass(e.currentTarget, 'sub-collapse')) {
			getChildData(row)
		}
		u.toggleClass(e.currentTarget, 'sub-collapse')

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


var getInitData = function() {
	viewModel.listData.setSimpleData([{
		"field1": "用友2016电脑采购对账",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥538200.00",
		"field5": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field4": "用友网络",
		"field5": "￥538200.00",
		"field6": "￥538200.00",
		"childpk": []
	}]);
};

function getChildData(row) {
	row.getValue('childpk').setSimpleData([{
		"f1": "电脑",
		"f2": "￥4600.00",
		"f3": "17%",
		"f4": "￥53820.00",
		"f5": "20/台",
		"f6": "20/台"
	}, {
		"f1": "电脑",
		"f2": "￥4600.00",
		"f3": "17%",
		"f4": "￥53820.00",
		"f5": "20/台",
		"f6": "20/台"
	}]);
}

app = u.createApp({
	el: '.demo-page-content',
	model: viewModel
})
window.vm = viewModel
getInitData()