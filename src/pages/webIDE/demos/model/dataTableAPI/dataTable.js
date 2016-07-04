var app;
var viewModel = {
    listData: new u.DataTable({
        meta: {
            enterprise: {type: 'string'},
            depart: {type: 'string'},
            name: {type: 'string'},
            sex: {type: 'string'}
        }
    }),

    afterAdd: function (element, index, data) {
        if (element.nodeType === 3) {
            //console.log(element.parentNode);
            u.compMgr.updateComp(element.parentNode);
        }
    }
};

app = u.createApp({
    el: 'body',
    model: viewModel
});

var d = viewModel.listData;


// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {

        var T, A, k;

        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }

        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (thisArg) {
            T = thisArg;
        }

        // 6. Let A be a new array created as if by the expression new Array(len) where Array is
        // the standard built-in constructor with that name and len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while(k < len) {

            var kValue, mappedValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                kValue = O[ k ];

                // ii. Let mappedValue be the result of calling the Call internal method of callback
                // with T as the this value and argument list containing kValue, k, and O.
                mappedValue = callback.call(T, kValue, k, O);

                // iii. Call the DefineOwnProperty internal method of A with arguments
                // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
                // and false.

                // In browsers that support Object.defineProperty, use the following:
                // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

                // For best browser support, use the following:
                A[ k ] = mappedValue;
            }
            // d. Increase k by 1.
            k++;
        }
        // 9. return A
        return A;
    };
}

//打印数组
var isArray =  function(object){
    return  object && typeof object==='object' &&
        typeof object.length==='number' &&
        typeof object.splice==='function' &&
            //判断length属性是否是可枚举的 对于数组 将得到false
        !(object.propertyIsEnumerable('length'));
};
var printArray = function(array){
    if(!isArray(array))
        return;
    if(array.length != 0){
        for(var i = 0; i < array.length; i++){
            console.log(array[i]);
        };
    }
}


//dataTable设置值
//API setSimpleData
viewModel.listData.setSimpleData([
    {"enterprise": "用友", "depart": "UE", "name": "张紫琼", "sex": "male"},
    {"enterprise": "阿里巴巴", "depart": "测试", "name": "张丽丹", "sex": "female"}
]);
var operateBtn = document.getElementById('operate');
u.on(operateBtn, 'click', function () {
    var typeValue = document.getElementById('getSimpleData-type').value;
    var fieldsValue = document.getElementById('getSimpleData-fields').value.split(",");
    var result = viewModel.listData.getSimpleData.apply(viewModel.listData, [{type: typeValue, fields: fieldsValue}]);
    var showlabel = document.getElementById('result-show');
    showlabel.innerHTML = JSON.stringify(result);
});

var addCol = document.getElementById('addCol');
var tBody = document.getElementById("tb");
u.on(addCol, 'click', function () {
    var tr = document.getElementById('tr');
    var newtr = tr.cloneNode(true);
    newtr.removeAttribute('id');
    newtr.querySelectorAll('input').forEach(function (value, index) {
        value.value = "";
    });
    tBody.appendChild(newtr);
});
var operateBtn2 = document.getElementById('operate2');

u.on(operateBtn2, 'click', function () {
    var params = [];
    var trList = tBody.querySelectorAll("tr");

    params = Array.prototype.map.call(trList, function (value, index) {
        var tdList = value.querySelectorAll('input');
        return {
            "enterprise": tdList[0].value,
            "depart": tdList[1].value,
            "name": tdList[2].value,
            "sex": tdList[3].value
        }
    });

    var printSelectRows = function(data){
        var selectedRows = data.getSelectedRows();
        if(selectedRows.length == 0){
            console.log("no rows selected!")
            return;
        }
        console.log("\n" + "getSelectedRows:  ")
        for(var i = 0; i < selectedRows.length; i++){
            console.log(selectedRows[i]);
        }
    }
    var printAllRows = function(data){
        var allRows = data.getAllRows();
        console.log("\n" + "allRows:");
        if(allRows.length == 0){
            console.log("no rows! ");
            return;
        }
        for(var i = 0; i < allRows.length; i++){
            console.log(allRows[i]);
            //console.log(allRows[i].rowId);
        }
    }
    // API addSimpleData
    d.addSimpleData(params);
    console.log("\n" + "addSimpleData:  ");
    console.log(params[0]);

     //API getSimpleData
    var data = d.getSimpleData();
    console.log("\n" + "getSimpleData:  ");
    printArray(data);

    //API clear
    viewModel.listData.clear();
    console.log("\n" + "clear: ")
    console.log("length: " + viewModel.listData.getSimpleData().length)

    var rows = new Array();
    for(var i = 0; i < 16; i++){
        var row = d.createEmptyRow();
        row.setSimpleData(
            {"enterprise": "iuap", "depart": "测试", "name": "徐诗云" + i, "sex": "male"}
        );
        row.setValue("name","xushiyun" + i);
        rows[i] = row;
        if(i >= 1)
            continue;
        console.log("\n" + "createEmptyRow:");
        console.log("setValue: name:  " + row.getValue('name'));
        console.log("setSimpleData:  ");
        console.log(row.getSimpleData());
        console.log("row:  ")
        console.log(row);

    }

    d.setRowSelect(1);
    console.log("\n" + "setRowSelect:  index 1")
    printSelectRows(d);

    d.setRowsSelect([2,3]);
    console.log("\n" + "setRowsSelect:  index 2 3")
    printSelectRows(d);

    d.addRowSelect(4);
    console.log("\n" + "addRowSelect:  index 4")
    printSelectRows(d);

    d.addRowsSelect([5,6]);
    console.log("\n" + "addRowsSelect:  index 5 6")
    printSelectRows(d);

    d.setAllRowsSelect();
    console.log("\n" + "setAllRowsSelect:  ")
    printSelectRows(d);

    d.setRowUnSelect(0);
    console.log("\n" + "setRowUnSelect:  index 0")
    printSelectRows(d);

    d.setRowsUnSelect([3,4]);
    console.log("\n" + "setRowsUnSelect:  index 3 4")
    printSelectRows(d);


    var indexs = d.getSelectedIndexs();
    console.log("\n" + "getSelectedIndexs:  ")
    console.log(indexs);

    d.setAllRowsUnSelect();
    console.log("\n" + "setAllRowsUnSelect:")
    printSelectRows(d);

    d.setRowFocus(0);
    console.log("\n" + "setRowFocus:" + 0)

    var focusRow = d.getFocusRow();
    console.log("\n" + "getFocusRow: ")
    console.log(focusRow);

    var focusIndex = d.getFocusIndex();
    console.log("\n" + "getFocusIndex:  " + focusIndex);




    var currentRow = d.getCurrentRow();
    console.log("\n" + "getCurrentRow:  " + currentRow.rowId);
    console.log(currentRow);

    var r = d.getRow(3);
    console.log("\n" + "getRow:  by index  3");
    console.log(r);

    var rr = d.getRowByRowId(12);
    //  console.log();
    console.log("\n" + "getRowByRowId:  12");
    console.log(rr);

    var changeRows = d.getChangedRows();
    console.log("\n" + "changeRows:");
    for(var i = 0; i < changeRows.length; i++){
        console.log(changeRows[i]);
        //console.log(changeRows[i].rowId);
    }

    printAllRows(d);

    d.setEnable(false);
    console.log("\n" + "setEnable:");
    console.log("isEnable:");
    console.log(d.isEnable());

    d.setRowUnFocus();
    console.log("\n" + "setRowUnFocus:");

    d.removeRow(3);
    console.log("\n" + "removeRow: index 3");
    printAllRows(d);

    d.removeRowByRowId(6);
    console.log("\n" + "removeRowByRowId: 6");
    printAllRows(d);

    d.removeRows([5]);
    console.log("\n" + "removeRow: index 5");
    printAllRows(d);

    d.removeAllRows();
    console.log("\n" + "removeAllRows:");
    printAllRows(d);

});