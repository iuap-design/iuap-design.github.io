// 消息框弹出开始
    u.compMgr.apply({
        el: 'body'
    })

    var msgBtn = document.body.querySelector("#msgDialogBtn");
    u.on(msgBtn, 'click', function() {
        //            u.showMessage("HELLO!!!");
        u.messageDialog({ msg: "HELLO!!!", title: "测试提示", btnText: "OK!" });
    })

    //  确认消息框
    var msgBtn2 = document.body.querySelector("#msgDialogBtn2");
    u.on(msgBtn2, 'click', function() {
        //            u.showMessage("HELLO!!!");
        u.confirmDialog({
            msg: "是否保存单据？",
            title: "测试确认",
            onOk: function() {
                alert('ok')
            },
            onCancel: function() {
                alert('cancel')
            }
        });
    })



    var okButton = document.body.querySelector(".u-msg-ok");
    u.on(okButton, 'click', function() {
        alert('ok');
    });

    var cancelButton = document.body.querySelector(".u-msg-cancel");
    u.on(cancelButton, 'click', function() {
        md.close();
    });

    // 模态框
    var msgBtn3 = document.body.querySelector("#msgDialogBtn3");
    u.on(msgBtn3, 'click', function() {
        window.md = u.dialog({ id: 'testDialg', content: "#dialog_content", hasCloseMenu: true });
    });
// 消息框弹出结束

// 消息提示开始
    var msgBtn = document.body.querySelector("#msgBtn");
    var errorBtn = document.body.querySelector("#errorBtn");
    var warnBtn = document.body.querySelector("#warnBtn");
    var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';
    u.on(msgBtn,'click', function(){
        u.showMessage({msg:rightInfo,position:"center",msgType:"success"})
    })

    var errorInfo='<i class="uf uf-crossmarkonablackcirclebackground margin-r-5"></i>错误信息!!!'
    u.on(errorBtn,'click', function(){
        u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
    })

    var warningInfo='<i class="uf uf-exclamationsign margin-r-5"></i>警告信息!!!';
    u.on(warnBtn,'click', function(){
        u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
    })
// 消息提示结束

// 工具提示开始
    $('.u-button-tooltip-left').on('click',function () {
        var left=$(this).get(0).offsetLeft+$(this).get(0).clientWidth;
        var top=$(this).get(0).offsetTop;
        var $tooltip=$(this).next();
        $tooltip.css('left',left+10);
        $tooltip.css('top',top);
        if($tooltip.is(':hidden')){
            $tooltip.show();
        }else{
            $tooltip.hide()
        }
    });
    $('.tooltip-rotate').each(function () {
        var $btn=$(this).prev();
        $(this).css('left',$btn.get(0).clientWidth+$btn.get(0).offsetLeft+10);
        $(this).css('top',$btn.get(0).offsetTop);
    });
    $('.u-button-tooltip-rotate').hover(function () {
        var left=$(this).get(0).clientWidth;
        var top=$(this).get(0).offsetTop;
        var $tooltip=$(this).next();
        $tooltip.css('left',left+40);
        $tooltip.css('top',top);
        $tooltip.addClass('rotate');
    },function () {
        var left=$(this).get(0).clientWidth;
        var top=$(this).get(0).offsetTop;
        var $tooltip=$(this).next();
        $tooltip.css('left',left+40);
        $tooltip.css('top',top);
        $tooltip.removeClass('rotate');
    });
// 工具提示结束
