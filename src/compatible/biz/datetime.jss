/* 解析u-meta来构造日期控件 begin*/
u.OriginDateTimeAdapter = u.DateTimeAdapter.extend({
	initialize: function (comp, options) {
		if (typeof options === 'undefined')
			options = {};
		options.type = "datetime";
		u.OriginDateTimeAdapter.superclass.initialize(comp, options);
	},
	 modelValueChange: function(value){
		 u.OriginDateTimeAdapter.superclass.modelValueChange(value);
	 },
	setFormat: function(format){
		u.OriginDateTimeAdapter.superclass.setFormat(format);
	},
});


u.OriginDateAdapter = u.DateTimeAdapter.extend({
	initialize: function (comp, options) {
		if (typeof options === 'undefined')
			options = {};
		options.type = "date";
		u.OriginDateAdapter.superclass.initialize(comp, options);
	},
	 modelValueChange: function(value){
		 u.OriginDateAdapter.superclass.modelValueChange(value);
	 },
	setFormat: function(format){
		u.OriginDateAdapter.superclass.setFormat(format);
	},
});

u.compMgr.addDataAdapter(
		{
			adapter: u.OriginDateTimeAdapter,
			name: 'datetime'
		});

u.compMgr.addDataAdapter(
		{
			adapter: u.OriginDateAdapter,
			name: 'date'
		});
		
/* 解析u-meta来构造日期控件 end*/


