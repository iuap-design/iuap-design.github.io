+function($) {

	var DateTime = $.InputComp.extend({
		initialize: function(element, options, viewModel) {
			var self = this
			this.outerDiv = element
			element = $(element).find('input')[0]
			DateTime.superclass.initialize.apply(this, arguments)
			this.maskerMeta = iweb.Core.getMaskerMeta('datetime') || {}
			this.maskerMeta.format = options['format'] || this.maskerMeta.format

			if (this.dataModel) {
				//处理数据精度
				if (this.hasDataTable) {
					this.dataModel.on(this.field + '.format.' +  $.DataTable.ON_CURRENT_META_CHANGE, function(event){
						self.setFormat(event.newValue)
					});
					this.maskerMeta.format = this.dataModel.getMeta(this.field, "format") || this.maskerMeta.format
				}
			}
			this.validType = 'datetime'
			if(!this.options.widgetParent){
				this.options.widgetParent = $("body")
			}	
			this.options.picker_type = "datetime";
			this.options.picker_type = "datetime";
			if(!options['format'])
				this.options.format = "YYYY-MM-DD HH:mm:ss";
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateTimeMasker(this.maskerMeta);
			element.value = this.getValue();
			this.create()
			this.comp = $(this.outerDiv).datetimepicker(this.options)
			if($.app){
				$(this.element).on("picker_open",function(){
					self.setShowValue(self.getValue())
				}).on("picker_close",function(){
					self.setValue(this.value)
				})
			}
		},
		create: function() {
			var self = this
			if (this.dataModel) {
				//处理数据绑定
				if (this.hasDataTable) {

					this.dataModel.on(this.field + "." + $.DataTable.ON_CURRENT_VALUE_CHANGE, function (event) {
						self.modelValueChange(event.newValue);
					});


					this.dataModel.on($.DataTable.ON_ENABLE_CHANGE, function (event) {
						if (event.enable === true) {
							var _enable = self.dataModel.getRowMeta(self.field, 'enable');
							if (_enable === true)
								self.setEnable(_enable);
						} else {
							self.setEnable(event.enable);
						}
					});

					this.dataModel.on(this.field + '.enable.' + $.DataTable.ON_CURRENT_META_CHANGE, function (event) {
						self.setEnable(event.newValue);
					});

					this.dataModel.on(this.field + '.enable.' + $.DataTable.ON_ROW_META_CHANGE, function (event) {
						self.setEnable(event.newValue);
					});


					this.dataModel.on(this.field + '.required.' + $.DataTable.ON_CURRENT_META_CHANGE, function (event) {
						self.setRequired(event.newValue);
					});

					this.dataModel.on(this.field + '.regExp.' + $.DataTable.ON_CURRENT_META_CHANGE, function (event) {
						self.regExp = event.newValue;
					});
					this.dataModel.on($.DataTable.ON_CURRENT_ROW_CHANGE, function () {
						var row = self.dataModel.getCurrentRow();
						if (!row) {
							self.modelValueChange('');
							self.setEnable(false);
						} else {
							self.modelValueChange(row.getValue(self.field));
							if (this.enable === true) {
								var _enable = row.getMeta(self.field, 'enable');
								if (_enable === true)
									self.setEnable(_enable);
							} else {
								self.setEnable(this.enable);
							}
							self.setRequired(row.getMeta(self.field, 'required'));
						}
					});
					this.dataModel.on($.DataTable.ON_CURRENT_UPDATE, function (event) {
						var row = event.rows[0]
						self.modelValueChange(row.getValue(self.field));
					});

					this.setEnable(this.dataModel.isEnable(this.field))
					this.setRequired(this.dataModel.getMeta(this.field, "required"))
					this.regExp = this.dataModel.getMeta(this.field, "regExp")
				} else {
					this.dataModel.subscribe(function (value) {
						self.modelValueChange(value)
					})
				}
				this.modelValueChange(this.hasDataTable ? this.dataModel.getValue(this.field) : this.dataModel())
			}

			$(this.element).focus(function(e) {
				if($(".dropdown-menu").length == 0) {
					self.onFocusin ? self.onFocusin(e) : self.setShowValue(self.getValue())
				}
				//$(this).select();
			})
			$(this.element).on('change.date',function(e) {
				if (!self.doValidate() && self._needClean()){
					self.element.value = self.getShowValue()
					//self.setValue(self.getValue())
				}
				else
					self.setValue(self.element.value)
			})

			if (this.validType) {
				this.validate = $(this.element).validate({
					single: true,
					validMode: 'manually',
					required: this.required,
					validType: this.validType,
					placement: this.placement,
					maxLength: this.maxLength,
					minLength: this.minLength,
					max: this.max,
					min: this.min,
					maxNotEq: this.maxNotEq,
					minNotEq: this.minNotEq,
					reg: this.regExp,
					midValidateCallBack: this.midValidateCallBack,
					validateCallBack: this.validateCallBack
				})
			};



		},
		modelValueChange: function(value) {
			if (this.slice) return
			value = value || ""
			this.trueValue = value
			var showValue = u.date.format(value, this.maskerMeta.format); //this.masker.format(value).value
			this.setShowValue(showValue)
		},
		setValue: function(value) {
			this.trueValue = value
			this.setShowValue(this.trueValue) //TODO fomat格式			
			this.slice = true
			this.setModelValue(value)
			this.slice = false
			//this.trigger(DateTime.EVENT_VALUE_CHANGE, this.trueValue)
		},
		getValue : function() {
			return this.trueValue
		},
		setShowValue : function(showValue) {
			this.showValue = showValue
//			this.element.value = showValue
			$(this.element).val(showValue);
			if($(this.outerDiv).data("DateTimePicker")){
				$(this.outerDiv).data("DateTimePicker").date(showValue)
			}
		},
		getShowValue: function() {
			return this.showValue
		},
		/**
		 * 修改显示格式
		 * @param {Integer} precision
		 */
		setFormat: function(format){

			if (this.maskerMeta.format == format) return
			this.maskerMeta.format = format
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateTimeMasker(this.maskerMeta);
		},
		setEnable: function(enable) {
			if (enable === true || enable === 'true') {
				this.enable = true
				if(!$.app){
					$(this.element).removeAttr('readonly')
				}
				$(this.element).attr('h7picker','true')
				$(this.element).parent().removeClass('disablecover')

			} else if (enable === false || enable === 'false') {
				this.enable = false
				$(this.element).attr('h7picker','false')
				$(this.element).attr('readonly', 'readonly')
				$(this.element).parent().addClass('disablecover')

			}
		},
		Statics: {
			compName: 'datetime'
		}
	})

	var DateComp = DateTime.extend({
		initialize: function(element, options, viewModel) {
			var self = this
			this.outerDiv = element
			element = $(element).find('input')[0]
			DateTime.superclass.initialize.apply(this, arguments)
			this.maskerMeta = iweb.Core.getMaskerMeta('date') || {}
			this.maskerMeta.format = options['format'] || this.maskerMeta.format

			if (this.dataModel) {
				//处理数据精度
				if (this.hasDataTable) {
					//this.dataModel.refRowMeta(this.field, "format").subscribe(function(format){
					//	self.setFormat(format)
					//})
					this.dataModel.on(this.field + '.format.' +  $.DataTable.ON_CURRENT_META_CHANGE, function(event){
						self.setFormat(event.newValue)
					});

					this.maskerMeta.format = this.dataModel.getMeta(this.field, "format") || this.maskerMeta.format

				}
			}
			//this.validType = 'date'
			if(!this.options.widgetParent){
				this.options.widgetParent = $("body")
			}	
			this.options.picker_type = "datecomp";
			if(!options['format'])
				this.options.format = "YYYY-MM-DD";
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateMasker(this.maskerMeta);
			element.value = this.getValue();
			this.create()

			this.comp = $(this.outerDiv).datetimepicker(this.options)
			//$(this.element).focusin(function(e) {
			//	self.setShowValue(self.getValue())
            //
			//}).on('blur',function(e) {
			//	if (!self.doValidate() && self._needClean()){
			//		//self.element.value = self.getShowValue()
			//		self.setShowValue(self.getShowValue())
			//	}
			//	else
			//	//self.setValue(self.element.value)
			//		self.setValue(this.value)
			//})
		},
		/**
		 * 修改显示格式
		 * @param {Integer} precision
		 */
		setFormat: function(format){
			if (this.maskerMeta.format == format) return
			this.maskerMeta.format = format
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateMasker(this.maskerMeta);
		},
		Statics: {
			compName: 'date'
		}
	})
	var TimeComp = DateTime.extend({
		initialize: function(element, options, viewModel) {
			var self = this
			this.outerDiv = element
			element = $(element).find('input')[0]
			DateTime.superclass.initialize.apply(this, arguments)
			this.maskerMeta = iweb.Core.getMaskerMeta('time') || {}
			this.maskerMeta.format = options['format'] || this.maskerMeta.format

			if (this.dataModel) {
				//处理数据精度
				if (this.hasDataTable) {
					//this.dataModel.refRowMeta(this.field, "format").subscribe(function(format){
					//	self.setFormat(format)
					//})
					this.dataModel.on(this.field + '.format.' +  $.DataTable.ON_CURRENT_META_CHANGE, function(event){
						self.setFormat(event.newValue)
					});

					this.maskerMeta.format = this.dataModel.getMeta(this.field, "format") || this.maskerMeta.format

				}
			}
			//this.validType = 'date'
			if(!this.options.widgetParent){
				this.options.widgetParent = $("body")
			}	
			this.options.picker_type = "timecomp";
			if(!options['format'])
				this.options.format = "HH:mm:ss";
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateMasker(this.maskerMeta);
			element.value = this.getValue();
			this.create()

			this.comp = $(this.outerDiv).datetimepicker(this.options)
		},
		/**
		 * 修改显示格式
		 * @param {Integer} precision
		 */
		setFormat: function(format){
			if (this.maskerMeta.format == format) return
			this.maskerMeta.format = format
			this.formater = new $.DateFormater(this.maskerMeta.format);
			//this.masker = new DateMasker(this.maskerMeta);
		},
		Statics: {
			compName: 'time'
		}
	})
	if ($.compManager){
		$.compManager.addPlug(DateTime)
		$.compManager.addPlug(DateComp)
		$.compManager.addPlug(TimeComp)
	}
	// $.DateTime = DateTime;
	// $.DateComp = DateComp;
	// $.TimeComp = TimeComp;
	
}($);