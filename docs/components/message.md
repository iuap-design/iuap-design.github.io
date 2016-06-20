# message控件

用于即时信息的提示，消息背景色取决于消息类型，易可添加相对应的`icon`

# 如何使用

给父元素添加`.u-message`类
自定义类型背景  例如new  在父元素添加`.u-mesnews`类

# 示例

##基础Message

消息类型对应不同class属性则显示不同的背景色
<style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style>
<div class="example-content"><div class="example">
    <div class="u-message u-mesnews active" >    
        <span class="u-msg-close fa fa-close"></span>
        News u-mesnews!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close fa fa-close"></span>
        Info  u-mesinfo!
    </div>
    <div class="u-message u-messuccess active">    
        <span class="u-msg-close fa fa-close"></span>
        Success u-messuccess!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close fa fa-close"></span>
        Danger u-mesdanger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close fa fa-close"></span>
        Warning u-meswarning!
    </div>
</div>
</div>
<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;div class="u-message u-mesnews active" >    
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        News!
    &lt;/div>
    &lt;div class="u-message u-mesinfo active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        Info!
    &lt;/div>
    &lt;div class="u-message u-messuccess active">    
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        Success!
    &lt;/div>
    &lt;div class="u-message u-mesdanger active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        Danger!
    &lt;/div>
    &lt;div class="u-message u-meswarning active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        Warning!
    &lt;/div>
&lt;/div></code></pre>
</div>


##加深颜色Message

背景色加深 `.dark`类提供了选择

消息类型对应相应的icon


<div class="example-content"><div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close fa fa-close"></span>
        <i class="fa fa-bell margin-r-10"></i>News!  fa fa-bell
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close fa fa-close"></span>
        <i class="fa fa-info-circle margin-r-10"></i>Info! fa fa-info-circle
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close fa fa-close"></span>
        <i class="fa fa-check-circle margin-r-10"></i>Success! fa fa-check-circle
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close fa fa-close"></span>
        <i class="fa fa-times-circle margin-r-10"></i>Danger! fa fa-times-circle
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close fa fa-close"></span>
        <i class="fa fa-warning margin-r-10"></i>Warning! fa fa-warning
    </div>
</div>
</div>

<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;div class="u-message dark u-mesnews active" >    
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        &lt;i class="fa fa-bell margin-r-10">&lt;/i>News!
    &lt;/div>
    &lt;div class="u-message dark u-mesinfo active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        &lt;i class="fa fa-info-circle margin-r-10">&lt;/i>Info!
    &lt;/div>
    &lt;div class="u-message dark u-messuccess active">    
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        &lt;i class="fa fa-check-circle margin-r-10">&lt;/i>Success!
    &lt;/div>
    &lt;div class="u-message dark u-mesdanger active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        &lt;i class="fa fa-times-circle margin-r-10">&lt;/i>Danger!
    &lt;/div>
    &lt;div class="u-message dark u-meswarning active">
        &lt;span class="u-msg-close fa fa-close">&lt;/span>
        &lt;i class="fa fa-warning margin-r-10">&lt;/i>Warning!
    &lt;/div>
&lt;/div></code></pre>
</div>

##点击触发Message
<div class="example-content"><button id="msgBtn" class="u-button" >Success</button>
<button id="errorBtn" class="u-button" >Error</button>
<button id="warnBtn" class="u-button" >Warning</button>
</div>

<div class="examples-code"><pre><code>&lt;button id="msgBtn" class="u-button" >Success&lt;/button>
&lt;button id="errorBtn" class="u-button" >Error&lt;/button>
&lt;button id="warnBtn" class="u-button" >Warning&lt;/button></code></pre>
</div>



