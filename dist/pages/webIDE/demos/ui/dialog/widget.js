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
