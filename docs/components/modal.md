# madal控件

`modal`控件分为三种：提示模态框、确认模态框和自定义模态框

# 如何使用

提示模态框与确认模态框通过js调用传参实现，
例如`u.messageDialog({ msg: "HELLO!!!", title: "测试提示", btnText: "OK!" })` 则是调用提示模态框的方法。
自定义模态框则是在html文件里可自定义内容

# 示例


##自定义摸态框

通过`dialog`方法调出模态框
用户自定在html文件自定义所要展现的内容
点击保存，做进一步的确认校验


<div class="jstag" style="display:none">
	u.compMgr.apply({
        el:"body"
    })

	var msgBtn3 = document.body.querySelector("#msgDialogBtn3");
	u.on(msgBtn3,'click', function(){
		window.md = u.dialog({id:'testDialg',content:"#dialog_content",hasCloseMenu:true});
	});
	
	var okButton = document.body.querySelector(".u-msg-ok");
	u.on(okButton,'click', function(){
		alert('ok');
	});
	
	var cancelButton = document.body.querySelector(".u-msg-cancel");
	u.on(cancelButton,'click', function(){
		md.close();
	});
</div>





<div class="example-content">
<button id="msgDialogBtn3" class="u-button raised accent">模态框</button>
<div id="dialog_content" style="display:none;">
	<div class="u-msg-title">
		<h4>单据名称</h4>
	</div>
	<div class="u-msg-content">
		<p>单据内容区</p>
	</div>
	<div class="u-msg-footer">
		<button class="u-msg-ok u-button">保存<span class="u-button-container"><span class="u-ripple"></span></span></button>
		<button class="u-msg-cancel u-button">取消<span class="u-button-container"><span class="u-ripple"></span></span></button>
	</div>
</div>

<div class="examples-code"><pre><code>  u.compMgr.apply({
        el:'body'
    })

	var msgBtn3 = document.body.querySelector("#msgDialogBtn3");
	u.on(msgBtn3,'click', function(){
		window.md = u.dialog({id:'testDialg',content:"#dialog_content",hasCloseMenu:true});
	});
	
	var okButton = document.body.querySelector(".u-msg-ok");
	u.on(okButton,'click', function(){
		alert('ok');
	});
	
	var cancelButton = document.body.querySelector(".u-msg-cancel");
	u.on(cancelButton,'click', function(){
		md.close();
	});</code></pre>
</div>
<div class="examples-code"><pre><code>
&lt;button id="msgDialogBtn3" class="u-button raised accent">模态框&lt;/button>
&lt;div id="dialog_content" style="display:none;">
	&lt;div class="u-msg-title">
		&lt;h4>单据名称&lt;/h4>
	&lt;/div>
	&lt;div class="u-msg-content">
		&lt;p>单据内容区&lt;/p>
	&lt;/div>
	&lt;div class="u-msg-footer">
		&lt;button class="u-msg-ok u-button">保存&lt;span class="u-button-container">&lt;span class="u-ripple">&lt;/span>&lt;/span>&lt;/button>
		&lt;button class="u-msg-cancel u-button">取消&lt;span class="u-button-container">&lt;span class="u-ripple">&lt;/span>&lt;/span>&lt;/button>
	&lt;/div>
&lt;/div>
   </code></pre>
</div>

##消息摸态框

通过`confirmDialog`方法调出模态框
当点击取消或者保存，可在js中的方法里进行业务的回调 

<div class="example-content">
<button id="msgDialogBtn2" class="u-button raised accent">消息确认框</button>

   
</div>

<div class="jstag" style="display:none">
	u.compMgr.apply({
        el:'body'
    })

 
    var msgBtn2 = document.body.querySelector("#msgDialogBtn2");
    u.on(msgBtn2,'click', function(){
        u.confirmDialog({
            msg: "是否保存单据？",
            title: "测试确认",
            onOk: function () {
                alert('ok')
            },
            onCancel: function () {
                alert('cancel')
            }
        });
    })	
</div>



<div class="examples-code">
<pre><code>
&lt;button id="msgDialogBtn2" class="u-button raised accent">消息确认框&lt;/button>
   </code></pre>
</div>
<div class="examples-code"><pre><code>  u.compMgr.apply({
        el:'body'
    })

 
    var msgBtn2 = document.body.querySelector("#msgDialogBtn2");
    u.on(msgBtn2,'click', function(){
        u.confirmDialog({
            msg: "是否保存单据？",
            title: "测试确认",
            onOk: function () {
                alert('ok')
            },
            onCancel: function () {
                alert('cancel')
            }
        });
    })
	</code></pre>
</div>

##提示摸态框

只有一个确认按钮
通过`messageDialog`方法调出模态框

<div class="jstag" style="display:none">
	u.compMgr.apply({
	    el:'body'
	})

	var msgBtn = document.body.querySelector("#msgDialogBtn");
	u.on(msgBtn, 'click', function() {
	    u.messageDialog({ msg: "HELLO!!!", title: "测试提示", btnText: "OK!" });
	})	
</div>

<div class="example-content">
<button id="msgDialogBtn" class="u-button raised accent">消息提示框</button>

   
</div>
<div class="examples-code"><pre><code>u.compMgr.apply({
    el:'body'
})

var msgBtn = document.body.querySelector("#msgDialogBtn");
u.on(msgBtn, 'click', function() {
    u.messageDialog({ msg: "HELLO!!!", title: "测试提示", btnText: "OK!" });
})
</code></pre>
</div>
<div class="examples-code"><pre><code>
&lt;button id="msgDialogBtn" class="u-button raised accent">消息提示框&lt;/button>

   </code></pre>
</div>



### 方法1

messageDialog 调用提示模态框

方法1说明

入参
msg:提示内容
title:提示标题
btnText:确认按钮字样

### 方法2

messageDialog 调用自定义模态框


方法2说明

入参
id:自定义模态框i
content:自定义模态框内容放html里，html父级的id
hasCloseMenu:是否带关闭按钮菜单


### 方法3

confirmDialog 调用消息模态框

方法3说明

入参
msg:提示内容
title:提示标题
onOK:点击确认回调方法
onCancel:点击取消回调方法
