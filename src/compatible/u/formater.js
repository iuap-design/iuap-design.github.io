/**
 * 数据格式化工具
 */
+function($, moment) {
	'use strict';

	function NumberFormater(precision) {
		this.precision = precision;
	};

	NumberFormater.prototype.update = function(precision) {
		this.precision = precision;
	}


	NumberFormater.prototype.format = function(value) {
		if(!$.isNumeric(value)) return "";

		// 以0开头的数字将其前面的0去掉
		while ((value + "").charAt(0) == "0" && value.length > 1) {
			value = value.substring(1);
		}
		var result = value;
		if($.isNumeric(this.precision)) {
			if(window.BigNumber) {
				// 已经引入BigNumber
				result = (new BigNumber(value)).toFixed(this.precision)
			} else {
				var digit = parseFloat(value);
				// 解决toFixed四舍五入问题，如1.345 
				result = (Math.round(digit* Math.pow(10, this.precision)) / Math.pow(10, this.precision)).toFixed(this.precision);
			}
			if (result == "NaN")
				return "";
		}

		
		return result;
	};

	function DateFormater(pattern) {
		this.pattern = pattern;
	};

	DateFormater.prototype.update = function(pattern) {
		this.pattern = pattern;
	}


	DateFormater.prototype.format = function(value) {
		return moment(value).format(this.pattern)
	};

  	window.DataPlugins = window.DataPlugins ? window.DataPlugins :  {};

  	window.DataPlugins.formater = {
		getter:function(options){

		},
		setter:function(options, value){
			var json = JSON.parse($(this).attr('data-plugin'));
			var formater = window.DataPlugins.formater[options.type];
			if(options.type == 'number') {
				formater = formater ? formater.update(json.formater.precision) : new NumberFormater(json.formater.precision);
			} else if(options.type == 'date') {
				formater = formater ? formater.update(json.formater.pattern) : new DateFormater(json.formater.pattern);
			}
			this.showValue = formater.format(value);
			this.trueValue = this.showValue;
		}
	}
	
	$.NumberFormater = NumberFormater
	$.DateFormater = DateFormater
	
}($, moment);





