u.TimeAdapter = u.BaseAdapter.extend({
    initialize: function (options) {
        var self = this;
        u.TimeAdapter.superclass.initialize.apply(this, arguments);
        this.validType = 'time';

        this.maskerMeta = u.core.getMaskerMeta('time') || {};
        this.maskerMeta.format = this.dataModel.getMeta(this.field, "format") || this.maskerMeta.format

        if (this.options.type == 'u-clockpicker' && !u.isIE8)
            this.comp = new u.ClockPicker(this.element);
        else
            this.comp = new u.Time(this.element);
        var dataType = this.dataModel.getMeta(this.field,'type');
        this.dataType =  dataType || 'string';


        this.comp.on('valueChange', function(event){
            self.slice = true;
            if(event.value == ''){
                self.dataModel.setValue(self.field,'')
            }else{
                var _date = self.dataModel.getValue(self.field);
                if (self.dataType === 'datetime') {
                    var valueArr = event.value.split(':');
                    _date = u.date.getDateObj(_date);
                    if (!_date){
                        self.dataModel.setValue(self.field,'');
                    }else {
                        if (event.value == _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds())
                            return;
                        _date.setHours(valueArr[0]);
                        _date.setMinutes(valueArr[1]);
                        _date.setSeconds(valueArr[2]);
                        self.dataModel.setValue(self.field, u.date.format(_date, 'YYYY-MM-DD HH:mm:ss'));
                    }
                }
                else{
                    if (event.value == _date)
                        return;
                    self.dataModel.setValue(self.field, event.value);
                }
            }
            
            self.slice = false;
            //self.setValue(event.value);
        });
        this.dataModel.ref(this.field).subscribe(function(value) {
            self.modelValueChange(value)
        })


    },
    modelValueChange: function (value) {
        if (this.slice) return;
        var compValue = '';
        if (this.dataType === 'datetime') {
            var _date = u.date.getDateObj(value);
            if (!_date)
                compValue = ''
            else
                compValue = _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds();
        }
        else{
            compValue = value;
        }
        this.comp.setValue(compValue);
    },
    setEnable: function (enable) {
    }
});

u.compMgr.addDataAdapter(
    {
        adapter: u.TimeAdapter,
        name: 'u-time'
    });

u.compMgr.addDataAdapter(
    {
        adapter: u.TimeAdapter,
        name: 'u-clockpicker'
    });




u.DateTimeAdapter = u.BaseAdapter.extend({
	mixins: [u.ValueMixin,u.EnableMixin,u.RequiredMixin, u.ValidateMixin],
	init: function (options) {
		var self = this,adapterType,format;
		// u.DateTimeAdapter.superclass.initialize.apply(this, arguments);
		if (this.options.type === 'u-date'){
			this.adapterType = 'date';
		}else{
			this.adapterType = 'datetime'
			u.addClass(this.element,'time');
		}

		this.maskerMeta = u.core.getMaskerMeta(this.adapterType) || {};
		this.maskerMeta.format = this.options['format'] || this.maskerMeta.format;
		if(this.dataModel){
			this.dataModel.on(this.field + '.format.' +  u.DataTable.ON_CURRENT_META_CHANGE, function(event){
				self.setFormat(event.newValue)
			});
		}
		
		if(this.dataModel)
			format = this.dataModel.getMeta(this.field, "format")
		this.maskerMeta.format = format || this.maskerMeta.format

		this.startField = this.options.startField?this.options.startField : this.dataModel.getMeta(this.field, "startField");
		//if(!this.options['format'])
		//	this.options.format = "YYYY-MM-DD HH:mm:ss";
		//this.formater = new $.DateFormater(this.maskerMeta.format);
		//this.masker = new DateTimeMasker(this.maskerMeta);

		this.comp = new u.DateTimePicker({el:this.element,format:this.maskerMeta.format});
		this.element['u.DateTimePicker'] = this.comp;


		this.comp.on('select', function(event){
			/*self.slice = true;
			if(self.dataModel){
				if (this.options.type === 'u-date')
					self.dataModel.setValue(self.field, u.date.format(event.value,'YYYY-MM-DD'));
				else
					self.dataModel.setValue(self.field, u.date.format(event.value,'YYYY-MM-DD HH:mm:ss'));
			}
			self.slice = false;*/
			self.setValue(event.value);
		});
		if(this.dataModel){
			this.dataModel.ref(this.field).subscribe(function(value) {
				self.modelValueChange(value);
			});
			if(this.startField){
				this.dataModel.ref(this.startField).subscribe(function(value) {
					self.comp.setStartDate(value);
					if(self.comp.date < u.date.getDateObj(value) || !value){
						self.dataModel.setValue(self.field,'');
					}
				});
			}
			if(this.startField){
				var startValue = this.dataModel.getValue(this.startField);
				if(startValue)
					self.comp.setStartDate(startValue);
			}
			
		}
			
	},
	modelValueChange: function(value){
		if (this.slice) return;
		this.trueValue = value;
		this.comp.setDate(value);
	},
	setFormat: function(format){
		if (this.maskerMeta.format == format) return;
		this.maskerMeta.format = format;
		this.comp.setFormat(format);
		//this.formater = new $.DateFormater(this.maskerMeta.format);
		//this.masker = new DateTimeMasker(this.maskerMeta);
	},
	setValue: function (value) {
		if (this.options.type === 'u-date'){
			value = u.date.format(value,'YYYY-MM-DD');
		}else{
			value = u.date.format(value,'YYYY-MM-DD HH:mm:ss');
		}
        this.trueValue = this.formater ? this.formater.format(value) : value;
        this.showValue = this.masker ? this.masker.format(this.trueValue).value : this.trueValue;
        this.setShowValue(this.showValue);
        this.slice = true;
        this.dataModel.setValue(this.field, this.trueValue);
        this.slice = false;
    },
    setEnable: function(enable){
        if (enable === true || enable === 'true') {
            this.enable = true;
            this.element.removeAttribute('readonly');
            this.comp._input.removeAttribute('readonly');
            u.removeClass(this.element.parentNode,'disablecover');
        } else if (enable === false || enable === 'false') {
            this.enable = false;
            this.element.setAttribute('readonly', 'readonly');
            this.comp._input.setAttribute('readonly', 'readonly');
            u.addClass(this.element.parentNode,'disablecover');
        }
        this.comp.setEnable(enable);
    }

});

u.compMgr.addDataAdapter(
		{
			adapter: u.DateTimeAdapter,
			name: 'u-date'
		});

u.compMgr.addDataAdapter(
		{
			adapter: u.DateTimeAdapter,
			name: 'u-datetime'
		});

u.YearAdapter = u.BaseAdapter.extend({
    initialize: function (comp, options) {
        var self = this;
        u.YearAdapter.superclass.initialize.apply(this, arguments);
        this.validType = 'year';

        this.comp = new u.Year(this.element);


        this.comp.on('valueChange', function(event){
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
        this.dataModel.ref(this.field).subscribe(function(value) {
            self.modelValueChange(value)
        })


    },
    modelValueChange: function (value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function (enable) {
    }
});

u.compMgr.addDataAdapter(
    {
        adapter: u.YearAdapter,
        name: 'u-year'
    });





u.YearMonthAdapter = u.BaseAdapter.extend({
    initialize: function (comp, options) {
        var self = this;
        u.YearMonthAdapter.superclass.initialize.apply(this, arguments);
        this.validType = 'yearmonth';

        this.comp = new u.YearMonth(this.element);


        this.comp.on('valueChange', function(event){
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
        this.dataModel.ref(this.field).subscribe(function(value) {
            self.modelValueChange(value)
        })


    },
    modelValueChange: function (value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function (enable) {
    }
});

u.compMgr.addDataAdapter(
    {
        adapter: u.YearMonthAdapter,
        name: 'u-yearmonth'
    });





u.MonthAdapter = u.BaseAdapter.extend({
    initialize: function (comp, options) {
        var self = this;
        u.MonthAdapter.superclass.initialize.apply(this, arguments);
        this.validType = 'month';

        this.comp = new u.Month(this.element);


        this.comp.on('valueChange', function(event){
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
        this.dataModel.ref(this.field).subscribe(function(value) {
            self.modelValueChange(value)
        })


    },
    modelValueChange: function (value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function (enable) {
    }
});

u.compMgr.addDataAdapter(
    {
        adapter: u.MonthAdapter,
        name: 'u-month'
    });




