var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            field1: {},
            field2: {}
        }
    })
}
app = u.createApp({
    el: 'body',
    model: viewModel
});
//创建空行
var r = viewModel.dt1.createEmptyRow();
//对字段1赋值
r.setValue('field1', 'hello World!');
viewModel.dt1.setRowSelect(0);
