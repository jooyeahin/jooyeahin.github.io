$(document).ready(function(){
  //
  $('.mobile-txt > li > a').click(function(){
    return false;
  })
  // 
  $('.data > div > ul > li > a').click(function(){
    return false;
  })

  $(window).scroll(function(){
    var scHeight = $(document).scrollTop();
    if(scHeight>10){
      $('header').hide();
      $('nav').addClass('scroll');
    }else if(scHeight<10){
      $('header').show();
      $('nav').removeClass('scroll');
    }
  })

  // 메인메뉴 호버
  $('.main-menu > li > a').hover(function(){
    $('.main-menu > li').toggleClass('nothover');
    $(this).parent('li').removeClass('nothover').toggleClass('hover');
  })

  $('.side-menu > li:nth-child(3) > a').on('click', function(){
    $(this).toggleClass('on');
    $(this).parents('li').toggleClass('on')
    $('.search').toggleClass('show');
    $('.side-menu > li:nth-child(3) > i').toggleClass('hide');
    $('.opacity').toggleClass('show')
  })


  // 메인배너 슬라이드 루프
  var slideTimer = setInterval(function(){ mainSlide(); }, 3000)
  var i=0;
  function mainSlide(){
    i++
    if(i<=3){
      $('.nav-btn').parent('li').removeClass('click');
      $('.nav-btn').parent('li').eq(i).addClass('click');
      $('.banner-img').css({'margin-left':-(1920*i)});
    }else{
      i=0;
      $('.nav-btn').parent('li').removeClass('click');
      $('.nav-btn').parent('li').eq(i).addClass('click');
      $('.banner-img').css({'margin-left':0});
    }
  }

  //메인배너 네비게이션 플레이/퍼즈 버튼 클릭시
  $('.banner-nav > li:nth-child(5) > a').click(function(){
    if($(this).hasClass('play')){
      $(this).removeClass('play');
      slideTimer = setInterval(function(){ mainSlide();}, 3000);
    }else{
      clearInterval(slideTimer);
      $(this).addClass('play');
    }
  })

  //메인배너 네비게이션 클릭시
  $('.nav-btn').on('click', function(){
    i = $(this).parent('li').index();
    $('.banner-nav > li:nth-child(5) > a').removeClass('play');
    $('.nav-btn').parent('li').removeClass('click');
    $(this).parent('li').addClass('click');
    $('.banner-img').css({'margin-left':-(1920*i)});
    $('.banner-nav > li:last-child > a').removeClass('play');
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){ mainSlide();}, 3000);
  })

  //메인 배너 화살표 버튼 클릭시
  $('.bann-btn > button').on('click', function(){
    var narrIdx = $(this).index()
    if(narrIdx==0){ --i }  //왼쪽 화살표 클릭
    else if(narrIdx==1){ ++i } // 오른쪽 화살표 클릭
    if(i<0){ i=3; }
    else if(i>3){ i=0; }
    $('.banner-nav > li:nth-child(5) > a').removeClass('play');
    $('.nav-btn').parent('li').removeClass('click');
    $('.nav-btn').eq(i).parent('li').addClass('click');
    $('.banner-img').css({'margin-left':-(1920*i)});
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){ mainSlide();}, 3000);
  })

  // 팁 섹션 빨간색 카드 클릭시
  $('.tip-btn').on('click', function(){
    var tipbtnIdx = $(this).parent('li').index();
    $('.tip-btn').removeClass('click');
    $(this).addClass('click');
    $('.tip-panel').find('ul').hide();
    $('.tip-panel').find('ul').eq(tipbtnIdx).show();
  })

  // 유저 배너
  $('.mobile-txt > li:nth-child(1) > a').on('click', function(){
    $('.mobile-life > ul > li, .phone, .mobile-life > ul > li:nth-child(1), .mobile-txt > li > a, .left-graph, .right-graph').addClass('leftclk');
    $('.mobile-life > ul > li, .phone, .mobile-life > ul > li:nth-child(1), .mobile-txt > li > a, .left-graph, .right-graph').removeClass('rightclk')
    $('.phone.leftclk').empty();
    $('.phone.leftclk').append(
      '<span></span>' +
      '<span><strong>파워</strong>유저</span>' +
      '<span><strong>관심</strong>상품</span>' +
      '<span>입니다</span>'
    )
  })
  $('.mobile-txt > li:nth-child(2) > a').on('click', function(){
    $('.mobile-life > ul > li, .phone, .mobile-life > ul > li:nth-child(1), .mobile-txt > li > a, .left-graph, .right-graph').removeClass('leftclk')
    $('.mobile-life > ul > li, .phone, .mobile-life > ul > li:nth-child(1), .mobile-txt > li > a, .left-graph, .right-graph').addClass('rightclk');
    $('.phone.rightclk').empty();
    $('.phone.rightclk').append(
      '<span></span>' +
      '<span><strong>알뜰</strong>유저</span>' +
      '<span><strong>관심</strong>상품</span>' +
      '<span>입니다</span>'
    )
  })

  $('.data > div > ul > li > a').on('click', function(){
    var panelIdx = $(this).parents('li').index();
    console.log(panelIdx);
    $('.data > div > ul > li').removeClass('click')
    $(this).parent('li').addClass('click');
    $('.data > div:nth-child(2) > div > ul').removeClass('show')
    $('.data > div:nth-child(2) > div').find('ul').eq(panelIdx).addClass('show')
  })


  // js끝.
})
