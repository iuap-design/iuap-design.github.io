$('.table-input-selectAll').on('click', function () {
    if (/is-checked/.test($(this).attr('class'))) {
        $('.table-checkbox').removeClass('is-checked');
        $(this).removeClass('is-checked');
    } else {
        $('.table-checkbox').addClass('is-checked');
        $(this).addClass('is-checked');
    }

});
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

};
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
            "field1": "iphone 6",
            "field2": "25",
            "field3": "$2.90"
        }, {
            "field1": "小米Note",
            "field2": "50",
            "field3": "$1.25"
        }, {
            "field1": "华为P8",
            "field2": "20",
            "field4": "$2.35"

        },{
            "field1": "iphone 6",
            "field2": "25",
            "field3": "$2.90"
        }, {
            "field1": "小米Note",
            "field2": "50",
            "field3": "$1.25"
        }, {
            "field1": "华为P8",
            "field2": "20",
            "field4": "$2.35"

        },{
            "field1": "iphone 6",
            "field2": "25",
            "field3": "$2.90"
        }, {
            "field1": "小米Note",
            "field2": "50",
            "field3": "$1.25"
        }, {
            "field1": "华为P8",
            "field2": "20",
            "field4": "$2.35"

        },{
            "field1": "iphone 6",
            "field2": "25",
            "field3": "$2.90"
        }]);
        viewModel.listData.totalPages(5);
        viewModel.listData.totalRow(50);
    },
    sizeChangeFunc: function() {
        // 同pageChange一样发请求
        // alert(2)
    }

};
viewModel = u.extend({}, basicDatas, computes, events);
app = u.createApp({
    el: '.demo',
    model: viewModel
});

var loadData = function() {
    // ajax/fire 请求数据
    // 用fire请求时由后台设置，前台不用处理
    viewModel.listData.setSimpleData([{
        "field1": "iphone 6",
        "field2": "25",
        "field3": "$2.90"
    }, {
        "field1": "小米Note",
        "field2": "50",
        "field3": "$1.25"
    }, {
        "field1": "华为P8",
        "field2": "20",
        "field4": "$2.35"

    },{
        "field1": "iphone 6",
        "field2": "25",
        "field3": "$2.90"
    }, {
        "field1": "小米Note",
        "field2": "50",
        "field3": "$1.25"
    }, {
        "field1": "华为P8",
        "field2": "20",
        "field4": "$2.35"

    },{
        "field1": "iphone 6",
        "field2": "25",
        "field3": "$2.90"
    }, {
        "field1": "小米Note",
        "field2": "50",
        "field3": "$1.25"
    }, {
        "field1": "华为P8",
        "field2": "20",
        "field4": "$2.35"

    },{
        "field1": "iphone 6",
        "field2": "25",
        "field3": "$2.90"
    }]);
    viewModel.listData.totalPages(5);
    viewModel.listData.totalRow(50);
};

loadData();






