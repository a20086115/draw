

var style = 0;
var timer;
var lock = false;
$(function(){
	var c = document.getElementById("c");
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.rect(0,0,800,600);
	ctx.stroke();
	$("#juxing").click(function(){
		console.log("我是矩形");
		style=1;
		$("#juxing").css("border","2px solid black");
	})
	$("#c").mousedown(function(){
		lock = true;
		var beginx =event.pageX;
		var beginy =event.pageY;
		console.log("我点下来的时候：",beginx,beginy);
		$("#c").mousemove(function(event){
			if(lock)
			{
			
				console.log("鼠标移动的时候",event.pageX + ", " + event.pageY);
				ctx.beginPath();
				console.log("鼠标移动的时候beginx和beginy",beginx,beginy);
				ctx.moveTo(beginx,beginy);
				ctx.lineTo(event.pageX,event.pageY);
				ctx.stroke();
				
			
	    	}else{
	    		
	    	}
	    	beginx =event.pageX;
			beginy =event.pageY;
		})
	})
		
	$("#c").mouseup(function(){
	
		lock=false;
		
	});
})

function mydraw(){
	$("#c").mousemove(function(event)
	{
		console.log(event.pageX + ", " + event.pageY);
	})
}
