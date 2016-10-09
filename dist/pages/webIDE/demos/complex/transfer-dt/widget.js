

var app, viewModel, basicDatas, computes, events;

basicDatas = {
    srcListData: new u.DataTable({
        meta: {
            field1: {
                type: 'string'
            }
        }
    }),
    destListData: new u.DataTable({
        meta: {
            field1: {
                type: 'string'
            }
        }
    })

};

computes = {

}

events = {
    afterAdd:function(element, index, data){
        if (element.nodeType === 1) {
            u.compMgr.updateComp(element);
        }
    },
    selToR: function() {
        var selRows = viewModel.srcListData.getSelectedRows();
        viewModel.destListData.copyRows(viewModel.destListData.rows().length, selRows);
        viewModel.srcListData.removeRows(selRows);
    },
    allToR: function() {
        var data = viewModel.srcListData.getSimpleData()
        viewModel.destListData.setSimpleData(data);
        viewModel.srcListData.clear();
    },
    selToL: function() {
        var selRows = viewModel.destListData.getSelectedRows();
        viewModel.srcListData.copyRows(viewModel.srcListData.rows().length, selRows);
        viewModel.destListData.removeRows(selRows);
    },
    allToL: function() {
        var data = viewModel.destListData.getSimpleData()
        viewModel.srcListData.setSimpleData(data);
        viewModel.destListData.clear();
    },
    leftSelAll: function() {

        viewModel.srcListData.toggleAllSelect()
    },
    rightSelAll: function() {

        viewModel.destListData.toggleAllSelect()
    }


}


viewModel = u.extend({}, basicDatas, computes, events)

var getInitData = function() {

    var res = {
        "statusCode": 200,
        "message": "操作成功",
        "method": null,
        "data": {
                "srcData": [{
                    "field1": "项目1",
                }, {
                    "field1": "项目2",
                }, {
                    "field1": "项目3",
                }, {
                    "field1": "项目4",
                }, {
                    "field1": "项目5",
                }, {
                    "field1": "项目6",
                }, {
                    "field1": "项目7",
                }, {
                    "field1": "项目8",
                }, {
                    "field1": "项目9",
                }],
                "destData": [{
                    "field1": "项目10",
                }, {
                    "field1": "项目11",
                }, {
                    "field1": "项目12",
                }]
        },
        "callbackType": null
    }

    if (res && res.statusCode == "200") {

        viewModel.srcListData.setSimpleData(res.data.srcData);
        viewModel.destListData.setSimpleData(res.data.destData);

    }

};


var init = function() {
    window.vm = viewModel;

    app = u.createApp({
        el: '.demo',
        model: viewModel
    })

    getInitData()

}

init()
