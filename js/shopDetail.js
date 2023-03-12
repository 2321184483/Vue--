/*
  商城用商品展示放大镜效果
*/
jQuery.ljsGlasses = {
    pcGlasses:function(_obj){
		var CYK_box = $("#"+_obj.boxid);
		var CYK_sum = $("#"+_obj.sumid);
		var CYK_last,CYK_next;
		var CYK_imgarr = CYK_box.find("img");
		var CYK_length = CYK_imgarr.length;
		var CYK_index = 0;
		var CYK_arr = new Array();
		CYK_sum.append("<p style='position:absolute;left:0;top:0;'></p>");
		var CYK_sumbox = CYK_sum.find("p");
		
		for(var i=0;i<CYK_length;i++){
			CYK_arr[i] = new Array();
			CYK_arr[i][0] = CYK_imgarr.eq(i).attr("src");
			CYK_arr[i][1] = CYK_imgarr.eq(i).attr("width");
			CYK_arr[i][2] = CYK_imgarr.eq(i).attr("height");
			var _scale = CYK_arr[i][1]/CYK_arr[i][2];
			if(_scale == 1){
				CYK_arr[i][3] = _obj.boxw;//width
				CYK_arr[i][4] = _obj.boxh;//height
				CYK_arr[i][5] = 0;//top
				CYK_arr[i][6] = 0;//left
				CYK_arr[i][7] = _obj.boxw/2;
				CYK_arr[i][8] = _obj.boxw*2;//width
				CYK_arr[i][9] = _obj.boxh*2;//height
				CYK_sumbox.append("<span><img src='"+CYK_imgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' height='"+_obj.sumh+"' /></span>");
				}
			if(_scale > 1){
				CYK_arr[i][3] = _obj.boxw;//width
				CYK_arr[i][4] = _obj.boxw/_scale;
				CYK_arr[i][5] = (_obj.boxh-CYK_arr[i][4])/2;
				CYK_arr[i][6] = 0;//left
				CYK_arr[i][7] = CYK_arr[i][4]/2;
				CYK_arr[i][8] = _obj.boxh*2*_scale;//width
				CYK_arr[i][9] = _obj.boxh*2;//height
				var CYK_place = _obj.sumh - (_obj.sumw/_scale);
				CYK_place = CYK_place/2;
				CYK_sumbox.append("<span><img src='"+CYK_imgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' style='top:"+CYK_place+"px;' /></span>");
				}
			if(_scale < 1){
				CYK_arr[i][3] = _obj.boxh*_scale;//width
				CYK_arr[i][4] = _obj.boxh;//height
				CYK_arr[i][5] = 0;//top
				CYK_arr[i][6] = (_obj.boxw-CYK_arr[i][3])/2;
				CYK_arr[i][7] = CYK_arr[i][3]/2;
				CYK_arr[i][8] = _obj.boxw*2;//width
				CYK_arr[i][9] = _obj.boxw*2/_scale;
				var CYK_place = _obj.sumw - (_obj.sumh*_scale);
				CYK_place = CYK_place/2;
				CYK_sumbox.append("<span><img src='"+CYK_imgarr.eq(i).attr("src")+"' height='"+_obj.sumh+"' style='left:"+CYK_place+"px;' /></span>");
				}
		}
		CYK_imgarr.remove();
		
		CYK_sum.append("<div style='clear:both;width:100%;'></div>");
		var CYK_sumarr = CYK_sum.find("span");
		var CYK_sumimg = CYK_sum.find("img");
		CYK_sumarr.eq(CYK_index).addClass(_obj.sumsel);
		var CYK_border = _obj.sumborder*2 + _obj.sumh;
		var CYK_sumwidth = (CYK_border+_obj.sumi)*_obj.sums;
		var CYK_sumboxwidth = (CYK_border+_obj.sumi)*CYK_length;
		CYK_sum.css({
			"overflow":"hidden",
			"height":CYK_border+"px",
			"width":CYK_sumwidth+"px",
			"position":"relative"
			});
		CYK_sumbox.css({
			"width":CYK_sumboxwidth+"px"
			});
		CYK_sumarr.css({
			"float":"left",
			"margin-left":_obj.sumi+"px",
			"width":_obj.sumw+"px",
			"height":_obj.sumh+"px",
			"overflow":"hidden",
			"position":"relative"
			});
		CYK_sumimg.css({
			"max-width":"100%",
			"max-height":"100%",
			"position":"relative"
			});
		
		CYK_box.append("<div style='position:relative;'><b style='display:block;'><img style='display:block;' src='' /></b><span style='position:absolute;left:0;top:0;display:none;z-index:5;'></span></div><p style='position:absolute;overflow:hidden;top:0;display:none;'><img style='max-width:none;max-height:none;position:relative;left:0;top:0;' src='' /></p>");
		var CYK_glass = CYK_box.find("span");
		var CYK_boximg = CYK_box.find("b img");
		var CYK_imgout = CYK_box.find("div");
		var CYK_showbox = CYK_box.find("p");
		var CYK_showimg = CYK_box.find("p img");

		CYK_box.css({
			"width":_obj.boxw+"px",
			"height":_obj.boxh+"px",
			"position":"relative"
			});
		var CYK_showboxleft = _obj.boxw + 10;
		CYK_showbox.css({
			"width":_obj.boxw+"px",
			"height":_obj.boxh+"px",
			"left":CYK_showboxleft+"px"
			});
		
		var imgPlaces = function(){
			CYK_showimg.attr("src",CYK_arr[CYK_index][0]);
			CYK_boximg.attr("src",CYK_arr[CYK_index][0]);
			CYK_boximg.css({
			    "width":CYK_arr[CYK_index][3]+"px",
			    "height":CYK_arr[CYK_index][4]+"px"
			});
			CYK_imgout.css({
				"width":CYK_arr[CYK_index][3]+"px",
			    "height":CYK_arr[CYK_index][4]+"px",
			    "top":CYK_arr[CYK_index][5]+"px",
			    "left":CYK_arr[CYK_index][6]+"px",
			    "position":"relative"
			});
			CYK_glass.css({
			    "width":CYK_arr[CYK_index][7]+"px",
			    "height":CYK_arr[CYK_index][7]+"px"
			});
			CYK_showimg.css({
				"width":CYK_arr[CYK_index][8]+"px",
			    "height":CYK_arr[CYK_index][9]+"px"
			});
			
		};
		imgPlaces();
		
		CYK_imgout.mousemove(function(e){
			var CYK_gl_w = CYK_glass.width()/2;
			var CYK_gl_w = CYK_imgout.width() - CYK_gl_w;
			var CYK_maxY = CYK_imgout.height() - CYK_gl_w;
			var CYK_moveX = 0,_moveY = 0;
			var CYK_nowX = e.pageX - CYK_imgout.offset().left;
		    var CYK_nowY = e.pageY - CYK_imgout.offset().top;
			var CYK_moveX = CYK_nowX-CYK_gl_w,_moveY = CYK_nowY-CYK_gl_w;
			
			if(CYK_nowX <= CYK_gl_w){ CYK_moveX = 0; }
			if(CYK_nowX >= CYK_gl_w){ CYK_moveX = CYK_gl_w-CYK_gl_w; }
			if(CYK_nowY <= CYK_gl_w){ _moveY = 0;}
			if(CYK_nowY >= CYK_maxY){ _moveY = CYK_maxY-CYK_gl_w;}
			CYK_glass.css({"left":CYK_moveX+"px","top":_moveY+"px"});

			var CYK_imgX = -CYK_moveX*CYK_showbox.width()/CYK_glass.width();
			var CYK_imgY = -_moveY*CYK_showbox.width()/CYK_glass.width();
			CYK_showimg.css({"left":CYK_imgX+"px","top":CYK_imgY+"px"});
	
		});//mouse END
		
		CYK_imgout.mouseenter(function(){
			CYK_glass.css("display","block");
			CYK_showbox.css("display","block");
			});
		CYK_imgout.mouseleave(function(){
			CYK_glass.css("display","none");
			CYK_showbox.css("display","none");
			});
		
		//列表部分
		var CYK_nextbtn = $("#"+_obj.nextid);
		var CYK_lastbtn = $("#"+_obj.lastid);
		var CYK_moveindex = 0;//索引移动
		
		var CYK_sumListMove = function(){
			var _leftmove = -CYK_moveindex*(CYK_border+_obj.sumi);
			if(CYK_sumbox.is(":animated")){CYK_sumbox.stop(true,true);}
			CYK_sumbox.animate({left:_leftmove+"px"},300);
			CYK_sumarr.eq(CYK_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
			imgPlaces();
		};//fun END
		
		if(CYK_length <= _obj.sums){
			var CYK_place = (_obj.sums-CYK_length)*CYK_border/2;
			CYK_sumbox.css("left",CYK_place+"px");
			CYK_nextbtn.click(function(){
				CYK_index++;
				if(CYK_index >= CYK_length){ CYK_index=CYK_length-1;}
				CYK_sumarr.eq(CYK_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
			    imgPlaces();
			});
			CYK_lastbtn.click(function(){
				CYK_index--;
				if(CYK_index <= 0){ CYK_index=0;}
				CYK_sumarr.eq(CYK_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
			    imgPlaces();
			});
		}else{
			var _maxNum = CYK_length-_obj.sums;
			CYK_nextbtn.click(function(){
			   CYK_moveindex++;
			   if(CYK_moveindex >= _maxNum){ CYK_moveindex=_maxNum; }
			   if(CYK_index <= CYK_moveindex){ CYK_index=CYK_moveindex;}
			   CYK_sumListMove();
		    });
			CYK_lastbtn.click(function(){
				CYK_moveindex--;
				if(CYK_moveindex <= 0){ CYK_moveindex=0;}
				if(CYK_index >= CYK_moveindex+_obj.sums){ CYK_index=CYK_moveindex+_obj.sums-1;}
				CYK_sumListMove();
			});
		}//if END

		CYK_sumarr.hover(function(){
			CYK_index = $(this).index();
			CYK_sumarr.eq(CYK_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
			imgPlaces();
		});
	
  }//pcGlasses END
}//ljsGlasses END