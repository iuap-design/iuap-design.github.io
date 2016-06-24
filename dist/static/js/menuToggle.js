(function(document, window, $) {
    'use strict';
  $(document).ready(function(){ 
    var togglebutton = $("#menubutton").find("i");
    var togglebar = $("#menubar");

    togglebutton.unbind().bind("click",function(){
      togglebar.toggleClass("u-menubar-open");
      console.log($(this));

      togglebutton.each(function(){
        
        if($(this).hasClass("hide")){
          $(this).removeClass("hide");
        }else{
          $(this).addClass("hide");
        }
      })
    })
  });
    
    
      
})(document, window, jQuery);