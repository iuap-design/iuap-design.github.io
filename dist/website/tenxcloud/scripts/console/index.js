$('.symbol').click(function() {
    if (!$(this).hasClass('action')) {
        $(this).addClass('action');
        $(this).parents('.u-widget-heading').siblings().slideUp();
    } else {
        $(this).removeClass('action');
        $(this).parents('.u-widget-heading').siblings().slideDown();
    }
});


u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#pNet')['u.Progress'].setProgress(60);
    document.querySelector('#pCPU')['u.Progress'].setProgress(69);
});