window.onload = function() {

    var template1 = {

        /**
         * 页面初始后调用
         */
        init: function () {
            this.bindEvent();
            this.navControl();
            this.delBtn();
        },
        /**
         * 为页面dom绑定事件
         */
        bindEvent: function () {
            $(".templateListStyle_1").click(function(){
                $("#templateListBox").toggleClass("templateListLayout_1");
                $(this).toggleClass("active");
                $(".templateListStyle_2").toggleClass("active");
            });
            $(".templateListStyle_2").click(function(){
                $("#templateListBox").toggleClass("templateListLayout_1");
                $(this).toggleClass("active");
                $(".templateListStyle_1").toggleClass("active");
            });          
        },
        /**
         * 根据数据渲染页面
         * @param checkObj 校验的对象
         * @param baseObj  基础对象
         * @param checkObjName 校验的对象名称
         */
        renderPage: function (template) {
            // var html = template('test', domList);
            // console.log(html);
            // document.getElementById('templateContainer').innerHTML = html;
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
        delBtn: function() {
            var btnAry = document.getElementById('templateContainer').querySelectorAll('.btn_1');
            for(var i = 0, btnLength = btnAry.length; i < btnLength; i++) {
                var hrefValue = btnAry[i].getAttribute('href');
                if( hrefValue === 'javascript:;' || hrefValue==="") {
                    btnAry[i].style.display = 'none';
                }
            }
        }
    };
    template1.init();

};   




