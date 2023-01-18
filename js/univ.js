document.cookie ='safeCookie1=foo; SameSite=Lax';
document.cookie ="safeCookie2=foo";
document.cookie ="crossCookie=bar; SameSite=None;Secure";

$(document).ready(function(){
  $('.menu_btn').on('click',function(){
    $(this).toggleClass('on');

    if($('.m_gnb').is(":visible")){
        $('.m_gnb').stop().slideUp();
        $('.m_gnb > li > a').removeClass('underline');
    }
    else{
        $('.m_gnb').stop().slideDown();
    }
  });

  $('.m_gnb > li').on('click',function(ev){
      ev.preventDefault(); //a 태그 기능정지
      
      if( $(this).find('.subs').is(':visible')){
          $(this).find('.subs').stop().slideUp(500);
      }else{
          $('.m_gnb > li .subs').stop().slideUp(500);
          $(this).find('.subs').stop().slideDown(500);
      }
  });


  $('.img-slider1').slick({
    autoplay:false,
    autoplaySpeed:7000,
    fade:false,
    Speed:3000,
    dots: false,
    infinite: true,
    arrows:true,
    responsive:[
      {
          breakpoint:1024,
          settings:{
              autoplay:true,
              autoplaySpeed:7000,
              Speed:3000,
              arrows:false,
              swipe:true,
              dots:true
          }
      }
    ] 
  });

  $('.img-slider2').slick({
    autoplay:false,
    autoplaySpeed:7000,
    fade:false,
    Speed:3000,
    dots: false,
    infinite: true,
    arrows:true,
    responsive:[
      {
          breakpoint:1024,
          settings:{
              autoplay:true,
              autoplaySpeed:7000,
              Speed:3000,
              arrows:false,
              swipe:true,
              dots:true
          }
      }
    ] 
  });

  $('.img-slider3').slick({
    autoplay:false,
    autoplaySpeed:7000,
    fade:false,
    Speed:3000,
    dots: false,
    infinite: true,
    arrows:true,
    responsive:[
      {
          breakpoint:1024,
          settings:{
              autoplay:true,
              autoplaySpeed:7000,
              Speed:3000,
              arrows:false,
              swipe:true,
              dots:true
          }
      }
    ] 
  });

  $('.img-slider4').slick({
    autoplay:false,
    autoplaySpeed:7000,
    fade:false,
    Speed:3000,
    dots: false,
    infinite: true,
    arrows:true,
    responsive:[
      {
          breakpoint:1024,
          settings:{
              autoplay:true,
              autoplaySpeed:7000,
              Speed:3000,
              arrows:false,
              swipe:true,
              dots:true
          }
      }
    ] 
  });

  $('.menu1').click(function(){
    $(this).addClass('on');
    $('.menu2').removeClass('on');
    $('.menu3').removeClass('on');
    $('.menu4').removeClass('on');
  });

  $('.menu1').click(function(){
    $('section .img-slider1').css('display','block');
    $('section .img-slider2').css('display','none');
    $('section .img-slider3').css('display','none');
    $('section .img-slider4').css('display','none');
    $('section .img-slider1').slick('setPosition');
  });

  $('.menu2').click(function(){
    $(this).addClass('on');
    $('.menu1').removeClass('on');
    $('.menu3').removeClass('on');
    $('.menu4').removeClass('on');
  });

  $('.menu2').click(function(){
    $('section .img-slider2').css('display','block');
    $('section .img-slider1').css('display','none');
    $('section .img-slider3').css('display','none');
    $('section .img-slider4').css('display','none');
    $('section .img-slider2').slick('setPosition');
  });

  $('.menu3').click(function(){
    $(this).addClass('on');
    $('.menu1').removeClass('on');
    $('.menu2').removeClass('on');
    $('.menu4').removeClass('on');
  });

  $('.menu3').click(function(){
    $('section .img-slider3').css('display','block');
    $('section .img-slider1').css('display','none');
    $('section .img-slider2').css('display','none');
    $('section .img-slider4').css('display','none');
    $('section .img-slider3').slick('setPosition');
  });

  $('.menu4').click(function(){
    $(this).addClass('on');
    $('.menu1').removeClass('on');
    $('.menu2').removeClass('on');
    $('.menu3').removeClass('on');
  });

  $('.menu4').click(function(){
    $('section .img-slider4').css('display','block');
    $('section .img-slider1').css('display','none');
    $('section .img-slider2').css('display','none');
    $('section .img-slider3').css('display','none');
    $('section .img-slider4').slick('setPosition');
  });

  // 자동으로 메뉴 사이드업
  $(window).on('scroll', function(){
    let num = $(this).scrollTop();
    // 브라우저의 수직 스크롤바 위치 저장
    console.log(num);

    if(num >= 85){
        $('.m_gnb').stop().slideUp(300);
    }
});

});