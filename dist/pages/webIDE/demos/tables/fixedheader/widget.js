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
	}

}


viewModel = u.extend({}, basicDatas, computes, events)



app = u.createApp({
	el: '.demo',
	model: viewModel
})

viewModel.listData.setSimpleData([{
	"field1": "用友2016电脑采购对账",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥538200.00",
	"field5": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field4": "用友网络",
	"field5": "￥538200.00",
	"field6": "￥538200.00",
}]);