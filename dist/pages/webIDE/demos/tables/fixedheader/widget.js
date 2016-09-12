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
	"field1": "用友2016电脑采购对账1",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥6324.00",
}, {
	"field1": "用友2016电脑采购对账2",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥5366.00",
}, {
	"field1": "用友2016电脑采购对账3",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥3200.00",
}, {
	"field1": "用友2016电脑采购对账4",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥62500.00",
}, {
	"field1": "用友2016电脑采购对账5",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥412200.00",
}, {
	"field1": "用友2016电脑采购对账6",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥65600.00",
}, {
	"field1": "用友2016电脑采购对账7",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥32100.00",
}, {
	"field1": "用友2016电脑采购对账8",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥1140.00",
}, {
	"field1": "用友2016电脑采购对账9",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥2250.00",
}, {
	"field1": "用友2016电脑采购对账10",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥780.00",
}, {
	"field1": "用友2016电脑采购对账11",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥63500.00",
}, {
	"field1": "用友2016电脑采购对账12",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥5500.00",
}, {
	"field1": "用友2016电脑采购对账13",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥6600.00",
}, {
	"field1": "用友2016电脑采购对账14",
	"field2": "2016-02-24",
	"field3": "用友网络",
	"field4": "￥3300.00",
}]);
