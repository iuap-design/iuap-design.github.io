require(['../lib/artTemplate','text!../textTemplate.html'], function (template,textTemplate) {
    /**
     * 初始化页面
     */
     function initDom(){
        var domList = [
            {
                'title': 'SASS应用类模板',
                "id": "0001",
                'decription': '充分体现出sass的变量神器',
                'content_img': "img/main_1.png",
                'phone_img': "img/phone_1.jpg",
                'url': '../../website/hr/list.html',
                "using_times": "772",
                "for_area": ["互联网"]
            },
            {
                'title': 'SASS应用类模板',
                "id": "002",
                'decription': '专门的软件来完成Sass代码让浏览器识别和转换成CSS代码',
                'content_img': "img/main_2.png",
                'phone_img': "img/phone_2.jpg",
                'url': '../../website/hr/apply.html',
                "using_times": "772",
                "for_area": ["互联网"]
            },
            {
                'title': '协同办公模板',
                "id": "003",
                'decription': '高效解决日常办公、资产管理、业务管理、信息交流等常规协同',
                'content_img': "img/main_3.png",
                'phone_img': "img/phone_3.jpg",
                'url': '../../website/cooperating/index.html',
                "using_times": "228",
                "for_area": ["互联网",'建筑']
            },
            {
                'title': '金融理财模板',
                "id": "0004",
                'decription': '深耕银行、券商等金融机构的高净值客户，致力于打造专业的媒体管理模板',
                'content_img': "img/main_6.png",
                'phone_img': "img/phone_3.jpg",
                'url': 'http://design.yyuap.com/ficloud/home/statistics',
                "using_times": "228",
                "for_area": ["互联网",'金融']
            },
            {
                'title': '运维管理模板',
                "id": "005",
                'decription': '发展可持续、完善易有序、拓展能稳定',
                'content_img': "img/main_5.png",
                'phone_img': "img/phone_3.jpg",
                'url': '../../website/tenxcloud/index.html',
                "using_times": "228",
                "for_area": ["互联网",'金融']
            },
            {
                'title': '电商模板',
                "id": "006",
                'decription': '站在用户的角度，针对性的为用户提供刚需',
                'content_img': "img/main_4.png",
                'phone_img': "img/phone_4.jpg",
                'url': '../../website/e-commerce/index.html',
                "using_times": "100",
                "for_area": ["电商"]
            },
            {
                'title': '金融理财模板',
                "id": "007",
                'decription': '犹如纸上办公，胜似之！方便！快捷！高效！',
                'content_img': "img/main_7.png",
                'phone_img': "img/phone_3.jpg",
                'url': 'http://design.yyuap.com/ficloud/voucher/node/20020PREPA',
                "using_times": "228",
                "for_area": ["互联网",'金融']
            }
            // ,
            // {
            //     'title': '地产建筑模板',
            //     "id": "59220030",
            //     'decription': '专业化展现地产的多维角度,立体化建筑',
            //     'content_img': "img/main_2.png",
            //     'phone_img': "img/phone_4.jpg",
            //     "using_times": "100",
            //     "for_area": ["建筑",'装修']
            // }
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


