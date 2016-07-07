$('.u-button-tooltip-left').on('click',function () {
    var left=$(this).get(0).clientWidth;
    var top=$(this).get(0).offsetTop;
    var $tooltip=$(this).next();
    $tooltip.css('left',left+40);
    $tooltip.css('top',top);
    if($tooltip.is(':hidden')){
        $tooltip.show();
    }else{
        $tooltip.hide()
    }
});