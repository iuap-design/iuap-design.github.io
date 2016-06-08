

/* 解析data-provide来构造日期控件 begin*/

u.on(window,'load',function(){
	document.querySelectorAll("[data-provide='datetimepicker']").forEach(function(el){
		// 获取options 暂时不处理参数，只兼容为date类型
		var options = JSON.parse(el.getAttribute('data-options')) || {};
		var defaultFormat = 'YYYY-MM-DD';
		var format = options.format || defaultFormat;
		u.addClass(el,'u-datepicker');
		comp = new u.DateTimePicker({el:el,format:format});
		el['u.DateTimePicker'] = comp;
	});
});

/* 解析data-provide来构造日期控件 end*/

$.fn.datetimepicker = function(options){
	 return this.each(function () {
            var $this = $(this);
            if (!$this.data('DateTimePicker')) {
                // create a private copy of the defaults object
                var defaultFormat = 'YYYY-MM-DD';
                var format = options.format || defaultFormat;
                comp = new u.DateTimePicker({el:this,format:format});
                this['u.DateTimePicker'] = comp;
            }
        });
};

