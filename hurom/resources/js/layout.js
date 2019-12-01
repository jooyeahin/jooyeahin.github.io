$(document).ready(function(){

  var mapSwiper = new Swiper('.sCont_area.intro07 .map_tabover.swiper-container', {
    pagination: {
       el: '.sCont_area.intro07 .map_tabover .swiper-pagination',
       clickable: true,
       renderBullet: function (index, className) {
         var name;
         name = $('.swiper-slide').eq(index).attr('data-name')
         return '<span class="' + className + '">' + (name) + '</span>';
       },
    },
    navigation: {
      nextEl: '.sCont_area.intro07 .map_tabover .swiper-button-next',
      prevEl: '.sCont_area.intro07 .map_tabover .swiper-button-prev',
    },
    effect: 'fade',
    loop: 'auto',
   });

   var mobilemapSwiper = new Swiper('.sCont_area.intro07 .swiper-container.mob_map', {

     pagination: {
        el: '.sCont_area.intro07 .swiper-pagination.mob',
        clickable: true,

     },
     navigation: {
      nextEl: '.sCont_area.intro07 .swiper-button-next.mob',
      prevEl: '.sCont_area.intro07 .swiper-button-prev.mob',
    },
     loop: 'auto',
     slidesPerView: 4,
     slideToClickedSlide: true,
    });

  var instiSwiper = new Swiper('.sCont_area.insti01 .swiper-container', {
    effect:'fade',
    navigation: {
     nextEl: '.sCont_area.insti01 .swiper-button-next',
     prevEl: '.sCont_area.insti01 .swiper-button-prev',
   },
    loop: 'auto',
  });

  var prdtSwiper = new Swiper('.sCont_area.liquid01 .swiper-container', {
    effect:'fade',
    navigation: {
      nextEl: '.sCont_area.liquid01 .swiper-button-next',
      prevEl: '.sCont_area.liquid01 .swiper-button-prev',
    },
    loop: 'auto',
    on: {
      slideChangeTransitionEnd: function(){
        $('.swiper-slide .slide_title').find('strong').removeClass('on')
        $('.swiper-slide-active .slide_title').find('strong').addClass('on')
        setTimeout(function(){
          $('.swiper-slide .slide_title').find('p').removeClass('on')
          $('.swiper-slide-active .slide_title').find('p').addClass('on')
        },150)
        setTimeout(function(){
          $('.swiper-slide .slide_title').find('.btn_slideLink').removeClass('on')
          $('.swiper-slide-active .slide_title').find('.btn_slideLink').addClass('on')
        },300)
      },
   },
  });

  var tvcfSwiper01 = new Swiper('.sCont_area.tvcf02 .tvcf_list01 .swiper-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    spaceBetween : 20,
    navigation: {
      nextEl: '.sCont_area.tvcf02 .tvcf_list01 .swiper-button-next',
      prevEl: '.sCont_area.tvcf02 .tvcf_list01 .swiper-button-prev',
    },
  });
  var tvcfSwiper02 = new Swiper('.sCont_area.tvcf02 .tvcf_list02 .swiper-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    spaceBetween : 20,
    navigation: {
      nextEl: '.sCont_area.tvcf02 .tvcf_list02 .swiper-button-next',
      prevEl: '.sCont_area.tvcf02 .tvcf_list02 .swiper-button-prev',
    },
  });
  var tvcfSwiper03 = new Swiper('.sCont_area.tvcf02 .tvcf_list03 .swiper-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    spaceBetween : 20,
    navigation: {
      nextEl: '.sCont_area.tvcf02 .tvcf_list03 .swiper-button-next',
      prevEl: '.sCont_area.tvcf02 .tvcf_list03 .swiper-button-prev',
    },
  });
  var tvcfSwiper04s = new Swiper('.sCont_area.tvcf02 .tvcf_list04 .swiper-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    spaceBetween : 20,
    navigation: {
      nextEl: '.sCont_area.tvcf02 .tvcf_list04 .swiper-button-next',
      prevEl: '.sCont_area.tvcf02 .tvcf_list04 .swiper-button-prev',
    },
  });

  var shopInfo = {
    sdmg: {
      title: '서울특별시 서대문구',
      sdmg1:['현대백화점', '서울시 서대문구 신촌로 93 현대백화점 신촌점 9층 드롱기', '02-3145-2907'],
      sdmg2:['신촌세브란스점', '서울특별시 서대문구 연세로 50 연세대학교 의료원 3층', '070-4351-1408']
    },
    jrg: {
      title: '서울특별시 종로구',
      jrg1:['동화면세점 광화문점', '서울시 종로구 세종대로149 광화문빌딩 동화면세점 5층 삼성전자', '02-399-3133']
    },
    jg: {
      title: '서울특별시 중구',
      jg1: ['두타 면세점', '서울시 중구 장충단로275 두산타워 두타면세점 9층 전자매장', '02-3399-9337'],
      jg2: ['신세계 면세점 명동점', '서울시 중구 소공로 63 신세계백화점 신관16층 신세계 면세점', '02-6370-4250'],
      jg3: ['현대백화점 동대문점', '서울시 중구 장충단로13길 20 현대백화점 동대문점 2층 드롱기', '02-2283-2212'],
      jg4: ['신세계 백화점 본점', '서울시 중구 소공로 63(충무로1가) 7층 드롱기', '02-310-1691'],
      jg5: ['롯데백화점 본점', '서울특별시 중구 남대문로 81 롯데백화점 본점 8층', '02-772-3795'],
      jg6: ['롯데 소공 면세점', '서울특별시 중구 남대문로 81 롯데백화점 본점 9층']
    },
    gng: {
      title: '서울특별시 강남구',
      gng1: ['현대백화점 면세점 무역센터점', '서울특별시 강남구 테헤란로 517 현대백화점 무역센터점 10층 전자매장', '02-2142-6435'],
      gng2: ['현대백화점 무역센터점','서울시 강남구 테헤란로517 현대백화점 4층 드롱기','02-3467-8570' ],
      gng3: ['현대백화점 압구정본점','서울시 강남구 압구정로 165 현대백화점 지하1층 드롱기','02-3449-5459'],
      gng4: ['갤러리아 압구정본점','서울특별시 강남구 압구정로 343 갤러리아백화점 WEST 5층 드롱기','02-3449-4524'],
      gng5: ['롯데 코엑스 면세점','서울특별시 강남구 봉은사로 524 코엑스인터콘티넨탈서울','02-3484-9600']
    },
    spg: {
      title: '서울특별시 송파구',
      spg1: ['현대백화점 가든파이브점','서울시 송파구 충민로66 현대시티몰 가든파이브점 몰관 2층 드롱기','02-2673-2237' ],
      spg2: ['롯데백화점 잠실점','서울특별시 송파구 올림픽로 240 롯데백화점 잠실점 10층','02-2143-7693']
    },
    gys: {
      title: '경기도 고양시',
      gys1: ['현대백화점 킨텍스점','경기도 고양시 일산서구 호수로817 현대백화점 킨텍스점 7층 드롱기','031-822-3744'],
      gys2: ['롯데백화점 일산점', '경기도 고양시 일산동구 중앙로 1283 롯데백화점일산점 8층', '031-909-3850']
    },
    bc: {
      title: '경기도 부천',
      bc1: ['현대백화점 중동점', '경기도 부천시 길주로180 현대백화점 중동점 7층 드롱기', '032-623-2969']
    },
    ycs: {

    },
    jjs: {
      title: '전라북도 전주시',
      jjs1: ['전주 도청점', '전라북도 전주시 완산구 홍산로 245 1층', '063-222-2296']
    },
    jinju: {
      title: '경상남도 진주시',
      jinju1: ['진주 초전점', '경상남도 진주시 초전북로 57 1층', '055-757-1220']
    },
    cws: {
      title: '경상남도 창원시',
      cws1: ['신세계 백화점 마산점', '경상남도 창원시 마산합포구 합포로251(산호동) 신세계백화점 7층', '055-240-1893'],
      cws2: ['창원 상남점', '경상남도 창원시 성산구 단정로 13', '055-263-1980']
    },
    ghs: {
      title: '경상남도 김해시',
      ghs1: ['신세계 백화점 김해점','경상남도 김해시 외동1264 신세계백화점 김해점 4층 드롱기','055-272-1446'],
      ghs2: ['김해 신세계점','경상남도 김해시 김해대로 2232 신세계 백화점 1층','055-272-1144'],
      ghs3: ['김해 율하점','경상남도 김해시 율하3로 38 1,2층','055-335-0006']
    },
    bg: {
      title: '대구광역시 북구',
      bg1: ['롯데백화점 대구점', '대구광역시 북구 태평로 161 롯데백화점 대구점 7층', '053-660-3807']
    },
    bsbg:{
      title: '경부산광역시 북구',
      bsbg1: ['부산 화명점', '부산광역시 북구 금곡대로 240 롯데 캐슬 멤버스 상가 116호', '070-4351-1850']
    },
    ng:{
      title: '경부산광역시 남구',
      ng1: ['부산BIFC점', '부산광역시 남구 문현동 1229-1 부산국제금융센터 118호', '051-633-1396']
    },
    bsjg:{

    },
    hl:{

    },
    icjg:{
      title: '인천광역시 중구',
      icjg1:['신세계 면세점 탑승동점', '인천광역시 중구 공항로 272 인천국제공항 3층(탑승동) 115번게이트 앞', '032-743-5675'],
      icjg2:['신세계 면제점 인천공항T1', '인천광역시 중구 공항로 272 인천공항 T1 3층 29번 게이트', '032-743-4757'],
      icjg3:['신세계 면제점 인천공항T2', '인천광역시 중구 공항로 272 인천국제공항T2 3층 208-E', '032-743-4757'],
      icjg4:['신라 면세점 인천공항점', '인천광역시 중구 공항로 271 인천공항 1터미널 3층 출국장 25번 게이트앞', '032-743-4878']
    }
  }

  var centerInfo = {
    gng : {
      title: '서울특별시 강남구',
      gng1:['서울 강남점', '서울시 강남구 도산대로 164 휴롬빌딩 B2층 운영시간 : 09시~17시', '1544-7011']
    },
    ghs: {
      title: '경상남도 김해시',
      ghs1: ['경상남도 김해점','경상남도 김해시 주촌면 골든루트로 80-60 (경남 김해시 주촌면 농소리 627-1)','1544-7011']
    }
  }

  $('.info_list').hide();
  $('.offline_map.shop .detail_map .detail_area.'+'su').show();
  $('.offline_map.center .detail_map .detail_area.'+'su').show();

  // 매장찾기 서비스센터
  $('.offline_tab > li > a').on('click', function(){
    var showCode = $(this).attr('data-code');
    $('.offline_tab > li > a').removeClass('on');
    $(this).addClass('on');
    $('.info_list').hide();
    $('.offline_map').hide();
    $('.offline_map.'+showCode).show();
    $('.info_cont').find('em, span').empty();
  })


  $('.offline_map.shop .wide_map a').on('click', function(){
    var dMap = $(this).parent('div').removeClass('on').attr('class');
    $('.offline_map.shop .wide_map > div').removeClass('on');
    $(this).parent('div').addClass('on');
    $('.offline_map.shop .detail_map .detail_area').hide();
    $('.offline_map.shop .detail_map .detail_area.'+dMap).show();
  })

  $('.offline_map.center .wide_map a').on('click', function(){
    var dMap = $(this).parent('div').removeClass('on').attr('class');
    $('.offline_map.center .wide_map > div').removeClass('on');
    $(this).parent('div').addClass('on');
    $('.offline_map.center .detail_map .detail_area').hide();
    $('.offline_map.center .detail_map .detail_area.'+dMap).show();
  })

  $('.offline_map.shop .detail_map .detail_area > div > a').on('click', function(){
    var infoCode = $(this).parent('div').removeClass('on').attr('class');
    $('.offline_map.shop .detail_map .detail_area > div').removeClass('on');
    $(this).parent('div').addClass('on');
    $('.info_list').show();
    $('.info_list').empty();
    // console.log(Object.keys(shopInfo[infoCode]).length);
    for (var i = 1; i < Object.keys(shopInfo[infoCode]).length; i++) {
      $('.info_cont > p > em').html(shopInfo[infoCode]['title'])
      $('.info_cont > p > span').html('의 가까운 매장')
      $('.info_list').append(
        '<li>' +
          '<strong>' + shopInfo[infoCode][infoCode+i][0] + '</strong>' +
          '<p>' + shopInfo[infoCode][infoCode+i][1] + '</p>' +
          '<span>' + shopInfo[infoCode][infoCode+i][2] + '</span>' +
          '<a href="#" class="btn btn_location">위지보기</a>' +
        '</li>'
      )
    }
  })

  $('.offline_map.center .detail_map .detail_area > div > a').on('click', function(){
    var infoCode = $(this).parent('div').removeClass('on').attr('class');
    $('.offline_map.center .detail_map .detail_area > div').removeClass('on');
    $(this).parent('div').addClass('on');
    // console.log(Object.keys(centerInfo[infoCode]).length);
    $('.info_list').show();
    $('.info_list').empty();
    for (var i = 1; i < Object.keys(centerInfo[infoCode]).length; i++) {
      $('.info_cont > p > em').html(centerInfo[infoCode]['title'])
      $('.info_cont > p > span').html('의 가까운 서비스 센터')
      $('.info_list').append(
        '<li>' +
          '<strong>' + centerInfo[infoCode][infoCode+i][0] + '</strong>' +
          '<p>' + centerInfo[infoCode][infoCode+i][1] + '</p>' +
          '<span>' + centerInfo[infoCode][infoCode+i][2] + '</span>' +
          '<a href="#" class="btn btn_location">위치보기</a>' +
        '</li>'
      )
    }
  })






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

    if(menuIdx==1){
      $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/logo_w.png');
    }
    if(menuIdx==0){
      $('header > div > h1 > a > img').attr('src', '../../resources/images/layout/m_logo.png');
    }


  })



  var scrH = $(window).height();
  // var moveCont;
  $('.move_cont').eq(0).addClass('on');
  var scrHmove;
  // $('.viewport').children('li').children('span').hide();
  $(window).scroll(function(){
    scrt = $(window).scrollTop();
    sWidth = $(window).width();
    scrH = $(window).height();
    scrHmove = scrH*0.8
    var grpH = $('.viewport').outerHeight(true)

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

    //컨텐츠 페이드인
    $('.move_cont').each(function(){
      var moveCont = $(this).offset().top - scrHmove;
      // console.log(moveCont);
      if(scrt>moveCont){
        $(this).addClass('on')
      }
    })

    $('.graph_wrap').each(function(){
      var moveCont = $(this).offset().top - scrHmove*0.7;
      if(scrt>moveCont){
        // console.log(this);
        var i = -1;
        var liLength = $(this).find('.viewport').children('li').length;
        var viewport = $(this).find('.viewport')
        var contHeight = $(this).parents("div[class*='hidden']").height();

        setInterval(function(){
          ++i;
          if(contHeight==0){

          }else{
            $(viewport).children('li').eq(i).addClass('on')
            if(i>liLength){
              i = -1;
              $(viewport).children('li').children('span').addClass('on');
            }
          }
        },100)
      }
    })

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
  if(sWidth<=766){
    $('body').removeClass('pc tab tab_min mob');
    $('body').addClass('mob');
  }



  var contHeight = $('body').outerHeight(true);
  if(contHeight<scrH){
    $('.sub_container').outerHeight(scrH-223)
  }

  $(window).resize(function(){
    contHeight = $('body').outerHeight(true);
    $('header').removeClass('fix')
    $('body').removeClass('pc tab tab_min mob');
    scrH = $(window).height();
    sHeight = ($(document).height() - $(window).height() - $('footer').height() - 20)
    scrt = $(window).scrollTop();
    sWidth = $(window).width();
    sWidth16 = $(window).width() + 16 ;
    // contHeight = $('body').outerHeight(true);
    console.log(sWidth);

    if($('.dim_menu').is(':visible') && $('body').hasClass('sub')){
      $('.gnb_cont').hide();
      $('header').show();
    }else{
      $('header').hide();
    }

    $('.btn_menu.close').on('click', function(){
      if(sWidth<=766){
        $('.gnb_cont').hide();
        $('header').show();
      }else{
        $('.gnb_cont').show();
        $('header').hide();
      }
    })

    if(sWidth>1199){
      $('body').addClass('pc');
      if(contHeight<scrH){
        $('.sub_container').outerHeight(scrH-223)
      }

      if($('.dim_menu').is(":visible")){

      }else{
        $('.gnb_cont').show();
      }
    }
    if(sWidth<=1199 && sWidth>991){
      $('body').addClass('tab');
      if(contHeight<scrH){
        $('.sub_container').outerHeight(scrH-310)
      }

      if($('.dim_menu').is(":visible")){

      }else{
        $('.gnb_cont').show();
      }
    }

    if(sWidth<=991 && sWidth>766){
      $('body').addClass('tab_min');
      if(contHeight<scrH){
        $('.sub_container').outerHeight(scrH-300)
      }


      if($('.dim_menu').is(":visible")){

      }else{
        $('.gnb_cont').show();
      }

    }

    // if(sWidth<991){
    //   $('.offline_map.shop .wide_map a').on('click', function(){
    //     var dMap = $(this).parent('div').removeClass('on').attr('class');
    //     $('.offline_map.shop .wide_map > div').removeClass('on');
    //     $(this).parent('div').addClass('on');
    //     $('.offline_map.shop .detail_map').css({'background-image' : 'url("'+shopMapMob[dMap]+'")', 'background-repeat' : 'no-repeat'});
    //     $('.detail_area').hide();
    //     $('.detail_area.'+dMap).show();
    //   })
    // }


    if(sWidth<=766 ){
      $('body').addClass('mob');
      if(contHeight<scrH){
        $('.sub_container').outerHeight(scrH-343)
      }
    }

    if(scrt>sHeight){
      $('aside').addClass('fix');
    }else{
      $('aside').removeClass('fix');
    }


    if(hidCode=='hidden_enzyme' && moreIdx==1){
      if(sWidth>1199){
        $('.hidden_enzyme').outerHeight(3015.88);
      }
      if(sWidth<=1199 && sWidth>911){
        $('.hidden_enzyme').outerHeight(2775.15);
      }
      if(sWidth<=991 && sWidth>766){
        $('.hidden_enzyme').outerHeight(2719.7);
      }
      if(sWidth<=766){
        $('.hidden_enzyme').outerHeight(3692.7);
      }
    }else{
      $('.hidden_enzyme').outerHeight(0)
    }

    if(fCode=='hidden_fiber' && moreIdx==1){
      if(sWidth>1199){
        $('.hidden_fiber').outerHeight(1403);
      }
      if(sWidth<=1199 && sWidth>911){
        $('.hidden_fiber').outerHeight(1323);
      }
      if(sWidth<=991 && sWidth>766){
        $('.hidden_fiber').outerHeight(1291);
      }
      if(sWidth<=766){
        $('.hidden_fiber').outerHeight(1715);
      }
    }else{
      $('.hidden_fiber').outerHeight(0)
    }


  })
  // resize

  // if(sWidth<991){
  //   $('.offline_map.shop .wide_map a').on('click', function(){
  //     var dMap = $(this).parent('div').removeClass('on').attr('class');
  //     $('.offline_map.shop .wide_map > div').removeClass('on');
  //     $(this).parent('div').addClass('on');
  //     $('.offline_map.shop .detail_map').css({'background-image' : 'url("'+shopMapMob[dMap]+'")', 'background-repeat' : 'no-repeat'});
  //     $('.detail_area').hide();
  //     $('.detail_area.'+dMap).show();
  //   })
  // }


  $('.sub_menu > a').on('click', function(){
    $('.sub_menu').toggleClass('open')
    $(this).siblings('ul').slideToggle();
  })

  var moreIdx = 0;
  var hidCode;
  $('.learn_more.enzyme').on('click', function(){
    ++moreIdx;
    hidCode = $(this).attr('data-code');
    // var hidHeight = $('.'+hidCode).outerHeight(true);
    $(this).toggleClass('on');
    // $('.'+hidCode).slideToggle('slow');
    // $('.'+hidCode).toggleClass('on');
    // console.log(moreIdx);
    if(moreIdx>1){
      moreIdx=0;
    }

    if(hidCode=='hidden_enzyme' && moreIdx==1){
      if(sWidth>1199){
        $('.hidden_enzyme').outerHeight(3015.88);
      }
      if(sWidth<=1199 && sWidth>911){
        $('.hidden_enzyme').outerHeight(2775.15);
      }
      if(sWidth<=991 && sWidth>766){
        $('.hidden_enzyme').outerHeight(2719.7);
      }
      if(sWidth<=766){
        $('.hidden_enzyme').outerHeight(3692.7);
      }
    }else{
      $('.hidden_enzyme').outerHeight(0)
    }

  })

  var fiberIdx = 0;
  var fCode;
  $('.learn_more.fiber').on('click', function(){
    ++fiberIdx;
    fCode = $(this).attr('data-code');
    $(this).toggleClass('on');
    if(fiberIdx>1){
      fiberIdx=0;
    }

    if(fCode=='hidden_fiber' && fiberIdx==1){
      if(sWidth>1199){
        $('.hidden_fiber').outerHeight(1403);
      }
      if(sWidth<=1199 && sWidth>911){
        $('.hidden_fiber').outerHeight(1323);
      }
      if(sWidth<=991 && sWidth>766){
        $('.hidden_fiber').outerHeight(1291);
      }
      if(sWidth<=766){
        $('.hidden_fiber').outerHeight(1715);
      }
    }else{
      $('.hidden_fiber').outerHeight(0)
    }
  })

  $('.history_tab > li > a').on('click', function(){
    var hisCode = $(this).attr('data-code');
    $('.history_tab > li > a').removeClass();
    $(this).addClass('on');
    $('.his_list').hide();
    $('.'+hisCode).show();
  })

  $('.way_tab > li').on('click', 'a', function(){
    var wayCode = $(this).attr('data-code')
    $('.way_tab > li > a').removeClass();
    $('.way_tab > li').removeClass();
    $(this).addClass('on');
    $(this).parent('li').addClass('on');
    $('.way').hide();
    $('.'+wayCode).show();
  })

  $('.mob_map .swiper-slide').on('click', function(){
    var gCode = $(this).find('a').attr('data-code');
    $('.mobmap_wrap > li').hide();
    $('.'+gCode).show();

  })

  $('.swiper-button-prev.mob, .swiper-button-next.mob').on('click', function(){
    var gCode = $('.mob_map .swiper-slide-active a').attr('data-code');
    // console.log(gCode);
    $('.mobmap_wrap > li').hide();
    $('.'+gCode).show();
  })

  $('.swiper-pagination.mob').on('click', 'span', function(){
    var gCode = $('.mob_map .swiper-slide-active').find('a').attr('data-code');
    // console.log(gCode);
    $('.mobmap_wrap > li').hide();
    $('.'+gCode).show();
  })

  var mul = 0;
  function pfListNum(num, loc){
    var nowNum = num;
    ++mul;
    var liTotal = $(loc).length;
    var viewNum = nowNum * mul
    if(viewNum > liTotal){
      viewNum = liTotal
    }
    // $('.pf_listNum').text(viewNum)
  }
  pfListNum();

  $('.view_more').on('click', 'a', function(){
    if($(this).parents('.view_more').hasClass('news')){
      multiNum(8, '.news_list > li');
      pfListNum(8, '.news_list > li');
    }
    if($(this).parents('.view_more').hasClass('ctb')){
      multiNum(12, '.ctb_wrap > li');
      pfListNum(12, '.ctb_wrap > li');
    }
    if($(this).parents('.view_more').hasClass('list01')){
      multiNum(8, '.recipes_list.list01 > li');
      pfListNum(8, '.recipes_list.list01> li');
    }
    if($(this).parents('.view_more').hasClass('list02')){
      multiNum(8, '.recipes_list.list02 > li');
      pfListNum(8, '.recipes_list.list02 > li');
    }
    if($(this).parents('.view_more').hasClass('list03')){
      multiNum(8, '.recipes_list.list03  > li');
      pfListNum(8, '.recipes_list.list03 > li');
    }
    if($(this).parents('.view_more').hasClass('list04')){
      multiNum(8, '.recipes_list.list04 > li');
      pfListNum(8, '.recipes_list.list04 > li');
    }
  })

  var mtp = 0;
  var alertNum = 0;
  function multiNum(num, loc){
    var onceNum = num;
    var liTotal = $(loc).length;
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
    $(loc).hide();
    $(loc+':lt('+ viewNum +')').show();
  }
  multiNum();


  $('.ctb_wrap > li').hide();
  $('.ctb_wrap > li:lt(12)').show();
  $('.news_list > li').hide();
  $('.news_list > li:lt(8)').show();
  $('.recipes_list.list01 > li').hide();
  $('.recipes_list.list01 > li:lt(8)').show();
  $('.recipes_list.list02 > li').hide();
  $('.recipes_list.list02 > li:lt(8)').show();
  $('.recipes_list.list03 > li').hide();
  $('.recipes_list.list03 > li:lt(8)').show();
  $('.recipes_list.list04 > li').hide();
  $('.recipes_list.list04 > li:lt(8)').show();

  //




  $('.lab_wrap > li a').on('click', function(){
    var code = $(this).attr('data-code');
    $('.dim_back').show();
    $('.movie_pop').fadeIn(100);
    $('.movie_pop').addClass('on');
    $('.movie_pop').find('.movie').hide();
    $('.movie_pop').find('.movie'+'.'+code).show();
  })

  $('.btn_popClose').on('click', function(){
    $('.dim_back').hide();
    $('.movie_pop').fadeOut(100);
    $('.movie_pop').removeClass('on');
  })

  $('.pd_kind > li > a').on('click', function(){
    alertNum = 0;
    var code = $(this).attr('data-code')
    $('.pd_kind > li > a').removeClass('on');
    $(this).addClass('on');
    $('.recipes_list').hide();
    $('.'+code).show();
    $('.view_more.recipes').removeClass('list01 list02 list03 list04');
    $('.view_more.recipes').addClass(code)

    if($('.recipes_list'+'.'+code+'>li').hasClass('no_contents')==true){
      $('.view_more.recipes').hide();
    }else{
      $('.view_more.recipes').show();
    }
  })

  var tvcfsrc;
  var name;
  $('.tvcf_main > li.list > ul > li > a').on('click', function(){
    name = $(this).attr('data-name');
    var srcset = $(this).attr('data-srcset');
    var src = $(this).attr('data-src');
    tvcfsrc = $(this).attr('data-code');
    $('.tvcf_main > li.list > ul > li').removeClass('on');
    $(this).parent('li').addClass('on');
    $('.tvcf_main > li.main > .img_box source').attr('srcset', srcset);
    $('.tvcf_main > li.main > .img_box img').attr('src', src);
    $('.tvcf_main > li.main .tvcf_title').text(name);
  })
  tvcfsrc = 'https://www.youtube.com/embed/1JYXuCrvHfg'

  $('.tvcf_main > li.main .img_box > a').on('click', function(){
    console.log(name);
    $('.movie_pop .text p').text('휴롬디바S 티저영상');
    $('.movie_pop .text p').text(name);
    $('.dim_back').show();
    $('.movie_pop').fadeIn(100);
    $('.movie_pop').addClass('on');
    $('.movie_pop').find('.movie').empty();
    $('.movie_pop').find('.movie').append(
      '<iframe src="' + tvcfsrc + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  })

  $('.tvcf_list > li .swiper-slide').on('click', 'a', function(){
    name = $(this).attr('data-name');
    tvcfsrc = $(this).attr('data-code');
    $('.movie_pop .text p').text(name);
    $('.movie_pop').fadeIn(100);
    $('.movie_pop').addClass('on');
    $('.movie_pop').find('.movie').empty();
    $('.movie_pop').find('.movie').append(
      '<iframe src="' + tvcfsrc + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  })

  $('.board_title > dd > a').on('click', function(){
    $(this).parents('li').find('.reply').slideToggle('fast');
  })

  $('.toggle_tab > button').on('click', function(){
    $(this).toggleClass('on');
    $('.toggle_list').toggleClass('on');
  })

































})
