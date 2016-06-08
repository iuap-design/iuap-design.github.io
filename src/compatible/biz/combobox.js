/*u.OriginComboboxAdapter = u.ComboboxAdapter.extend({
	initialize: function (comp, options) {
		var div = comp.el;
		div.appendChild(u.makeDOM('<input class="u-input"/>'));
		u.OriginComboboxAdapter.superclass.initialize(comp, options);
	},
	 modelValueChange: function(value){
		 u.OriginComboboxAdapter.superclass.modelValueChange(value);
	 },
	setEnable: function(enable){
		u.OriginComboboxAdapter.superclass.setEnable(enable);
	},
});

u.compMgr.addDataAdapter(
		{
			adapter: u.OriginComboboxAdapter,
			name: 'combo'
		});
		*/

+function($) {

	var Combobox = $.InputComp.extend({
		initialize: function(element, options, viewModel) {
			var self = this
			
			this.hasDataTable = true;
		var newOptions = {};
		newOptions.el = element;
		newOptions.options = options;
		newOptions.model = viewModel;
		$.InputComp.superclass.initialize.call(this, newOptions);
        this.element = element;
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


			this.datasource = $.getJSObject(viewModel, options['datasource'])
			this.single = options.single
			this.mutil = options.mutil
			this.validType = 'combo'
			if ($(this.element).children().length > 0)
				this.comboEle = $(this.element).find('div')[0]
			else
				this.comboEle = this.element
			this.create()	
			//$(this.comboEle).attr('contenteditable', true)
			if(this.mutil){
			   $(this.comboEle).on("mutilSelect",function(event,value){
			   	    self.setValue(value)
			   })
			}
			
			this.comp = $(this.comboEle).Combobox({
				readchange:false,
				dataSource: this.datasource,
				single:this.single,
				mutil:this.mutil,
				onSelect: function(item) {
					self.setValue(item.pk)
					self.trigger('onSelect',item)
//					if (self.onSelect) {
//						self.onSelect(item)
//					}
				}
			})
		},
		/**
		 * 增加dom事件
		 * @param {String} name
		 * @param {Function} callback
		 */
		addDomEvent: function(name, callback){
			$(this.comboEle).on(name, callback)
			return this
		},
		/**
		 * 移除dom事件
		 * @param {String} name
		 */
		removeDomEvent: function(name){
			$(this.comboEle).off(name)
		},
		modelValueChange: function(value) {
			if (this.slice) return
//			value = value || ""
			this.trueValue = value
			$(this.comboEle).val(value);	

		},
		setValue: function(value) {
			this.trueValue = value
			$(this.comboEle).val(value);			
			this.slice = true
			this.setModelValue(this.trueValue)
			this.slice = false
			//this.trigger(Combobox.EVENT_VALUE_CHANGE, this.trueValue)
		},
		getValue: function() {
			return this.trueValue
		},
		setEnable: function(enable) {
			if (enable === true || enable === 'true') {
				this.enable = true				
				$(this.comboEle).data("enable",true)
				$(this.comboEle).parent().removeClass('disablecover').parent().find('.covershade').remove()
			} else if (enable === false || enable === 'false') {
				this.enable = false				
				$(this.comboEle).data("enable",false)
				$(this.comboEle).parent().addClass('disablecover').parent().prepend('<div class="covershade"></div>')
				
			}
		},
		Statics: {
			compName: 'combo'
		}
	})

	if ($.compManager)
		$.compManager.addPlug(Combobox)
	$.Combobox = Combobox;
}($);
