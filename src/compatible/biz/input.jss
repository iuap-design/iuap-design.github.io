
u.InputAdapter.prototype.create = function(){
	var self = this;
        //处理数据绑定
        //this.dataModel.ref(this.field).subscribe(function(value) {
        //	self.modelValueChange(value)
        //})
        this.dataModel.on(this.field + "." + u.DataTable.ON_CURRENT_VALUE_CHANGE, function (event) {
            self.modelValueChange(event.newValue);
        });

        //处理只读
        //this.dataModel.refEnable(this.field).subscribe(function(value) {
        //		self.setEnable(value)
        //})
        //this.dataModel.on($.DataTable.ON_ENABLE_CHANGE, function(event){
        //	self.setEnable(event.enable);
        //});

        //this.dataModel.refRowMeta(this.field, 'enable').subscribe(function(value) {
        //	self.setEnable(value);
        //});


        this.dataModel.on(u.DataTable.ON_ENABLE_CHANGE, function (event) {
            if (event.enable === true) {
                var _enable = self.dataModel.getRowMeta(self.field, 'enable');
                if (_enable === true)
                    self.setEnable(_enable);
            } else {
                self.setEnable(event.enable);
            }
        });

        this.dataModel.on(this.field + '.enable.' + u.DataTable.ON_CURRENT_META_CHANGE, function (event) {
            self.setEnable(event.newValue);
        });

        this.dataModel.on(this.field + '.enable.' + u.DataTable.ON_ROW_META_CHANGE, function (event) {
            self.setEnable(event.newValue);
        });

        //处理必填
        //this.dataModel.refRowMeta(this.field, "required").subscribe(function(value) {
        //	self.setRequired(value)
        //})
        this.dataModel.on(this.field + '.required.' + u.DataTable.ON_CURRENT_META_CHANGE, function (event) {
            self.setRequired(event.newValue);
        });
        //this.dataModel.refRowMeta(this.field, "regExp").subscribe(function(value) {
        //	self.regExp = value
        //})
        this.dataModel.on(this.field + '.regExp.' + u.DataTable.ON_CURRENT_META_CHANGE, function (event) {
            self.regExp = event.newValue;
        });
        this.dataModel.on(u.DataTable.ON_CURRENT_ROW_CHANGE, function () {
            var row = self.dataModel.getCurrentRow();
            if (!row) {
                self.modelValueChange('');
                self.setEnable(false);
            } else {
                self.modelValueChange(row.getValue(self.field));
                if (this.enable === true) {
                    var _enable = row.getMeta(self.field, 'enable');
                    if (_enable === true || _enable === 'true' || _enable === false || _enable === 'false') {
                        self.setEnable(_enable);
                    }
                } else {
                    self.setEnable(this.enable);
                }
                self.setRequired(row.getMeta(self.field, 'required'));
            }
        });
        this.dataModel.on(u.DataTable.ON_CURRENT_UPDATE, function (event) {
            var row = event.rows[0];
            self.modelValueChange(row.getValue(self.field));
        });

        this.setEnable(this.dataModel.isEnable(this.field));
        this.setRequired(this.dataModel.getMeta(this.field, "required"));
        this.regExp = this.dataModel.getMeta(this.field, "regExp");
        this.modelValueChange(this.dataModel.getValue(this.field));

        //TODO 等validate控件改好再放开
          if (this.validType)
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

        if (this.element.nodeName == 'INPUT' && (!this.element.getAttribute("type") || this.element.getAttribute("type") == 'text')) {
            u.on(this.element, 'focus',function(e){
            	if(self.enable){
	                self.onFocusin ? self.onFocusin(e) : self.setShowValue(self.getValue());
	                //$(this).select();
               }
            });
            u.on(this.element, 'blur',function(e){
                if (!self.doValidate() && self._needClean()) {
                    if (!self.doValidate() && self._needClean()) {
                        if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                            // 因必输项清空导致检验没通过的情况
                            self.setValue('')
                        } else {
                            self.element.value = self.getShowValue()
                        }
                    }
                }
                else
                    self.setValue(self.element.value)
            });
        }
}

$.InputComp = u.InputAdapter.extend({
	initialize: function (element, options, viewModel) {
		this.hasDataTable = true;
		var newOptions = {};
		newOptions.el = element;
		newOptions.options = options;
		newOptions.model = viewModel;
		$.InputComp.superclass.initialize.call(this,newOptions);
		this.element = element;
		
		
	},
	
	create: function(){
		$.InputComp.superclass.create.apply(this,arguments);
		if (this.validType)
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
	},
	
	modelValueChange: function(value) {
		$.InputComp.superclass.modelValueChange.apply(this,arguments);
	},
	
	parseDataModel: function() {
		$.InputComp.superclass.parseDataModel.apply(this,arguments);
	},
	
	setModelValue: function(value) {
		$.InputComp.superclass.setModelValue.apply(this,arguments);
	},
	
	setValue: function(value) {
		$.InputComp.superclass.setValue.apply(this,arguments);
	},
	
	getValue: function() {
		return $.InputComp.superclass.getValue.apply(this,arguments);
	},
	
	setShowValue: function(showValue){
		$.InputComp.superclass.setShowValue.apply(this,arguments);
	},
	
	getShowValue: function(){
		return $.InputComp.superclass.getShowValue.apply(this,arguments);
	},
	
	setEnable: function(enable) {
		$.InputComp.superclass.setEnable.apply(this,arguments);
	},
	
	setRequired: function(required) {
		$.InputComp.superclass.setRequired.apply(this,arguments);
	},
	
	doValidate: function(trueValue){
		if (this.validate){
			if (trueValue)
				return this.validate.check(this.getValue())
			else	
				return this.validate.check()
		} else {
			return true	
		}
	},
	
	_needClean: function(){
		return $.InputComp.superclass._needClean.apply(this,arguments);
	},
	trigger: function(name) {
			name = name.toLowerCase()
			if (!this._events || !this._events[name]) return this;
			var args = Array.prototype.slice.call(arguments, 1);
			var events = this._events[name];
			for (var i = 0, count = events.length; i < count; i++) {
				events[i].callback.apply(this, args);
			}
			return this;

		},
	on: function(name, callback) {
			name = name.toLowerCase()
			this._events || (this._events = {})
			var events = this._events[name] || (this._events[name] = [])
			events.push({
				callback: callback
			})
			return this;
		}
});

