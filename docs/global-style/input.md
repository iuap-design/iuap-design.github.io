# input控件


# 示例


##不可输入框
在普通输入框中添加`disabled` 属性

<div class="example-content"><input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">
</div>
<div class="examples-code"><pre><code>&lt;input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">
</code></pre>
</div>

##带有后缀的输入框

<div class="example-content"><div class="u-input-group u-has-feedback">
    <input type="email" class="u-form-control" placeholder="jane.doe@example.com">
    <span class="u-form-control-feedback uf uf-magnifyingglass"></span>
</div></div>
<div class="examples-code"><pre><code>&lt;div class="u-input-group u-has-feedback">
    &lt;input type="email" class="u-form-control" placeholder="jane.doe@example.com">
    &lt;span class="u-form-control-feedback uf uf-magnifyingglass">&lt;/span>
&lt;/div></code></pre>
</div>

##必输项input框
当input框失去焦点时，校验输入的内容，如果内容长度大于0则隐藏必输字符`*`,否则显示
<div class="example-content ex-hide"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}
</style></div>
<div class="example-content"><div class="u-form-group">
    <label for="exampleInput3">必输:</label>
    <div class="u-input-group u-has-feedback must-in">
        <div class="u-input-group-before " style="color: red;">*</div>
        <input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        <span class="u-form-control-feedback uf uf-magnifyingglass"></span>
    </div>
</div></div>
<div class="example-content ex-hide"><script>var mustinDom=document.querySelectorAll('.must-in input');
var mustinlen=mustinDom.length;
var checkInput=function(){
    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
    if(this.value.length>0){
        this.previousElementSibling.innerHTML='';
    }else{
        this.previousElementSibling.innerHTML='*';
    }
}
if(mustinlen>0){
    for(var i=0;i<mustinlen;i++){
        
        u.on(mustinDom[i],'blur',checkInput);

        u.on(mustinDom[i],'keydown',function(){
        	this.previousElementSibling.innerHTML='';
        });
    }
}

</script></div>
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
<div class="examples-code"><pre><code>var mustinDom=document.querySelectorAll('.must-in input');
var mustinlen=mustinDom.length;
var checkInput=function(){
    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
    if(this.value.length>0){
        this.previousElementSibling.innerHTML='';
    }else{
        this.previousElementSibling.innerHTML='*';
    }
}
if(mustinlen>0){
    for(var i=0;i&lt;mustinlen;i++){
        
        u.on(mustinDom[i],'blur',checkInput);

        u.on(mustinDom[i],'keydown',function(){
        	this.previousElementSibling.innerHTML='';
        });
    }
}
</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="u-form-group">
    &lt;label for="exampleInput3">必输:&lt;/label>
    &lt;div class="u-input-group u-has-feedback must-in">
        &lt;div class="u-input-group-before " style="color: red;">*&lt;/div>
        &lt;input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        &lt;span class="u-form-control-feedback uf uf-magnifyingglass">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
</div>

##普通输入框
在普通的input元素上添加`u-form-control`样式
<div class="example-content ex-hide"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}


</style></div>
<div class="example-content"><input type="text" class="u-form-control" id="exampleInput3"  placeholder="jane.doe@example.com"></div>
<div class="examples-code"><pre><code>&lt;input type="text" class="u-form-control" id="exampleInput3"  placeholder="jane.doe@example.com"></code></pre>
</div>
<div class="examples-code"><pre><code>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}

</code></pre>
</div>


<!--### 示例1

示例1说明

### 示例2

示例2说-->


