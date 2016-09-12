// 下拉框开始
u.compMgr.updateComp();
document.getElementById('combo4')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
document.getElementById('combo2')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
// 下拉框结束

// 复选框开始
// 复选框结束

// 输入框开始
	var mustinDom=document.querySelectorAll('.must-in input');
	var mustinlen=mustinDom.length;
	var checkInput=function(){
	    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
	    if(this.value.length>0){
	        this.previousElementSibling.innerHTML='';
	    }else{
	        this.previousElementSibling.innerHTML='*';
	    }
	};
	if(mustinlen>0){
	    for(var i=0;i<mustinlen;i++){
	        
	        u.on(mustinDom[i],'blur',checkInput);

	        u.on(mustinDom[i],'keydown',function(){
	        	this.previousElementSibling.innerHTML='';
	        });
	    }
	}
// 输入框结束

// 自动完成开始
	var sourceValue = [
		{
			label : "C++",
			value: "C++"
		},
		{
			label : 'Java',
			value: 'Java'
		},
		{
			label : 'Python',
			value: 'Python'
		},
		{
			label : 'JavaScript',
			value: 'JavaScript'
		},
		{
			label : 'C#',
			value: 'C#'
		},
		{
			label : 'C',
			value: 'C'
		},
		{
			label : 'Jython',
			value: 'Jython'
		},
		{
			label : 'Html',
			value: 'Html'
		},
		{
			label : 'html',
			value: 'html'
		}
	];

	new u.Autocomplete({
		el:'#test1',
		source: sourceValue,
		multiSelect: true,
		select: function(item, ac){
		}
	});
// 自动完成结束


  