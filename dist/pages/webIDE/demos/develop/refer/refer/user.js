define(['text!./user.html'], function(template){
    var init = function(refer){
        //var viewModel = {
        //    sid : refer.params.sid,
        //    his :new $.DataTable({
        //        meta:{
        //            zdmc:{},
        //            jz:{},
        //            xz:{},
        //            xgsj:{}
        //        }
        //    })
        //}

        //加载grid数据
        refer.registerSubmitFunc(function(){
            return   'aa';//viewModel.his.getCurrentRow()
        })

        //var app = $.createApp();
        //app.init(viewModel, $('#ref_his')[0]);

        //
        //debugger;
        //app.serverEvent().addDataTable('his').addParameter("sid",viewModel.sid).fire({
        //    url: $ctx+'/evt/dispatch',
        //    ctrl: 'iweb.SettlementController',
        //    method: 'getHisData',
        //    success: function(data) {
        //        debugger;
        //        data = JSON.parse(data);
        //        if(data.msg=='none!'){
        //
        //            $.showMessageDialog({type:"info",title:"提示信息",msg:"无历史记录！",backdrop:true});
        //            $('.cancelBtn').click()
        //        }else{
        //            viewModel.his.setData(data);
        //        }
        //    }
        //})
    };

    return {
        template:template,
        init:init
    }
})