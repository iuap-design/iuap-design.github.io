u.on(window, 'load', function() {
	document.querySelector('#p1')['u.Progress'].setProgress(69);
	document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);
	document.querySelector('#p11')['u.Progress'].setProgress(69);
	document.querySelector('#p12')['u.Progress'].setProgress(69);
	document.querySelector('#p13')['u.Progress'].setProgress(69);
	document.querySelector('#p14')['u.Progress'].setProgress(69);
	document.querySelector('#p15')['u.Progress'].setProgress(69);
	document.querySelector('#p16')['u.Progress'].setProgress(69);
	document.querySelector('#p17')['u.Progress'].setProgress(69);
	document.querySelector('#p21')['u.Progress'].setProgress(69);
	document.querySelector('#p21')['u.Progress'].setProgressHTML('69%');
	document.querySelector('#p22')['u.Progress'].setProgress(69);
	document.querySelector('#p23')['u.Progress'].setProgress(69);
	document.querySelector('#p24')['u.Progress'].setProgress(69);
	document.querySelector('#p25')['u.Progress'].setProgress(69);
	document.querySelector('#p26')['u.Progress'].setProgress(69);
	document.querySelector('#p27')['u.Progress'].setProgress(69);
	document.querySelector('#p28')['u.Progress'].setProgress(69);
	document.querySelector('#p29')['u.Progress'].setProgress(69);
	document.querySelector('#p31')['u.Progress'].setProgressHeight(10);
	document.querySelector('#p32')['u.Progress'].setProgressHeight(20);
	document.querySelector('#p33')['u.Progress'].setProgressHeight(30);
	document.querySelector('#p34')['u.Progress'].setProgressHeight(40);
	document.querySelector('#p35')['u.Progress'].setProgressHeight(50);
	document.querySelector('#p36')['u.Progress'].setProgressHeight(60);
	document.querySelector('#p37')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p38')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p39')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p40')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p41')['u.Progress'].setProgressHeight(69);
//        document.querySelector('#p44')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p45')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p45')['u.Progress'].setProgressHTML('6<br>9<br>%<br>');
	document.querySelector('#p46')['u.Progress'].setProgressHeight(69);
	document.querySelector('#p51')['u.Progress'].setProgress(10);
	document.querySelector('#p51')['u.Progress'].setProgressHTML('10%');
	document.querySelector('#p52')['u.Progress'].setProgress(10);
	document.querySelector('#p53')['u.Progress'].setProgress(10);
});
$('#half').on('click',function(){move(50)});
$('#finish').on('click',function(){move(100)});
$('#reset').on('click',function(){move(10)});
function move(target) {
	document.querySelector('#p52')['u.Progress'].setProgress(target);
	document.querySelector('#p53')['u.Progress'].setProgress(target);
	document.querySelector('#p51')['u.Progress'].setProgress(target);
	var html=parseInt($('#p51').children('div').eq(0).html());
	var htmlTimer=window.setInterval(function () {
		if(html>target){html-=10;}else{html+=10;}
		if(html=target){
			window.clearInterval(htmlTimer);
		}
		document.querySelector('#p51')['u.Progress'].setProgressHTML(html+'%');
	},10);
}


//圆点加载条
var parLoad=document.getElementById('parentLoad');
var addBtn=document.getElementById('add');
var hideBtn=document.getElementById('hide');
var options={
	hasback:false,//不含有遮罩层
	parEle:parLoad//加载条的父元素
}
u.showLoader(options);
// 显示
u.on(addBtn,'click',function(){
	var centerContent='<i class="uf uf-fluffycloudsilhouette u-loader-centerContent"></i>';
	var opt1={
		hasback:true,
		hasDesc:true,//是否含有加载内容描述
		centerContent:centerContent
	};
	u.showLoader(opt1);
});
// 隐藏
u.on(hideBtn,'click',function(){
	u.hideLoader();
});