$(document).ready(function(){


  $('.header_main ul li > a').on('click', function(){
    $('.header_main ul li').removeClass('click')
    $(this).parents('li').addClass('click');
  })

  // 관리자 화면 nav메뉴 아코디언
  $('.lnb > ul > li > a').off('click');
  $('.lnb > ul > li > a').next('ul').hide();
  $('.lnb > ul > li > a').on('click', function(){
    // e.preventDefault();
    $(this).next('ul').slideToggle(300);
  });

  $('.lnb > ul > li > ul > li > a').on('click', function(){
    // e.preventDefault();
    $('.lnb > ul > li > ul > li > a').removeClass('on')
    $(this).addClass('on')
  })

  //관리자 네비게이션 3depth 있는 경우 클릭시 플러스 버튼 교체 및 2뎁스 색상 교체

  $('.depth_no').on('click', function(){
    $(this).addClass('on')
    $('.lnb > ul > li > a').next('ul').slideUp(300)
    $('.lnb > ul > li > a').removeClass('click')
  })

  $('.depth_is').on('click', function(){
    $('.depth_no').removeClass('on')
    $(this).toggleClass('click')
  })

  // 팝업창 X버튼 클릭시
  $('.pop_close').on('click', function(){
    $('.custom_popup, .search_popup').addClass('none')
  })

  function wrapMask(){
    var maskHeight = $(document).height();
    var maskWidth = $(document).width();
    $('#login_page').css({'width':maskWidth, 'height':maskHeight})
  }




















})
