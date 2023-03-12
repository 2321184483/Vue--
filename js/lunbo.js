// JavaScript Document
//获取元素
		var CYK_oWrap =document.getElementsByClassName("wrap")[0];
		var CYK_aBanner =CYK_oWrap.getElementsByClassName("banner");
		var CYK_oBtn =document.getElementsByClassName("btn")[0];
		var CYK_aSpan=CYK_oBtn.getElementsByTagName("span");
		var CYK_num=0;
	//初始化
		CYK_aBanner[0].style.opacity="1";
		CYK_aSpan[0].className="on";
	//点击按钮		
		for(var i=0;i<CYK_aSpan.length;i++)
		{
			CYK_aSpan[i].index=i;
			CYK_aSpan[i].onclick=function(){
				CYK_num =this.index;
				for(var j=0;j<CYK_aSpan.length;j++)
				{
					CYK_aBanner[j].style.opacity=0;
					CYK_aSpan[j].className="";
				}
				CYK_aBanner[CYK_num].style.opacity="1";
				this.className="on";
				}	
	    }
		setInterval (function(){
			CYK_num++;
			CYK_num%=CYK_aBanner.length;
			for(var j=0;j<CYK_aSpan.length;j++)
				{
					CYK_aBanner[j].style.opacity=0;
					CYK_aSpan[j].className="";
				}
				CYK_aBanner[CYK_num].style.opacity="1";
				CYK_aSpan[CYK_num].className="on";
		},3000)