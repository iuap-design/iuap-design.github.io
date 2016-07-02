# 消息框
消息框组件分为普通的消息提示框、消息确认框、模态框。
##如何使用
消息框使用只需在js中调用对应的方法即可。
###消息提示框
提示框调用u.messageDialog()，参数是个对象，对象字段说明如下
**OPTIONS**

|params|说明|
|:
|msg|消息内容|
|title|消息标题|
|btnText|按钮显示文本内容|


###消息确认框
确认框调用u.confirmDialog(),参数是个对象，对象字段说明如下

**OPTIONS**

|params|说明|
|:
|msg|消息内容|
|title|消息标题|
|onOK|点击确认按钮回调事件|
|onCancel|点击取消按钮回调事件|

###模态框
模态框将定义在页面上的html片段以弹框的形式显示出来。
模态框调用u.dialog(),参数是个对象，对象字段说明如下

**OPTIONS**

|params|说明|
|:
|id|模态框的id值|
|content|显示内容的id选择器|



##具体示例

- **消息提示框**


![](../../static/plugins/img/messageDialog.png)

	u.messageDialog({msg:"HELLO!!!",title:"测试提示", btnText:"OK"});

此示例完成了一个标题为“测试提示”，提示内容为“HELLO!!!”的提示框。

[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/dialog/message "试一试")

- **消息确认框**

![](../../static/plugins/img/confirmDialog.png)

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

[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/dialog/confirm "试一试")

- **模态框**

![](../../static/plugins/img/modalDialog.png)

	<div id="dialog_content" style="display:none;">
		<div class="u-msg-title">
			<h4>单据名称</h4>
		</div>
		<div class="u-msg-content">
			<p>单据内容区</p>
		</div>
		<div class="u-msg-footer">
			<button class="u-msg-ok u-button">保存</button>
			<button class="u-msg-cancel u-button">取消</button>
		</div>
	</div>


    u.dialog({id:'testDialg',content:"#dialog_content"});

[试一试](http://iuap.yonyou.com/fe/demo/#/demos/ui/dialog/modal "试一试")




 










