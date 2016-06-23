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
          },
          "column11":"row111",
          "column22":"row122",
          "column33":"row133",
          "column44":"row144"
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
          },
          "column11":"row211",
          "column22":"row222",
          "column33":"row233",
          "column44":"row244"
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
          },
          "column11":"row311",
          "column22":"row322",
          "column33":"row333",
          "column44":"row344"
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
          },
          "column11":"row411",
          "column22":"row422",
          "column33":"row433",
          "column44":"row444"
        }
      }
    ]
  }
  viewModel.dataTable.removeAllRows();
  viewModel.dataTable.setData(data);
  