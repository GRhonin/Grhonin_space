window.onload = function() {
	var myvi = document.querySelector("#myvideo");
	var beginbtn = document.querySelector(".control .floor1");
	//开始、暂停按钮
	myvi.volume = 0.5;
	var play = false;
	beginbtn.addEventListener("click", function() {
		if(!play) {
			play = true;
			this.style.background = "url(img/videologo1.png) no-repeat -58px -13px";
			this.style.backgroundSize = "800%";
			myvi.play();
		} else if(play) {
			play = false;
			this.style.background = "url(img/videologo1.png) no-repeat -13px -13px";
			this.style.backgroundSize = "800%";
			myvi.pause();
		}
	});
	//获取视频当前时长及当前时长	,并且根据时长控制进度条
	myvi.addEventListener("timeupdate", function() {
		var sp1 = document.querySelector("#sp1");
		var timeAll = Math.floor(myvi.duration);  //获取视频总时长
		var timedisplay = Math.floor(myvi.currentTime); //获取视频当前时间节点
		//根据当前事件控制进度条
		var pboxwid = 600*timedisplay/timeAll;
		var probox = document.querySelector(".progress .probox");
		var proboxctr = document.querySelector(".progress .boxctro");
		probox.style.width = parseFloat(pboxwid) + "px";
		proboxctr.style.left = parseFloat(pboxwid) + "px";
		//显示当前时间		
		var a2 = timedisplay % 60;
		var a1 = (timedisplay - a2) / 60;
		//用自定义函数写
		sp1.innerText = strtotime(a1, a2);
		//获取视频总时长,这个地方有一点很奇怪，duration必须在timeupdate里面才生效，在外面就失效了
		
		var t2 = timeAll % 60;
		var t1 = (timeAll - t2) / 60;
		document.querySelector("#sp2").innerText = strtotime(t1, t2);
	});
	//音量静音  这一段在设置音量滑轨后失效了……
	var voicebtn = document.querySelector(".control .floor3");
	var multd = false;
	voicebtn.addEventListener("click", function() {
		if(!multd) {
			multd = true;
			myvi.muted = true;
			this.style.background = "url(img/videologo1.png) no-repeat -193px -62px";
			this.style.backgroundSize = "800%";
		} else if(multd) {
			multd = false;
			myvi.muted = false;			
			myvi.volume = 0.5;
			this.style.background = "url(img/videologo1.png) no-repeat -193px -13px";
			this.style.backgroundSize = "800%";
		}
	});
}
$(function() {
	//鼠标hover显示音量条事件
	$(".control .floor3").hover(function() {
		$(".control .voicebox").show();
	}, function() {
		$(".control .voicebox").hide();
	});
	
	$(".control .voicebox").hover(function() {
		$(".control .voicebox").show();
	}, function() {
		$(".control .voicebox").hide();
	});
	//音量调节
	var $x; //鼠标距左侧距离
	var $voicebox = $(".control .voicebox .box");
	$voicebox.click(function() {
		console.log(555);
	}).mousedown(function(e) {
		$x = e.pageX - parseInt($voicebox.css("left"));
		$(document).mousemove(function(e) {
			console.log(6);
			var x = e.pageX - $x;
			if(x > -2 && x < 95) {
				$voicebox.css("left", x);
				var vol = (x + 2) / (97);
				document.querySelector("#myvideo").volume = vol;
			};
			if(x < 0) {
				document.querySelector("#myvideo").muted = true;
				$(".floor3").css({
					"background": "url(img/videologo1.png) no-repeat -193px -62px",
					"backgroundSize": "800%"
				});
			} else {
				document.querySelector("#myvideo").muted = false;
				$(".floor3").css({
					"background": "url(img/videologo1.png) no-repeat -193px -13px",
					"backgroundSize": "800%"
				});
			};
		}).mouseup(function() {
			$(document).off("mousemove")
		});
	});
	//进度条消失事件
	var $video = $("#myvideo");
	var $progress = $(".progress");
	var $cover = $(".cover");
	disPlay($cover);
	disPlay($video);
	function disPlay($dom){
		$dom.hover(function(){
		$progress.stop().animate({
			"height":"20px",
			"top":"370px"
		},200);
	},function(){
		$progress.stop().animate({
			"top":"390px",
			"height":"0"
		},200);
	});
	}
	//弹幕	
	$(".btn").click(function(){
		var $cover = $(".cover");                                              
		var $barrage = $("#barrage");
		var text1 = $barrage.val();
		var newbar = document.createElement("span");
		var h = parseFloat(Math.random()*300);
		$(newbar).css({
			"color":"white",
			"position":"absolute",
			"top":h,
			"left":"600px"
		})
		var le = 0;
		console.log(text1.length);
		var intval = setInterval(function(){
			le +=1;
			if (le > 700) {
				clearInterval(intval);
			}
			$(newbar).css("left",600 - le + "px");			
		},10);
		$cover.append(newbar);
		$(newbar).text(text1);
		$barrage.val("");
	})
})
//自定义时长转换格式。
function strtotime(a1, a2) {
	if(a1.toString().length < 2) {
		a1 = "0" + a1;
	}
	if(a2.toString().length < 2) {
		a2 = "0" + a2;
	}
	return a1 + ":" + a2;
}