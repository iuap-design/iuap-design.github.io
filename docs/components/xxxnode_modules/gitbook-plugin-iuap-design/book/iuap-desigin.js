require(['gitbook', 'jQuery', 'lodash'], function (gitbook, $, _) {

	gitbook.events.bind('start', function () {
	});

	gitbook.events.bind('page.change', function () {

		// 添加头部和尾部
        $.ajax({
			type: "get",
			url: "../common/header.html",
			dataType: "html",
			async: false,
			success: function(data) {
				data = data.replace(/dist/g,'../..').replace('<div class="nav-toggle" data-offcanvas="open"><i class="flaticon-list26"></i></div>','');

				var banner = [	'<div class="banner">',
								'	<div class="container">',
								'		<div class="banner-content">',
								'	    	<h1>UI 组件</h1>',
							    '        	<p class="info">简单易用，轻量快捷，为移动端服务的前端框架</p>',
								'		</div>',
								'	</div>',
								'</div>',
				]
				var bannerHTML = banner.join('\r\n');
				data = data + bannerHTML;
				$('.navbar').remove();
				$('.banner').remove();
				$(document.body).prepend(data)
			}
		})

		$.ajax({
			type: "get",
			url: "../common/footer.html",
			dataType: "html",
			async: false,
			success: function(data) {
				data = data.replace(/dist/g,'../..');
				$('.footer').remove();
				$(document.body).append(data)
			}
		})


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
	 	var $firstLi = $('li:first',$summaryUl);
	 	// 去掉介绍
		$firstLi.remove(); 
		var $dividerLi = $('.divider',$summaryUl);
		var $dividerLiNext = $('.divider + li',$summaryUl);
		// 删除下面横线及之后的li
		$dividerLi.remove(); 
		$dividerLiNext.remove();

		var $summaryAB = $('a b',$summary); 
		$summaryAB.remove();// 去掉目录的编号

		// 右侧主体修改 

		var $bookHeadr = $('.book-header',$bookBody);
		$bookHeadr.remove();

		// 将超链接放到page-wrapper的最后
		var $pageWrapper = $('.page-wrapper');
		var $prevA = $('.navigation-prev',$bookBody);
		var $nextA = $('.navigation-next',$bookBody);
		$pageWrapper.append($prevA);
		$pageWrapper.append($nextA);

		// 主体引入uui内容 
		var ctx = 'http://design.yyuap.com/static/uui-original/1.0.1';
		// var tpl = [
		// 	'<link rel="stylesheet" href="'+ ctx +'/fonts/font-awesome/css/font-awesome.css">',
	 //       	'<link rel="stylesheet" type="text/css" href="'+ ctx +'/css/u.css">',
	 //       	'<link rel="stylesheet" type="text/css" href="'+ ctx +'/css/u-extend.css">',
		//     '<link rel="stylesheet" type="text/css" href="'+ ctx +'/css/tree.css">',
	 //        '<link rel="stylesheet" type="text/css" href="'+ ctx +'/css/grid.css">',
	 //        '<script src="http://design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>',
	 //    	'<script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>',
	 //        '<script src="'+ ctx +'/js/u-polyfill.js"></script>',
	 //        '<script src="'+ ctx +'/js/u.js"></script>',
	 //        '<script src="'+ ctx +'/js/u-tree.js"></script>',
	 //        '<script src="'+ ctx +'/js/u-grid.js"></script>',
  //       ]
        // var tplStr = tpl.join('\r\n');
        var linkArray=['/fonts/font-awesome/css/font-awesome.css','/css/u.css','/css/u-extend.css','/css/tree.css','/css/grid.css'];
        var scriptArray=['/js/u-polyfill.js','/js/u.js',/*'/js/u-tree.js','/js/u-grid.js'*/];
      	for(var i=0;i<linkArray.length;i++){
      		var link = document.createElement('link');
      		link.rel='stylesheet';
      		link.href=ctx+linkArray[i];
      		 $('head').append(link);
      	}
        var jquerySrc= document.createElement('script');
        jquerySrc.scr = 'http://design.yyuap.com/static/jquery/jquery-1.11.2.js';
        $('head').append(jquerySrc);

        var koSrc= document.createElement('script');
        koSrc.scr = 'http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js';
        $('head').append(koSrc);
        var tim = 1000;
        for(var j=0;j<scriptArray.length;j++){
      		var script = document.createElement('script');
      		script.src=ctx+scriptArray[j];
  			$('head').append(script);
      	}
        // document.write(tplStr);
        var $html = $('html');
        $html.css('font-size','62.5%');


        $('body').css('display','block');
        
        function bodyScrollFun(){
        	var st = document.body.scrollTop || document.documentElement.scrollTop;
        	var t = 215 - st;
        	var t1 = 240 - st;
        	if(t > 0)
        		t = 0;
    		$('.book-summary').css('top', -1 * t + 'px');
    		if(t1 < 80)
    			t1 = 80
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
        $summary.css('height',h + 'px');
        $book.css('min-height',parseInt(oH) - 60 + 'px');
	});
});
