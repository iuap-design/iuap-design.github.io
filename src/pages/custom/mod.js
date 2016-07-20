/*存储模块*/
define(function(){
    /**
     * 模块js代码集合
     * @type {{core: string[], ajax: string[], event: string[], renderUtil: string[], dateUtil: string[], formater: string[], hotKeys: string[], masker: string[], rsautils: string[], model: string[], polyfill: string[], ui: string[], textfield: string[], clockpicker: string[], time: string[], datetimepicker: string[], year: string[], month: string[], yearmonth: string[], checkbox: string[], combobox: string[], radio: string[], autocomplete: string[], switch: string[], button: string[], dialog: string[], message: string[], loading: string[], menu: string[], pagination: string[], progress: string[], datatable: string[], grid: string[], tree: string[], tooltip: string[], multilang: string[], palette: Array, refer: string[], ripple: string[], shadow: Array, tabs: string[], card: Array, navlayout: string[], gridlayout: Array, mdlayout: string[], validate: string[], palette: Array, gridBase: string[], ColumnMenu: string[], Drag: string[], Edit: string[], EditForm: string[], Fixed: string[], HeaderLevel: string[], OverWidthHidden: string[], Sort: string[], SumRow: string[], Swap: string[], Tree: string[]}}
     */

    /**
     * 7月20日与各个源码库同步路径
     */
    var allJsObj = {
        core: [
            '../bin/neoui/js/core/core.js',
            '../bin/neoui/js/core/base.js',
            '../bin/neoui/js/core/compMgr.js',
            '../bin/neoui/js/utilities/jsExtensions.js',
            '../bin/neoui/js/utilities/i18n.js'
        ],
        ajax: [
            '../bin/neoui/js/core/ajax.js'
        ],
        event: [
            '../bin/neoui/js/core/event.js'
        ],
        renderUtil: [
            '../bin/neoui/js/utilities/dataRender.js'
        ],
        dateUtil: [
            '../bin/neoui/js/utilities/dateUtils.js'
        ],
        formater: [
            '../bin/neoui/js/utilities/formater.js'
        ],
        hotKeys: [
            '../bin/neoui/js/utilities/hotKeys.js'
        ],
        masker: [
            '../bin/neoui/js/utilities/masker.js'
        ],
        rsautils: [
            '../bin/neoui/js/utilities/rsautils.js'
        ],
        model: [
            '../bin/kero/js/app.js',
            '../bin/kero/js/dataTable.js'
        ],
        polyfill: [
            'hasPolyfill'
        ],
        ui: [
            '../bin/neoui/js/core/BaseComponent.js',
            '../bin/neoui/js/core/end.js'
        ],
        textfield: [
            '../bin/neoui/js/ui.textfield.js'
        ],
        clockpicker: [
            '../bin/neoui-datetimepicker/js/clockpicker.js'
        ],
        time: [
            '../bin/neoui-datetimepicker/js/time.js'
        ],
        datetimepicker: [
            '../bin/neoui-datetimepicker/js/datetimepicker.js'
        ],
        year: [
            '../bin/neoui-datetimepicker/js/year.js'
        ],
        month: [
            '../bin/neoui-datetimepicker/js/month.js'
        ],
        yearmonth: [
            '../bin/neoui-datetimepicker/js/yearmonth.js'
        ],
        checkbox: [
            '../bin/neoui/js/ui.checkbox.js'
        ],
        combobox: [
            '../bin/neoui/js/extend/ui.combo.js'
        ],
        radio: [
            '../bin/neoui/js/ui.radio.js'
        ],
        autocomplete: [
            '../bin/neoui/js/extend/autocomplete.js'
        ],
        switch: [
            '../bin/neoui/js/ui.switch.js'
        ],
        button: [
            '../bin/neoui/js/ui.button.js'
        ],
        dialog: [
            '../bin/neoui/js/extend/messageDialog.js',
            '../bin/neoui/js/extend/confirmDialog.js',
            '../bin/neoui/js/extend/dialog.js'
        ],
        message: [
            '../bin/neoui/js/ui.message.js'
        ],
        loading: [
            '../bin/neoui/js/extend/ui.loading.js'
        ],
        menu: [
            '../bin/neoui/js/extend/ui.menu.js'
        ],
        pagination: [
            '../bin/neoui/js/extend/ui.pagination.js'
        ],
        progress: [
            '../bin/neoui/js/ui.progress.js'
        ],
        datatable: [
            '../bin/neoui/js/ui.table.js'
        ],
        grid: [
            'hasGrid'
        ],
        tree: [
            'hasTree'
        ],
        tooltip: [
            '../bin/neoui/js/ui.tooltip.js'
        ],
        multilang: [
            '../bin/neoui/js/extend/ui.multilang.js'
        ],
        palette: [],
        refer: [
            '../bin/neoui/js/extend/ui.refer.js'
        ],
        ripple: [
            '../bin/neoui/js/extend/ripple.js'
        ],
        shadow: [],
        tabs: [
            '../bin/neoui/js/ui.tabs.js'
        ],
        card: [],
        navlayout: [
            '../bin/neoui/js/layout.nav.js'
        ],
        gridlayout: [],
        mdlayout: [
            '../bin/neoui/js/layout.md.js'
        ],
        validate: [
            '../bin/neoui/js/validate.js'
        ],
        palette: [],
        gridBase:[
            '../bin/neoui-grid/js/gridComp.js'
        ],
        ColumnMenu:[
            '../bin/neoui-grid/js/ColumnMenu.js'
        ],
        Drag:[
            '../bin/neoui-grid/js/Drag.js'
        ],
        Edit:[
            '../bin/neoui-grid/js/Edit.js'
        ],
        EditForm:[
            '../bin/neoui-grid/js/EditForm.js'
        ],
        Fixed:[
            '../bin/neoui-grid/js/Fixed.js'
        ],
        HeaderLevel:[
            '../bin/neoui-grid/js/HeaderLevel.js'
        ],
        OverWidthHidden:[
            '../bin/neoui-grid/js/OverWidthHidden.js'
        ],
        Sort:[
            '../bin/neoui-grid/js/Sort.js'
        ],
        SumRow:[
            '../bin/neoui-grid/js/SumRow.js'
        ],
        Swap:[
            '../bin/neoui-grid/js/Swap.js'
        ],
        Tree:[
            '../bin/neoui-grid/js/Tree.js'
        ]
    };
    /**
     * 模块树集合
     * @type {{all: Array, coreModel: string[], utilModel: string[], modelModel: string[], uiModel: string[], layoutModel: string[], otherModel: string[], gridMode: string[]}}
     */
    var treeObj = {
        all:[],
        coreModel:[
            'core',
            'ajax',
            'event'
        ],
        utilModel:[
            'renderUtil',
            'dateUtil',
            'formater',
            'hotKeys',
            'masker',
            'rsautils'
        ],
        modelModel:[
            'model'
        ],
        uiModel:[
            'ui',
            'textfield',
            'checkbox',
            'combobox',
            'radio',
            'switch',
            'button',
            'dialog',
            'message',
            'loading',
            'menu',
            'pagination',
            'progress',
            'grid',
            'tooltip',
            'multilang',
            'palette',
            'refer',
            'ripple',
            'shadow',
            'autocomplete'
        ],
        layoutModel:[
            'datatable',
            'tabs',
            'card',
            'navlayout',
            'gridlayout',
            'mdlayout'
            /*,'resets'*/
        ],
        otherModel:[
            'polyfill',
            'validate'
        ],
        gridMode:[
            'gridBase',
            'ColumnMenu',
            'Drag',
            'Edit',
            'EditForm',
            'Fixed',
            /*'FormShow',*/
            'HeaderLevel',
            'OverWidthHidden',
            'Sort',
            'SumRow',
            'Swap',
            'Tree'],

        treeModel:[
            'tree'
        ],
        datetimeModel:[
            'time',
            'datetimepicker',
            'year',
            'month',
            'yearmonth',
            'clockpicker'
        ]
    };
    /**
     * 模块名称集合
     * @type {{all: string, coreModel: string, core: string, ajax: string, event: string, utilModel: string, renderUtil: string, dateUtil: string, formater: string, hotKeys: string, masker: string, rsautils: string, modelModel: string, model: string, otherModel: string, polyfill: string, validate: string, uiModel: string, ui: string, textfield: string, clockpicker: string, time: string, datetimepicker: string, year: string, month: string, yearmonth: string, checkbox: string, combobox: string, radio: string, switch: string, button: string, dialog: string, message: string, loading: string, menu: string, pagination: string, progress: string, grid: string, tree: string, tooltip: string, multilang: string, palette: string, refer: string, ripple: string, shadow: string, autocomplete: string, layoutModel: string, datatable: string, tabs: string, card: string, navlayout: string, gridlayout: string, mdlayout: string, gridMode: string, gridBase: string, ColumnMenu: string, Drag: string, Edit: string, EditForm: string, Fixed: string, HeaderLevel: string, OverWidthHidden: string, Sort: string, SumRow: string, Swap: string, Tree: string}}
     */
    var captionObj = {
        all:"全选/反选",
        coreModel:"核心模块",
        core:"核心代码",
        ajax:"请求处理",
        event:"事件处理",

        utilModel:"工具模块",
        renderUtil:"渲染工具",
        dateUtil:"日期工具",
        formater:"格式化工具",
        hotKeys:"热键工具",
        masker:"显示格式化工具",
        rsautils:"数据加密",

        modelModel:"模型模块",
        model:"模型",

        otherModel:"其他模块",
        polyfill:"IE8兼容",
        validate:"校验处理",

        uiModel:"控件模块",
        ui:"ui基础",
        textfield:"输入框控件",


        checkbox:"复选框控件",
        combobox:"下拉控件",
        radio:"单选控件",
        switch:"开关控件",
        button:"按钮控件",
        dialog:"弹框控件",
        message:"消息提示控件",
        loading:"loading控件",
        menu:"菜单控件",
        pagination:"分页控件",
        progress:"进度条控件",
        grid:"表格控件",

        tooltip:"工具栏控件",
        multilang:"多语控件",
        palette:"调色板",
        refer:"参照控件",
        ripple:"点击特效",
        shadow:"阴影",
        autocomplete:"自定义控件",

        layoutModel:"布局模块",
        datatable:"表格布局",
        tabs:"页签布局",
        card:"卡片布局",
        navlayout:"导航布局",
        gridlayout:"栅格布局",
        mdlayout:"主从布局",
        // resets:"",

        gridMode:"表格插件",
        gridBase:"基础表格",
        ColumnMenu:"表头操作",
        Drag:"拖拽",
        Edit:"编辑功能",
        EditForm:"表单形式编辑",
        Fixed:"固定列",
        // FormShow:"表单方式展示",
        HeaderLevel:"二级表头",
        OverWidthHidden:"宽度不足隐藏数据列",
        Sort:"排序",
        SumRow:"合计",
        Swap:"交换列",
        Tree:"树表",

        treeModel:'树插件',
        tree:"树插件",

        datetimeModel:'日期插件',
        datetimepicker:"日期插件",
        year:"年插件",
        month:"月插件",
        yearmonth:"年月插件",
        clockpicker:"时分钟表插件",
        time:"时分输入插件"
    };
    /**
     * css样式集合
     * @type {{ui: string[], autocomplete: string[], button: string[], card: string[], checkbox: string[], clockpicker: string[], month: string[], combobox: string[], datatable: string[], datetimepicker: string[], dialog: string[], gridlayout: string[], loading: string[], mdlayout: string[], menu: string[], message: string[], navlayout: string[], pagination: string[], palette: string[], progress: string[], radio: string[], ripple: string[], shadow: string[], tabs: string[], textfield: string[], time: string[], year: string[], yearmonth: string[], tooltip: string[], switch: string[], palette: string[]}}
     */
    var cssObj = {
        ui:[
            '@import "../../../bin/neoui/scss/mixins/variables.scss"',
            '@import "../../../bin/neoui/scss/mixins/mixins.scss"'
        ],
        autocomplete: [
            '@import "../../../bin/neoui/scss/extend/autocomplete.scss"'
        ],
        button: [
            '@import "../../../bin/neoui/scss/ui.button.scss"'
        ],
        card: [
            '@import "../../../bin/neoui/scss/extend/card.scss"'
        ],
        checkbox: [
            '@import "../../../bin/neoui/scss/ui.checkbox.scss"'
        ],
        clockpicker: [
            '@import "../../../bin/neoui-datetimepicker/css/clockpicker.scss"',
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"'
        ],
        month:[
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"',
            '@import "../../../bin/neoui-datetimepicker/css/datetimepicker.scss"',
            '@import "../../../bin/neoui/scss/ui.textfield.scss"'
        ],
        combobox: [
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"'
        ],
        datatable: [
            '@import "../../../bin/neoui/scss/ui.table.scss"'
        ],
        datetimepicker: [
            '@import "../../../bin/neoui-datetimepicker/css/datetimepicker.scss"'
        ],
        dialog: [ 
            '@import "../../../bin/neoui/scss/extend/dialog.scss"'
        ],
        // grid: ['@import "grid/gridComp.scss"'],
        gridlayout: [
            '@import "../../../bin/neoui/scss/layout.grid.scss"'
        ],
        loading: [
            '@import "../../../bin/neoui/scss/extend/ui.loading.scss"'
        ],
        mdlayout: [
            '@import "../../../bin/neoui/scss/layout.md.scss"'
        ],
        menu: [
            '@import "../../../bin/neoui/scss/extend/ui.menu.scss"'
        ],
        message: [
            '@import "../../../bin/neoui/scss/extend/ui.message.scss"'
        ],
        navlayout: [
            '@import "../../../bin/neoui/scss/layout.nav.scss"'
        ],
        pagination: [
            '@import "../../../bin/neoui/scss/extend/ui.pagination.scss"'
        ],
        palette: [
            '@import "../../../bin/neoui/scss/palette.scss"'
        ],
        progress: [
            '@import "../../../bin/neoui/scss/extend/ui.progress.scss"'
        ],
        radio: [
            '@import "../../../bin/neoui/scss/ui.radio.scss"'
        ],
        ripple: [
            '@import "../../../bin/neoui/scss/ripple.scss"'
        ],
        shadow: [
            '@import "../../../bin/neoui/scss/utilities/shadow.scss"'
        ],
        tabs: [
            '@import "../../../bin/neoui/scss/extend/ui.tabs.scss"'
        ],
        textfield: [
            '@import "../../../bin/neoui/scss/ui.textfield.scss"'
        ],
        time: [
            '@import "../../../bin/neoui-datetimepicker/css/time.scss"',
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"',
            '@import "../../../bin/neoui/scss/ui.textfield.scss"',
            '@import "../../../bin/neoui/scss/ui.button.scss"'
        ],
        year:[
            '@import "../../../bin/neoui/scss/ui.textfield.scss"',
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"',
            '@import "../../../bin/neoui/scss/ui.button.scss"',
            '@import "../../../bin/neoui-datetimepicker/css/datetimepicker.scss"'
        ],
        yearmonth:[
            '@import "../../../bin/neoui/scss/ui.textfield.scss"',
            '@import "../../../bin/neoui/scss/extend/ui.combo.scss"',
            '@import "../../../bin/neoui/scss/ui.button.scss"',
            '@import "../../../bin/neoui-datetimepicker/css/datetimepicker.scss"'
        ],
        tooltip: [
            '@import "../../../bin/neoui/scss/extend/ui.tooltip.scss"'
        ],
        switch: [
            '@import "../../../bin/neoui/scss/extend/ui.switch.scss"'
        ],
        palette: [
            '@import "../../../bin/neoui/scss/palette.scss"'
        ]
    };
    /**
     * 控件模块集合
     * @type {{model: string[], checkbox: string[], combobox: string[], textfield: string[], datetimepicker: string[], month: string[], pagination: string[], progress: string[], radio: string[], switch: string[], time: string[], year: string[], yearmonth: string[]}}
     */
    var modeluiObj = {
        model: [
            '../bin/kero/js/dtJs/mixins/enableMixin.js',
            '../bin/kero/js/dtJs/mixins/requiredMixin.js',
            '../bin/kero/js/dtJs/mixins/validateMixin.js',
            '../bin/kero/js/dtJs/mixins/valueMixin.js',
            '../bin/kero/js/dtJs/baseAdapter.js'
        ],
        checkbox: [
            '../bin/kero/js/dtJs/checkbox.js'
        ],
        combobox: [
            '../bin/kero/js/dtJs/combobox.js'
        ],
        textfield: [
            '../bin/kero/js/dtJs/float.js',
            '../bin/kero/js/dtJs/currency.js',
            '../bin/kero/js/dtJs/integer.js',
            '../bin/kero/js/dtJs/percent.js',
            '../bin/kero/js/dtJs/string.js',
            '../bin/kero/js/dtJs/textarea.js',
            '../bin/kero/js/dtJs/textfield.js'
        ],
        datetimepicker: [
            '../bin/kero/js/dtJs/datetime.js'
        ],
        month: [
            '../bin/kero/js/dtJs/month.js'
        ],
        pagination: [
            '../bin/kero/js/dtJs/pagination.js'
        ],
        progress: [
            '../bin/kero/js/dtJs/progress.js'
        ],
        radio: [
            '../bin/kero/js/dtJs/radio.js'
        ],
        switch: [
            '../bin/kero/js/dtJs/switch.js'
        ],
        time: [
            '../bin/kero/js/dtJs/time.js'
        ],
        year: [
            '../bin/kero/js/dtJs/year.js'
        ],
        yearmonth: [
            '../bin/kero/js/dtJs/yearmonth.js'
        ],
    };
    /**
     * 模块依赖关系集合
     * @type {{event: string[], renderUtil: string[], dateUtil: string[], formater: string[], hotKeys: string[], masker: string[], model: string[], ui: string[], textfield: string[], datetimepicker: string[], clockpicker: string[], time: string[], year: string[], month: string[], yearmonth: string[], checkbox: string[], combobox: string[], radio: string[], autocomplete: string[], switch: string[], button: string[], dialog: string[], message: string[], loading: string[], menu: string[], pagination: string[], progress: string[], datatable: string[], tooltip: string[], multilang: string[], tabs: string[], navlayout: string[], mdlayout: string[], ripple: string[], validate: string[]}}
     */
    var dependObj = {
        event:[
            'core'
        ],
        renderUtil:[
            'core',
            'dateUtil',
            'formater'
        ],
        dateUtil:[
            'core'
        ],
        formater:[
            'core'
        ],
        hotKeys:[
            'core'
        ],
        masker:[
            'core'
        ],
        model:[
            'core'
        ],
        ui:[
            'core',
            'renderUtil',
            'dateUtil',
            'formater',
            'hotKeys',
            'masker'
        ],
        textfield:[
            'ui',
            'validate'
        ],
        datetimepicker:[
            'ui',
            'ripple',
            'button',
            'clockpicker'
        ],
        clockpicker:[
            'ui',
            'time'
        ],
        time:[
            'ui'
        ],
        year:[
            'ui',
            'ripple'
        ],
        month:[
            'ui',
            'ripple'
        ],
        yearmonth:[
            'ui',
            'ripple'
        ],
        checkbox:[
            'ui',
            'ripple'
        ],
        combobox:[
            'ui',
            'textfield',
            'ripple'
        ],
        radio:[
            'ui',
            'ripple'
        ],
        autocomplete:[
            'ui'
        ],
        switch:[
            'ui',
            'ripple'
        ],
        button:[
            'ui',
            'ripple'
        ],
        dialog:[
            'ui',
            'button'
        ],
        message:[
            'ui',
            'button'
        ],
        loading:[
            'ui'
        ],
        menu:[
            'ui',
            'ripple'
        ],
        pagination:[
            'ui',
            'message'
        ],
        progress:[
            'ui'
        ],
        datatable:[
            'ui'
        ],
        tooltip:[
            'ui'
        ],
        multilang:[
            'ui'
        ],
        tabs:[
            'ui',
            'ripple'
        ],
        navlayout:[
            'ui',
            'ripple'
        ],
        mdlayout:[
            'ui'
        ],
        ripple:[
            'core'
        ],
        validate:[
            'ui',
            'tooltip'
        ]
    };
    var modeDependObj = {
        grid:[
            'textfield',
            'combobox',
            'checkbox',
            'radio',
            'datetimepicker'
        ]
    };
    /**
     * 基础颜色集合
     * @type {{red: string[], pink: string[], purple: string[], deep_purple: string[], indigo: string[], blue: string[], light_blue: string[], cyan: string[], teal: string[], green: string[], light_green: string[], lime: string[], yellow: string[], amber: string[], orange: string[], deep_orange: string[]}}
     */
    var colorBaseObj = {
        red:[
            "255,235,238",
            "255,205,210",
            "239,154,154",
            "229,115,115",
            "239,83,80",
            "244,67,54",
            "229,57,53",
            "211,47,47",
            "198,40,40",
            "183,28,28",
            "255,138,128",
            "255,82,82",
            "255,23,68",
            "213,0,0"
        ],
        
        pink:[
            "252,228,236",
            "248,187,208",
            "244,143,177",
            "240,98,146",
            "236,64,122",
            "233,30,99",
            "216,27,96",
            "194,24,91",
            "173,20,87",
            "136,14,79",
            "255,128,171",
            "255,64,129",
            "245,0,87",
            "197,17,98"
        ],
        
        purple:[
            "243,229,245",
            "225,190,231",
            "206,147,216",
            "186,104,200",
            "171,71,188",
            "156,39,176",
            "142,36,170",
            "123,31,162",
            "106,27,154",
            "74,20,140",
            "234,128,252",
            "224,64,251",
            "213,0,249",
            "170,0,255"
        ],
        
        deep_purple:[
            "237,231,246",
            "209,196,233",
            "179,157,219",
            "149,117,205",
            "126,87,194",
            "103,58,183",
            "94,53,177",
            "81,45,168",
            "69,39,160",
            "49,27,146",
            "179,136,255",
            "124,77,255",
            "101,31,255",
            "98,0,234"
        ],
        
        indigo:[
            "232,234,246",
            "197,202,233",
            "159,168,218",
            "121,134,203",
            "92,107,192",
            "63,81,181",
            "57,73,171",
            "48,63,159",
            "40,53,147",
            "26,35,126",
            "140,158,255",
            "83,109,254",
            "61,90,254",
            "48,79,254"
        ],
        
        blue:[
            "227,242,253",
            "187,222,251",
            "144,202,249",
            "100,181,246",
            "66,165,245",
            "33,150,243",
            "30,136,229",
            "25,118,210",
            "21,101,192",
            "13,71,161",
            "130,177,255",
            "68,138,255",
            "41,121,255",
            "41,98,255"
        ],
        
        light_blue:[
            "225,245,254",
            "179,229,252",
            "129,212,250",
            "79,195,247",
            "41,182,246",
            "3,169,244",
            "3,155,229",
            "2,136,209",
            "2,119,189",
            "1,87,155",
            "128,216,255",
            "64,196,255",
            "0,176,255",
            "0,145,234"
        ],
        
        cyan:[
            "224,247,250",
            "178,235,242",
            "128,222,234",
            "77,208,225",
            "38,198,218",
            "0,188,212",
            "0,172,193",
            "0,151,167",
            "0,131,143",
            "0,96,100",
            "132,255,255",
            "24,255,255",
            "0,229,255",
            "0,184,212"
        ],
        
        teal:[
            "224,242,241",
            "178,223,219",
            "128,203,196",
            "77,182,172",
            "38,166,154",
            "0,150,136",
            "0,137,123",
            "0,121,107",
            "0,105,92",
            "0,77,64",
            "167,255,235",
            "100,255,218",
            "29,233,182",
            "0,191,165"
        ],
        
        green:[
            "232,245,233",
            "200,230,201",
            "165,214,167",
            "129,199,132",
            "102,187,106",
            "76,175,80",
            "67,160,71",
            "56,142,60",
            "46,125,50",
            "27,94,32",
            "185,246,202",
            "105,240,174",
            "0,230,118",
            "0,200,83"
        ],
        
        light_green:[
            "241,248,233",
            "220,237,200",
            "197,225,165",
            "174,213,129",
            "156,204,101",
            "139,195,74",
            "124,179,66",
            "104,159,56",
            "85,139,47",
            "51,105,30",
            "204,255,144",
            "178,255,89",
            "118,255,3",
            "100,221,23"
        ],
        
        lime:[
            "249,251,231",
            "240,244,195",
            "230,238,156",
            "220,231,117",
            "212,225,87",
            "205,220,57",
            "192,202,51",
            "175,180,43",
            "158,157,36",
            "130,119,23",
            "244,255,129",
            "238,255,65",
            "198,255,0",
            "174,234,0"
        ],
        
        yellow:[
            "255,253,231",
            "255,249,196",
            "255,245,157",
            "255,241,118",
            "255,238,88",
            "255,235,59",
            "253,216,53",
            "251,192,45",
            "249,168,37",
            "245,127,23",
            "255,255,141",
            "255,255,0",
            "255,234,0",
            "255,214,0"
        ],
        
        amber:[
            "255,248,225",
            "255,236,179",
            "255,224,130",
            "255,213,79",
            "255,202,40",
            "255,193,7",
            "255,179,0",
            "255,160,0",
            "255,143,0",
            "255,111,0",
            "255,229,127",
            "255,215,64",
            "255,196,0",
            "255,171,0"
        ],
        
        orange:[
            "255,243,224",
            "255,224,178",
            "255,204,128",
            "255,183,77",
            "255,167,38",
            "255,152,0",
            "251,140,0",
            "245,124,0",
            "239,108,0",
            "230,81,0",
            "255,209,128",
            "255,171,64",
            "255,145,0",
            "255,109,0"
        ],

        deep_orange:[
            "251,233,231",
            "255,204,188",
            "255,171,145",
            "255,138,101",
            "255,112,67",
            "255,87,34",
            "244,81,30",
            "230,74,25",
            "216,67,21",
            "191,54,12",
            "255,158,128",
            "255,110,64",
            "255,61,0",
            "221,44,0"
        ]
    };
    /**
     * 默认颜色集合
     * @type {string[]}
     */
    var defaultColor = [
        '63,81,181',
        '48,63,159',
        '255,64,129'
    ];
    /*页面模型盒子id集合*/
    var modelIdArr=[
        'coreModel',
        'utilModel',
        'modelModel',
        'uiModel',
        'layoutModel',
        'otherModel',
        'gridModel',
        'treeModel',
        'dataTimeModel'
    ];
    return {
        allJsObj:allJsObj,
        treeObj:treeObj,
        captionObj:captionObj,
        cssObj:cssObj,
        modeluiObj:modeluiObj,
        dependObj:dependObj,
        modeDependObj:modeDependObj,
        colorBaseObj:colorBaseObj,
        defaultColor:defaultColor,
        modelIdArr:modelIdArr
    }
});
