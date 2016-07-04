$(function(){
  $('.content .content3 .content3_d2 .row .dd').mouseover(function(){
  	  $(this).find(".dd1").css('display','block');
  });
  $('.content .content3 .content3_d2 .row .dd').mouseout(function(){
  	  $(this).find(".dd1").css('display','none');
  });
  // var top2=$('#secu1').position().top;
  //   $(window).scroll(function(){
  //     var top1=$(document).scrollTop();
  //     var a=top1+top2;
  //       if(a>500){
  //         // alert(a);
  //         $(".section_1").animate({
  //           left:'-20px'
  //         },1000);
  //       } 
  //     });
  var t1=$('#cont4_d2').position().top;
  $(window).scroll(function(){
    var t2=$(document).scrollTop();
    var t=t1+t2;
    console.log(t);
    if(t>1500&&t<2000){
      $('#cont4_d21').animate({
         left:'19%'
      },800);
       $('#cont4_d22').animate({
         right:'16%'
      },800);
    }
     else if(t>=2000&&t<2400){
      $('#cont4_a21').animate({
        left:'19%'
      },800);
      $('#cont4_a22').animate({
        right:'16%'
      },800);
     }
     else if(t>=2400&&t<2800){
       $('#cont4_b21').animate({
        left:'19%'
      },800);
      $('#cont4_b22').animate({
        right:'16%'
      },800);
     }
     else if(t>2800){
       $('#cont4_c21').animate({
        left:'19%'
      },800);
      $('#cont4_c22').animate({
        right:'16%'
      },800);
     }
  });
});