+function($ ) {
	var CheckboxComp = $.InputComp.extend({
		initialize: function(element, options, viewModel) {
			
			var self = this
			CheckboxComp.superclass.initialize.apply(this, arguments)
			this.create()
			
			if($.app){
				$(this.element).wrap("<label class='label-switch'></label>").after("<div class='checkbox'></div>").css("display","none")
				
    		}else{
				if($(this.element).parent(".checkbox").length === 0 && !iweb.browser.isIE8){
					$(this.element).wrap("<div class='checkbox check-success'></div>").after("<label for="+element.id+"></label>")
				}
			}
    		$(this.element).on('change',function(){
					var val = element.checked ? 'Y' : 'N'
					
					self.setValue(val)
			})
			
		},

		modelValueChange: function(val) {
			if (this.slice) return
			val = val || ""
			this.trueValue = val
			if (val == 'Y' || val == 'true') {
				this.showValue = true;
			} else if (val == 'N' || val == 'false') {
				this.showValue = false;
			} else {
				this.showValue = false;
			}
			this.setShowValue(this.showValue)
		},
		setValue: function(val) {
			this.trueValue = val
			if (val == 'Y' || val == 'true') {
				this.showValue = true;
			} else if (val == 'N' || val == 'false') {
				this.showValue = false;
			} else {
				this.showValue = false;
			}
			this.setShowValue(this.showValue)
			this.slice = true
			this.setModelValue(this.trueValue)
			this.slice = false
			// this.trigger(CheckboxComp.EVENT_VALUE_CHANGE, this.trueValue)
		},
		getValue: function() {
			return this.trueValue
		},
		setShowValue: function(showValue) {
			this.showValue = showValue
			this.element.checked = showValue
		},
		getShowValue: function() {
			return this.showValue
		},
		setEnable: function(enable) {
			if (enable === true || enable === 'true') {
				this.enable = true
				$(this.element).parent().removeClass('disablecover').parent().find('.covershade').remove()
			} else if (enable === false || enable === 'false') {
				this.enable = false
				var tmpelement = $(this.element)
				if(tmpelement.parent().hasClass('disablecover')){ return};
				tmpelement.parent().addClass('disablecover').before('<div class="covershade"></div>')
			}
		},

		Statics: {
			compName: 'check'
		}
	})

	if ($.compManager)
		$.compManager.addPlug(CheckboxComp)
	$.CheckboxComp = CheckboxComp;
}($);
