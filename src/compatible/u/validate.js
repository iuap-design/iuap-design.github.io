+ function($) {
	var Validate = function(element,options,form) {
		var self = this
		this.$element = element
		this.$form = form
		this.options = options
		this.required = false
		this.timeout = null
		//所有属性优先级 ：  options参数  > attr属性  > 默认值
		this.required = this.options['required']  ? this.options['required'] : this.$element.attr('required') ? true : false
		this.validType = this.options['validType'] ? this.options['validType'] :
			this.$element.attr('valid-type') ? this.$element.attr('valid-type') : null
		//校验模式  blur  submit
		this.validMode = this.options['validMode'] ? this.options['validMode'] :
			this.$element.attr('valid-mode') ? this.$element.attr('valid-mode') : Validate.DEFAULTS.validMode
		//空提示
		this.nullMsg = this.options['nullMsg'] ? this.options['nullMsg'] :
			this.$element.attr('null-msg') ? this.$element.attr('null-msg') : Validate.NULLMSG[this.validType]
		//是否必填
		if (this.required && !this.nullMsg)
			this.nullMsg = Validate.NULLMSG['required']
		//错误必填
		this.errorMsg = this.options['errorMsg'] ? this.options['errorMsg'] :
			$(element).attr('error-msg') ? this.$element.attr('error-msg') : Validate.ERRORMSG[this.validType]
		//正则校验
		this.regExp = this.options['reg'] ? this.options['reg'] :
			$(element).attr('reg') ? this.$element.attr('reg') : Validate.REG[this.validType]
		//提示div的id 为空时使用tooltop来提示
		this.tipId = this.options['tipId'] ? this.options['tipId'] :
			$(element).attr('tip-id') ? this.$element.attr('tip-id') : null
		//提示框位置
		this.placement = this.options['placement'] ? this.options['placement'] :
			$(element).attr('placement') ? this.$element.attr('placement') : Validate.DEFAULTS.placement
		//
		this.minLength = this.options['minLength'] > 0 ? this.options['minLength'] :
			$(element).attr('min-length') ? this.$element.attr('min-length') : null
		this.maxLength = this.options['maxLength'] > 0 ? this.options['maxLength'] :
			$(element).attr('max-length') ? this.$element.attr('max-length') : null
		this.min = this.options['min'] !== undefined  ? this.options['min'] :
			$(element).attr('min') !== undefined  ? this.$element.attr('min') : null
		this.max = this.options['max'] !== undefined ? this.options['max'] :
			$(element).attr('max') !== undefined ? this.$element.attr('max') : null
		this.minNotEq = this.options['minNotEq'] !== undefined ? this.options['minNotEq'] :
			$(element).attr('minNotEq') !== undefined ? this.$element.attr('minNotEq') : null
		this.maxNotEq = this.options['maxNotEq'] !== undefined ? this.options['maxNotEq'] :
			$(element).attr('maxNotEq') !== undefined ? this.$element.attr('maxNotEq') : null

		this.min = $.isNumeric(this.min) ? this.min : null
  		this.max = $.isNumeric(this.max) ? this.max : null
 		this.minNotEq = $.isNumeric(this.minNotEq) ? this.minNotEq : null
 		this.maxNotEq = $.isNumeric(this.maxNotEq) ? this.maxNotEq : null

 		this.validateCallBack = this.options['validateCallBack']
 		this.midValidateCallBack = this.options['midValidateCallBack']

		this.create()
	}

	Validate.tipTemplate = '<div class="tooltip" role="tooltip"><div class="tooltip-arrow tooltip-arrow-c"></div><div class="tooltip-arrow"></div><div class="tooltip-inner" style="color:#ed7103;border:1px solid #ed7103;background-color:#fff7f0;"></div></div>'

	Validate.NULLMSG = {
		"required": trans('validate.required', "不能为空！"),
		"integer": trans('validate.integer', "请填写整数！"),
		"float": trans('validate.float', "请填写数字！"),
		"zipCode": trans('validate.zipCode', "请填写邮政编码！"),
		"phone": trans('validate.phone', "请填写手机号码！"),
		"email": trans('validate.email', "请填写邮箱地址！"),
		"url": trans('validate.url', "请填写网址！"),
		"datetime": trans('validate.datetime', "请填写日期！")

	}

	Validate.ERRORMSG = {
		"integer": trans('validate.integer', "请填写整数！"),
		"float": trans('validate.float', "请填写数字！"),
		"zipCode": trans('validate.zipCode', "邮政编码格式不对！"),
		"phone": trans('validate.phone', "手机号码格式不对！"),
		"email": trans('validate.email', "邮箱地址格式不对！"),
		"url": trans('validate.url', "网址格式不对！"),
		"datetime": trans('validate.datetime', "日期格式不对！")
	}

	Validate.REG = {
		"integer": /^-?\d+$/,
		"float": /^-?\d+(\.\d+)?$/,
		"zipCode": /^[0-9]{6}$/,
		"phone": /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
		"email": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		"url": /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
		"datetime": /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/
				// /^((((19|20)\d{2})-(0?(1|[3-9])|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/
	}

	Validate.DEFAULTS = {
		validMode: 'blur',
		placement: "top"
	}

	Validate.fn = Validate.prototype

	Validate.fn.create = function() {
		var self = this
		this.$element.on('blur', function(e) {
			if (self.validMode == 'blur'){
				self.doValid()
			}
		}).on('focus', function(e) {
			//隐藏错误信息
			self.hideMsg()
		}).on('change', function(e) {
			//隐藏错误信息
			self.hideMsg()
		}).on('keydown', function(e) {
			var event = window.event || e;
			var tmp = self.$element.val();
			if(typeof self.midValidateCallBack == 'function') {
				var cbobj = {event: event, tempValue: tmp, inputEle: this};
				var rsl = self.midValidateCallBack.call(self, cbobj);
				if(rsl == false) return false; 
			}
			if(self["validType"] == "float"){
				
				if(event.shiftKey){
					event.returnValue=false;
					return false;
				}else if(event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
					// tab键 左箭头 右箭头 delete键
					return true;
				}else if(event.ctrlKey && (event.keyCode == 67 || event.keyCode == 86)){
					//复制粘贴
					return true;
				}else if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)||($.inArray(event.keyCode,[8,110,190,189,109]) > -1))){
					event.returnValue=false;
					return false;
				}else if((!tmp || tmp.indexOf(".") > -1) && (event.keyCode == 190 || event.keyCode == 110 )){
					event.returnValue=false;
					return false;
					
				}

				if(tmp && (tmp+'').split('.')[0].length >= 25) {
					return false;
					
				}

			}
			if(self["validType"] == "integer"){
				 if(event.shiftKey){
					event.returnValue=false;
					return false;
				}else if(event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
					// tab键 左箭头 右箭头 delete键
					return true;
				}else if(event.ctrlKey && (event.keyCode == 67 || event.keyCode == 86)){
					//复制粘贴
					return true;
				}else if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)||($.inArray(event.keyCode,[8,109,189]) > -1))){
					event.returnValue=false;
					return false;
				}

				if(tmp && (tmp+'').split('.')[0].length >= 25) {
					return false;
				}
			}

		})
	}

	Validate.fn.updateOptions = function(options){

	}

	Validate.fn.calLength = function(value) {
		if(this.validType == 'float') {
			if( (value+'').indexOf('.') >= 0 ) {
				return value.lengthb() - 1;
			}
		}
		return value.lengthb();
	}

	Validate.fn.doValid = function(options) {



		if(typeof this.validateCallBack == 'function') {
			var cbobj = {event: event, tempValue: pValue, inputEle: this.$element[0]};
			var rsl = this.validateCallBack.call(this, cbobj);
			if(rsl == false) return false; 
		}

		var pValue;
		this.showMsgFlag = true;
		if(options){
			pValue = options.pValue;
			this.showMsgFlag = options.showMsg;
		}
		this.needClean = false

		if (this.$element.attr("readonly")) return true
		var value = null
		if (typeof pValue != 'undefined')
			value = pValue
		else
			value = this.getValue()
		if (this.isEmpty(value) && this.required) {
			this.showMsg(this.nullMsg)
			return false
		} else if(this.isEmpty(value) && !this.required){
			return true
		}
		if (this.regExp) {
			var reg = new RegExp(this.regExp);
			if (typeof value == 'number')
				value = value + ""
			var r = value.match(reg);
			if (r === null || r === false){
				this.showMsg(this.errorMsg)
				this.needClean = true
				return false
			}
		}
		if (this.minLength){
			if (this.calLength(value) < this.minLength){
				this.showMsg("输入长度不能小于" + this.minLength + "位")
				return false
			}
		}
		if (this.maxLength){
			if (this.calLength(value) > this.maxLength){
				this.showMsg("输入长度不能大于" + this.maxLength + "位")
				return false
			}
		}
		if (this.max != undefined && this.max != null){
			if (parseFloat(value) > this.max){
				this.showMsg("输入值不能大于" + this.max)
				return false
			}
		}
		if(this.min != undefined && this.min != null){
			if (parseFloat(value) < this.min){
				this.showMsg("输入值不能小于" + this.min)
				return false
			}
		}
		if (this.maxNotEq != undefined && this.maxNotEq != null){
			if (parseFloat(value) >= this.maxNotEq){
				this.showMsg("输入值不能大于或等于" + this.maxNotEq)
				return false
			}
		}
		if(this.minNotEq != undefined && this.minNotEq != null){
			if (parseFloat(value) <= this.minNotEq){
				this.showMsg("输入值不能小于或等于" + this.minNotEq)
				return false
			}
		}
		return true
	}

//	Validate.fn.getValue = function() {
//		var inputval
//		if (this.$element.is(":radio")) {
//			inputval = this.$form.find(":radio[name='" + this.$element.attr("name") + "']:checked").val();
//		} else if (this.$element.is(":checkbox")) {
//			inputval = "";
//			this.$form.find(":checkbox[name='" + obj.attr("name") + "']:checked").each(function() {
//				inputval += $(this).val() + ',';
//			})
//		} else if (this.$element.is('div')) {
//			inputval = this.$element[0].trueValue;
//		} else {
//			inputval = this.$element.val();
//		}
//		inputval = $.trim(inputval);
//		return this.isEmpty(inputval) ? "" : inputval;
//	}

    Validate.fn.some = Array.prototype.some ?
		Array.prototype.some : function() {
			var flag;
			for (var i = 0; i < this.length; i++) {
				if (typeof arguments[0] == "function") {
					flag = arguments[0](this[i])
					if (flag) break;
				}
			}
			return flag;
		};

	Validate.fn.getValue = function() {
		var inputval = '';
		//checkbox、radio为u-meta绑定时
		var bool = this.some.call(this.$element.children('[type="checkbox"],[type="radio"]'), function(ele) {
			return ele.type == "checkbox" || ele.type == "radio"
		});
		if (this.$element.children().length > 0 && bool) {
			var eleArr = this.$element.find('[type="checkbox"],[type="radio"]')
			var ele = eleArr[0]
			if (ele.type == "checkbox") {
				this.$element.find(":checkbox[name='" + $(ele).attr("name") + "']:checked").each(function() {
					inputval += $(this).val() + ',';
				})
			} else if (ele.type == "radio") {
				inputval = this.$element.find(":radio[name='" + $(ele).attr("name") + "']:checked").val();
			}
		} else if (this.$element.is(":radio")) { //valid-type 绑定
			inputval = this.$element.parent().find(":radio[name='" + this.$element.attr("name") + "']:checked").val();
		} else if (this.$element.is(":checkbox")) {
			inputval = "";
			this.$element.parent().find(":checkbox[name='" + this.$element.attr("name") + "']:checked").each(function() {
				inputval += $(this).val() + ',';
			})
		} else if (this.$element.find('input').length > 0){
			inputval = this.$element.find('input').val()
		}else {
			inputval = this.$element.val();
		}
		inputval = $.trim(inputval);
		return this.isEmpty(inputval) ? "" : inputval;
	}

	Validate.fn.isEmpty = function(val) {
		return val === "" || val === undefined || val === null || val === $.trim(this.$element.attr("tip"));
	}

	Validate.fn.showMsg = function(msg) {
		if(this.showMsgFlag == false || this.showMsgFlag == 'false'){
			return;
		}
		var self = this
		if (this.tipId) {
			$('#' + this.tipId).html(msg).show()
		} else {
			var tipOptions = {
				"title": msg,
				"trigger": "manual",
				"selector": "validtip",
				"placement": this.placement,
				"container":"body"
			}
			if (Validate.tipTemplate)
				tipOptions.template = Validate.tipTemplate
			this.$element.tooltip(tipOptions)
			this.$element.tooltip('show')
			clearTimeout(this.timeout)
			this.timeout = setTimeout(function(){
				self.hideMsg();
			},3000)
		}
	}

	Validate.fn.hideMsg = function() {
		if (this.tipId) {
			$('#' + this.tipId).hide()
		} else {
			this.$element.tooltip('destroy')
		}
	}

	function Plugin($element, options) {
		var self = this
		this.$element = $element
		this.validates = []
		//单元素校验
		if (options && options['single'] && options['single'] == true)
			this.createValidate(this.$element, options)
		else{
			if (this.$element.children().length > 0) {
				var $form = this.$element.find('[valid-type], [required]')
				$form.each(function() {
					var $this = $(this)
					self.createValidate($this, options, $form)
				})
			} else
				this.createValidate(this.$element, options)
		}
		return this
	}

	Plugin.fn = Plugin.prototype

	Plugin.fn.createValidate = function($ele, options, $form) {
		var data = $ele.data('u.validate')
		var options = typeof options == 'object' && options
		if (!data) $ele.data('u.validate', (data = new Validate($ele, options, $form)))
		this.validates.push(data)
	}

	Plugin.fn.check = function(value) {
		var passed = true
//		if (this.$element.children().length > 0) {
//			var $form = this.$element.find('[valid-type], [required]')
//			$form.each(function() {
//				var validate = $(this).data('u.validate')
//				passed = validate.doValid() && passed
//			})
//		} else{
//			var validate = this.$element.data('u.validate')
//			passed = validate.doValid()
//		}
		for(var i = 0 ; i< this.validates.length; i++){
			passed = this.validates[i].doValid(value) && passed
		}
		return passed
	}

	/**
	 * 只有单一元素时使用
	 */
	Plugin.fn._needClean = function(){
		return this.validates[0].needClean
	}

	var old = $.fn.validate;

	$.fn.validate = function(options){
		var plug = new Plugin(this, options)
		return plug
	}

	$.fn.validate.noConflict = function() {
		$.fn.validate = old;
		return this;
	}

}($);
