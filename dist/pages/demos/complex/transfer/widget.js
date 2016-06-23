var lsel = document.querySelector('.u-transfer-list-left'),
rsel = document.querySelector('.u-transfer-list-right'),
selToR = document.querySelector('.u-transfer-selToR'),
allToR = document.querySelector('.u-transfer-allToR'),
selToL = document.querySelector('.u-transfer-selToL'),
allToL = document.querySelector('.u-transfer-allToL');

u.on(selToR, 'click', function(e) {
 
    var sels = lsel.querySelectorAll('.is-checked'),
        rul = rsel.querySelector('.u-transfer-list-body > ul');
    if(!sels) return;
    for(var i=0;i<sels.length;i++) {
        rul.appendChild(sels[i].parentNode)
    }
    
})

u.on(allToR, 'click', function(e) {
 
    var items = lsel.querySelectorAll('.u-transfer-list-body > ul > li'),
        rul = rsel.querySelector('.u-transfer-list-body > ul');
    if(!items) return;
    for(var i=0;i<items.length;i++) {
        rul.appendChild(items[i])
    }
    
})

u.on(selToL, 'click', function(e) {
 
    var sels = rsel.querySelectorAll('.is-checked'),
        lul = lsel.querySelector('.u-transfer-list-body > ul');
    if(!sels) return;
    for(var i=0;i<sels.length;i++) {
        lul.appendChild(sels[i].parentNode)
    }
    
})

u.on(allToL, 'click', function(e) {
 
    var items = rsel.querySelectorAll('.u-transfer-list-body > ul > li'),
        lul = lsel.querySelector('.u-transfer-list-body > ul');
    if(!items) return;
    for(var i=0;i<items.length;i++) {
        lul.appendChild(items[i])
    }
    
})


