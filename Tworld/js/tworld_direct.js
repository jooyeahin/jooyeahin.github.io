$(document).ready(function(){

  $('.banner a, .popularity a').click(function(){
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

  // 메인 배너
  var bannerTimer = setInterval(function(){ recommSlide(); }, 3000);
  var bci=0;
  function recommSlide(){
    bci++
    if(bci<=4){
      $('.banner-nav li > a').parent('li').removeClass('click');
      $('.banner-nav li > a').parent('li').eq(bci).addClass('click');
      $('.banner > ul').css({'margin-left':-(1920*bci)});
    }else{
      bci=0;
      $('.banner-nav li > a').parent('li').removeClass('click');
      $('.banner-nav li > a').parent('li').eq(bci).addClass('click');
      $('.banner > ul').css({'margin-left':0});
    }
    //console.log('i='+bci);
  }

  // 메인 배너 네비버튼
  $('.banner-nav li > a').on('click', function(){
    bci = $(this).parent('li').index();
    //console.log(bci);
    $('.banner-nav li > a').parent('li').removeClass('click');
    $(this).parent('li').addClass('click');
    $('.banner > ul').css({'margin-left':-(1920*bci)});
    clearInterval(bannerTimer);
    bannerTimer = setInterval(function(){ recommSlide();}, 3000);
  })

  // 메인 배너 화살표 클릭
  $('.banner-btn > button').on('click', function(){
    var arrIdx = $(this).index();
    if(arrIdx==0){ --bci }  //왼쪽 화살표 클릭
    else if(arrIdx==1){ ++bci } // 오른쪽 화살표 클릭
    if(bci<0){ bci=4; }
    else if(bci>4){ bci=0; }
    $('.banner-nav button').removeClass('play');
    $('.banner-nav li > a').parent('li').removeClass('click');
    $('.banner-nav li > a').eq(bci).parent('li').addClass('click');
    $('.banner > ul').css({'margin-left':-(1920*bci)});
    clearInterval(bannerTimer);
    bannerTimer = setInterval(function(){ recommSlide();}, 3000);
  })


  var pdList = {
    iPhoneXS:['img/A0PX_001_13.jpg', 'T월드 다이렉트 최신 휴대폰', 'iPhone XS', '112,122'],
    GalaxyNote9:['img/A0M0_001_13.jpg', 'T월드 다이렉트 최신 휴대폰', '갤럭시 노트9', '100,190'],
    LGQ9:['img/A0RP_001_13 (1).jpg', 'T월드 다이렉트 최신 휴대폰', '엘지 Q9', '73,841'],
    iPhoneXSMAX:['img/A0PW_001_13.jpg', 'T월드 다이렉트 최신 휴대폰', 'iPhone XS MAX', '117,966'],
    GalaxyS10:['img/A0Z6_001_13.jpg', 'T월드 다이렉트 최신 휴대폰', '갤럭시 S10', '98,485']
  }

  $('.pd-list > ul > li > a').click(function(){
    var aIdx = $(this).parent('li').index();
    $('.pd-list > ul > li').removeClass('click')
    $(this).parent('li').addClass('click')
    var pdCode = $(this).data('code')
    $('.pd-view').empty();
    $('.pd-view').append(
      '<a href="#"><span><img src="' +
          pdList[pdCode][0] + '"></span>' +
        '<span>' + pdList[pdCode][1] + '</span>' +
        '<span><strong>' + pdList[pdCode][2] + '</strong></span>' +
        '<span><strong>' + pdList[pdCode][3] + '</strong>원/월</span>' +
        '<p>라지 요금제 기준</p>' +
      '</a>'
    )
    return false;
  })


  $('.pop-btn > button').on('click', function(){
    var btnIdx = $(this).index();
    console.log(btnIdx);
    if(btnIdx==0){
      $('.banner-frame').animate({'left':'0px'}, 500, function(){
        $('.banner-frame').prepend('<li>' + $(".banner-frame > li:last-child").html() + '</li>')
        $('.banner-frame > li:last-child').remove();
        $('.banner-frame').css({'left':'-998px'})
      })
    }else if(btnIdx==1){
      $('.banner-frame').animate({'left':'-1996px'}, 500, function(){
        $('.banner-frame').append('<li>' + $(".banner-frame > li:first-child").html() + '</li>')
        $('.banner-frame > li:first-child').remove();
        $('.banner-frame').css({'left':'-998px'})
      })
    }
  })


  var bci2=0;
  // 배너2 화살표 클릭
  $('.banner2-btn > button').on('click', function(){
    var arrIdx2 = $(this).index();
    if(arrIdx2==0){ --bci2 }  //왼쪽 화살표 클릭
    else if(arrIdx2==1){ ++bci2 } // 오른쪽 화살표 클릭
    if(bci2<0){ bci2=1; }
    else if(bci2>1){ bci2=0; }
    $('.banner2-nav button').removeClass('play');
    $('.banner2-nav li > a').parent('li').removeClass('click');
    $('.banner2-nav li > a').eq(bci2).parent('li').addClass('click');
    $('.banner2 > ul').css({'margin-left':-(1920*bci2)});
  })

  // js끝.
})
