var lsel = document.querySelector('.u-lrsel-l'),
rsel = document.querySelector('.u-lrsel-r'),
selToR = document.querySelector('.u-lrsel-selToR'),
allToR = document.querySelector('.u-lrsel-allToR'),
selToL = document.querySelector('.u-lrsel-selToL'),
allToL = document.querySelector('.u-lrsel-allToL');

u.on(lsel, 'click', '.list-group-item', function(e) {
 
    u.toggleClass(e.target, 'is-selected');
    
})

u.on(selToR, 'click', function(e) {
 
    var sels = lsel.querySelectorAll('.is-selected'),
        rul = rsel.querySelector('.list-group');
    if(!sels) return;
    for(var i=0;i<sels.length;i++) {
        rul.appendChild(sels[i])
    }
    
})

u.on(allToR, 'click', function(e) {
 
    var items = lsel.querySelectorAll('.list-group-item'),
        rul = rsel.querySelector('.list-group');
    if(!items) return;
    for(var i=0;i<items.length;i++) {
        rul.appendChild(items[i])
    }
    
})

u.on(selToL, 'click', function(e) {
 
    var sels = rsel.querySelectorAll('.is-selected'),
        lul = lsel.querySelector('.list-group');
    if(!sels) return;
    for(var i=0;i<sels.length;i++) {
        lul.appendChild(sels[i])
    }
    
})

u.on(allToL, 'click', function(e) {
 
    var items = rsel.querySelectorAll('.list-group-item'),
        lul = lsel.querySelector('.list-group');
    if(!items) return;
    for(var i=0;i<items.length;i++) {
        lul.appendChild(items[i])
    }
    
})


