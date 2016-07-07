u.on(window, 'load', function() {
    'use strict';


    // 点击屏幕dom元素时去掉menuNav中的open样式
    $(document).on('click', function(e) {
        if ($(event.target).hasClass('.site-menu-item') || $(event.target).parents('.site-menu-item').length > 0) {
                return;
            } else {
                $('.site-menu-item').removeClass('open');
            }

        })
        // menuNav点击时，显示子内容
    $('.site-menu-item.has-sub a').click(function() {
        $('.site-menu-item').removeClass('open');
        $(this).parent().toggleClass('open');
    })

    // 汉堡点击效果，menuNav收起和隐藏
    $('.hamburger').click(function() {
        $(this).toggleClass('hided');
        if ($('body').hasClass('site-menubar-hide')) {
            $('body').removeClass('site-menubar-hide');
            $('body').addClass('site-menubar-open');
        } else {
            $('body').removeClass('site-menubar-open');
            $('body').addClass('site-menubar-hide');
        }
    });

})
