var toggleBtn = document.querySelector('#condition-toggle');
u.on(toggleBtn, 'click', function(){
  var conditionRow = document.querySelector('#condition-row');
  var toggleIcon = this.querySelector('i');
  if (u.hasClass(conditionRow, 'u-visible')){
      u.removeClass(conditionRow, 'u-visible').addClass(conditionRow, 'u-not-visible');
      u.removeClass(toggleIcon, 'uf-uparrow').addClass(toggleIcon, 'uf-anglearrowdown');
       this.querySelector('span').innerText='高级';
  }else{
    u.removeClass(conditionRow, 'u-not-visible').addClass(conditionRow, 'u-visible');
    u.removeClass(toggleIcon, 'uf-anglearrowdown').addClass(toggleIcon, 'uf-uparrow');
     this.querySelector('span').innerText='收起';
  }
})

var inputDom=document.querySelectorAll('input');
var searchbtn=document.querySelector('[data-role="searchbtn"]');
var clearbtn=document.querySelector('[data-role="clearbtn"]');
var inputlen=inputDom.length;
var ifuse=false;//是否可用

var domshasvalue=function(){
     for(var i=0;i<inputlen;i++){
        if(inputDom[i].value.length>0){
            return true;
        }   
     }
     return false;
}
if(inputlen>0){
    for(var i=0;i<inputlen;i++){
        
        u.on(inputDom[i],'blur',function(){
            ifuse=false;
            if(this.value&&this.value.length>0){ //如果本元素失去焦点时有value则按钮直接可用，
                ifuse=true;
            }
            if(!ifuse){//如果离开时无value则查看其它框是否有值
                ifuse=domshasvalue();
            }
            if(ifuse){//有值时去除不可用样式
                u.removeClass(searchbtn,'disable');
                u.removeClass(clearbtn,'disable');
            }else{//没值时添加不可用样式
                u.addClass(searchbtn,'disable');
                u.addClass(clearbtn,'disable');
            }
        });
    }
}
