$(document).ready(function(){

  // 관리자 화면 nav메뉴 아코디언
  $('nav > ul > li > a').off('click');
  $('nav > ul > li > a').next('ul').hide();
  $('nav > ul > li > a').on('click', function(e){
    e.preventDefault();
    $(this).next('ul').slideToggle(300);
  });
  $('nav > ul > li > ul > li > a').on('click', function(e){
    e.preventDefault();
    $('nav > ul > li > ul li a').removeClass('on')
    $(this).addClass('on')
  })
  $('.header_main ul li a').on('click', function(){
    $('.header_main ul li').removeClass('click')
    $(this).parents('li').addClass('click');
  })

  function wrapMask(){
    var maskHeight = $(document).height();
    var maskWidth = $(document).width();
    $('#login_page').css({'width':maskWidth, 'height':maskHeight})
  }




















})
