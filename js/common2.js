
var style = 0;
var mycolor = "black";
var mywidth = 2.5;
var beginx;
var beginy;
$(function(){
	var c = document.getElementById("c");
	var ctx = c.getContext('2d');
	var c2 = document.getElementById("c2");
	var ctx2 = c2.getContext('2d');

	//添加选中样式
	$("li").click(function(){
		$(".cleardraw").removeClass("choice");
		//如果点的是那几个小标题是没有反应的
		if ($(this).prop("className") == "firstli") {
			
		} else{
		//先把父元素下的其他元素的选中状态移除。
			$(this).parent().children().removeClass("choice");
			$(this).addClass("choice");
		}
		
	})
	$(".small").click(function(){
		mywidth = 1;
	})
	$(".normol").click(function(){
		mywidth = 2.5;
	})
	$(".big").click(function(){
		mywidth = 5;
	})
	$("#qianbi").click(function(){
		style=0;
	})
	$("#juxing").click(function(){
		style=1;
	})
	$("#yuanxing").click(function(){
		style=2;
	})
	$("#xiangpi").click(function(){
		style=3;
	})
	$(".red").click(function(){
		mycolor = "red";
	})
	$(".black").click(function(){
		mycolor = "black";
	})
	$(".white").click(function(){
		mycolor = "white";
	})
	$(".yellow").click(function(){
		mycolor = "yellow";
	})
	$(".blue").click(function(){
		mycolor = "blue";
	})
	$(".cleardraw").click(function(){
		ctx.clearRect(0,0,800,600);
	})
	
	$("#div1").mousedown(function(event){
		beginx =event.pageX;
		beginy =event.pageY;
		console.log("我点下来的时候：",beginx,beginy);
		switch(style)
		{
			//铅笔状态
			case 0:
				console.log("我选的是铅笔");
				lock0 = true;
				//console.log("我点下来的时候：",beginx,beginy);
				$("#div1").mousemove(function(event){
					if(lock0)
					{			
						ctx.beginPath();
						ctx.moveTo(beginx,beginy);
						ctx.lineTo(event.pageX,event.pageY);
						ctx.strokeStyle = mycolor;
						ctx.lineWidth = mywidth;
						ctx.stroke();
						beginx =event.pageX;
						beginy =event.pageY;
			 	   }
				})
				break;
			case 1:
				lock1 = true;
				console.log("画个矩形吧！");
				$("#div1").mousemove(function(event){			
					if(lock1)
					{
						ctx2.clearRect(0,0,800,600); 
						xx=event.pageX-beginx;
						yy=event.pageY-beginy;
						ctx2.beginPath();
						ctx2.rect(beginx,beginy,xx,yy);
						ctx2.strokeStyle = mycolor;
						ctx2.lineWidth = mywidth;
						ctx2.stroke();
				    }
				})
				break;
			case 2:
				lock2=true;
				console.log("画个圆吧 ！")
				$("#div1").mousemove(function(event){			
					if(lock2)
					{
						ctx2.clearRect(0,0,800,600); 					
						xx=event.pageX-beginx;
						yy=event.pageY-beginy;
						r = Math.sqrt(xx*xx+yy*yy)/2;
						centerx = (event.pageX+beginx)/2;
						centery = (event.pageY+beginy)/2;
						console.log(xx,yy,centerx,centery,r);
						ctx2.beginPath();
						ctx2.arc(centerx,centery,r,0,2*Math.PI,true);
						ctx2.strokeStyle = mycolor;
						ctx.lineWidth = mywidth;
						ctx2.stroke();
				    }
				})
				break;
			//橡皮状态
			case 3:
				console.log("我选的是橡皮");
				lock3 = true;
				$("#div1").mousemove(function(event){
					if(lock3)
					{
					
						ctx.beginPath();
						ctx.moveTo(beginx,beginy);
						ctx.lineTo(event.pageX,event.pageY);
						ctx.strokeStyle = "white";
						ctx.lineWidth = mywidth*3;
						ctx.stroke();
						beginx =event.pageX;
						beginy =event.pageY;
			   		 }
				})
				break;
		}
		
	})
		
	$("#div1").mouseup(function(){
		switch(style)
		{
			//铅笔状态
			case 0:
				
				break;
			//矩形状态
			case 1:
				ctx2.clearRect(0,0,800,600); 
				xx=event.pageX-beginx;
				yy=event.pageY-beginy;
				ctx.beginPath();
				ctx.rect(beginx,beginy,xx,yy);
				ctx.strokeStyle = mycolor;
				ctx.lineWidth = mywidth;
				ctx.stroke();
				break;
			//画圆状态
			case 2:
				ctx2.clearRect(0,0,800,600); 
				xx=event.pageX-beginx;
				yy=event.pageY-beginy;
				console.log(event.pageX,event.pageY);
				r = Math.sqrt(xx*xx+yy*yy)/2;
				centerx = (event.pageX+beginx)/2;
				centery = (event.pageY+beginy)/2;
				console.log(xx,yy,centerx,centery,r);
				ctx.beginPath();
				ctx.arc(centerx,centery,r,0,2*Math.PI,true);
				ctx.strokeStyle = mycolor;
				ctx.lineWidth = mywidth;
				ctx.stroke();
				break;
			case 3:
				
				break;
				
		}
		
		lock0=false;
		lock1=false;
		lock2=false;
		lock3=false;
	});
})

