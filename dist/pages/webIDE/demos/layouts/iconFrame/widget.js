   
    var togglebutton = $("#iconframe-menubutton").find("i");
    var togglebar = $("#iconframe-menubar");
    
   // $(".iscroll-improve").mCustomScrollbar({theme:"minimal-dark"});

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