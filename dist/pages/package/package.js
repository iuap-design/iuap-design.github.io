window.onload = function() {

    /**
     * 选中元素
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
                var checkClass = checkele.getAttribute('data-catlog');
                if(!dataJson[checkClass]){
                    dataJson[checkClass] = [];
                }
                var checkFile = checkele.getAttribute('data-file');
                dataJson[checkClass].push(checkFile);
            };
            checkedUnit.forEach(checkedData);

            $.ajax({
                type: 'post',
                dataType: 'json',
                data: dataJson,
                url: '/package',
                success: function (patch) {
                    console.log(patch);
                    console.log('success')
                },
                error: function (patch) {
                    console.log(patch);
                    console.log('error');
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


	// var btnSubmit = document.getElementById('button');
	// var dataJson = {"test":123,"js": "script"};

	// function clickFun(){
	// 	$.ajax({
	// 		type: 'post',
 //            dataType: 'json',
 //            data: dataJson,
 //            url: '/package',
 //            success: function (patch) {
 //                console.log(patch);
 //                console.log('success')
 //            },
 //            error: function (patch) {
 //            	console.log(patch);
 //            	console.log('error');
 //            }
	// 	})
	// }
	// btnSubmit.addEventListener('click', clickFun);
}