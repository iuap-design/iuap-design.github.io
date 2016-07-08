$('.u-button-tooltip-left').on('click',function () {
    var left=$(this).get(0).offsetLeft+$(this).get(0).clientWidth;
    var top=$(this).get(0).offsetTop;
    var $tooltip=$(this).next();
    $tooltip.css('left',left+10);
    $tooltip.css('top',top);
    if($tooltip.is(':hidden')){
        $tooltip.show();
    }else{
        $tooltip.hide()
    }
});
$('.tooltip-rotate').each(function () {
    var $btn=$(this).prev();
    $(this).css('left',$btn.get(0).clientWidth+$btn.get(0).offsetLeft+10);
    $(this).css('top',$btn.get(0).offsetTop);
});
$('.u-button-tooltip-rotate').hover(function () {
    var left=$(this).get(0).clientWidth;
    var top=$(this).get(0).offsetTop;
    var $tooltip=$(this).next();
    $tooltip.css('left',left+40);
    $tooltip.css('top',top);
    $tooltip.addClass('rotate');
},function () {
    var left=$(this).get(0).clientWidth;
    var top=$(this).get(0).offsetTop;
    var $tooltip=$(this).next();
    $tooltip.css('left',left+40);
    $tooltip.css('top',top);
    $tooltip.removeClass('rotate');
});