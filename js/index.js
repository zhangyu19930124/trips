$(function(){
    $('.put1').mouseover(function(){
       $('.put1 .ly').css({'display':'block','backgroundColor':'#FF860D'});
    });
    $('.put').mouseout(function(){
    	$('.put1 .ly').css('display','none');
    });
     $('.put2').mouseover(function(){
       $('.put2 .ly').css({'display':'block','backgroundColor':'#FF860D'});
    });
    $('.put').mouseout(function(){
    	$('.put2 .ly').css('display','none');
    });
    $('.con_d2 ul li .li1').mouseover(function(){
    	$(this).stop().animate({top:'-30px'},500);
    });
    $('.con_d2 ul li .li1').mouseout(function(){
    	$(this).stop().animate({top:'0px'},500);
    });
    $('.con_d2 ul .last').mouseover(function(){
    	$('.con_d2 ul .last .last-1 h1').css('color','#fff');
    	$('.con_d2 ul .last .last-1 h2').css('color','#fff');
    });
     $('.con_d2 ul .last').mouseout(function(){
    	$('.con_d2 ul .last .last-1 h1').css('color','#333');
    	$('.con_d2 ul .last .last-1 h2').css('color','#333');
    });
});