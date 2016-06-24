var func = {
    /**
     * 校验对象的属性名在基础对象中是否存在
     * @param checkObj 校验的对象
     * @param baseObj  基础对象
     * @param checkObjName 校验的对象名称
     */
    checkObj1: function (checkObj, baseObj, checkObjName) {
        for (var attr in checkObj) {
            if (!baseObj[attr]) {
                alert(checkObjName + " err:" + attr);
                console.log(checkObjName + " err:" + attr);
            }
        }
    },
    /**
     * 校验对象的属性名以及属性值在基础对象中是否存在
     * @param checkObj 校验的对象
     * @param baseObj  基础对象
     * @param checkObjName 校验的对象名称
     */
    checkObj2: function checkObj2(checkObj, baseObj, checkObjName) {
        for (var attr in checkObj) {
            if (!baseObj[attr]) {
                alert(checkObjName + " err:" + attr);
                console.log(checkObjName + " err:" + attr);
            }
            for (var i = 0; i < checkObj[attr].length; i++) {
                if (!baseObj[checkObj[attr][i]]) {
                    alert(checkObjName + "err:" + attr + checkObj[attr][i]);
                    console.log(checkObjName + " err:" + attr + checkObj[attr][i]);
                }
            }
        }
    },
    /**
     * 校验对象的属性值在基础对象中是否存在
     * @param checkObj 校验的对象
     * @param baseObj  基础对象
     * @param checkObjName 校验的对象名称
     */
    checkObj3: function checkObj3(checkObj, baseObj, checkObjName) {
        for (var attr in checkObj) {
            for (var i = 0; i < checkObj[attr].length; i++) {
                if (!baseObj[checkObj[attr][i]]) {
                    alert(checkObjName + "err:" + attr + checkObj[attr][i]);
                    console.log(checkObjName + " err:" + attr + checkObj[attr][i]);
                }
            }
        }
    },
    /**
     * 去掉数组中重复内容
     * @param arr 数组
     * @returns {Array}
     */
    getNoRepeat: function (arr) {
        var newArr = new Array();
        for (var i = 0; i < arr.length; i++) {
            if (newArr.indexOf(arr[i]) > 0) {

            } else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    /**
     * 获得模块数据
     * @param rowStr
     * @returns {string}
     */
    getModelData: function (rowStr) {
        var row = eval(rowStr);
        var dataObj = row.getSimpleData(),
            str = rowStr + '.setSimpleData({';
        for (var f in dataObj) {
            if (dataObj[f]) {
                if (dataObj[f] === true)
                    str += f + ':' + dataObj[f] + ','
                else
                    str += f + ':\'' + dataObj[f] + '\','
            }
        }
        str += '});';
        return str;
    }
};
require(['mod'], function (mod) {
    var obj = mod.obj;
    var treeObj = mod.treeObj;
    /* var str = ''
     for(var f in treeObj){
     str += f + ':"", ss'

     for(var i = 0 ; i < treeObj[f].length; i++){
     str += treeObj[f][i] + ':"", ss'
     }
     }
     console.log(str);*/
    var captionObj = mod.captionObj;
    var cssObj = mod.cssObj;
    var modeluiObj = mod.modeluiObj;
    var dependObj = mod.dependObj;
    var modeDependObj = mod.modeDependObj;
    var colorBaseObj = mod.colorBaseObj;
    var defaultColor = mod.defaultColor;
    var colorObj = {};
    for (var f in colorBaseObj) {
        var arr = new Array();
        arr.push(colorBaseObj[f][5]);
        arr.push(colorBaseObj[f][7]);
        arr.push(colorBaseObj[f][11]);
        colorObj[f] = arr
    }
    var gridObj = {};
    /*确保obj中属性为最大集合 begin*/
    /*校验属性是否存在*/
    func.checkObj1(modeluiObj, obj, 'modeluiObj');
    func.checkObj1(cssObj, obj, 'cssObj');
    /*校验属性以及属性值是否存在*/
    func.checkObj2(dependObj, obj, 'dependObj');
    func.checkObj2(modeDependObj, obj, 'modeDependObj');
    /*校验属性值是否存在*/
    func.checkObj3(treeObj, obj, 'treeObj');
    /*确保obj中属性为最大集合 end*/
    var app, viewModel,
        metaObj = {},
        treemetaObj = {},
        wholeStr = '<div>',
        headStr = '<div class="head-div"><span>本功能可自定义选中下载特定模块，设置主题颜色，并可以导入之前选择进行更新操作</span></div>',
        contentStr = '<div class="u-row containers">',
        colorStr = '<div class="color-whole-div"><div class="color-head-div">设置主题颜色，左侧选中主色，右侧选择辅色。通过点击色块进行选中，也可在输入框中输入rgb格式的颜色编码。</div>';
    colorStr += '<div class="color-input-div">';
    for (var i = 0; i < 3; i++) {
        colorStr += '<div class="u-text color-input"  u-meta=\'{"id":"color1","type":"u-text","data":"colorData","field":"color' + i + '"}\'><input class="u-input"/></div>';
    }
    colorStr += '</div>';
    colorStr += '<div class="color-content-div">';
    var colorLeftStr = '<div class="color-left-div">';
    var colorRightStr = '<div class="color-right-div">';
    for (var color in colorObj) {
        colorLeftStr += '<div class="color-div" style="background:rgb(' + colorObj[color][0] + ')" color0="' + colorObj[color][0] + '" color1="' + colorObj[color][1] + '"></div>';
        colorRightStr += '<div class="color-div" style="background:rgb(' + colorObj[color][2] + ')" color2="' + colorObj[color][2] + '"></div>';
    }
    colorLeftStr += '</div>';
    colorRightStr += '</div>';

    colorStr += colorLeftStr;
    colorStr += colorRightStr;

    colorStr += '</div>';
    colorStr += '</div>';


    var evalStr = '<div class="eval-whole-div"><div class="eval-head-div">下载文件setting.txt中保存了上次配置的信息，将信息复制至文本域中并点击执行可恢复上次配置。</div>';
    evalStr += '<button id="eavl-button" class="u-button raised u-eval-button" >执行</button>';
    evalStr += '<textarea style="width: 100%;height: 70px;"u-meta=\'{"id":"str","type":"textarea","data":"evalData","field":"str"}\'></textarea>';
    evalStr += '</div>';
    // 遍历obj创建datatable的field字段，同时生成html列表
    for (var model in treeObj) {
        treemetaObj[model] = {};
        contentStr += '<div class="tree-whole-div u-col-6">';
        if (model != 'all')
            contentStr += '<div class="tree-icon"><span class="fa fa-minus-square-o"></span> ' + model + ':' + captionObj[model] + '</div>';
        contentStr += '<div class="tree-div"><label  class="u-checkbox tree-parent" u-meta=\'{"id":"' + model + '","type":"u-checkbox","data":"treeData","field":"' + model + '","checkedValue":true,"unCheckedValue":false}\'><input type="checkbox" class="u-checkbox-input"><span class="u-checkbox-label">' + model + ':' + captionObj[model] + '</span></label>';

        for (var i = 0; i < treeObj[model].length; i++) {
            var field = treeObj[model][i];
            var firstClass = '';
            metaObj[field] = {};
            if (i == 0) {
                firstClass = 'tree-first-leaf';
            }
            contentStr += '<label  class="u-checkbox tree-leaf ' + firstClass + '" u-meta=\'{"id":"' + field + '","type":"u-checkbox","data":"modelData","field":"' + field + '","checkedValue":true,"unCheckedValue":false}\'><input type="checkbox" class="u-checkbox-input"><span class="u-checkbox-label">' + field + ':' + captionObj[field] + '</span></label>';
        }
        contentStr += '</div>';
        contentStr += '</div>';
    }
    contentStr += '</div>';


    wholeStr += headStr + contentStr + colorStr + evalStr;
    wholeStr += '</div>';

    document.getElementById('content').appendChild(u.makeDOM(wholeStr));

    u.on(document.getElementById('eavl-button'), 'click', function () {
        value = viewModel.evalData.getCurrentRow().getValue('str');
        eval(value)
    });

    u.on(document, 'click', function (e) {
        /* 模块展开收起 */
        var targetEle = u.closest(e.target, 'fa');
        if (targetEle) {
            var treeDiv = u.closest(targetEle, 'tree-whole-div').querySelector('.tree-div');
            if (u.hasClass(targetEle, 'fa-minus-square-o')) { //收起
                u.removeClass(targetEle, 'fa-minus-square-o');
                u.addClass(targetEle, 'fa-plus-square-o');
                treeDiv.style.display = 'none';

            } else { //展开
                u.removeClass(targetEle, 'fa-plus-square-o');
                u.addClass(targetEle, 'fa-minus-square-o');
                treeDiv.style.display = 'block';
            }
        }
        /* 色块点击 */
        var targetEle = u.closest(e.target, 'color-div');
        if (targetEle) {
            var colorRow = viewModel.colorData.getCurrentRow();
            var color0 = targetEle.getAttribute('color0');
            var color1 = targetEle.getAttribute('color1');
            var color2 = targetEle.getAttribute('color2');
            if (color0) {
                colorRow.setValue('color0', color0);
            }
            if (color1) {
                colorRow.setValue('color1', color1);
            }
            if (color2) {
                colorRow.setValue('color2', color2);
            }
        }
    });


    /* 处理全部 */

    viewModel = {
        treeData: new u.DataTable({
            meta: treemetaObj
        }),
        modelData: new u.DataTable({
            meta: metaObj
        }),
        colorData: new u.DataTable({
            meta: {
                color0: {},
                color1: {},
                color2: {},
            }
        }),
        evalData: new u.DataTable({
            meta: {
                str: {},
            }
        })
    };

    app = u.createApp({
        el: 'body',
        model: viewModel,
    });

    var r = viewModel.modelData.createEmptyRow();
    viewModel.modelData.setRowSelect(0);


    var treeRow = viewModel.treeData.createEmptyRow();
    viewModel.treeData.setRowSelect(0);

    var colorRow = viewModel.colorData.createEmptyRow();
    viewModel.colorData.setRowSelect(0);

    var evalRow = viewModel.evalData.createEmptyRow();
    viewModel.evalData.setRowSelect(0);
    /*按钮处理begin*/
    function clickFun() {
        var r = viewModel.modelData.rows()[0];
        var modelFlag = false;
        var jsStr = '';
        var cssStr = '';
        var jsArr = new Array();
        var cssArr = new Array();
        if (r.getValue('model')) {
            modelFlag = true;
        }
        for (var field in obj) {
            if (r.getValue(field)) {
                jsArr.push(obj[field]);
                if (modelFlag && modeluiObj[field])
                    jsArr.push(modeluiObj[field]);
                if (cssObj[field])
                    cssArr.push(cssObj[field])
            }
        }
        cssArr = cssArr.toString().split(',');

        cssArr = func.getNoRepeat(cssArr);
        // console.log(jsArr);
        // console.log(cssArr);

        var colorRow = viewModel.colorData.getCurrentRow();
        color0 = colorRow.getValue('color0');

        color1 = colorRow.getValue('color1');
        color2 = colorRow.getValue('color2');
        color0 = color0 ? color0 : defaultColor[0];
        color1 = color1 ? color1 : defaultColor[1];
        color2 = color2 ? color2 : defaultColor[2];


        colorArr = [color0, color1, color2];

        settingStr = '';

        settingStr += func.getModelData('viewModel.colorData.getCurrentRow()');
        settingStr += func.getModelData('viewModel.modelData.getCurrentRow()');
        settingStr += func.getModelData('viewModel.treeData.getCurrentRow()');
        dataJson = {
            jsArr: jsArr,
            cssArr: cssArr,
            colorArr: colorArr,
            settingStr: settingStr
        }
        u.showLoading();
        u.ajax({
            type: 'post',
            dataType: 'json',
            data: dataJson,
            url: '/customized',
            success: function (patch) {
                u.hideLoading();
                patch = patch.replace('..', '')
                document.getElementById('ss').href = patch;
                document.getElementById('ss').click();
            },
            error: function (patch) {
                u.hideLoading();
                // alert('构建失败');
            }
        })

    }

    u.on(document.getElementById('button'), 'click', clickFun);
    /*按钮处理end*/

    /*处理依赖关系begin*/
    var dependCountObj = {};
    viewModel.modelData.on('valueChange', function (options) {
        var field = options.field,
            newValue = options.newValue,
            row = viewModel.modelData.getCurrentRow();
        dependFun(dependObj, field, newValue);
        if (field == 'model') {
            // 当前修改mdoel，如果之前选择modeDependObj的值之后处理相关的依赖
            for (var modelField in modeDependObj) {
                var modelFieldValue = row.getValue(modelField);
                if (modelFieldValue) {
                    dependFun(modeDependObj, modelField, newValue);
                }
            }
        }
        var modelFlag = row.getValue('model');
        if (modelFlag && field != 'model') {
            dependFun(modeDependObj, field, newValue);
        }

        if (field == 'grid') {
            if (newValue) {
                row.setValue('gridBase', true);
                gridEnabled(true);
            } else {
                gridEnabled(false);
                var treeRow = viewModel.treeData.getCurrentRow();
                treeRow.setValue('gridMode', true);
                treeRow.setValue('gridMode', false);
                row.setValue('gridBase', false);
            }
        }
    });
    /* 处理依赖关系方法 */
    function dependFun(dependObj, field, value) {
        row = viewModel.modelData.getCurrentRow();
        if (dependObj[field] && dependObj[field].length > 0) {
            for (var i = 0; i < dependObj[field].length; i++) {
                var f = dependObj[field][i];
                if (!dependCountObj[f])
                    dependCountObj[f] = 0;
                if (value) {
                    row.setValue(f, true);
                    dependCountObj[f] += 1;
                } else {
                    dependCountObj[f] -= 1;
                }
                if (dependCountObj[f] > 0) {
                    //设置不可修改
                    app.getComp(f).setEnable(false);
                } else {
                    //设置可修改
                    app.getComp(f).setEnable(true);
                }
            }
        }
    }
    /* 处理依赖关系end */

    /* 处理tree选中 */
    viewModel.treeData.on('valueChange', function (options) {
        var field = options.field,
            newValue = options.newValue,
            treeRow = viewModel.treeData.getCurrentRow();
        modelRow = viewModel.modelData.getCurrentRow(),
            arr = treeObj[field],
            dependFlag = true;
        /* 处理全选以及全部取消 */
        if (field == 'all') {
            if (newValue) {
                for (var f in treeObj) {
                    treeRow.setValue(f, true);
                }
            } else {
                dependCountObj = {}
                for (var f in obj) {
                    modelRow.setValue(f, false);
                }
                for (var f in treeObj) {
                    if (f != 'all')
                        treeRow.setValue(f, false);
                }
                dependCountObj = {}

            }
        }
        if (newValue) {
            for (i = 0; i < arr.length; i++) {
                modelRow.setValue(arr[i], true);
            }
        } else {
            while (dependFlag) {
                dependFlag = false;
                for (i = 0; i < arr.length; i++) {
                    var depandField = arr[i];
                    if (dependCountObj[depandField] > 0 || !modelRow.getValue(depandField)) {

                    } else {
                        modelRow.setValue(depandField, false);
                        dependFlag = true;
                    }
                }
            }

        }
        if (field == 'gridMode') {
            modelRow.setValue('gridBase', true);
        }
    });

    function gridEnabled(enable) {
        var gridArr = treeObj.gridMode;
        for (var i = 1; i < gridArr.length; i++) {
            app.getComp(gridArr[i]).setEnable(enable);
        }
        app.getComp('gridMode').setEnable(enable);
    }

    gridEnabled(false);
    app.getComp('gridBase').setEnable(false);
});


