+function ($) {
    $.compManager = {
        addPlug: function (plug) {
            var name = plug.compName;
            u.compMgr.addDataAdapter(
                {
                    adapter: plug,
                    name: name
                });
        },
    };

}($);


u.compMgr.createDataAdapter = function (options) {
    var opt = options['options'];
    var type = opt['type'],
        id = opt['id'];
    var adpt = this.dataAdapters[type];
    if (!adpt) return null;
    /*if(type == 'ncRefer' || type == 'time' || type == 'datetime' || type == 'date' || type == 'combo'
     || type == 'check'){
     var comp = new adpt(options.el,options.options,options.model);
     }else{
     var comp = new adpt(options);
     }*/
    if (adpt.prototype.initialize.length == 3) { //兼容旧版本
        var comp = new adpt(options.el, options.options, options.model);
    } else {
        var comp = new adpt(options);
    }
    comp.type = type;
    comp.id = id;
    return comp;
}