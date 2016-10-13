var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
}

app = u.createApp({
    el: 'body',
    model: viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "11");