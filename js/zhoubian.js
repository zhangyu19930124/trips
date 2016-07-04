$(function(){
    $('#zb').mouseover(function(){
        $('#hz').stop().animate({
        	opacity: 'show'
        },500);
         $('#hz').mouseover(function(){
	        $(this).show();
	    });
    	$('#zb a span').css({"backgroundPosition":"-73px -33px"});
    });
    $('#zb').stop().mouseout(function(){
    	$("#zb a span").css({"backgroundPosition":"-73px -21px"});
        $('#hz').animate({
        	opacity: 'toggle'
        },500);
       
	    $('#hz').mouseout(function(){
	        $(this).hide();
	    });
    });
   
});