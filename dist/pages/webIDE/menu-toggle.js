(function(document, window, $) {
    'use strict';
  $(document).ready(function(){ 
        
   
    $(".iscroll-improve").mCustomScrollbar({theme:"minimal-dark"});

    var togglebutton = $("#menubutton").find("i");
    var togglebar = $("#menubar");
    var htmlbar=$('[href=#tab-panel-1]');
    var cssbar=$('[href=#tab-panel-2]');
    var jsbar=$('[href=#tab-panel-3]');

    togglebutton.unbind().bind("click",function(){
      togglebar.toggleClass("u-menubar-open");
      console.log($(this));
      $("main").toggleClass("content-fullScreen");
      togglebutton.each(function(){
        
        if($(this).hasClass("hide")){
          $(this).removeClass("hide");
        }else{
          $(this).addClass("hide");
        }
      })
    })

    htmlbar.bind("click",function(){
      window.htmlEditor.resize()
    });

    cssbar.bind("click",function(){
      window.cssEditor.resize()
    });

    jsbar.bind("click",function(){
      window.scriptEditor.resize()
    });

  });
    
    
      
})(document, window, jQuery);