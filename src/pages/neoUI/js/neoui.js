window.onload = function() {

	var neoui = {
		init: function() {
			this.navControl();
            this.completeContentHeight();
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
        },

        // 计算内容高度
        completeContentHeight: function(){
            var minheight;
            minheight=document.body.clientHeight-document.querySelector('footer').clientHeight-document.querySelector('header').clientHeight;
            $('#content').css({ "min-height": minheight+'px'})
        }
	}

	neoui.init();

}