$(function(){
	var $ballx = $(".controlx .ball");
	var $bally = $(".controly .ball");
	var $cont = $(".container");
	var rotay = 0;
	var rotax = 0;
	function moveballx(ball){		
		ball.mousedown(function(){
			var y = event.pageY - parseInt(ball.css("top"));
			$(document).mousemove(function(){
				var $y = event.pageY - y;
				console.log($y);
				rotay = $y/400*360;
				$cont.css({
					"transform":"rotateX(-30"+rotax+"deg) rotateY(-30"+rotay+"deg)"
				});		
				//滑块移动部分
				if ($y>-5 &&$y<375) {
						ball.css({
						"position":"absolute",
						"top":$y + "px"
					})
				}				
			});
			$(document).mouseup(function(){
//				console.log("x=: " + rotax + " y=:" + rotay);
				$(document).off("mousemove");
			});
		});		
	}
	function movebally(ball){		
		ball.mousedown(function(){
			var x = event.pageX - parseInt(ball.css("left"));
			$(document).mousemove(function(){
				var $x = event.pageX - x;
				rotax = $x/400*360;
				$cont.css({
//					"transform":"rotateZ("+rotay+"deg) rotateX("+rotax+"deg)"
					"transform":"rotateX(-30"+rotax+"deg) rotateY(-30"+rotay+"deg)"
				});	
				if ($x>-5 && $x<375) {
						ball.css({
						"position":"absolute",
						"left":$x + "px"
					})
				}				
			});
			$(document).mouseup(function(){
//				console.log("x=: " + rotax + " y=:" + rotay);
				$(document).off("mousemove");
			});
		});		
	}
	moveballx($ballx);
	movebally($bally);	
})
