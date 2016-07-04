$(function(){
	$('#l2').mouseover(function(){
		$(this).css('backgroundColor','#FF9900');
		$('#l2 a').css("color",'#fff');
		$('#l2 .ly').show();
	});
	$('#l2').mouseout(function(){
		$(this).css('backgroundColor','#fff');
		$('#l2 a').css("color",'#000');
		$('#l2 .ly').hide();
	});
	$('#l3').mouseover(function(){
		$(this).css('backgroundColor','#FF9900');
		$('#l3 a').css("color",'#fff');
		$('#l3 .ly1').show();
	});
	$('#l3').mouseout(function(){
		$(this).css('backgroundColor','#fff');
		$('#l3 a').css("color",'#000');
		$('#l3 .ly1').hide();
	});
	//隐藏1
	$("#tab_l1").mouseover(function(){
		$(".hd1").show();
	});
	$("#tab_l1").mousemove(function(){
		$(".hd1").show();
	});
	$("#tab_l1").mouseout(function(){
		$(".hd1").hide();
	});
	$('.hd1').mouseover(function(){
		$(this).show();
	});
	$('.hd1').mouseout(function(){
		$(this).hide();
	});
	// 隐藏2
	$("#tab_l2").mouseover(function(){
		$(".hd2").show();
	});
	$("#tab_l2").mousemove(function(){
		$(".hd2").show();
	});
	$("#tab_l2").mouseout(function(){
		$(".hd2").hide();
	});
	$('.hd2').mouseover(function(){
		$(this).show();
	});
	$('.hd2').mouseout(function(){
		$(this).hide();
	});
	// 隐藏3
	$("#tab_l3").mouseover(function(){
		$(".hd3").show();
	});
	$("#tab_l3").mousemove(function(){
		$(".hd3").show();
	});
	$("#tab_l3").mouseout(function(){
		$(".hd3").hide();
	});
	$('.hd3').mouseover(function(){
		$(this).show();
	});
	$('.hd3').mouseout(function(){
		$(this).hide();
	});
	//
    $("#secu1 .l1").mouseover(function(){
    	$("#secu1 li .a1").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l1").mouseout(function(){
    	$("#secu1 li .a1").stop().animate({top:"0px"},500);
    });
      $("#secu1 .l2").mouseover(function(){
    	$("#secu1 li .a2").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l2").mouseout(function(){
    	$("#secu1 li .a2").stop().animate({top:"0px"},500);
    });
      $("#secu1 .l3").mouseover(function(){
    	$("#secu1 li .a3").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l3").mouseout(function(){
    	$("#secu1 li .a3").stop().animate({top:"0px"},500);
    });
      $("#secu1 .l4").mouseover(function(){
    	$("#secu1 li .a4").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l4").mouseout(function(){
    	$("#secu1 li .a4").stop().animate({top:"0px"},500);
    });
      $("#secu1 .l5").mouseover(function(){
    	$("#secu1 li .a5").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l5").mouseout(function(){
    	$("#secu1 li .a5").stop().animate({top:"0px"},500);
    });
      $("#secu1 .l6").mouseover(function(){
    	$("#secu1 li .a6").stop().animate({top:"-40px"},500);

    });
     $("#secu1 .l6").mouseout(function(){
    	$("#secu1 li .a6").stop().animate({top:"0px"},500);
    });
   


   var s=$(".lanren");
for(var i=0;i< s.length;i++){
	s.eq(i).css({top: s.eq(i).position().top,left: s.eq(i).position().left})
}
s.css("position","absolute");
$.each(s,function(k,v){
	$(v).bind("mouseover",function(){
		if(!s.is(":animated")){
			if(!$(v).hasClass("middle")){
				var sss=$(".middle");
				var ls=sss.position().left;
				var ts=sss.position().top;
				var ws=sss.width();
				var hs=sss.height();
				s.eq(k).addClass("ss").animate({left: ls,top: ts,width: ws,height: hs},360);
				sss.animate({left: $(v).position().left,top: $(v).position().top,width: $(v).width(),height: $(v).height()},400,"swing",
				function(){
					$(this).removeClass("middle");
					s.eq(k).addClass("middle").removeClass("ss")
				});
			}
		}
	});
});


$(".contt").hover(function(){
		$(this).children(".txt").stop().animate({height:"360px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"130"},550);
		$(this).find(".txt p").stop().show();
	},function(){
		$(this).children(".txt").stop().animate({height:"100px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"0px"},550);
		$(this).find(".txt p").stop().hide();
	});

	 $('.imgrow2').adipoli({
        'startEffect' : 'overlay',
        'hoverEffect' : 'sliceDown'
     });
  //     $('.imgrow3').adipoli({
  //       'startEffect' : 'transparent',
  //       'hoverEffect' : 'boxRandom'
  //   });
});