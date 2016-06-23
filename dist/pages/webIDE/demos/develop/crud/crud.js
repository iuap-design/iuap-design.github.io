var app, dtMeta = {
    meta: {
        enterprise: {type: 'string'},
        depart: {type: 'string'},
        name: {type: 'string',required:true},
        sex: {type: 'string'}
    }
}

var viewModel = {
    /**
     * 数据模型
     */
    listDT: new u.DataTable(dtMeta),
    operateDT: new u.DataTable(dtMeta),
    //当前操作状态
    oper: null,
    cardDialog:null,
    /**
     * 新增事件
     */
    add: function () {
        this.oper = 'new';
        //清理operateDT
        this.operateDT.removeAllRows();
        //创建空行
        this.operateDT.createEmptyRow();
        cardDialog = u.dialog({content: "#card_dialog", hasCloseMenu: true});
    },
    /**
     * 修改事件
     */
    edit: function () {
        this.oper = 'edit';
        //清理operateDT
        this.operateDT.removeAllRows();
        this.operateDT.setSimpleData(this.listDT.getSimpleData({type:'select'}));
        cardDialog = u.dialog({content: "#card_dialog", hasCloseMenu: true});
    },
    /**
     * 删除事件
     */
    del: function(){
        var self = this;
        u.confirmDialog({
            msg: "是否删除？",
            title: "确认",
            onOk: function () {
                var r = self.listDT.getCurrentRow();
                if (r){
                    //TODO 发后台请求
                    // ajax or app.serverEvent().fire
                    self.listDT.removeRow(r);
                }
            },
            onCancel: function () {
               //
            }
        });
    },
    /**
     * 保存数据
     */
    save: function () {
        var canSave = app.compsValidate(document.querySelector('#card_dialog'));
        if (!canSave) return;
        if (this.oper === 'new'){
            //TODO 发后台请求
            // ajax or app.serverEvent().fire
            this.listDT.addSimpleData(this.operateDT.getSimpleData());
        }else if(this.oper === 'edit'){
            //TODO 发后台请求
            // ajax or app.serverEvent().fire
            this.listDT.getCurrentRow().setSimpleData(this.operateDT.getCurrentRow().getSimpleData());
        }
        this.oper = null;
        cardDialog.close();
    },
    /**
     *
     */
    cancel: function(){
        cardDialog.close();
    }
};

//执行数据绑定
app = u.createApp({
    el: 'body',
    model: viewModel
});

//模拟查询数据
viewModel.listDT.setSimpleData([
    {"enterprise": "用友", "depart": "UE", "name": "张紫琼", "sex": "male"},
    {"enterprise": "阿里巴巴", "depart": "测试", "name": "张丽丹", "sex": "female"}
])


