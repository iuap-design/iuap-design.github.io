// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    })
};

app = u.createApp({
    el: 'body',
    model: viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', '男');