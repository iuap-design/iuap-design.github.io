$.InputComp = u.BaseAdapter.extend({

    initialize: function (element, options, viewModel) {
        this.hasDataTable = true;
        var newOptions = {};
        newOptions.el = element;
        newOptions.options = options;
        newOptions.model = viewModel;


        $.InputComp.superclass.initialize.call(this, newOptions);

        //this.element = (this.element.nodeName === 'INPUT' || this.element.nodeName === 'TEXTAREA') ? this.element : this.element.querySelector('input');
        //if (!this.element){
        //    throw new Error('not found INPUT or TEXTAREA element, u-meta:' + JSON.stringify(this.options));
        //}
        this.required = this.options['required'];
        this.maxLength = null;
        this.minLength = null;
        this.max = null;
        this.min = null;
        this.regExp = null;
        this.placement = this.options['placement'];
        this.tipId = this.options['tipId'];
        this.errorMsg = this.options['errorMsg'];
        this.nullMsg = this.options['nullMsg'];
        //this.create()

        //this.element = element;



    },
    create: function () {
        var self = this;

        if(this.dataModel){
            //处理数据绑定
            this.dataModel.ref(this.field).subscribe(function(value) {
                self.modelValueChange(value)
            })
            //this.dataModel.on(this.field + "." + u.DataTable.ON_CURRENT_VALUE_CHANGE, function (event) {
            //    self.modelValueChange(event.newValue);
            //});

            //处理只读
            this.dataModel.refEnable(this.field).subscribe(function(value) {
                self.setEnable(value);
            });
            //处理必填
            this.dataModel.refRowMeta(this.field, "required").subscribe(function(value) {
                self.setRequired(event.newValue);
            });
            this.dataModel.refRowMeta(this.field, "regExp").subscribe(function(value) {
                self.regExp = value
            });

            this.setRequired(this.dataModel.getMeta(this.field, "required"));
            this.regExp = this.dataModel.getMeta(this.field, "regExp");
            this.modelValueChange(this.dataModel.getValue(this.field));
        }
        if (this.validType) {
            this.validate = new u.Validate({
                el: this.element,
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
                reg: this.regExp
            });
        };

        if (this.element.nodeName == 'INPUT' && (!this.element.getAttribute("type") || this.element.getAttribute("type") == 'text')) {
            u.on(this.element, 'focus',function(e){
                if(self.enable){
                    self.onFocusin ? self.onFocusin(e) : self.setShowValue(self.getValue());
                    //$(this).select();
                }
            });
            u.on(this.element, 'blur',function(e){
                if (!self.doValidate() && self._needClean()) {
                    if (self.required && (self.element.value === null || self.element.value === undefined || self.element.value === '')) {
                        // 因必输项清空导致检验没通过的情况
                        self.setValue('')
                    } else {
                        self.element.value = self.getShowValue()
                    }
                }
                else
                    self.setValue(self.element.value)
            });
        }
    },
    /**
     * 模型数据改变
     * @param {Object} value
     */
    modelValueChange: function (value) {

    },

    /**
     * 设置模型值
     * @param {Object} value
     */
    setModelValue: function (value) {
        if (!this.dataModel) return
        this.dataModel.setValue(this.field, value)
    },
    /**
     * 设置控件值
     * @param {Object} value
     */
    setValue: function (value) {
    },
    /**
     * 取控件的值
     */
    getValue: function () {
        return this.trueValue
    },
    setShowValue: function (showValue) {
        this.showValue = showValue;
        this.element.value = showValue;
        this.element.title = showValue;

    },
    getShowValue: function () {
        return this.showValue
    },
    setEnable: function (enable) {
        if (enable === true || enable === 'true') {
            this.enable = true;
            this.element.removeAttribute('readonly');
            u.removeClass(this.element.parentNode,'disablecover');
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            this.element.setAttribute('readonly', 'readonly');
            u.addClass(this.element.parentNode,'disablecover');
        }
    },
    setRequired: function (required) {
        if (required === true || required === 'true') {
            this.required = true;
        } else if (required === false || required === 'false') {
            this.required = false;
        }
    },

    /**
     *校验
     */
    doValidate: function (trueValue) {
        if (this.validate) {
            if (trueValue)
                return this.validate.check({pValue:this.getValue(),showMsg:true});
            else
                return this.validate.check()
        } else {
            return true
        }
    },
    /**
     * 是否需要清除数据
     */
    _needClean: function () {
        if (this.validate)
            return this.validate._needClean();
        else return false
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