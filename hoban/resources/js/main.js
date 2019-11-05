$(document).ready(function(){

  $('.swiper-slide').eq(0).find('video')[0].play();
  var mainSlider = new Swiper('.main_visual .swiper-container', {
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main_visual .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function(){
        $('.main_visual .swiper-slide-active').find('video').load();
        $('.main_visual .swiper-slide-active').find('video')[0].play();
      },
    },
    simulateTouch: false,
  })

  var obSlider = new Swiper('.cont_area01 .swiper-container', {
    loop: 'auto',
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.cont_area01 .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
        nextEl: '.cont_area01 .swiper-button-next',
        prevEl: '.cont_area01 .swiper-button-prev',
      },
  })

  var storySlider = new Swiper('.cont_area03 .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.cont_area03 .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
        nextEl: '.cont_area03 .swiper-button-next',
        prevEl: '.cont_area03 .swiper-button-prev',
    },
  })

  var wHeight = $(window).height();
  $('.main_visual').height(wHeight*(88/100))
  $(window).resize(function(){
    var wHeight = $(window).height();
    var slHeight = wHeight*(88/100)
    if(slHeight<600){
      slHeight = 600;
    }
    $('.main_visual').height(slHeight)
  })


  logoFade01();
  function logoFade01(){
    setTimeout(function(){
      $('.logo01').toggleClass('off')
      $('.logo02').toggleClass('off')
      logoFade01();
    }, 5000)
  }

  $('.btn_all').on('click', function(){
    var scrHeight = $('html').outerHeight();
    console.log(scrHeight);
    $('.dim_menu').outerHeight(scrHeight);
    $(this).fadeOut();
    $('.dim_menu, .menu_close').fadeIn();
  })
  $('.menu_close').on('click', function(){
    $('.dim_menu').fadeOut();
    $('.btn_all').fadeIn();
  })

  $('#gnb, .nav_bg').mouseenter(function(){
    $('header').addClass('on');
    $('.nav_bg').stop().slideDown(300);
    $('.dep2').stop().slideDown('fast');
  })

  $('#gnb, .nav_bg').mouseleave(function(){
    $('header').removeClass('on');
    $('.nav_bg').stop().slideUp();
    $('.dep2').stop().slideUp('fast');
  })

  // aside 버튼 클릭
  $('aside > a').on('click', function(){
    $('aside').toggleClass('on')
  })

  // aside 높이 정렬
  var maxHeight = 0;
  $('.side_list li').each(function(){
    var liHeight = $(this).outerHeight(true);
    if(maxHeight<liHeight){
      maxHeight = liHeight
    }
  })
  $('.side_list li').outerHeight(maxHeight);

  var textMax = 0;
  $('.side_list .text').each(function(){
    var textHeight = $(this).outerHeight(true);
    if(textMax<textHeight){
      textMax = textHeight
    }
  });
  $('.side_list .text').outerHeight(textMax);

  $('.btn_search').on('click', function(){
    $('.search_area').slideToggle();
  });
  $('.btn_scClose').on('click', function(){
    $('.search_area').slideUp();
  });

  $('.family_site > a').on('click', function(){
    $('.family_site > ul').slideToggle();
  })

  $('.btn_btmArrw').on('click', function(){
    var moveCont = $('.main_cont').offset().top;
    console.log(moveCont);
    $('html, body').animate({scrollTop:moveCont+44}, 500, 'swing');
  })

  $('.btn_top').on('click', function(){
    $('html, body').animate({scrollTop:0}, 500, 'swing');
  })

})
