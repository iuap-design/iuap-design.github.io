# input控件


# 示例


##基础label

不同背景具有相应的class名
例如 u-tab-default 默认灰色
<div class="example-content">
    <style>.margin-r-10{
            margin-right: 10px; 
    }
    .example .u-message{
        position: inherit;
    }
    .example{
    	width: 300px;
    }


    </style>
    <div class="u-text">
        <input class="u-input"/>
        <label class="u-label">这是一个文本框</label>
    </div>

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
<div class="examples-code"><pre><code>&lt;div class="u-text">
    &lt;input class="u-input"/>
    &lt;label class="u-label">这是一个文本框&lt;/label>
&lt;/div>
</code></pre>
</div>

##基础label

不同背景具有相应的class名
例如 u-tab-default 默认灰色
<div class="example-content"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}
</style>
<div class="u-form-group">
    <div class="u-input-group u-has-feedback">
        <input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">
    </div>
</div>

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
<div class="examples-code"><pre><code>&lt;div class="u-form-group">
    &lt;div class="u-input-group u-has-feedback">
        &lt;input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">
    &lt;/div>
&lt;/div>
</code></pre>
</div>

##基础label

不同背景具有相应的class名
例如 u-tab-default 默认灰色
<div class="example-content"><style>.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
.example{
	width: 300px;
}
</style>
<div class="u-form-group">
    <label for="exampleInput3">必输:</label>
    <div class="u-input-group u-has-feedback must-in">
        <div class="u-input-group-before " style="color: red;">*</div>
        <input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        <span class="u-form-control-feedback fa fa-search"></span>
    </div>
</div>
<script>var mustinDom=document.querySelectorAll('.must-in input');
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

</script>
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
<div class="examples-code"><pre><code>&lt;div class="u-form-group">
    &lt;label for="exampleInput3">必输:&lt;/label>
    &lt;div class="u-input-group u-has-feedback must-in">
        &lt;div class="u-input-group-before " style="color: red;">*&lt;/div>
        &lt;input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        &lt;span class="u-form-control-feedback fa fa-search">&lt;/span>
    &lt;/div>
&lt;/div></code></pre>
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


<!--### 示例1

示例1说明

### 示例2

示例2说-->


