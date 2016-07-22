    var togglebutton = $("#frame-menubutton").find("i");
    var togglebar = $("#frame-menubar");


    togglebutton.unbind().bind("click",function(){
      togglebar.toggleClass("u-menubar-open");
      
      $("main").toggleClass("content-fullScreen");
      togglebutton.each(function(){
        
        if($(this).hasClass("hide")){
          $(this).removeClass("hide");
        }else{
          $(this).addClass("hide");
        }
      })
    })