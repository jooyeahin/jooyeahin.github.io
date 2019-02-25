$(document).ready(function(){

  
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
    console.log('i='+i);
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

  // 추천상품 배너
  var recommTimer = setInterval(function(){ recommSlide(); }, 3000);
  var rci=0;
  function recommSlide(){
    rci++
    if(rci<=3){
      $('.recom-nav li > a').parent('li').removeClass('click');
      $('.recom-nav li > a').parent('li').eq(rci).addClass('click');
      $('.recommand > ul').css({'margin-left':-(1920*rci)});
    }else{
      rci=0;
      $('.recom-nav li > a').parent('li').removeClass('click');
      $('.recom-nav li > a').parent('li').eq(rci).addClass('click');
      $('.recommand > ul').css({'margin-left':0});
    }
    console.log('i='+rci);
  }

  // 추천상품 배너 플레이/퍼즈 버튼
  $('.recom-nav button').click(function(){
    if($(this).hasClass('play')){
      $(this).removeClass('play');
      recommTimer = setInterval(function(){ recommSlide();}, 3000);
    }else{
      clearInterval(recommTimer);
      $(this).addClass('play');
    }
  })

  // 추천상품 배너 네비버튼
  $('.recom-nav li > a').on('click', function(){
    rci = $(this).parent('li').index();
    $('.recom-nav button').removeClass('play');
    $('.recom-nav li > a').parent('li').removeClass('click');
    $(this).parent('li').addClass('click');
    $('.recommand > ul').css({'margin-left':-(1920*rci)});
    clearInterval(recommTimer);
    recommTimer = setInterval(function(){ recommSlide();}, 3000);
  })

  //메인 배너 화살표 버튼 클릭시
  $('.recom-btn > button').on('click', function(){
    var narrIdx = $(this).index();
    if(narrIdx==0){ --rci }  //왼쪽 화살표 클릭
    else if(narrIdx==1){ ++rci } // 오른쪽 화살표 클릭
    if(rci<0){ rci=3; }
    else if(rci>3){ rci=0; }
    $('.recom-nav button').removeClass('play');
    $('.recom-nav li > a').parent('li').removeClass('click');
    $('.recom-nav li > a').eq(rci).parent('li').addClass('click');
    $('.recommand > ul').css({'margin-left':-(1920*rci)});
    clearInterval(recommTimer);
    recommTimer = setInterval(function(){ recommSlide();}, 3000);
  })

  // js끝.
})
