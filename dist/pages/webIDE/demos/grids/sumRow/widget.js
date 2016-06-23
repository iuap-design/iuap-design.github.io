viewModel = {
    dataTable: new u.DataTable({
      meta: {
        "name": "",
        "time": "",
        "distance": "",
        "currency": ""
      }
    }, this),
  }; 
  var app = new u.createApp();
  //console.log(viewModel)
  app.init(viewModel);
  var data = {
    "pageIndex": 1,
    "pageSize": 10,
    "rows": [
      {
        "status": "nrm",
        "data": {
          "name": "赵四",
          "time": "2016-05-16",
          "distance": "25",
          "currency": {
            "value": "200.00",
            "meta": {
              "precision": "2",
              "max": "3000",
              "min": "0",
              "curSymbol": "$"
            }
          }
        }
      }, {
        "status": "nrm",
        "data": {
          "name": "王一",
          "time": "2016-05-12",
          "distance": "25",
          "currency": {
            "value": "200.00",
            "meta": {
              "precision": "2",
              "max": "3000",
              "min": "0",
              "curSymbol": "$"
            }
          }
        }
      }, {
        "status": "nrm",
        "data": {
          "name": "李三",
          "time": "2016-11-16",
          "distance": "50",
          "currency": {
            "value": "300.00",
            "meta": {
              "precision": "2",
              "max": "3000",
              "min": "0",
              "curSymbol": "$"
            }
          }
        }
      }, {
        "status": "nrm",
        "data": {
          "name": "彰武",
          "time": "2012-05-16",
          "distance": "50",
          "currency": {
            "value": "300.00",
            "meta": {
              "precision": "2",
              "max": "3000",
              "min": "0",
              "curSymbol": "$"
            }
          }
        }
      }
    ]
  }
  viewModel.dataTable.removeAllRows();
  viewModel.dataTable.setData(data);
  