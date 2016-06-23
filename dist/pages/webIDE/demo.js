var mainframe = document.querySelector('#demo-main-iframe');
var codeSource = document.querySelector('#code-source');

var params = location.href.match(/\?.*cv=(\w*)($|&)/), cv='dt';
if(params) cv = params[1]


var app;
var viewModel = {
	menuDT : new u.DataTable({
		meta:{
			name:{},
			sub:{type:'child',meta:{
				name:{},
				url:{},
				hasDt:{},
				sub:{type:'child',meta:{
					name:{},
					url:{},
					hasDt:{}
				}}
			}}
		}
	}),
	title : ko.observable(''),
	currentRow:null,
	currentUrl:"",
	currentContent:ko.observable(''),
	run: function(jump){
		// var t=document.getElementById("textareaCode").value;
		document.getElementById("html_code").value= htmlEditor.getValue();
		document.getElementById("css_code").value= cssEditor.getValue();;
		document.getElementById("script_code").value= scriptEditor.getValue();;
		// validateForm();
		document.getElementById("runForm").submit();
		if (jump !== false){
			var tab = document.getElementById("codeTab")['u.Tabs'];
			tab.show('tab-panel-4');
		}
	},
	switchToDt: function() {
		var hasDt = viewModel.currentRow.getValue('hasDt') || false;
		if (!hasDt){
			u.messageDialog('没有dataTable版本样例!');
		}else{
			$.ajax({
				type:'post',
				url:'../getWidgets',
				data:{wUrl:viewModel.currentUrl+ '/dt'},
				success:function(data){
					window.htmlEditor.setValue(data.html);
					window.cssEditor.setValue(data.css);
					window.scriptEditor.setValue(data.script);
					viewModel.run(false);
				}
			})
			// viewModel.codeVersion('dt')
		}

		// location=location.href.indexOf('cv=pure') > -1? location.href.replace('cv=pure', 'cv=dt') : location.href+'?cv=dt';
		// location.reload()

	},
	switchToPure: function() {
		viewModel.codeVersion('pure')
		// location=location.href.indexOf('cv=dt') > -1 ? location.href.replace('cv=dt', 'cv=pure') : location.href+'?cv=pure';
		// location.reload()

	},
	codeVersion: ko.observable(cv),
	//后面考虑废弃 openDoc openCustom
	downNullPage: function(){
		document.getElementById('uui_down').href = '/blank_project.rar';
		document.getElementById('uui_down').click();
	},
	showDoc: function(){
		this.currentContent('doc');

	},
	showCustom: function(){
		this.currentContent('custom');
	},
	showDemo: function(){
		this.currentContent('demo');
	}
}

app = u.createApp({
	el:'body',
	model:viewModel
})

var router = new Router();

var routerFunc = function(row, subRow, ssRow, url){
		return function(){
			viewModel.menuDT.setRowSelect(row);
			viewModel.menuDT.getValue('sub').setRowSelect(subRow);
			if(ssRow){
				viewModel.menuDT.getValue('sub').getValue('sub').setRowSelect(ssRow);
				viewModel.title(ssRow.getValue('name'));
				viewModel.currentRow = ssRow;
			}else{
				viewModel.title(subRow.getValue('name'));
				viewModel.currentRow = subRow;
			}
			viewModel.currentUrl = url;
			$.ajax({
				type:'post',
				url:'../getWidgets',
				data:{wUrl:url},
				success:function(data){
					window.htmlEditor.setValue(data.html);
					window.cssEditor.setValue(data.css);
					window.scriptEditor.setValue(data.script);
					viewModel.run(true);
				}
			})
			// mainframe.contentWindow.document.write(tpl.join(''));
			//mainframe.src = url;
		}
}

var resizeEditor = function(){
	var _bodyHeight = document.body.offsetHeight;
	var editorHeight = _bodyHeight - 64 - 49;
	// $('.u-navlayout-container').css('height',_bodyHeight - 61);
	$('#tab-panel-1').css('height',editorHeight);
	$('#tab-panel-2').css('height',editorHeight);
	$('#tab-panel-3').css('height',editorHeight);
	$('#tab-panel-4').css('height',editorHeight);
}

$(function(){
	window.htmlEditor = ace.edit("html_code_edit");
	window.cssEditor = ace.edit("css_code_edit");
	window.scriptEditor = ace.edit("script_code_edit");
	window.htmlEditor.session.setMode("ace/mode/html");
	window.cssEditor.session.setMode("ace/mode/css");
	window.scriptEditor.session.setMode("ace/mode/javascript");
	// window.htmlEditor.setTheme("ace/theme/github");
	// window.cssEditor.setTheme("ace/theme/github");
	// window.scriptEditor.setTheme("ace/theme/github");
	window.htmlEditor.setTheme("ace/theme/xcode");
	window.cssEditor.setTheme("ace/theme/xcode");
	window.scriptEditor.setTheme("ace/theme/xcode");
	resizeEditor();
	$(window).on('resize', function(){
		resizeEditor();
	})



	//加载菜单
	u.ajax({
		type:'get',
		// url: cv == 'pure' ? '/loadMenuPure' : '/loadMenu',
		url:'/loadMenu',
		success:function(data){
			data = JSON.parse(data);
			viewModel.menuDT.setSimpleData(data);
			//处理路由
			var rows = viewModel.menuDT.getAllRows();
			for (var i =0; i< rows.length; i++){
				var row = rows[i]
				var subDT = row.getValue('sub');
				var subRows = subDT.getAllRows();
				for (var j = 0; j< subRows.length; j++){
						var subRow = subRows[j];
						var url = subRow.getValue('url');
						if (!url){
							var ssDT = subRow.getValue('sub');
							var ssRows = ssDT.getAllRows();
							for (var k = 0; k < ssRows.length; k++){
								ssRow = ssRows[k]
								var url = ssRow.getValue('url');
								router.on(url, routerFunc(row, subRow,ssRow, url));
							}
						}else{
							router.on(url, routerFunc(row, subRow,null, url));
						}
				}
			}
			router.init();
			if(location.href.indexOf('#') == -1) {
				location=location.href+$('.u-nav-link-current').eq(0).attr('href');
			}

		}
	})

})
