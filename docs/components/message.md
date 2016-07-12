# message控件

用于即时信息的提示，消息背景色取决于消息类型，易可添加相对应的`icon`

# 如何使用

给父元素添加`.u-message`类
自定义类型背景  例如new  在父元素添加`.u-mesnews`类

# 示例


##基础Message

消息类型对应不同class属性则显示不同的背景色

<div class="example-content"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style></div>
<div class="example-content"><div class="example">
    <div class="u-message u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        News!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Info!
    </div>
    <div class="u-message u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        Success!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Danger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Warning!
    </div>
</div>
</div>
<div class="examples-code"><pre><code>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;div class="u-message u-mesnews active" >    
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        News!
    &lt;/div>
    &lt;div class="u-message u-mesinfo active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        Info!
    &lt;/div>
    &lt;div class="u-message u-messuccess active">    
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        Success!
    &lt;/div>
    &lt;div class="u-message u-mesdanger active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        Danger!
    &lt;/div>
    &lt;div class="u-message u-meswarning active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        Warning!
    &lt;/div>
&lt;/div></code></pre>
</div>

##带`icon`的加深颜色版Message

背景色加深 `.dark`类提供了选择

消息类型对应相应的icon

<div class="example-content"><div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-bellmusicaltool margin-r-10"></i>News!
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="fa fa-info-circle margin-r-10"></i>Info!
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-checkedsymbol margin-r-10"></i>Success!
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-crossmarkonablackcirclebackground margin-r-10"></i>Danger!
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="fa fa-warning margin-r-10"></i>Warning!
    </div>
</div>
</div>
<div class="example-content"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style></div>
<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;div class="u-message dark u-mesnews active" >    
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        &lt;i class="uf uf-bellmusicaltool margin-r-10">&lt;/i>News!
    &lt;/div>
    &lt;div class="u-message dark u-mesinfo active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        &lt;i class="fa fa-info-circle margin-r-10">&lt;/i>Info!
    &lt;/div>
    &lt;div class="u-message dark u-messuccess active">    
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        &lt;i class="uf uf-checkedsymbol margin-r-10">&lt;/i>Success!
    &lt;/div>
    &lt;div class="u-message dark u-mesdanger active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        &lt;i class="uf uf-crossmarkonablackcirclebackground margin-r-10">&lt;/i>Danger!
    &lt;/div>
    &lt;div class="u-message dark u-meswarning active">
        &lt;span class="u-msg-close uf uf-removesymbol">&lt;/span>
        &lt;i class="fa fa-warning margin-r-10">&lt;/i>Warning!
    &lt;/div>
&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}</code></pre>
</div>

##点击触发Message
<div class="example-content"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}
</style></div>
<div class="example-content"><script>var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='<i class="uf uf-crossmarkonablackcirclebackground margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='<i class="uf uf-exclamationsign margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})
</script></div>
<div class="example-content"><button id="msgBtn" class="u-button" >Success</button>
<button id="errorBtn" class="u-button" >Error</button>
<button id="warnBtn" class="u-button" >Warning</button>
</div>
<div class="examples-code"><pre><code>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}</code></pre>
</div>
<div class="examples-code"><pre><code>var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='&lt;i class="uf uf-checkedsymbol margin-r-5">&lt;/i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='&lt;i class="uf uf-crossmarkonablackcirclebackground margin-r-5">&lt;/i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='&lt;i class="uf uf-exclamationsign margin-r-5">&lt;/i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;button id="msgBtn" class="u-button" >Success&lt;/button>
&lt;button id="errorBtn" class="u-button" >Error&lt;/button>
&lt;button id="warnBtn" class="u-button" >Warning&lt;/button></code></pre>
</div>


<!--### 示例1

示例1说明

### 示例2

示例2说-->