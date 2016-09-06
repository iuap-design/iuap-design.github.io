$('.u-button-hover').hover(function () {
    var offset = $(this).offset();
    $(this).next().css('left', offset.left);
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
