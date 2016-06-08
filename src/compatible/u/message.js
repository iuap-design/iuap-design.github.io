
+function ($) {
  'use strict';
  $.showMessage = function(op) {
        var msgdiv = $('<div class="alert alert-'+op.type+' alert-dismissible"></div>');
        var closebtn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        msgdiv.append(closebtn).append(op.msg);
        
        msgdiv.css({'position':'fixed', 'display':'block'});
        if(op.pos) {
          if(op.pos.top && op.pos.left) {
            msgdiv.css({'top':op.pos.top, 'left':op.pos.left});
          } else if(op.pos.top && op.pos.right) {
            msgdiv.css({'top':op.pos.top, 'right':op.pos.right});
          } else if(op.pos.bottom && op.pos.left) {
            msgdiv.css({'bottom':op.pos.bottom, 'left':op.pos.left});
          } else if(op.pos.bottom && op.pos.right) {
            msgdiv.css({'bottom':op.pos.bottom, 'right':op.pos.right});
          } else if(op.pos.top) {
            msgdiv.css({'left':op.pos.left, 'top':10});
          } else if(op.pos.bottom) {
            msgdiv.css({'bottom':op.pos.bottom, 'left':10});
          } else if(op.pos.left) {
            msgdiv.css({'left':op.pos.left, 'top':10});
          } else if(op.pos.right) {
            msgdiv.css({'right':op.pos.right, 'top':10});
          }
        } else {
          msgdiv.css({'bottom':10, 'right':10});
        }
        msgdiv.css('z-index',99);
        setTimeout(function() {
          msgdiv.fadeOut('slow');
        }, 3000);

        $(document.body).append(msgdiv);
        closebtn.focus();
    }
  
 $.showMessageDialog = function(op) {

     if(op.type){
         var msgdiv = $('<div class="alert alert-'+op.type+' alert-dismissible alert-dialog"></div>');
     }else{

         var msgdiv = $('<div class="alert alert-warning alert-dismissible alert-dialog"></div>');
     }
     var closebtn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
     if(op.title){
         var titlediv = $('<h4>'+op.title+'</h4>');
     }else{
         var titlediv = $('<h4>提示</h4>');
     }
     op.msg = op.msg.replace(/&lt;br&gt;/g,"<br>")
     var contentdiv = $('<div class="alert-content"><p>'+op.msg+'</p></div>')
     var btndiv;
     if(op.type == 'danger' || op.type == 'warning') {
         btndiv = $('<div class="alert-dialog-footer"><div class="col-md-4 diag_detail" ></div><div class="col-md-4" ><button type="button" data-role="okbtn" data-dismiss="alert" class="btn btn-danger btn-block">确定</button></div><div class="col-md-4"><button type="button" data-dismiss="alert" data-role="cancelbtn" class="btn btn-default btn-block">取消</button></div></div>');
     } else {
         btndiv = $('<div class="alert-dialog-footer"><div class="col-md-4"  ></div><div class="col-md-4 diag_detail" ></div><div class="col-md-4" ><button type="button" data-role="okbtn" data-dismiss="alert" class="btn  btn-block">确定</button></div>');
     }



     msgdiv.append(closebtn).append(titlediv).append(contentdiv).append(btndiv);
    if(op.width){
       		msgdiv.css({width:op.width})
    }
    if(op.height){
       		msgdiv.css({height:op.height})
    }
   
	if(op.detail){
			
		$(msgdiv).find(".diag_detail").append('<button type="button"  class="btn btn-block">详细</button>')
		msgdiv.on("click",".diag_detail",function(){
			if($(".detail_p").length > 0){
				$(".detail_p").remove();
			}else{	
				msgdiv.append("<p class='detail_p'>"+op.detail+"</p>")
			}
		})
	}
    if(op.backdrop) {
      //添加遮罩层
      $(document.body).append('<div class="alert-backdrop" role="alert-dialog-backdrop"></div>');
      msgdiv.on('close.bs.alert', function() {
         $('.alert-backdrop[role="alert-dialog-backdrop"]').remove();
      });
    }

    msgdiv.find('[data-role="okbtn"]').on('click.alert.ok', op.okfn);
    
    if(op.cancelfn && typeof op.cancelfn == 'function'){
    	
       msgdiv.find('[data-role="cancelbtn"]').on('click', op.cancelfn);
       msgdiv.find('[aria-hidden="true"]').on('click', op.cancelfn);
    	
    }
   

    msgdiv.css('z-index',op.zIndex || 99);
    function msgdiv_resize(){
    	var divWidth = msgdiv[0].offsetWidth || 500,divHeight = msgdiv[0].offsetHeight    	
		msgdiv.css({margin:"0px",
			left:((window.innerWidth?window.innerWidth:document.body.clientWidth)- divWidth)/2, 
			top:((window.innerHeight?window.innerHeight:document.body.clientHeight) - divHeight)/2
		})
	}
    $(document.body).append(msgdiv);
    msgdiv.find('[data-role="okbtn"]').focus()
    msgdiv_resize()

}

		$.removeAlert = function(){
			 var tmp;
      (tmp = $('.alert')).length && tmp.remove();
      (tmp = $('.alert-backdrop')).length && tmp.remove();      
      
    
		}

}($);




