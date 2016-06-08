
	var _CONST = {
			STATUS_ADD: 'add',
			STATUS_EDIT: 'edit'
		},
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
			var md = document.querySelector('#demo-mdlayout')['u.MDLayout']

			md.dGo('addPage')
			viewModel.formStatus(_CONST.STATUS_ADD)
			var r = viewModel.listData.createEmptyRow()
			viewModel.listData.setRowFocus(r)
		},
		editClick: function() {
			var md = document.querySelector('#demo-mdlayout')['u.MDLayout']
			md.dGo('addPage')
			viewModel.formStatus(_CONST.STATUS_EDIT)
			var r = viewModel.listData.getSelectedRows()[0];
			r.originData = r.getSimpleData();
		},
		delClick: function() {
			viewModel.listData.removeRows(viewModel.listData.getSelectedRows());
		},
		backClick: function() {
			var status = viewModel.formStatus();
			if(status == _CONST.STATUS_ADD) {
				viewModel.listData.removeRow(viewModel.listData.rows().length-1);
			} else if(status == _CONST.STATUS_EDIT) {
				var r = viewModel.listData.getSelectedRows()[0];
				r.setSimpleData(r.originData);
			}
			

			var	md = document.querySelector('#demo-mdlayout')['u.MDLayout']
			md.dBack();
		},
		saveClick: function() {
			var	md = document.querySelector('#demo-mdlayout')['u.MDLayout']
			md.dBack()
		},
		rowClick: function(row, e) {
			if (e.target.nodeName == 'TD') {
				var	md = document.querySelector('#demo-mdlayout')['u.MDLayout']

				md.dGo('showPage')
				var ri = e.target.parentNode.getAttribute('rowindex')
				viewModel.listData.setRowFocus(ri)
			}
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
				el: '#demo-mdlayout',
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
								viewModel.listData.setRowSelect(0);

