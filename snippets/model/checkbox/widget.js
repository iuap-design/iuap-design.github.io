var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
    checkboxData: [{value: 'test1', name: '产品一'}, {value: 'test2', name: '产品二'}]
}

app = u.createApp({
    el: 'body',
    model: viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "test1");
viewModel.dt1.setRowSelect(0);