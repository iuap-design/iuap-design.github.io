/*鼠标划过二级菜单*/
$('.u-button-hover').hover(function () {
    $(this).next().show();
},function () {
    var flag=true;
    var time=$(this).attr('time')||0;
    var $that=$(this).next();
    $that.hover(function () {
        flag=false;
        $that.show();
    },function () {
        window.setTimeout(function () {
            $that.hide();
        },time);
    });
    window.setTimeout(function () {
        if(flag){
            $that.hide();
        }
    },time?time:100);
});
/*默认对齐的二级菜单*/
$('.u-button-level').on('click',function () {
    var $ul=$(this).next();
    if($ul.is(':hidden')){
        $ul.show();
    }else{
        $ul.hide();
    }
});
$('.u-button-level-hover').hover(function () {
    var left=$(this).parent().get(0).offsetLeft+$(this).parent().get(0).clientWidth;
    var top=$(this).get(0).offsetTop;
    var $ul=$(this).children('ul');
    $ul.css('left',left);
    $ul.css('top',top);
    $ul.show();
},function () {
    var flag=true;
    var $ul=$(this).children('ul');
    $ul.hover(function () {
        flag=false;
        $ul.show();
    },function () {
        $ul.hide();
        $ul.parent().parent().hide();
    });
    if(flag){
        $ul.hide();
    }
});
/*向上对齐的二级菜单*/
$('.u-button-level-dropup').on('click',function () {
    var $ul=$(this).next();
    if($ul.is(':hidden')){
        $ul.show();
    }else{
        $ul.hide();
    }
});
$('.u-button-level-hover-dropup').hover(function () {
    var left=$(this).parent().get(0).offsetLeft+$(this).parent().get(0).clientWidth;
    var $ul=$(this).children('ul');
    $ul.css('left',left);
    $ul.css('top',0);
    $ul.show();
},function () {
    var flag=true;
    var $ul=$(this).children('ul');
    $ul.hover(function () {
        flag=false;
        $ul.show();
    },function () {
        $ul.hide();
        $ul.parent().parent().hide();
    });
    if(flag){
        $ul.hide();
    }
});
/*左侧二级菜单*/
$('.u-button-level-left').on('click',function () {
    var $ul=$(this).next();
    if($ul.is(':hidden')){
        $ul.show();
    }else{
        $ul.hide();
    }
});
$('.u-button-level-hover-left').hover(function () {
    var left=$(this).parent().get(0).clientWidth;
    var $ul=$(this).children('ul');
    $ul.css('left',-left-4);
    $ul.css('top',0);
    $ul.show();
},function () {
    var flag=true;
    var $ul=$(this).children('ul');
    $ul.hover(function () {
        flag=false;
        $ul.show();
    },function () {
        $ul.hide();
        $ul.parent().parent().hide();
    });
    if(flag){
        $ul.hide();
    }
});