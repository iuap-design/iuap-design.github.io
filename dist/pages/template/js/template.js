require(['../lib/artTemplate','text!../textTemplate.html'], function (template,textTemplate) {
    /**
     * 初始化页面
     */
     function initDom(){
        var domList = [
            {
                'title': '合同主体模板',
                "id": "71160247",
                'content_img': "img/main_1.png",
                'phone_img': "img/phone_1.jpg",
                'url': '../../website/hr/list.html',
                "using_times": "772",
                "for_area": ["互联网","影视"]
            },
            {
                'title': '入职申请书模板',
                "id": "00871460",
                'content_img': "img/main_2.png",
                'phone_img': "img/phone_2.jpg",
                'url': '../../website/hr/apply.html',
                "using_times": "772",
                "for_area": [
                    "互联网",
                    "教育"
                ]
            },
            {
                'title': '艺术写真',
                "id": "13161399",
                'content_img': "img/main_3.jpg",
                'phone_img': "img/phone_3.jpg",
                "using_times": "228",
                "for_area": ["摄影工作室"]
            },
            {
                'title': '展示摄影',
                "id": "59220030",
                'content_img': "img/main_4.jpg",
                'phone_img': "img/phone_4.jpg",
                "using_times": "100",
                "for_area": ["摄影工作室"]
            }
        ];

        renderPage(domList);
        bindEvent();
    };
    /**
     * 利用templat机制 渲染页面
     * @domList 数据源
     */
    function renderPage(domList){
        var render = template.compile(textTemplate);
        var html = render({
            list: domList
        });
        document.getElementById('templateContainer').innerHTML = html;
    };
    /**
     * dom绑定事件
     */
    function bindEvent(){
        $(".templateListStyle_1").click(function(){
            $("#templateListBox").toggleClass("templateListLayout_1");
            $(this).toggleClass("active");
            $(".templateListStyle_2").toggleClass("active");
        })
        $(".templateListStyle_2").click(function(){
            $("#templateListBox").toggleClass("templateListLayout_1");
            $(this).toggleClass("active");
            $(".templateListStyle_1").toggleClass("active");
        })
    }
     
       
    var template1 = {

        /**
         * 页面初始后调用
         */
        init: function () {
            console.log();
            this.bindEvent();
            this.renderPage()
        },
        /**
         * 为页面dom绑定事件
         */
        bindEvent: function () {
            
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
        }
        
    };
    initDom();
    
})


