var app, viewModel;

viewModel = {
          dt1: new u.DataTable({
              meta: {
                  field1: {}
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
//将第0行最为当前行
viewModel.dt1.setRowSelect(0);