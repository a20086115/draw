

var style = 0;
var timer;
var lock0 = false;
var lock2 = false;
var mycolor = "black";
$(function(){
	var c = document.getElementById("c");
	var ctx = c.getContext('2d');
	var c2 = document.getElementById("c2");
	var ctx2 = c.getContext('2d');
	ctx.beginPath();
	ctx.rect(0,0,800,600);
	ctx.stroke();
	
	ctx2.beginPath();
	ctx2.rect(0,0,800,600);
	ctx2.stroke();
	
    ctx2.clearRect(0,0,200,200);
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(100,100);
	ctx.stroke();
	ctx2.beginPath();
	ctx2.moveTo(0,20);
	ctx2.lineTo(100,100);
	ctx2.stroke();
	//添加选中样式
	$("li").click(function(){
		$(".choice").removeClass("choice");
		$(this).addClass("choice");
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
	$(".blue").click(function(){
		mycolor = "blue";
	})
	var beginx;
	var beginy;
	$("#div1").mousedown(function(event){
		beginx =event.pageX;
		beginy =event.pageY;
		ctx2.beginPath();
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
					
	//					console.log("鼠标移动的时候",event.pageX + ", " + event.pageY);
						ctx.beginPath();
	//					console.log("鼠标移动的时候beginx和beginy",beginx,beginy);
						ctx.moveTo(beginx,beginy);
						ctx.lineTo(event.pageX,event.pageY);
						ctx.strokeStyle = mycolor;
						ctx.stroke();
						beginx =event.pageX;
						beginy =event.pageY;
			    }
				})
				break;
			case 1:
				console.log("画个矩形吧！");
				break;
			case 2:
				lock2=true;
				console.log("画个圆吧 ！")
				console.log("我画圆的时候：",beginx,beginy);
				ctx2.save();
				$("#div1").mousemove(function(event){
					
					if(lock2)
					{
						//console.log("鼠标移动的时候",event.pageX + ", " + event.pageY);
						
//						ctx2.height = ctx2.height;
//						ctx2.clearRect(0,0,800,600);  
//						ctx2.beginPath();
//						ctx2.rect(0,0,800,600);
//						ctx2.strokeStyle ="black";
//						ctx2.stroke();
//						ctx2.save();

						console.log("鼠标移动的时候beginx和beginy",beginx,beginy);
						xx=event.pageX-beginx;
						yy=event.pageY-beginy;
						console.log(event.pageX,event.pageY);
						r = Math.sqrt(xx*xx+yy*yy)/2;
						centerx = (event.pageX+beginx)/2;
						centery = (event.pageY+beginy)/2;
						console.log(xx,yy,centerx,centery,r);
						ctx2.arc(centerx,centery,r,0,2*Math.PI,true);
						ctx2.strokeStyle = mycolor;
						ctx2.stroke();
//						
			    	}
					ctx2.restore();
	//		    	beginx =event.pageX;
	//				beginy =event.pageY;
				})
//				ctx2.restore();

				
				break;
		}
		
	})
		
	$("#div1").mouseup(function(){
	
		lock0=false;
		lock2 = false;
	});
})

function mydraw(){
	$("#div1").mousemove(function(event)
	{
		console.log(event.pageX + ", " + event.pageY);
	})
}
