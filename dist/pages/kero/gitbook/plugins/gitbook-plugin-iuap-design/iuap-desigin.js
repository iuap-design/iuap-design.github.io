require( [ 'gitbook', 'jQuery', 'lodash' ], function ( gitbook, $, _ ) {

	/**
	 * [bind description]
	 * @param  {[type]} 'start'  [description]
	 * @param  {[type]} function (             [description]
	 * @return {[type]}          [description]
	 */
	gitbook.events.bind('start', function () { 
	});

	/**
	 * 处理页面逻辑
	 * @param  {[type]} 'page.change' [description]
	 * @param  {[type]} function      (             [description]
	 * @return {[type]}               [description]
	 */
	gitbook.events.bind('page.change', function () {

		var $body = $('body');
		// 文档部分
		var $book = $('.book');
		// 文档左侧目录
		var $summary = $('.book-summary');
		// 文档右侧主体
		var $bookBody = $('.book-body');
		var $container = $('<div class="container"></div>');
		var $containerDiv = $('<div class="container-div"></div>');

		$book.append($container);
		$container.append($containerDiv);
		$containerDiv.append($summary);
		$containerDiv.append($bookBody);

		// 左侧目录修改
		var $summaryUl = $('ul',$summary);
		var $dividerLi = $('.divider',$summaryUl);
		var $dividerLiNext = $('.divider + li',$summaryUl);

		// 去掉介绍
		$('.summary > li').first().remove();

		// 删除下面横线及之后的li
		$dividerLi.remove();
		$dividerLiNext.remove();

		var $summaryAB = $('a b',$summary);

		// 去掉目录的编号
		$summaryAB.remove();

		// 将超链接放到page-wrapper的最后
		var $pageWrapper = $('.page-wrapper');
		var $prevA = $('.navigation-prev',$bookBody);
		var $nextA = $('.navigation-next',$bookBody);

		$pageWrapper.append($prevA);
		$pageWrapper.append($nextA);
	    var $html = $('html');
	    $html.css('font-size','62.5%');

	    $('body').css('display','block');

	    function bodyScrollFun(){
	    	var st = document.body.scrollTop || document.documentElement.scrollTop;
	    	var t = 215 - st;
	    	var t1 = 240 - st;

				if ( t > 0 ) t = 0;

				$('.book-summary').css('top', -1 * t + 'px');

				if ( t1 < 80 ) t1 = 30

				$('#anchors-navbar').css('top', t1 + 'px');
	    }

	    function bodyScroll(){
	    	document.body.onscroll = bodyScrollFun;
	    }

	    document.body.scrollTop = 0;
	    setInterval(bodyScroll,100)
	    bodyScrollFun();

	    var oH = document.body.offsetHeight;
	    var h = parseInt(oH) - 80;

	    $book.css('min-height',parseInt(oH) - 60 + 'px');
	    $containerDiv.css('min-height',parseInt(oH) - 120 + 'px');

	    /**
	     *  highlight
	     */
	    hljs.initHighlightingOnLoad();

		// mobile side menu init
	    (function(){
	    	function mobileNav(){
	        	var bodyWidth = document.body.offsetWidth;
	        	var eleBook = document.querySelectorAll('.book')[0];
	        	if(bodyWidth<=600) {
	        		eleBook.classList ? eleBook.classList.remove('with-summary') : eleBook.className.replace(new RegExp('(^|\\b)' + 'with-summary'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	        	}
	   		}
	   		mobileNav();
	   		window.onresize = mobileNav;
	    })();

	    /**
	     * [description] Main menu slide
	     * @return {[type]} [description]
	     */
	    (function(){

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
	    })();

	    /**
	     * [description] Concat & Covert md file jsStr
	     * @return {[type]} [description]
	     */
	    (function(){
	    	function buildJs(){
	    		var docCode = document.querySelectorAll('.jstag');
		    	var jsTag = document.createElement('script');
		    	for(var i=0; i<docCode.length; i++){
		    		jsTag.innerHTML += docCode[i].textContent;
		    	}
		    	document.body.appendChild(jsTag);
	    	}
	    	buildJs();
	    })();

	});




});
