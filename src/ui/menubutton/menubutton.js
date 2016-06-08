u.MenuButton = u.BaseComponent.extend({
    init:function(){
        this._button=this.element.querySelector("button");
        this._ul=this.element.querySelector("ul");
        u.on(this._button, 'click', this.toggle);
        u.on(this._ul, 'click', this.toggle);
       
    },
    toggle:function(){      
        u.toggleClass(this.parentElement,'open');
    }
});


u.compMgr.regComp({
    comp: u.MenuButton,
    compAsString: 'u.MenuButton',
    css: 'u-button-group'
})