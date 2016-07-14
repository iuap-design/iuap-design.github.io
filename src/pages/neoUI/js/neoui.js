window.onload = function() {

	var neoui = {
		init: function() {
			this.navControl();
		},
		
		/**
         * 页面侧滑效果
         * @return {[type]} [description]
         */
        navControl: function(){
            var openOffcanvas = $('[data-offcanvas="open"]');
            var closeOffcanvas = $('[data-offcanvas="close"]');
            var offcanvasNav = $('.offcanvas-nav');
            openOffcanvas.click(function(){
                openOffcanvas.addClass('nav-open');
                offcanvasNav.addClass('open');
                $('body').append('<div class="offcanvas-backdrop"></div>');
            });
            closeOffcanvas.click(function(){
                openOffcanvas.removeClass('nav-open');
                offcanvasNav.removeClass('open');
                $('.offcanvas-backdrop').remove();
            });
            $(document).on('click', '.offcanvas-backdrop', function(){
                openOffcanvas.removeClass('nav-open');
                offcanvasNav.removeClass('open');
                $('.offcanvas-backdrop').remove();
            });
        }
	}

	neoui.init();

}