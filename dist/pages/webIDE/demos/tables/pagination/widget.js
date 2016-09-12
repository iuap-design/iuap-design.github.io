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
	pageChangeFunc: function() {
		// ajax/fire 请求数据
		// 用fire请求时由后台设置，前台不用处理
		viewModel.listData.setSimpleData([{
			"field1": "用友2016电脑采购对账11",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥257786.00",
		}, {
			"field1": "用友2016电脑采购对账12",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥876.00",
		}, {
			"field1": "用友2016电脑采购对账13",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥5528780.00",
		}, {
			"field1": "用友2016电脑采购对账14",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥4400.00",
		}, {
			"field1": "用友2016电脑采购对账15",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥553450.00",
		}, {
			"field1": "用友2016电脑采购对账16",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥5387.00",
		}, {
			"field1": "用友2016电脑采购对账17",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥57863.00",
		}, {
			"field1": "用友2016电脑采购对账18",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥888.00",
		}, {
			"field1": "用友2016电脑采购对账19",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥68786.00",
		}, {
			"field1": "用友2016电脑采购对账20",
			"field2": "2016-02-24",
			"field3": "用友网络",
			"field4": "￥6753.00",
		}]);
		viewModel.listData.totalPages(5);
		viewModel.listData.totalRow(50);
	},
	sizeChangeFunc: function() {
		// 同pageChange一样发请求
		alert(2)
	}

}


viewModel = u.extend({}, basicDatas, computes, events)



app = u.createApp({
	el: '.demo',
	model: viewModel
})

var loadData = function() {
	// ajax/fire 请求数据
	// 用fire请求时由后台设置，前台不用处理
	viewModel.listData.setSimpleData([{
		"field1": "用友2016电脑采购对账1",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥5855.00",
	}, {
		"field1": "用友2016电脑采购对账2",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥82542.00",
	}, {
		"field1": "用友2016电脑采购对账3",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥785454.00",
	}, {
		"field1": "用友2016电脑采购对账4",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥78522.00",
	}, {
		"field1": "用友2016电脑采购对账5",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥787832.00",
	}, {
		"field1": "用友2016电脑采购对账6",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥866444.00",
	}, {
		"field1": "用友2016电脑采购对账7",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥88852.00",
	}, {
		"field1": "用友2016电脑采购对账8",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥88255.00",
	}, {
		"field1": "用友2016电脑采购对账9",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥78787.00",
	}, {
		"field1": "用友2016电脑采购对账10",
		"field2": "2016-02-24",
		"field3": "用友网络",
		"field4": "￥66666.00",
	}]);

	viewModel.listData.totalPages(5);
	viewModel.listData.totalRow(50);



}

loadData()
