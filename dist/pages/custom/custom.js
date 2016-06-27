require(['mod'], function (mod) {
    /**
     * 工具函数对象
     * @type {{checkObjKey: util.checkObjKey, checkObjKeyValue: util.checkObjKeyValue, checkObjValue: util.checkObjValue, getNoRepeat: util.getNoRepeat, getModelData: util.getModelData}}
     */
    var util = {
        /**
         * 校验对象的属性名在基础对象中是否存在
         * @param checkObj 校验的对象
         * @param baseObj  基础对象
         * @param checkObjName 校验的对象名称
         */
        checkObjKey: function (checkObj, baseObj, checkObjName) {
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
        checkObjKeyValue: function (checkObj, baseObj, checkObjName) {
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
        checkObjValue: function (checkObj, baseObj, checkObjName) {
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
        getModelData:function(rowStr) {
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
    var allJsObj = mod.allJsObj;
    var treeObj = mod.treeObj;
    var captionObj = mod.captionObj;
    var cssObj = mod.cssObj;
    var modeluiObj = mod.modeluiObj;
    var dependObj = mod.dependObj;
    var modeDependObj = mod.modeDependObj;
    var colorBaseObj = mod.colorBaseObj;
    var defaultColor = mod.defaultColor;
    var modelIdArr=mod.modelIdArr;
    var colorObj = {};
    var gridObj = {};
    for (var color in colorBaseObj) {
        var arr = [];
        arr.push(colorBaseObj[color][5]);
        arr.push(colorBaseObj[color][7]);
        arr.push(colorBaseObj[color][11]);
        colorObj[color] = arr;
    }
    /*确保obj中属性为最大集合 begin*/
    /*校验属性是否存在*/
    util.checkObjKey(modeluiObj, allJsObj, 'modeluiObj');
    util.checkObjKey(cssObj, allJsObj, 'cssObj');
    /*校验属性以及属性值是否存在*/
    util.checkObjKeyValue(dependObj, allJsObj, 'dependObj');
    util.checkObjKeyValue(modeDependObj, allJsObj, 'modeDependObj');
    /*校验属性值是否存在*/
    util.checkObjValue(treeObj, allJsObj, 'treeObj');
    /*提取className*/
    var headClassName='head-div',//头部提示类名
        contentClassName='containers ',//内容区域类名
        /*色块区域类名*/
        colorClassName={
            msgOut:'color-whole-div',/*头部信息外部div类名*/
            msgInner:'color-head-div',/*头部信息内部div类名*/
            areaInput:'color-input-div',/*颜色输入区域类名*/
            lineDiv:'u-text color-input',/*横线外盒子类名*/
            lineInput:'u-input',/*横线input类名*/
            area:'color-content-div',//颜色区域类名
            areaLeft:'color-left-div',//颜色区域左侧类名
            areaRight:'color-right-div',//颜色区域右侧类名
            areaDiv:'color-div'//色块类名
        },
        /*下载区域类名*/
        evalOut='eval-whole-div',/*下载提示外部类名*/
        evalInner='eval-head-div',/*下载提示内部类名*/
        runButton='u-button raised u-eval-button',/*执行按钮类名*/
        listClassName={
            line:'tree-whole-div',/*每个模块的类名*/
            checkBoxDiv:'tree-icon',/*小模块标题行类名*/
            checkBoxSpan:'fa fa-minus-square-o',/*展开关闭按钮*/
            textDiv:'tree-div u-row textDiv',/*小模块区域类名*/
            textLabel:'u-checkbox tree-parent',/*小模块每行的类名*/
            textInput:'u-checkbox-input',/*小模块选择框类名*/
            textSpan:'u-checkbox-label select-module'/*小模块名类名*/
        };
    /*确保obj中属性为最大集合 end*/
    var app, viewModel,metaObj = {},treemetaObj = {},wholeStr = '<div>',
        headStr ='<div class="banner"><div class="u-container"><div class="banner-content"><h1>定制</h1><p class="info">本功能可自定义选中下载特定模块，设置主题颜色，并可以导入之前选择进行更新操作</p></div></div></div>',
        contentStr = '<div class='+'"'+contentClassName+'"'+'>',
        colorStr = '<div class='+'"'+colorClassName.msgOut+'"'+'><div class='+colorClassName.msgInner+'>设置主题颜色，左侧选中主色，右侧选择辅色。通过点击色块进行选中，也可在输入框中输入rgb格式的颜色编码。</div>';
        colorStr += '<div class='+colorClassName.areaInput+'>';
    for (var i = 0; i < 3; i++) {
        colorStr += '<div class='+'"'+colorClassName.lineDiv+'"'+'  u-meta=\'{"id":"color1","type":"u-text","data":"colorData","field":"color' + i + '"}\'>' +'<input class='+'"'+colorClassName.lineInput+'"'+'/></div>';
    }
    colorStr += '</div>';
    colorStr += '<div class='+colorClassName.area+'>';
    var colorLeftStr = '<div class='+colorClassName.areaLeft+'>';
    var colorRightStr = '<div class='+colorClassName.areaRight+'>';
    for (var color in colorObj) {
        colorLeftStr += '<div class='+colorClassName.areaDiv+' style="background:rgb(' + colorObj[color][0] + ')" color0="' + colorObj[color][0] + '" color1="' + colorObj[color][1] + '"></div>';
        colorRightStr += '<div class='+colorClassName.areaDiv+' style="background:rgb(' + colorObj[color][2] + ')" color2="' + colorObj[color][2] + '"></div>';
    }
    colorLeftStr += '</div>';
    colorRightStr += '</div>';
    colorStr += colorLeftStr;
    colorStr += colorRightStr;
    colorStr += '</div>';
    colorStr += '</div>';
    var evalStr = '<div class='+evalOut+'><div class='+evalInner+'>下载文件setting.txt中保存了上次配置的信息，将信息复制至文本域中并点击执行可恢复上次配置。</div>';
    evalStr += '<button id="eavl-button" class='+'"'+runButton+'"'+' >执行</button>';
    evalStr += '<textarea style="width: 100%;height: 70px;"u-meta=\'{"id":"str","type":"textarea","data":"evalData","field":"str"}\'></textarea>';
    evalStr += '</div>';
    // 遍历obj创建datatable的field字段，同时生成html列表
    for (var model in treeObj) {
        treemetaObj[model] = {};
        contentStr += '<div class='+'"'+listClassName.line+'"'+'>';
        if (model != 'all')
        contentStr += '<div class="second-title">' +captionObj[model] +
            '<span  class='+'"'+listClassName.textLabel+'"'+' u-meta=\'{"id":"' + model + '","type":"u-checkbox","data":"treeData","field":"' + model + '","checkedValue":true,"unCheckedValue":false}\'>' +
            '<input type="checkbox" class='+'"'+listClassName.textInput+'"'+'>' +
            '<span class='+'"'+listClassName.textSpan+'"'+'>全选</span>' +
            '</span>' +
            '</div>';
        contentStr += '<ul class='+'"'+listClassName.textDiv+'"'+'>';
        for (var i = 0; i < treeObj[model].length; i++) {
            var field = treeObj[model][i];
            var firstClass = '';
            metaObj[field] = {};
            contentStr += '<li  class="u-checkbox tree-leaf u-col-md-4" u-meta=\'{"id":"' + field + '","type":"u-checkbox","data":"modelData","field":"' + field + '","checkedValue":true,"unCheckedValue":false}\'>' + '<input type="checkbox" class='+'"'+listClassName.textInput+'"'+'>' + '<span class='+listClassName.textSpan+'>'
                + captionObj[field] + '</span></li>';
        }
        contentStr += '</div>';
        contentStr += '</div>';
    }
    contentStr += '</div>';
    wholeStr += headStr + contentStr + colorStr + evalStr;
    wholeStr += '</div>';
    var contentStrArr=contentStr.split('<div class="tree-whole-div">');
    var coreModel='<div class="tree-whole-div">'+contentStrArr[2]+'</div>';
    var utilModel='<div class="tree-whole-div">'+contentStrArr[3]+'</div>';
    var modelModel='<div class="tree-whole-div">'+contentStrArr[4]+'</div>';
    var uiModel='<div class="tree-whole-div">'+contentStrArr[5]+'</div>';
    var layoutModel='<div class="tree-whole-div">'+contentStrArr[6]+'</div>';
    var otherModel='<div class="tree-whole-div">'+contentStrArr[7]+'</div>';
    var gridModel='<div class="tree-whole-div">'+contentStrArr[8]+'</div>';
    var treeModel='<div class="tree-whole-div">'+contentStrArr[9]+'</div>';
    var dataTimeModel='<div class="tree-whole-div">'+contentStrArr[10]+'</div>';
    document.getElementById('colorModel').appendChild(u.makeDOM(colorStr));
    document.getElementById('coreModel').appendChild(u.makeDOM(coreModel));
    document.getElementById('utilModel').appendChild(u.makeDOM(utilModel));
    document.getElementById('modelModel').appendChild(u.makeDOM(modelModel));
    document.getElementById('uiModel').appendChild(u.makeDOM(uiModel));
    document.getElementById('layoutModel').appendChild(u.makeDOM(layoutModel));
    document.getElementById('otherModel').appendChild(u.makeDOM(otherModel));
    document.getElementById('gridModel').appendChild(u.makeDOM(gridModel));
    document.getElementById('treeModel').appendChild(u.makeDOM(treeModel));
    document.getElementById('dataTimeModel').appendChild(u.makeDOM(dataTimeModel));
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
                color2: {}
            }
        }),
        evalData: new u.DataTable({
            meta: {
                str: {}
            }
        })
    };
    app = u.createApp({
        el: 'body',
        model: viewModel
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
        var jsArr = [];
        var cssArr = [];
        if (r.getValue('model')) {
            modelFlag = true;
        }
        for (var field in allJsObj) {
            if (r.getValue(field)) {
                jsArr.push(allJsObj[field]);
                if (modelFlag && modeluiObj[field])
                    jsArr.push(modeluiObj[field]);
                if (cssObj[field])
                    cssArr.push(cssObj[field])
            }
        }
        cssArr = cssArr.toString().split(',');
        cssArr = util.getNoRepeat(cssArr);
        var colorRow = viewModel.colorData.getCurrentRow();
        color0 = colorRow.getValue('color0');
        color1 = colorRow.getValue('color1');
        color2 = colorRow.getValue('color2');
        color0 = color0 ? color0 : defaultColor[0];
        color1 = color1 ? color1 : defaultColor[1];
        color2 = color2 ? color2 : defaultColor[2];
        colorArr = [color0, color1, color2];
        settingStr = '';
        settingStr += util.getModelData('viewModel.colorData.getCurrentRow()');
        settingStr += util.getModelData('viewModel.modelData.getCurrentRow()');
        settingStr += util.getModelData('viewModel.treeData.getCurrentRow()');
        dataJson = {
            jsArr: jsArr,
            cssArr: cssArr,
            colorArr: colorArr,
            settingStr: settingStr
        };
        u.showLoading();
        u.ajax({
            type: 'post',
            dataType: 'json',
            data: dataJson,
            url: '/customized',
            success: function (patch) {
                u.hideLoading();
                patch = patch.replace('..', '');
                document.getElementById('ss').href = patch;
                document.getElementById('ss').click();
            },
            error: function (patch) {
                u.hideLoading();
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
    /**
     * 处理依赖的方法
     * @param dependObj 依赖的对象
     * @param field  键
     * @param value  值
     */
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
                dependCountObj = {};
                for (var f in allJsObj) {
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
    /**
     * 设置grid是否可用
     * @param enable
     */
    function gridEnabled(enable) {
        var gridArr = treeObj.gridMode;
        for (var i = 1; i < gridArr.length; i++) {
            app.getComp(gridArr[i]).setEnable(enable);
        }
        app.getComp('gridMode').setEnable(enable);
    }
    gridEnabled(false);
    app.getComp('gridBase').setEnable(false);

    /*导航开关*/
    u.on(document.getElementById('navId'), 'click', function () {
        u.addClass(this, 'nav-open');
        u.addClass(document.getElementById('offId'),'open');
    });
    u.on(document.getElementById('offId'),'click',function () {
        u.removeClass(this,'open')
    });

});


