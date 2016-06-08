/* ========================================================================
 * UUI: dialog.js v 1.0.0
 *
 * ========================================================================
 * Copyright 2015 yonyou, Inc.
 * Licensed under MIT ()
 * ======================================================================== */

/**
 * 弹出窗口
 */
+ function($) {
	$.dialog = function(op) {
      	var msgdiv = $('<div class="move-dialog "><div class="move-alert alert alert-'+op.type+' alert-dismissible"></div></div>');
        var closebtn = $('<button type="button" class="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        op.title = op.title || trans('dialog.info_dialog', '提示窗口')
		var titlediv = $('<h4>' + op.title + '</h4>');
        if(op.url){
			 var contentdiv = $('<p class="dialog_p"><iframe class="dialog_iframe" src='+op.url+'></iframe></p>')
			}else{
			 var contentdiv = $('<p style="position: absolute;top: 50px;bottom: 20px;overflow: auto;left: 30px;right: 25px;"></p>')         
			 contentdiv.append(op.msg)
        
        }
       	
        var btndiv,movable,mouseX_down,mouseY_down,mouseX_move,mouseY_move,diawidth,diaheight,tmpmove,bodywidth,bodyheight;
     
        bodywidth = window.innerWidth?window.innerWidth:document.body.clientWidth;
        bodyheight = window.innerHeight?window.innerHeight:document.body.clientHeight

		if(op.width){
       		msgdiv.css({width:op.width})
	    }else{
			msgdiv.css({width:520})
		}
	    if(op.height){
	       	msgdiv.css({height:op.height})
	    }
        msgdiv.find(".alert").append(closebtn).append(titlediv).append(contentdiv).append(btndiv)
		msgdiv.wrap("<div style='padding:5px'></div>");
        if(op.backdrop) {
          //添加遮罩层
          $(document.body).append('<div class="alert-backdrop" role="alert-dialog-backdrop"></div>');
          msgdiv.on('close.bs.alert', function(e) {
          
             $('.alert-backdrop[role="alert-dialog-backdrop"]').remove();
          });
        }
        

        msgdiv.find('[data-role="okbtn"]').on('click.alert.ok', op.okfn);
        
        if(op.cancelfn && typeof op.cancelfn == 'function'){
        	
           msgdiv.find('[data-role="cancelbtn"]').on('click', op.cancelfn);
           msgdiv.find('[aria-hidden="true"]').on('click', op.cancelfn);
        	
        }
       

        msgdiv.css('z-index',99);
       
       
		
				
	
		
		closebtn.on("click",function(){			
        	$.removeDialog()
        }) 
		if(op.movable){								
        	msgdiv.on("mousedown.dialog",function(e){
        		diawidth = msgdiv[0].clientWidth,diaheight = msgdiv[0].clientHeight;
	        	mouseX_down = e.clientX - msgdiv.position().left 
	        	mouseY_down = e.clientY - msgdiv.position().top
				//调整同时调整宽度高度
				if(mouseX_move < 11 && mouseY_move < 12){
	    		//左上角
	    			
					msgdiv_change()
	    			movable = 9;
	    			msgdiv.css({cursor: "se-resize"})
	    		
	    		}else if(mouseX_move > (diawidth - 20)  && mouseY_move > (diaheight- 10)){
	    		//右下角
	    			
					msgdiv_change()
	    			movable = 8;
	    			msgdiv.css({cursor: "se-resize"})
	    		}else if(mouseX_move < 11 && mouseY_move > (diaheight- 10)){
	    		//左下角
	    			
					msgdiv_change()
	    			movable = 7;
	    			msgdiv.css({cursor: "ne-resize"})
	    		}else if( mouseX_move > (diawidth - 20) && mouseY_move < 12 ){
	    		//右上角
	    			
					msgdiv_change()
	    			movable = 6;
	    			msgdiv.css({cursor: "ne-resize"})
	    		//调整窗口宽度	
	    		}else if(mouseX_move < 12 ){
					
					msgdiv_change()
					movable = 5;
					msgdiv.css({cursor: "e-resize"})
	    		
	    		}else if(mouseX_move > (diawidth - 20)){
	    			
					msgdiv_change()
					movable = 4;
					msgdiv.css({cursor: "e-resize"})
	    		//调整窗口高度	
	    		}else if(mouseY_move < 11 ){
	    			
	    			movable = 3;
	    			msgdiv_change()
	    			msgdiv.css({cursor: "n-resize"})
	    		
	    		}else if(mouseY_move > (diaheight- 10) ){
	    			
	    			movable = 2;
	    			msgdiv_change()
	    			msgdiv.css({cursor: "n-resize"})
	    		//移动窗口	
	    		}else if(e.target.nodeName == 'H4'){
	    			movable = 1;
	    			msgdiv_move();
	    			msgdiv.css({cursor: "auto"})
	    		}
        		
        	})
			$(document).on("mousemove.dialog",function(e){
				diawidth = msgdiv[0].clientWidth,diaheight = msgdiv[0].clientHeight;
        		mouseX_move = (e.clientX - msgdiv.position().left)
        		mouseY_move = (e.clientY - msgdiv.position().top)
        		if(movable == 1){       			
	        		msgdiv.css({left:e.clientX-mouseX_down,top:e.clientY-mouseY_down,cursor: "all-scroll"})
	        		return
        		}else if(movable == 2){
        			msgdiv.css({bottom:bodyheight - e.clientY -20 })        			
	        		return
        		}else if(movable == 3){
        			  msgdiv.css({top:e.clientY -20 })   			
	        		return
        		}else if(movable == 4){
        			
        			msgdiv.css({right:bodywidth- e.clientX -20 })   
	        		return
	        	}else if(movable == 5){
        			msgdiv.css({left:e.clientX -20 })
	        		return
        		}else if(movable == 6){
        			msgdiv.css({top:e.clientY -20,right:bodywidth- e.clientX -20 })  
	        		return
				}else if(movable == 7){
        			msgdiv.css({left:e.clientX -20,bottom:bodyheight - e.clientY -20 })  
	        		return
				}else if(movable == 8){
        			msgdiv.css({bottom:bodyheight - e.clientY -20,right:bodywidth- e.clientX -20 })  
	        		return
        		}else if(movable == 9){
        			msgdiv.css({top:e.clientY -20,left:e.clientX -20 })  
	        		return

        		}else{
        			if((mouseX_move < 11 && mouseY_move < 12)||(mouseX_move > (diawidth - 20)  && mouseY_move > (diaheight- 10)) ){
	        			msgdiv.css({cursor: "se-resize"})
	        		}else if((mouseX_move < 11 && mouseY_move > (diaheight- 10))||(mouseX_move > (diawidth - 20)  && mouseY_move < 12) ){
	        			msgdiv.css({cursor: "ne-resize"})
	        		}else if( mouseX_move < 12 || mouseX_move > (diawidth - 20) ){
        				msgdiv.css({cursor: "e-resize"})
	        		}else if(mouseY_move < 11 || mouseY_move > (diaheight- 10) ){
	        			msgdiv.css({cursor: "n-resize"})
	        		}else {
	        			msgdiv.css({cursor: "auto"})
	        		}
        		}
        	})
        	$(document).on("mouseup.dialog",function(){       		
        		movable = false;
        		msgdiv.css({cursor: "auto"});
        	})
        
        } 
		function msgdiv_resize(){
			diawidth = msgdiv[0].clientWidth,diaheight = msgdiv[0].clientHeight;
			
			msgdiv.css({margin:"0px",
				left:(bodywidth - diawidth)/2, 
				top:(bodyheight - diaheight)/2
			})
		}
		function msgdiv_move(){
			msgdiv.css({width:msgdiv[0].clientWidth,height:msgdiv[0].clientHeight})
		}
		function msgdiv_change(){
			diawidth = msgdiv[0].clientWidth,diaheight = msgdiv[0].clientHeight;
			
			msgdiv.css({width:"auto",height:"auto",
						left:msgdiv.offset().left, 
						top:msgdiv.offset().top,
						right:bodywidth- msgdiv.offset().left - diawidth, 
						bottom:bodyheight - msgdiv.offset().top - diaheight
			})
		}
		$(document.body).append(msgdiv);
		msgdiv_resize();
		
    }
	$.removeDialog = function(){
		 var tmp;
      	(tmp = $('.move-dialog ')).length && tmp.remove();
		(tmp = $('.alert-backdrop')).length && tmp.remove(); 
		$(document).off('mousemove.dialog').off('mouseup.dialog')		
	}

}($)