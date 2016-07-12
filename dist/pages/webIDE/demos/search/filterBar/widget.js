u.on(window, 'load', function() {
    var toggleBtn = document.querySelector('#condition-toggle');
    u.on(toggleBtn, 'click', function() {
    	var self=this;
        var conditionRow = document.querySelector('#condition-row');
        var toggleIcon = this.querySelector('i');
        if (u.hasClass(conditionRow, 'u-visible')) {
            u.removeClass(conditionRow, 'u-visible').addClass(conditionRow, 'u-not-visible');
            u.removeClass(toggleIcon, 'uf-uparrow').addClass(toggleIcon, 'uf-anglearrowdown');
            this.querySelector('span').innerText='高级';
        } else {
            u.removeClass(conditionRow, 'u-not-visible').addClass(conditionRow, 'u-visible');
            u.removeClass(toggleIcon, 'uf-anglearrowdown').addClass(toggleIcon, 'uf-uparrow');
            this.querySelector('span').innerText='收起';
        

        }
    })


    var filterSingleDom = document.querySelectorAll('.u-filter-single');
    var filterMoreMenuDom = document.querySelectorAll('.u-filter-more .u-menu-item');
    for (var i = 0; i < filterSingleDom.length; i++) {
        u.on(filterSingleDom[i], 'click', function() {
            hideActive();
            u.addClass(this, 'u-active');
        });
    }
    for (var j = 0; j < filterMoreMenuDom.length; j++) {
        var menuItem = filterMoreMenuDom[j];
        u.on(filterMoreMenuDom[j], 'click', function() {
            this.parentNode.parentNode.parentNode.querySelector('.u-filter-menu-title').innerText = this.innerText;
        });
    }

    function hideActive() {
        var activeFilterDom = document.querySelectorAll('.u-filter-single.u-active');
        for (var i = 0; i < activeFilterDom.length; i++) {
            u.removeClass(activeFilterDom[i], 'u-active');
        }
    }
})
