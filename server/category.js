const fs = require('fs');
const path = require('path');
const scssPath = path.resolve(__dirname,'../node_modules/neoui/scss/ui');
const jsPath = path.resolve(__dirname, '../node_modules/neoui/js');

// 获取插件中文名
const neouiJson = require('./neoui.json');
const neouiJsonStyle = neouiJson.stylePlugin;
const neouiJsonJs = neouiJson.jsPlugin;
const neouiJsonTheme = neouiJson.theme;

var stylePlugin, jsPlugin, styleAry, jsAry;
stylePlugin = [];
styleAry = [];
jsAry = [];


fs.readdir(scssPath, function(err, scssFiles) {
	scssFiles.forEach(function(scssFile){
		var fileName = scssFile.replace(/\.scss/,'');
		styleAry.push(fileName);

	});
	fs.readdir(jsPath, function(err, jsFiles){
		jsFiles.forEach(function(jsFile){
			var fileName = jsFile.replace(/\.js/,'');
			jsAry.push(fileName);
			
		});

		// css插件集合: stylePlugin
		styleAry.forEach(function(styleMatch) {
			var matchResult = jsAry.indexOf(styleMatch)
			if(matchResult == -1) {
				stylePlugin.push(styleMatch);
			}
		});

		// js插件集合: jsPlugin
		jsPlugin = jsAry;
		var aryRemove = function(ary,ele) {
			var indexNum = ary.indexOf(ele);
			if(ele != -1) {
				ary.splice(indexNum, 1);
			}
			return ary;
		};
		aryRemove(jsPlugin,'index');

		// 写入package/data/index.json
		var concatStr =
		['{',
			'    "mod":{',
			'        "polyfill": {',
			'            "title": "IE8 Polyfill模块",',
			'            "description": "用于兼容ie8,包含respond,html5,及框架基础函数支持",',
			'            "catlog": "polyselect",',
			'            "list":[',
			'                {"name":"核心函数支持","file":"u-polyfill-core"},',
			'                {"name":"响应式支持","file":"u-polyfill-respond"}',
			'            ]',
			'        },',
			'        "neoui": {',
			'            "title": "NeoUI组件模块",',
			'            "description": "UI控件",',
			'            "catlog": "neoselect",',
			'            "list":[',
			'                {"name":"autocomplete","file":"neoui-autocomplete"},',
			'                {"name":"button","file":"neoui-button"},',
			'                {"name":"checkbox","file":"neoui-checkbox"},',
			'                {"name":"clockpicker","file":"neoui-clockpicker"},',
			'                {"name":"combo","file":"neoui-combo"},',
			'                {"name":"combobox","file":"neoui-combobox"},',
			'                {"name":"data-table","file":"neoui-data-table"},',
			'                {"name":"datetimepicker","file":"neoui-datetimepicker"},',
			'                {"name":"dialog","file":"neoui-dialog"},',
			'                {"name":"layout.md","file":"neoui-layout.md"},',
			'                {"name":"layout.nav","file":"neoui-layout.nav"},',
			'                {"name":"loader","file":"neoui-loader"},',
			'                {"name":"loading","file":"neoui-loading"},',
			'                {"name":"menu","file":"neoui-menu"},',
			'                {"name":"message","file":"neoui-message"},',
			'                {"name":"month","file":"neoui-month"},',
			'                {"name":"multilang","file":"neoui-multilang"},',
			'                {"name":"navmenu","file":"neoui-navmenu"},',
			'                {"name":"pagination","file":"neoui-pagination"},',
			'                {"name":"progress","file":"neoui-progress"},',
			'                {"name":"radio","file":"neoui-radio"},',
			'                {"name":"refer","file":"neoui-refer"},',
			'                {"name":"slidePanel","file":"neoui-slidePanel"},',
			'                {"name":"switch","file":"neoui-switch"},',
			'                {"name":"tabs","file":"neoui-tabs"},',
			'                {"name":"textfield","file":"neoui-textfield"},',
			'                {"name":"time","file":"neoui-time"},',
			'                {"name":"tooltip","file":"neoui-tooltip"},',
			'                {"name":"validate","file":"neoui-validate"},',
			'                {"name":"year","file":"neoui-year"},',
			'                {"name":"yearmonth","file":"neoui-yearmonth"}',
			'            ]',
			'        },',
			'        "neocss": {',
			'            "title": "CSS组件",',
			'            "description": "CSS组件描述",',
			'            "catlog": "cssselect",',
			'            "list":[',
			'                {',
			`                    "name": "test3",`,
			`                    "file": "test3.js"`,
			'                },',
			'                {',
			'                    "name": "test4",',
			'                    "file": "test4.js"',
			'                }',
			'            ]',
			'        }',			
			'    }',
			'}'].join("\n");

		// 数据整体包含:头部 + 内容 + 底部
		// 数据头部
		var dataHeadAry =['{'];

		/**
		 * panel1:主题color内容
		 */
		var themeHead = ['    "theme":{'];
		var themeAry   = ['        "list":[',];
		for(var ti=0,theLen = neouiJsonTheme.length; ti < theLen; ti++){
			var tiStr;
			var tiStrVal = JSON.stringify(neouiJsonTheme[ti]);
			// console.log(tiStrVal);
			ti < theLen -1 ? tiStr = `            ${tiStrVal},`: tiStr = `            ${tiStrVal}`;
			themeAry.push(tiStr);
		}
		var themeEndAry = [
			'        ]',
			'    },',
		];
		var panelTheme = themeHead.concat(themeAry,themeEndAry);

		/**
		 * panel2:勾选面板内容
		 */
		var checkHead = ['    "mod":{'];

		// polyfill start
		var polyDataAry = [
			'        "polyfill": {',
			'            "title": "IE8 Polyfill模块",',
			'            "description": "用于兼容ie8,包含respond,html5,及框架基础函数支持",',
			'            "catlog": "polyselect",',
			'            "list":[',
			'                {"name":"核心函数支持","file":"u-polyfill-core"},',
			'                {"name":"响应式支持","file":"u-polyfill-respond"}',
			'            ]',
			'        },',
		];
		// polyfill end

		// css plugin start
		var styleDataAry = [
			'        "neocss": {',
			'            "title": "CSS组件",',
			'            "description": "CSS组件描述",',
			'            "catlog": "cssselect",',
			'            "list":[',
		];
		for(var si = 0, sLen = stylePlugin.length; si < sLen; si ++) {
			var siStr;
			var siName = neouiJsonStyle[stylePlugin[si]];
			si < sLen - 1 ? siStr = `                {"name":"${siName}","file":"${stylePlugin[si]}"},` : siStr = `                {"name":"${siName}","file":"${stylePlugin[si]}"}`;
			styleDataAry.push(siStr);
		}
		var styleEndAry = [
			'            ]',
			'        },',
		];
		var styleDataConcat = styleDataAry.concat(styleEndAry);
		// css plugin end

		// js start
		var jsDataAry = [
			'        "neojs": {',
			'            "title": "JS组件",',
			'            "description": "JS组件描述",',
			'            "catlog": "jsselect",',
			'            "list":[',
		];
		for(var ji = 0, jLen = jsPlugin.length; ji < jLen; ji ++) {
			var jiStr;
			var jsName = neouiJsonJs[jsPlugin[ji]];
			ji < jLen - 1 ? jiStr = `                {"name":"${jsName}","file":"${jsPlugin[ji]}"},` : jiStr = `                {"name":"${jsName}","file":"${jsPlugin[ji]}"}`;
			jsDataAry.push(jiStr);
		}
		var jsEndAry = [
			'            ]',
			'        },',
		];
		var jsDataConcat = jsDataAry.concat(jsEndAry);
		// js end


		// keroadapter
		var adapterDataAry = [
			'        "keroadapter": {',
			'            "title": "KeroAdapter",',
			'            "description": "实现Neoui数据绑定",',
			'            "catlog": "adselect",',
			'            "list":[',
			'                {"name":"UI组件数据绑定","file":"keroadapter"}',
			'            ]',
			'        }'
		];
		
		var checkEnd = ['    }'];
		var panelCheck = checkHead.concat(polyDataAry, styleDataConcat, jsDataConcat, adapterDataAry, checkEnd);

		// 数据底部
		var dataEndAry = ['}'];

		// 合并所有数据
		var totalConcat = dataHeadAry.concat(panelTheme, panelCheck, dataEndAry).join('\n');

		// 写入文件
		var indexPath = path.resolve(__dirname,'../src/data/package/index.json')
		fs.writeFileSync(indexPath, totalConcat, 'utf-8', 'w');

	});
});


