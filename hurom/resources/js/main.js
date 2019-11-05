$(document).ready(function(){

  // slider
  var mianSwiper = new Swiper('.main_visual .swiper-container', {
    effect: 'fade',
    speed: 1500,
    loop: 'auto',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.main_visual .swiper-button-next',
        prevEl: '.main_visual .swiper-button-prev',
      },
  });

  var cont01Swiper = new Swiper('.cont_area01 .swiper-container', {
    effect: 'fade',
    loop: 'auto',
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var cont02Swiper = new Swiper('.cont_area02 .left .swiper-container', {
    loop: 'auto',
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  //slider


  $('#gnb > li').mouseenter(function(){
    $(this).children('ul').stop().fadeIn('fast');
  })
  $('#gnb > li').mouseleave(function(){
    $(this).children('ul').stop().fadeOut('fast');
  })

  var sHeight = ($(document).height() - $(window).height() - $('footer').height() - 20);
  var scroll;
  var scrt = $(window).scrollTop();
  var sWidth = $(window).width();

  var menuIdx = 0;
  $('.btn_menu').on('click', function(){
    ++menuIdx;
    scrt = $(window).scrollTop();
    sWidth = $(window).width();
    $(this).toggleClass('close');
    $('.dim_menu').fadeToggle();
    $('body').toggleClass('hidden');

    if(menuIdx>1){
      menuIdx=0;
    }
    if(menuIdx==1){
      $('.btn_hShopping').hide();
      $('aside').hide();
    }else{
      $('.btn_hShopping').show();
      $('aside').show();
    }

    if(scrt>50){
      if(menuIdx==1){
        $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/logo_w.png');
      }
      if(menuIdx==0){
        $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/m_logo.png');
      }
    }

  })

  $(window).scroll(function(){
    scrt = $(window).scrollTop();
    sWidth = $(window).width();

    if(scrt>sHeight){
      $('aside').addClass('fix');
    }else{
      $('aside').removeClass('fix');
    }
    var visHeight = $(window).height();
    if(scrt>visHeight/2){
      $('aside').fadeIn();
    }else{
      $('aside').fadeOut();
    }

    var vhMax = $('.main_visual').outerHeight(true);
    if(scrt>vhMax){
      $('.gnb_cont').addClass('fix')
    }else{
      $('.gnb_cont').removeClass('fix')
    }

    if(sWidth<766){
      if(scrt>50){
        $('header').addClass('fix')
        $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/m_logo.png');
        $('.btn_hShopping').hide();
      }else{
        $('header').removeClass('fix')
        $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/logo_w.png');
        $('.btn_hShopping').show();
      }
    }

  })

  if(sWidth>1199){
    $('body').removeClass('pc tab tab_min mob');
    $('body').addClass('pc');
  }
  if(sWidth<=1199 && sWidth>991){
    $('body').removeClass('pc tab tab_min mob');
    $('body').addClass('tab');
  }
  if(sWidth<=991 && sWidth>766){
    $('body').removeClass('pc tab tab_min mob');
    $('body').addClass('tab_min');
  }
  if(sWidth<766){
    $('body').removeClass('pc tab tab_min mob');
    $('body').addClass('mob');
  }

  $(window).resize(function(){
    $('header').removeClass('fix')
    $('body').removeClass('pc tab tab_min mob');
    sHeight = ($(document).height() - $(window).height() - $('footer').height() - 20)
    scrt = $(window).scrollTop();
    sWidth = $(window).width();
    console.log(sWidth);
    if(sWidth>1199){
      $('body').addClass('pc');
    }
    if(sWidth<=1199 && sWidth>991){
      $('body').addClass('tab');
    }
    if(sWidth<=991 && sWidth>766){
      $('body').addClass('tab_min');
    }
    if(sWidth<=766){
      $('body').addClass('mob');
      if(scrt>50){
        $('header').addClass('fix')
      }else{
        $('header').removeClass('fix')
      }
    }
    if(scrt>sHeight){
      $('aside').addClass('fix');
    }else{
      $('aside').removeClass('fix');
    }
  })












})
