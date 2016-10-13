window.onload = function() {
    /**
     * 主题颜色交互
     */
    var inColor = document.getElementById('color0');
    var colorGroup = document.getElementById('colorGroup');
    var colorShow = document.getElementById('colorShow');
    var picker = {
        init: function(){
            /**
             * 触发显示
             */
            var self = this
            self.focus(inColor);

            /**
             * hover事件
             */
            var themeCors = colorGroup.getElementsByTagName('li');
            var objEach = Array.prototype.forEach;
            objEach.call(themeCors,function(ele){
                self.corhover(ele);
                self.corselect(ele);
            });

            document.addEventListener('click',function(event){
                var eleid = event.target.id;
                var isColorWrap = eleid != 'color0' || eleid != 'colorGroup';
                // console.log(isColorWrap);
                eleid != 'color0' && eleid != 'colorGroup' ? colorGroup.style.display = 'none' : '';
            },false);
        },
        init_ui: function(){
            var progress = document.querySelectorAll('#tab-panel-1 .progressbar');
            for(var i=0; i<progress.length; i++){
                progress[i].style.width = '50%';
            }
        },
        focus: function(inele){
            var self = this;
            inele.addEventListener('focus', function(event){
                /**
                 * show colorGroup
                 */
                var et = event.target || event.srcElement;
                var getX = et.offsetLeft;
                var getY = et.offsetTop;
                var getWidth = parseInt(getComputedStyle(et,null).getPropertyValue('width'));
                var setLeft = getX + getWidth + 'px';
                var setTop = getY + 'px';

                var setStyle = {
                    display: "block",
                    left: setLeft,
                    top: setTop
                };
                for(var key in setStyle) {
                    colorGroup.style[key] = setStyle[key];
                }
                event.stopPropagation();
            });
        },
        corhover: function(ele){
            ele.addEventListener('mouseenter', function(event){
                var eleCor = ele.getAttribute('data-color');
                var eleRGB = 'rgb(' + eleCor + ')';
                colorShow.style.backgroundColor = eleRGB;
            },true);
        },
        corselect: function(ele){
            var self = this;
            ele.addEventListener('click', function(event){
                var eleCor = ele.getAttribute('data-color');
                var eleRGB = 'rgb(' + eleCor + ')';
                colorGroup.style.display = 'none';
                inColor.value = eleCor;
                self.uichange(eleRGB);

                event.stopPropagation();
            },true);

        },
        uichange: function(selColor){
            var uiObj = {
                "nav": "#tab-panel-1 .u-navbar-inverse",
                "button": "#tab-panel-1 .u-button",
                "progress": "#tab-panel-1 .progressbar",
                "switch": "#tab-panel-1 .u-switch-track",
                "pagination":"#tab-panel-1 #pagination .active a"
            };

            for(var key in uiObj) {
                var catUis = document.querySelectorAll(uiObj[key]);
                for(var i = 0; i<catUis.length; i++){
                    catUis[i].style.backgroundColor = selColor;
                }
            }

        }
    };
    picker.init_ui();
    picker.init();


    /**
     * 选中元素,执行ajax
     */
    var cs = {
        init: function(){

            this.selAll();
            this.charSend();
        },

        Dom: {
            downBottom: document.getElementById('button'),
            downTop: document.getElementById('buttonTop'),
            blockWrap: document.querySelectorAll('#tab-panel-2 .color-whole-div'),
        },


        /**
         * 定制 - 选中元素
         */
        selAll: function() {
            var contWrap = this.Dom.blockWrap;
            var selFun = function(ele, index, ary) {
                var selWrap = ele.querySelectorAll('.tree-parent')[0];
                var subCheckbox = ele.querySelectorAll('li.u-checkbox'); 
                selWrap.addEventListener('click', function() {
                    var isCheck = u.hasClass(this,"is-checked");

                    if(isCheck) {
                        subCheckbox.forEach(function(subele){
                            u.addClass(subele,'is-checked');
                        })
                    } else {
                        subCheckbox.forEach(function(subele){
                            u.removeClass(subele,'is-checked');
                        })
                    }

                })
            };
            contWrap.forEach(selFun);
        },

        /**
         * 数据整理
         */
        charFun: function(event) {
            var dataJson = {};
            var checkedUnit = document.querySelectorAll('#tab-panel-2 .coreModel li.is-checked');
            var checkedData = function(checkele) {
                // data-catlog对应不同类别组件，如polyfill,css组件
                var checkClass = checkele.getAttribute('data-catlog');
                if(!dataJson[checkClass]){
                    dataJson[checkClass] = [];
                }
                // 添加选中的组件进入相应类别
                var checkFile = checkele.getAttribute('data-file');
                dataJson[checkClass].push(checkFile);
            };
            checkedUnit.forEach(checkedData);

            // 增加主题颜色
            var colorVal = inColor.value;
            dataJson.themeColor = colorVal;
            console.log(dataJson);

            var options={
                hasback:true//不含有遮罩层
            };
            u.showLoader(options);

            $.ajax({
                type: 'post',
                dataType: 'text',
                data: dataJson,
                url: '/package',
                success: function (patch) {
                    u.hideLoader();
                    location.href = patch;
                },
                error: function (patch) {
                    console.error(patch);
                }
            });

            event.stopPropagation();

        },
        /**
         * 提交事件
         */
        charSend: function() {
            var self = this;
            var downAry = [];
            downAry.push(this.Dom.downBottom);
            downAry.push(this.Dom.downTop);
            var submitEvent = function(ele){
                ele.addEventListener('click',self.charFun);
            };
            downAry.forEach(submitEvent);
        }

        
    };
    cs.init();

}