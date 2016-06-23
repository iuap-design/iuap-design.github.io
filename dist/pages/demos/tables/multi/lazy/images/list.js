u.on(window, 'load', function() {
	'use strict';
	var _CONST = {
			STATUS_ADD: 'add',
			STATUS_EDIT: 'edit'
		},
		md = document.querySelector('#demo-mdlayout')['u.MDLayout'],
		app, viewModel, basicDatas, computes, events;

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
		}),
		formStatus: ko.observable(_CONST.STATUS_ADD),


	};

	computes = {
		refFormInputValue: function(field) {
			return ko.pureComputed({
				read: function() {

					if (viewModel.formStatus() == _CONST.STATUS_ADD) {
						var fr = this.getFocusRow()
						return fr != null ? fr.ref(field) : '';
					} else if (viewModel.formStatus() == _CONST.STATUS_EDIT) {
						var srs = this.getSelectedRows()
						return srs.length > 0 ? srs[0].ref(field) : ''
					}


				},
				owner: viewModel.listData
			})
		}
	}

	events = {
		addClick: function() {
			md.dGo('addPage')
			viewModel.formStatus(_CONST.STATUS_ADD)
			var r = viewModel.listData.createEmptyRow()
			viewModel.listData.setRowFocus(r)
		},
		editClick: function() {
			md.dGo('addPage')
			viewModel.formStatus(_CONST.STATUS_EDIT)
		},
		delClick: function() {
			viewModel.listData.removeRows(viewModel.listData.getSelectedRows());
		},
		backClick: function() {
			md.dBack()
		},
		rowClick: function(row, e) {
			if (e.target.nodeName == 'TD') {
				md.dGo('showPage')
				var ri = e.target.parentNode.getAttribute('rowindex')
				viewModel.listData.setRowFocus(ri)
			}
		}

	}


	viewModel = u.extend({}, basicDatas, computes, events)
	app = u.createApp({
		el: 'body',
		model: viewModel
	});

	// 实际使用加载数据方法，请注回
	//	app.serverEvent().addDataTable("listData", 'all').fire({
	//		ctrl: 'iweb.DemoController',
	//		method: 'method1',
	//		success: function(data) {},
	//		error: function() {}
	//	})

	// 模拟数据加载，实际项目中删掉
	viewModel.listData.setSimpleData([{
		"field1": "用友",
		"field2": "field3",
		"field4": "张紫琼",
		"field5": "male",
		"field6": "用友",
		"field7": "张紫琼",
		"field8": "male",
		"field9": "male"
	}, {
		"field1": "用友2",
		"field2": "field3",
		"field4": "张紫琼",
		"field5": "male",
		"field6": "用友",
		"field7": "张紫琼",
		"field8": "male",
		"field9": "male"
	}, ])

	window.viewModel = viewModel
});