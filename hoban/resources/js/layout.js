$(document).ready(function(){

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
    // $('header').addClass('on');
    $('.nav_bg').stop().slideDown(300);
    $('.dep2').stop().slideDown('fast');
  })

  $('#gnb, .nav_bg').mouseleave(function(){
    // $('header').removeClass('on');
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

  $('.loc > a').on('click', function(){
    $(this).parents('.loc').find('ul').slideToggle();
    $(this).parents('.loc').toggleClass('on');
    $(this).parents('.loc').siblings('.loc').find('ul').slideUp()
    $(this).parents('.loc').siblings('.loc').removeClass('on');
  })


  $('.his_tab > li > a').on('click', function(){
    var dataCode = $(this).attr('class');
    console.log(dataCode);
    $('.his_tab > li > a').removeClass('on');
    $(this).addClass('on');
    $('.his_wrap').hide();
    $('.'+dataCode).show();
  })

  $('.his_nav > a').on('click', function(){
    var dataCode = $(this).attr('data-code');
    $('.his_tab > li > a').removeClass('on');
    $('.his_tab > li > a'+'.'+dataCode).addClass('on')
    $('.his_wrap').hide();
    $('.'+dataCode).show();
  })


  var housList = {
    aptA1: [ '평택고덕(A22)', '<img src="../../resources/images/contents/IDX_IMG_S_2019051742120276.jpg" alt="">', '경기도 평택시 고덕 국제화계획지구 A-22블록경기도 평택시 고덕 국제화계획지구 A-22블록', '884~112', '658'],
    aptA2: [ '하남현안2(A1)', '<img src="../../resources/images/contents/IDX_IMG_S_2018103133705541.jpg" alt="">', '경기도 하남시 신장동 577번지(하남 지역현안사업 2지구 A1블록)', '59A, 59B, 59C', '999'],
    aptA3: [ '인천 검단(Ab 15-2)인천 검단(Ab 15-2)인천 검단(Ab 15-2)', '<img src="../../resources/images/contents/IDX_IMG_S_2018103133313054.jpg" alt="">', '인천광역시 서구 인천검단신도시 Ab15-2블록', '872A, 72B, 84A, 84B', '1,168'],
    aptA4: [ '경산 하양지구(A1)', '<img src="../../resources/images/contents/IDX_IMG_S_2018101250657955.jpg" alt="">', '경산북도 경산시 하양읍 서사리 241-25일원 경산하양지구 A-1BL', '84A, 84B, 98A', '655'],
    aptA5: [ '경산 진량선화(1블록)', '<img src="../../resources/images/contents/IDX_IMG_S_2018080223630992.jpg" alt="">', '경북 경산시 진량읍 선화리 경산진량 선화지구 1블럭', '59A, 59B, 84', '549'],
    aptB1: ['위례(A3-5) / 임대', '<img src="../../resources/images/contents/IDX_IMG_S_2018020854453051.jpg" alt="">', '위례신도시 A3-5블록', '101, 109, 149, 147', '699'],
    aptA6: [ '남악오룡 (공동30블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171221112434125.jpg" alt="">', '경전남 무안군 남악신도시 오룡지구 공동 30블록', '106', '364'],
    aptA7: [ '남악오룡 (공동32블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171221112420078.jpg" alt="">', '전남 무안군 남악신도시 오룡지구 공동 32블록', '84A, 84B', '665'],
    aptB2: ['구미국가산단(A26)', '<img src="../../resources/images/contents/IDX_IMG_S_2017092734243945.jpg" alt="">', '경상북도 구미시 구미산업단지 A26블럭', '59A, 59B', '2092'],
    aptA8: [ '인천 송도(M2)', '<img src="../../resources/images/contents/IDX_IMG_S_2019040193842022.jpg" alt="">', '인천광역시 연수구 송도지구 8공구 M2블록', '74~101', '2,671(아파텔포함)'],
    aptA9: [ '시흥 장현(B8)', '<img src="../../resources/images/contents/IDX_IMG_S_20171221111207901.jpg" alt="">', '경기도 시흥시 장현지구 B8블록', '73, 84', '712'],
    aptA10: [ '울산테크노 (1B-1블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171213112629239.jpg" alt="">', '경울산시 남구 두왕동 울산테크노일반산업단지 1B-1블록', '84A, 84B, 84C', '401'],
    aptA11: [ '울산테크노 (2B-2블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171213112831021.jpg" alt="">', '울산시 남구 두왕동 울산테크노일반산업단지 2B-2블록', '84A, 84B, 84C', '561'],
    aptB3: ['울산테크노 (2B-1블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171213112951787.jpg" alt="">', '울산시 남구 두왕동 울산테크노일반산업단지 2B-1블록', '59A, 59B', '173'],
    aptA12: [ '남악오룡 (공동31블록)', '<img src="../../resources/images/contents/IDX_IMG_S_20171221112449297.jpg" alt="">', '전남 무안군 남악신도시 오룡지구 공동 31블록', '59A, 59B, 84', '549'],
    aptA13: [ '이천 마장 2차(B4)', '<img src="../../resources/images/contents/IDX_IMG_S_2017110355821944.jpg" alt="">', '경기도 이천시 이천마장지구 B4블록', '82A, 82B', '533'],
    re1: ['광주 계림8구역', '<img src="../../resources/images/contents/IDX_IMG_S_20171026104336505.jpg" alt="">', '광주 동구 계림동 498번지 일원', '59, 75, 84, 106, 119 임대: 39', '2339'],
    aptA14: [ '김포 한강(Ac10)', '<img src="../../resources/images/contents/IDX_IMG_S_2017092734038178.jpg" alt="">', '경기도 김포시 장기동 1865-4 김포한강신도시 Ac-10블록', '101A, 101B, 101C', '696'],
    aptA15: [ '이천 마장 1차(B3)', '<img src="../../resources/images/contents/IDX_IMG_S_20171026104607475.jpg" alt="">', '경경기도 이천시 마장면 마장택지개발지구 B3블록', '82', '442'],
    aptA16: [ '성남 고등(S2)', '<img src="../../resources/images/contents/IDX_IMG_S_20171026105701792.jpg" alt="">', '경기도 성남시 성남고등지구 S-2BL', '84', '758'],
    aptB4: ['포항 초곡(87-2)', '<img src="../../resources/images/contents/IDX_IMG_S_2018020854453051.jpg" alt="">', '경북 포항시 초곡도시개발구역 산 38-9번지 일원', '59A, 59A-1, 59B, 59B-1, 84A, 84B, 106', '824'],
    aptA17: [ '송도국제도시 3차(A2)', '<img src="../../resources/images/contents/IDX_IMG_S_20170927100033749.jpg" alt="">', '인천광역시 연수구 송도지구 6,8공구 A2BL 일원', '75, 84A, 84B, 84C, 84P', '1,530'],
    cpx1: ['시흥배곧(C1)', '<img src="../../resources/images/contents/IDX_IMG_S.jpg" alt="">', '경기도 시흥시 정왕동 1772-6일원 시흥배곧신도시 C1블록', '84A, 84B, 84C, 156, 159, 172', '890'],
    cpx2: ['시흥배곧(C2)', '<img src="../../resources/images/contents/IDX_IMG_S.jpg" alt="">', '경기도 시흥시 정왕동 1772-6일원 시흥배곧신도시 C2블록', '84A, 84B, 84C, 156, 159, 172', '905'],
    cpx3: ['광주 호반써밋플레이스', '<img src="../../resources/images/contents/IDX_IMG_S (2).jpg" alt="">', '광주광역시 서구 광천동 52, 52-7번지', '84A1, 84A2, 84B1, 84B2', '842'],
  }

  var pfTitMax = 0;
  $('.pf_cont > p').each(function(){
    var titleHeight = $(this).outerHeight(true);
    if(pfTitMax<titleHeight){
      pfTitMax = titleHeight;
    }
  })
  $('.pf_cont > p').outerHeight(pfTitMax)

  var dlMax = 0;
  $('.pf_cont > dl').each(function(){
    var dlHeight = $(this).outerHeight(true);
    if(dlMax<dlHeight){
      dlMax = dlHeight;
    }
  })
  $('.pf_cont > dl').outerHeight(dlMax)

  function pfTotal(){
    var liTotal = $('.portfolio > ul > li').length;
    console.log(liTotal);
    $('.pf_total').text(liTotal)
  }
  pfTotal();

  var mul = 0;
  function pfListNum(){
    var nowNum = 9;
    ++mul;
    var liTotal = $('.portfolio > ul > li').length;
    var viewNum = nowNum * mul
    if(viewNum > liTotal){
      viewNum = liTotal
    }
    // console.log(nowNum);
    $('.pf_listNum').text(viewNum)
  }
  pfListNum();

  $('.btn_showMore.housing').on('click', function(){
    multiNum();
    pfListNum();
  })

  var mtp = 0;
  var alertNum = 0;
  function multiNum(){
    var onceNum = 9;
    var liTotal = $('.portfolio > ul > li').length;
    ++mtp;
    console.log(mtp);

    var viewNum = mtp*onceNum;
    console.log(viewNum);
    if(viewNum>=liTotal){
      viewNum = liTotal;
      ++alertNum;
    }
    if(alertNum>1){
      alertNum=1;
      alert('검색 결과가 없습니다.');
    }
    $('.portfolio > ul > li').hide();
    $('.portfolio > ul > li:lt('+ viewNum +')').show();
  }
  multiNum();

  $('.housing_type > li > a').on('click', function(){
    mtp=0;
    mul = 0;
    alertNum = 0;
    $('.housing_type > li > a').removeClass('on')
    $(this).addClass('on')
    var objNum = 0;
    var btnData = $(this).attr('data-code');
    // console.log(btnData);

    for(key in housList){
      if(key.indexOf(btnData)>-1){
        objNum++;
      }
    }
    console.log(objNum);
    $('.portfolio > ul').empty();
    for(var i=1; i<=objNum; i++){
      // console.log(housList[btnData+i][0]);
      $('.portfolio > ul').append(
        '<li class="pf_cont type01">' +
          '<p>' + housList[btnData+i][0] + '</p>' +
          '<div class="img">' +  housList[btnData+i][1] + '</div>' +
          '<dl>' +
            '<dt>위치</dt>' +
            '<dd>' + housList[btnData+i][2] + '</dd>' +
            '<dt>공급</dt>' +
            '<dd>' + housList[btnData+i][3] + '</dd>' +
            '<dt>세대</dt>' +
            '<dd>' + housList[btnData+i][4] + '</dd>' +
        '</li>'
      );
    }

    if(btnData=='all'){
      for ( var info in housList ){
        $('.portfolio > ul').append(
          '<li class="pf_cont type01">' +
            '<p>' + housList[info][0] + '</p>' +
            '<div class="img">' +  housList[info][1] + '</div>' +
            '<dl>' +
              '<dt>위치</dt>' +
              '<dd>' + housList[info][2] + '</dd>' +
              '<dt>공급</dt>' +
              '<dd>' + housList[info][3] + '</dd>' +
              '<dt>세대</dt>' +
              '<dd>' + housList[info][4] + '</dd>' +
          '</li>'
        );
      }
    }

    var pfTitMax = 0;
    $('.pf_cont > p').each(function(){
      var titleHeight = $(this).outerHeight(true);
      if(pfTitMax<titleHeight){
        pfTitMax = titleHeight;
      }
    })
    $('.pf_cont > p').outerHeight(pfTitMax)

    var dlMax = 0;
    $('.pf_cont > dl').each(function(){
      var dlHeight = $(this).outerHeight(true);
      if(dlMax<dlHeight){
        dlMax = dlHeight;
      }
    })
    $('.pf_cont > dl').outerHeight(dlMax)


    pfTotal();
    pfListNum();
    multiNum();


  })

  $('.ethics > ul > li > a').on('click', function(){
    $('.ethics > ul > li > a').removeClass('on');
    $(this).addClass('on');
    var code = $(this).attr('data-code');
    $('.manage_text').hide();
    $('.'+code).show();
  })

  $('.tab_nav.cyber > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.tab_nav.cyber > li > a').removeClass('on');
    $(this).addClass('on');
    $('.cyber_wrap').hide();
    $('.'+code).show();
  })

  $('.tab_nav.growth > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.tab_nav.growth > li > a').removeClass('on');
    $(this).addClass('on');
    $('.growth_box').hide();
    $('.'+code).show();
  })

  $('.social_nav > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.social_nav > li > a').removeClass('on');
    $(this).addClass('on');
    $('.social_wrap, .social_visual').hide();
    $('.'+code).show();
  })





  var atvLength = $('.atv_list > li').length;
  for (var i = 1; i < atvLength; i++) {
    $('.atv_list > li').eq(1+(3*i)).css({'margin-top':'-40px'})
  }

  function atvTotal(){
    var liTotal = $('.atv_list > li').length;
    console.log(liTotal);
    $('.pf_total.atv').text(liTotal)
  }
  atvTotal();

  var mulAtv = 0;
  function atvListNum(){
    var nowNum = 6;
    ++mulAtv;
    var liTotal = $('.atv_list > li').length;
    var viewNum = nowNum * mulAtv
    if(viewNum > liTotal){
      viewNum = liTotal
    }
    // console.log(nowNum);
    $('.pf_listNum.atv').text(viewNum)
  }
  atvListNum();

  $('.btn_showMore.atv').on('click', function(){
    atvmultiNum();
    atvListNum();
  })

  var mtpAtv = 0;
  var alertNumAtv = 0;
  function atvmultiNum(){
    var onceNum = 6;
    var liTotal = $('.atv_list > li').length;
    ++mtpAtv;
    console.log('alertNumAtv'+alertNumAtv);
    var viewNum = mtpAtv*onceNum;

    if(viewNum>=liTotal){
      viewNum = liTotal;
      ++alertNumAtv;
    }
    if(alertNumAtv>1){
      alertNumAtv=1;
      alert('검색 결과가 없습니다.');
    }
    $('.atv_list > li').hide();
    $('.atv_list > li:lt('+ viewNum +')').show();
  }
  atvmultiNum();


  $('.tab_nav.pr > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.tab_nav.pr > li > a').removeClass('on');
    $(this).addClass('on');
    $('.pr_wrap').hide();
    $('.'+code).show();
  })



  // 홍보자료실 - 영상
  function movieTotal(){
    var liTotal = $('.pr_list.movie > li').length;
    console.log(liTotal);
    $('.pf_total.movie').text(liTotal)
  }
  movieTotal();

  var mulMovie = 0;
  function movieListNum(){
    var nowNum = 6;
    ++mulMovie;
    var liTotal = $('.pr_list.movie > li').length;
    var viewNum = nowNum * mulMovie
    if(viewNum > liTotal){
      viewNum = liTotal
    }
    // console.log(nowNum);
    $('.pf_listNum.movie').text(viewNum)
  }
  movieListNum();

  $('.btn_showMore.movie').on('click', function(){
    moviemultiNum();
    movieListNum();
  })

  var moviemtp = 0;
  var moviealertNum = 0;
  function moviemultiNum(){
    var onceNum = 6;
    var liTotal = $('.pr_list.movie > li').length;
    ++moviemtp;

    var viewNum = moviemtp*onceNum;

    if(viewNum>=liTotal){
      viewNum = liTotal;
      ++moviealertNum;
    }
    if(moviealertNum>1){
      moviealertNum=1;
      alert('검색 결과가 없습니다.');
    }
    $('.pr_list.movie > li').hide();
    $('.pr_list.movie > li:lt('+ viewNum +')').show();
  }
  moviemultiNum();

  $('.pr_list.movie > li > .img > a').on('click', function(){
    var movieCode = $(this).parents('.pr_cont').find('iframe').attr('src');
    var textCode = $(this).parents('li.pr_cont').find('.movie_text').html();

    console.log(movieCode);
    console.log(textCode);
    $('.pr_view > iframe').attr('src', movieCode)
    $('.pr_viewText').html(textCode)
  })
  //홍보자료실 - 영상

  //홍보자료실 - 지면
  function paperTotal(){
    var liTotal = $('.pr_list.paper > li').length;
    console.log(liTotal);
    $('.pf_total.paper').text(liTotal)
  }
  paperTotal();

  var mulPaper = 0;
  function paperListNum(){
    var nowNum = 6;
    ++mulPaper;
    var liTotal = $('.pr_list.paper > li').length;
    var viewNum = nowNum * mulPaper
    if(viewNum > liTotal){
      viewNum = liTotal
    }
    // console.log(nowNum);
    $('.pf_listNum.paper').text(viewNum)
  }
  paperListNum();

  $('.btn_showMore.paper').on('click', function(){
    papermultiNum();
    paperListNum();
  })

  var papermtp = 0;
  var paperalertNum = 0;
  function papermultiNum(){
    var onceNum = 6;
    var liTotal = $('.pr_list.paper > li').length;
    ++papermtp;

    var viewNum = papermtp*onceNum;

    if(viewNum>=liTotal){
      viewNum = liTotal;
      ++paperalertNum;
    }
    if(paperalertNum>1){
      paperalertNum=1;
      alert('검색 결과가 없습니다.');
    }
    $('.pr_list.paper > li').hide();
    $('.pr_list.paper > li:lt('+ viewNum +')').show();
  }
  papermultiNum();

  $('.pr_list.paper > li > .img > a').on('click', function(){
    var imgurl= $(this).parents('li').find('.img_url').text();
    console.log(imgurl);
    $('.pr_visual> a > img').attr('src', '../../resources/images/contents/'+imgurl)

  })
  //홍보자료실 - 지면

  $('.tab_nav.cibi > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.tab_nav.cibi > li > a').removeClass('on');
    $(this).addClass('on');
    $('.cibi_wrap').hide();
    $('.'+code).show();
  })

  $('.tab_nav.prize > li > a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.tab_nav.prize > li > a').removeClass('on');
    $(this).addClass('on');
    $('.prize_wrap').hide();
    $('.'+code).show();
  })


  var newBuildingSlider = new Swiper('.newBuilding_slide .swiper-container', {
    simulateTouch: false,
    navigation: {
        nextEl: '.newBuilding_slide .swiper-button-next',
        prevEl: '.newBuilding_slide .swiper-button-prev',
    },
    pagination: {
        el: '.newBuilding_slide .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    on: {
        slideChangeTransitionEnd: function(){
          // alert(this.activeIndex);
          SetPageNumber(this.activeIndex+1);
        },
    },

  })

  function SetPageNumber(n){
    console.log(n);
    $('.page_num > em').text(n);
  }


  $('.btn_slidePrev').on('click', function(){
    $('.newBuilding_slide .swiper-button-prev').trigger('click')
  })
  $('.btn_slideNext').on('click', function(){
    $('.newBuilding_slide .swiper-button-next').trigger('click')
  })


  var annivSlider = new Swiper('.anniv_cont01 .swiper-container', {
    simulateTouch: false,
    navigation: {
        nextEl: '.anniv_cont01 .swiper-button-next',
        prevEl: '.anniv_cont01 .swiper-button-prev',
    },
    pagination: {
      el: '.anniv_cont01 .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  })

  $('.anniv_slide .thumb > li > a').on('click', function(){
    var url = $(this).find('img').attr('src');
    $(this).parents('li.swiper-slide').find('.img').find('img').attr('src', url)
    $('.anniv_slide .thumb > li > a').removeClass('on');
    $(this).addClass('on');
  })
  $('.btn_annivPrev').on('click', function(){
    $('.anniv_slide .swiper-button-prev').trigger('click');
  })
  $('.btn_annivNext').on('click', function(){
    $('.anniv_slide .swiper-button-next').trigger('click');
  })

  $(window).on('scroll', function(){
    winScroll();
  })

  $('.anniv_nav > ul > li > a').on('click', function(){

    var code = $(this).attr('data-code');
    var inno = $('.anniv_title').offset().top;
    var his = $('.anniv_cont01').offset().top;
    var prd = $('.anniv_cont02').offset().top;
    var vis = $('.anniv_cont03').offset().top;

    $('.anniv_nav > ul > li > a').removeClass('on');
    $(this).addClass('on');

    if(code=='inno'){
      $('html, body').animate({'scrollTop':inno}, 300)

    }
    if(code=='his'){
      $('html, body').animate({'scrollTop':his}, 300)

    }
    if(code=='prd'){
      $('html, body').animate({'scrollTop':prd}, 300)

    }
    if(code=='vis'){
      $('html, body').animate({'scrollTop':vis}, 300)

    }

  })


  function winScroll(){
    var top = $(window).scrollTop()
    if(top>=0 && top<291){
      // alert();
      $('.anniv_nav > ul > li > a').removeClass('on');
      $('.inno').addClass('on')
    }
    if(top>=291 && top<1330){
      $('.anniv_nav > ul > li > a').removeClass('on');
      $('.his').addClass('on')
    }
    if(top>=1330 && top<2445){
      $('.anniv_nav > ul > li > a').removeClass('on');
      $('.prd').addClass('on')
    }
    if(top>=2445){
      $('.anniv_nav > ul > li > a').removeClass('on');
      $('.vis').addClass('on')
    }
  }

  var welfListMax = 0;
  $('.welfare_list > li').each(function(){
    var liHeight = $(this).outerHeight(true);
    if(welfListMax<liHeight){
      welfListMax = liHeight;
    }
  })
  $('.welfare_list > li').outerHeight(welfListMax)

  $('.board02 > li > a').on('click', function(){
    $(this).parents('.board02_cont').siblings('li').find('a').removeClass('on');
    $(this).parents('.board02_cont').siblings('li').find('.board02_asw').slideUp('fast');
    $(this).toggleClass('on');
    $(this).find('.board02_asw').slideToggle('fast');
  })























})
