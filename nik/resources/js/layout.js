$(document).ready(function(){
  // var depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
  //   slidesPerView:5,
  //   slidesPerGroup:1,
  //   nitialSlide: 0,
  //   allowTouchMove: true,
  //   normalizeSlideIndex: true,
  //   navigation: {
  //     nextEl: '.sub_menu .right .swiper-button-next',
  //     prevEl: '.sub_menu .right .swiper-button-prev',
  //   },
  //   breakpoints: {
  //      1199: {
  //        slidesPerView: 3,
  //        slidesPerGroup:1,
  //      },
  //      991:{
  //        slidesPerView: 2,
  //        slidesPerGroup:1,
  //      },
  //      766:{
  //        slidesPerView: 1,
  //        slidesPerGroup:1,
  //      },
  //    }
  // });
  var productSwiper = new Swiper('.cont_area01 .swiper-container', {
    slidesPerView:5,
    slidesPerGroup:1,
    navigation: {
      nextEl: '.cont_area01  .swiper-button-next',
      prevEl: '.cont_area01  .swiper-button-prev',
    },
    breakpoints: {
       1199: {
         slidesPerView: 3,
         slidesPerGroup:1,
       },
       991:{
         slidesPerView: 2,
         slidesPerGroup:1,
       },
       766:{
         slidesPerView: 1,
         slidesPerGroup:1,
       },
     }
  });

  // main_visual
  var menu = [ 'CES 2019', 'D850', 'D3X', 'NIKORR']
  var mainSwiper = new Swiper('.main_visual .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    cssMode: true,
    loop: true,
    pagination: {
      el: '.main_visual .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span>'+ (menu[index])  + '</span>' + '</span>';
      },
    },
    navigation: {
      nextEl: '.main_visual .swiper-button-next',
      prevEl: '.main_visual .swiper-button-prev',
    },
  });


  // 배너 스와이퍼
  var bannerSwiper = new Swiper('.cont_area02 .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
       991: {
         slidesPerView: 1,
         slidesPerGroup: 2,
       }
     },
  });

  // 갤러리 스와이퍼
  var gallerySwiper = new Swiper('.cont_area04 .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.cont_area04 .swiper-button-next',
      prevEl: '.cont_area04 .swiper-button-prev',
    },
    breakpoints: {
       991: {
         slidesPerView: 1
       }
     }
  });

  // 3뎁스 배열
  var depth3Menu ={
    dslrcamera: {
      D810: ['1542_D810_front.png', 'D850', 'FX / 3635M', 'ISO 64~12800 / 9fps'],
      D5600: ['1575_D5600_front.png', 'D850', 'DX / 2416MP', 'ISO 100~25600 / 9fps'],
      D850: ['1585_D850_front.png', 'D850', 'FX / 4575MP', 'ISO 64~35600 / 9fps'],
      D7500: ['1581_D7500_front.png', 'D7500', 'DX / 2088MP', 'ISO 100~51200 / 8fps'],
      D3500: ['1590_D3500_front.png', 'D3500', 'DX / 3635M', 'ISO 64~12800 / 9fps'],
      D810A: ['1553_D810A_front.png', 'D810A', 'FX / 3635M', 'ISO 200~12800 / 5fps'],
      D750: ['1543_D750_front.png', 'D750', 'FX / 2432M', 'ISO 100~12800 / 6.5fps'],
      D500: ['1559_D500_front.png', 'D500', '>FX / 2088M', 'ISO 100~51200 / 10fps'],
      D610: ['1540-D610-front.png', 'D610', 'DX / 2416M', 'ISO 100~6400 / 6fps'],
      D3400: ['1569_D3400_front.png', 'D3400', 'FX / 3635M', 'ISO 100~25600 / 5fps']
    },
    mirrorless: {
      Z7: ['1591_Z7_front.png', 'Z7', '4K UHD / 4575M', 'ISO 64~25600 / 9fps'],
      Z6: ['1595_Z6_front.png', 'Z6', '4K UHD / 2450M', 'ISO 100~51200 / 12fps']
    },
    pointshoot: {
      A900: ['26505_A900_front.png', 'A900', '2029M / 35X', '3" / ISO 3200'],
      A300: ['26519_A300_front.png', 'A300', '2005M / 8X', '2.7" / ISO 3200'],
      A100: ['26510_B700_front.png', 'A900', '2005M / 5X', '2.7" / ISO 3200'],
      A10: ['26518_A10_front.png', 'A10', '1614M / 5X', '2.7" / ISO 1600'],
      P1000: ['26522_P1000_front.png', 'P1000', '1605M / 125X', '3.2" / ISO 6400'],
      P900: ['26499_P900_front.png', 'P900', '1605 / 83X', '3" / ISO 6400'],
      W300s: ['26524_W300_front.png', 'W300s', '1605M / 5X', '3" / ISO 6400'],
      W100: ['26515_W100_front.png', 'W100', '1317M / 3X', '2.7" / ISO 1600']
    },
    actioncam: {
      KeyMisson360: ['26513_KM360_front.png', 'KeyMisson360', '360&#176; / 30m', '2m" / -10&#8451'],
      KeyMisson170: ['26514_KM170_front.png', 'KeyMisson170', '170&#176; / 10m', '2m" / -10&#8451'],
      KeyMisson80: ['26502_KM80_front.png', 'KeyMisson360', '80&#176; / 1m', '1.5m" / -10&#8451']
    },
    filmcamera: {
      F6: ['1799_F6_front.png', 'F6','',''],
      FM10: ['1689_FM10_front.png', 'FM10','','']
    },
    dslrlens: {
      nikkor815mm: ['353_20066-AF-S-FISHEYE-NIKKOR-8-15mm.png', 'AF-S FISHEYE NIKKOR 8-15mm ', '8-15mm / 2x', 'FX" / f3.5-4.5'],
      nikkor1024mm: ['353_2144_AF-S-DX-Zoom-NIKKOR-12-24mm-f-4G-IF-ED.png', 'AF-S-DX-Zoom-NIKKOR-12-24mm', '10-24mm / 2.4x', 'DX" / f3.5-4.5'],
      nikkor105mm: ['353_2148_AF-DX-Fisheye-NIKKOR-10.5mm-f-2.8G-ED.png', 'AF-S FISHEYE NIKKOR 8-15mm', '8-15mm / .', 'DX" / f2.8'],
      nikkor1020mm: ['353_20067-AF-P-DX-NIKKOR-10-20mm.png', 'AF-P-DX-NIKKOR-10-20mm', '10-20mm / 2x', 'DX" / f4.5-5.6'],
      nikkor1224mm: ['353_2181_AF-S-DX-Zoom-NIKKOR-10-24mm-f-3.5-4.5G-ED_front.png', 'DX-Zoom-NIKKOR-10-24mm', '12-24mm / 2.4x', 'DX" / f4'],
      nikkor1424mm: ['353_2163_AF-S-NIKKOR-14-24mm-f-2.8G-ED.png', 'AF-S-NIKKOR-14-24mm', '14mm / 2x', 'FX" / f4'],
      nikkor14mm: ['353_1925-AF_NIKKOR_14mm_f_2_8D_ED.png', 'AF_NIKKOR_14mm', '14mm / .', 'FX" / f2.8'],
      nikkor1685mm: ['353_20055_16-80E_front.png', '16-80E', '16-85mm / 5.3x', 'DX" / f3.5-5.6'],
    },
    dslraccessories: {
      eh5c: ['27182-EH-5c-AC-Adapter.png','EH-5c AC Adapter','',''],
      fh4: ['27193-FH-4-Strip-Film-Holder.png','FH-4 Strip Film Holder','',''],
      andc18: ['27182-EH-5c-AC-Adapter.png','AN-DC18 Camera Strapr','',''],
      adapterset: ['27192-ES-2-Film-Digitalizing-Adapter.png','ES-2 Film Digitizing Adapter Set','',''],
      battery: ['27190-EN-EL15a-Rechargeable-Li-ion-Battery.png','EN-EL15a Rechargeable Li-ion Battery','',''],
      DK28: ['27187-DK-28-Rubber-Eyecup.png','DK-28 Rubber Eyecup','','']
    },
    mirrorlessaccessories: {
      cameracase: ['4224-CF-DC9-Semi-Soft-Camera-Case.png', ' CF-DC9 Semi Soft Camera Case','',''],
      mount: ['4224-CF-DC9-Semi-Soft-Camera-Case.png', ' Mount Adapter FTZ','',''],
      camerastrap: ['4222-AN-DC19-Camera-Strap-front.png', 'AN-DC19 Camera Strap','',''],
      cap: ['4219-BF-N1-Body-Cap.png','  BF-N1 Body Cap','',''],
      battery1: ['27190-EN-EL15a-Rechargeable-Li-ion-Battery.png',' EN-EL15a Rechargeable Li-ion Battery','',''],
      battery2: ['4218-EN-EL15b-Rechargeable-Battery-ver3.png',' CF-DC9 Semi Soft Camera Case','','']
    },
    dslrlensaccessories: {
      LCK103: ['4197-LC-K103-Slip-On-Front-Lens-Cap-front.png', ' LC-K103 Slip-On Front Lens Cap','',''],
      LCK101: ['4173-LC-K101-Lens-Cap.png', 'CF-DC9 Semi Soft Camera Case','',''],
      LC55A: ['4158-LC_55A-front.png', 'LC-55A 55mm Snap-On Front Lens Cap','',''],
      HK41: ['4183-HK-41-Slip-On-Lens-Hood-front.png', 'HK-41 Slip-On Lens Hood','',''],
      HB80: ['4175-HB-80-Lens-Hood.png', ' HB-80 Bayonet Lens Hood','',''],
      HB82: ['4178-HB-82-Bayonet-Lens-Hood.png', 'HB-82 Bayonet Lens Hood','','']
    },
    mirrorlessaccessories: {
      LC82B: ['4196-LC-82B-82mm-Snap-On-Front-Lens-Cap.png', 'LC-82B 82mm Snap-On Front Lens Cap','',''],
      HB86: ['4181-HB-86-Bayonet-Lens-Hood.png', ' HB-86 Bayonet Lens Hood','',''],
      HB85: ['4184-HB-85-Bayonet-Lens-Hood.png', 'HB-85 Bayonet Lens Hood','',''],
      HB89: ['4193-HB-89-Bayonet-Lens-Hood (1).png', ' HB-89 Bayonet Lens Hood','',''],
      CLC1: ['4207-CL-C1-Lens-Case.png', '! CL-C1 Lens Case','',''],
      fiter82mm: ['2498_82mm_Circular_Polarizing_Filter_II.png', '82mm Circular Polarizing Filter II','','']
    },
    flashaccessories: {
      manual: ['manual_front.png', ' SB-910 User manual','',''],
      AS17: ['3072-AS-17-Flash-Unit-Coupler_front.png', ' AS-17 TTL Flash Unit Coupler for F3','',''],
      WRR10: ['27105-WR_R10.png', ' WR-R10 Wireless Remote Controller (transceiver)','',''],
      WRR10T10: ['WR-T10-R10-A10-27106.png', ' WR-R10/WR-T10/WR-A10 Wireless Remote Adapter Set','',''],
      WRA10: ['WR-A10-adapter.png', ' WR-A10 Wireless Remote Adapter','',''],
    },
    pointshootaccessories: {
      HolsterBag: ['17079-Nikon-Holster-Bag-front.png', ' Nikon Holster Bag','',''],
      EH73P: ['Nikon-EH-73P-Charging-Adapter.png', ' EH-73P Charging AC Adapter','',''],
      MLL7: ['25952-ML-L7-Bluetooth-Remote-Control.png', ' CF-CP3 Silicone Jacket (Orange)','',''],
      CFCP3orange: ['25963-H1617-Silicon-Jacket-Orange.png', ' SB-910 User manual','','']
    }
  }


  // 프로덕트 제품 배열

  var prcode = {
    Product1542:['<img src="../../resources/images/1542_D810_front.png">', 'Product 1542', 'The Peak point of quality Nikon D810','STEEL BALCK', '-36.35 million pixels in effect <br>-High resolution image is realized by removing optical low pass filter <br> -Supports abundant generation and low noise ISO 64 commercial reduction', 'KRW 2,255,400', 'D810'],
    Product1557:['<img src="../../resources/images/1557_D5_front.png">', 'Product 1557', 'Innovation for inspiration The Nikon D5.','STEEL BALCK', '- High-speed, high-precision 153 point AF system supports 12 fps high-speed speakers, - With 20.82 million pixel full-frame CMOS sensors<br>- 4K UHD ultra-high-definition video can be filmed', 'KRW 7,290,000', 'D5'],
    Product1581:['<img src="../../resources/images/1581_D7500_front.png">', 'Product 1581', 'I AM AMAZING MOMENTS The Nikon D7500.','STEEL BALCK', '- With EXPED 5, ISO commercial sensitivity ISO 100 - 51200, - Supports 4K Full HD video shooting<br>- High-speed continuous shooting of up to approximately 8 fps, 50 frames.', 'KRW 1,880,000', 'D7500'],
    Product1585:['<img src="../../resources/images/1585_D850_front.png">', 'Product 1585', 'I AM THE DIFFERENCE MAKER The Nikon D850.','STEEL BALCK', '- Employing 45.75 million pixels and reverse-survey Nikon FX format CMOS sensors, - Excellent video processing engine, equipped with EXPED 5.<Br>- Commercial sensitivity ISO 64 - 25600, Full Frame 4K UHD response<br>- Fast, continuous shooting at 7m* per second.', 'KRW 3,980,000', 'D850'],
    Product1591:['<img src="../../resources/images/1591_Z7_front.png">', 'Product 1591', 'High pixel full-frame mirrorless Z 7 The Nikon Z 7.','STEEL BALCK', '- 45.75 million pixels of effective pixel. ISO 64-25600., - High-resolution model Z 7.', 'KRW 3,699,000', 'Z7'],
    Product1689:['<img src="../../resources/images/1689_FM10_front.png">', 'Product 1689', 'Pure Photography, once again, feels the depth of a picture.','STEEL BALCK', '- FX format full frame, 16.25 million pixel sensor and high sensitivity low noise quality, - 39 AF points, enabling fast, accurate, high-speed AF.<br>- Intuitively view/regulate figures at a glance', 'KRW 639,000', 'FM10'],
    Product2181:['<img src="../../resources/images/2181_AF-S-DX-Zoom-NIKKOR-10-24mm-f-3.5-4.5G-ED_front.png">', 'Product 2181', 'AF DX Fisheye Nikkor ED 10.5mm f/2.8G','STEEL BALCK', 'Have an annular lens angle of 16mm calculated as 35mm, An annular lens exclusive to DX format', 'KRW 964,000', 'Nikkor ED 10.5mm'],
    Product4193:['<img src="../../resources/images/4941_HB-45-Bayonet-Lens-Hood_front.png">', 'Product 4193', 'Bayonet Lens Hood.','STEEL BALCK', '-The HB-79 Bayonet Lens Hood is designed to keep flare from entering the lens when shooting.', 'KRW 49,900', 'Bayonet-Lens-Hood'],
    Product11858:['<img src="../../resources/images/11858_Extended_Service_Coverage_2_Years_D800.png">', 'Product 11858', '2-Year Extended Service','2 YEARS', 'The Nikon 2-Year Extended Service Coverage (ESC) for the D800,', 'KRW 359,000', '2Y Extended Service'],
    Product20066:['<img src="../../resources/images/20066-AF-S-FISHEYE-NIKKOR-8-15mm.png">', 'Product 20066', 'AF S FISHEYE NIKKOR 8-15mm','STEEL BLACK', '- A zoom lens that can produce circular and diagonal angling effects<br>- Applies excellent resolution, description performance, and anti-seismic, anti-span and pollution structures,', 'KRW 1,560,000', 'NIKKOR 8-15mm']
  }

  var sWidth = $(window).width();
  sWidth = $(window).width();
  if(sWidth> 1199){
    $('body').removeClass('pc_min tab mob');
    $('body').addClass('pc');
    $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
      $(this).stop().css({'top':'-602px'});
      $('.sub_menu.'+code).removeClass('on');
    })
  }
  if(sWidth<=1199 && sWidth>991 ){
    $('body').removeClass('pc tab mob');
    $('body').addClass('pc_min');
    $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
      $(this).stop().css({'top':'-602px'});
      $('.sub_menu.'+code).removeClass('on');
    })
  }
  if(sWidth<=991 && sWidth>766 ){
    $('body').removeClass('pc pc_min mob');
    $('body').addClass('tab');
    $('.sub_menu').stop().animate({top:'-800px'}, 0);
    $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
      $(this).stop().css({'top':'-800px'});
      $('.sub_menu.'+code).removeClass('on');
    })
  }
  if(sWidth<=766 ){
    $('body').removeClass('pc pc_min tab');
    $('body').addClass('mob');

  }

  $(window).resize(function(){

    sWidth = $(window).width();
    if(sWidth> 1199){
      $('body').removeClass('pc_min tab mob');
      $('body').addClass('pc');
      $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
        $(this).stop().css({'top':'-602px'});
        $('.sub_menu.'+code).removeClass('on');
      })
    }
    if(sWidth<=1199 && sWidth>991 ){
      $('body').removeClass('pc tab mob');
      $('body').addClass('pc_min');
      $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
        $(this).stop().css({'top':'-602px'});
        $('.sub_menu.'+code).removeClass('on');
      })
    }
    if(sWidth<=991 && sWidth>766 ){
      $('body').removeClass('pc pc_min mob');
      $('body').addClass('tab');
      $('.sub_menu').stop().animate({top:'-800px'}, 0);
      $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
        $(this).stop().css({'top':'-800px'});
        $('.sub_menu.'+code).removeClass('on');
      })
      $('.submenu_wrap').removeClass('on');
      $('.btn_mobMenu').removeClass('on');
    }
    if(sWidth<=766 ){
      $('body').removeClass('pc pc_min tab');
      $('body').addClass('mob');
      $('#gnb > li > a, .sub_menu').on('mouseleave', function(){
        $('.sub_menu.'+code).addClass('on');
      })


    }
    if(sWidth>=600 && sWidth<=782 ){
      setTimeout(function(){location.reload();},100)
    }


  })



  var code;
  $('#gnb > li > a').on('mouseenter', function(){
    code = $(this).attr('data-code');
    var contHeight = $('.sub_menu').height();
    console.log(code);
    $('.sub_menu.'+code).addClass('on');
    $('.sub_menu').stop().animate({top:'-800px'}, 0);
    $('.sub_menu.'+code).stop().animate({top:'0px'}, 0);
    $('.sub_menu.'+code+'> ul .left .category .pc_category li:first-child > a').trigger('click')
  })


  var sct;
  var scroll;
  $(window).scroll(function(){
    sct = $(window).scrollTop();

    if(sct>120){
      $('header').addClass('scroll')
      scroll = "ok"
    }
    if(sct<=100){
      $('header').removeClass('scroll')
      scroll = null;

    }
  })

  $('.sub_menu > ul .left .category .pc_category > li').on('click', 'a',function(){
    var key = $(this).text().toLowerCase().replace(/ /g, '');
    // console.log(key);
    $('.sub_menu > ul .left .category .pc_category > li > a').removeClass('on');
    $(this).addClass('on');
    $('.sub_menu .right .swiper-wrapper').empty();
    for (var i in depth3Menu[key]) {
      $('.sub_menu .right .swiper-wrapper').append(
          '<li class="swiper-slide">' +
            '<a href="#">' +
              '<img src="../../resources/images/'+ depth3Menu[key][i][0] + '" alt="">' +
              '<dl class="">' +
                '<dt>' + depth3Menu[key][i][1] + '</dt>' +
                '<dd>' + depth3Menu[key][i][2] + '</dd>' +
                '<dd>' + depth3Menu[key][i][3] + '</dd>' +
              '</dl>' +
            '</a>' +
          '</li>'
      );
    }

    var depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
      slidesPerView:5,
      slidesPerGroup:1,
      nitialSlide: 0,
      allowTouchMove: true,
      normalizeSlideIndex: true,
      navigation: {
        nextEl: '.sub_menu .right .swiper-button-next',
        prevEl: '.sub_menu .right .swiper-button-prev',
      },
      breakpoints: {
         1199: {
           slidesPerView: 3,
           slidesPerGroup:1,
         },
         991:{
           slidesPerView: 2,
           slidesPerGroup:1,
         },
         // 766:{
         //   slidesPerView: 1,
         //   slidesPerGroup:1,
         // },
       }
    });

  })



  $('.btn_bag').on('click', function(){
    $('.popup.bag').addClass('on');
    $('.dim').show();
  })
  $('.btn_login').on('click', function(){
    $('.popup.login').addClass('on');
    $('.dim').show();
  })
  $('.btn_popclose').on('click', function(){
    $('.popup').removeClass('on');
    $('.dim').hide();
  })

  $('.btn_searchShow').on('click', function(){
    $('.search_box .search_input').toggleClass('on');
  })

  $('.footer_top .footer_menu > li > a').on('click', function(){
    $(this).siblings('ul').slideToggle();
    $(this).toggleClass('on');
  })

  $('.lnb > li').on('click', 'a', function(){
    var code = $(this).attr('data-code');
    console.log(code);
    $('.lnb > li > a > span').removeClass('on');
    $(this).find('span').addClass('on');
    $('.sub_menu').removeClass('on');
    $('.sub_menu.'+code).addClass('on');
    for (var i in depth3Menu[code]) {
      $('.sub_menu.'+code+' .right .swiper-wrapper').append(
          '<li class="swiper-slide">' +
            '<a href="#">' +
              '<img src="../../resources/images/'+ depth3Menu[code][i][0] + '" alt="">' +
              '<dl class="">' +
                '<dt>' + depth3Menu[code][i][1] + '</dt>' +
                '<dd>' + depth3Menu[code][i][2] + '</dd>' +
                '<dd>' + depth3Menu[code][i][3] + '</dd>' +
              '</dl>' +
            '</a>' +
            '</li>'
      );
    }

    var depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
      init: true,
      slidesPerView:1,
      slidesPerGroup:1,
      nitialSlide: 0,
      allowTouchMove: true,
      normalizeSlideIndex: true,
      navigation: {
        nextEl: '.sub_menu .right .swiper-button-next',
        prevEl: '.sub_menu .right .swiper-button-prev',
      },
    });



    var depth2swiper = new Swiper('.sub_menu.'+code+ ' .left .category .swiper-container', {
      slidesPerView:2,
      slidesPerGroup:1,
      navigation: {
        nextEl: '.sub_menu.'+code+ ' .left .category .swiper-button-next',
        prevEl: '.sub_menu.'+code+ ' .left .category .swiper-button-prev',
      }
    });

    $('.sub_menu.'+code+ ' > ul .left .category > .swiper-container > ul > li:first-child > a').trigger('click');

  })

  $('body.mob .sub_menu > ul .left .category .swiper-container > ul > li').on('click', 'a',function(){
    var key = $(this).text().toLowerCase().replace(/ /g, '');
    console.log(key);
    $('.sub_menu > ul .left .category .swiper-container > ul > li > a').removeClass('on');
    $(this).addClass('on');
    $('.sub_menu .right .swiper-wrapper').empty();
    for (var i in depth3Menu[key]) {
      $('.sub_menu .right .swiper-wrapper').append(
          '<li class="swiper-slide">' +
            '<a href="#">' +
              '<img src="../../resources/images/'+ depth3Menu[key][i][0] + '" alt="">' +
              '<dl class="">' +
                '<dt>' + depth3Menu[key][i][1] + '</dt>' +
                '<dd>' + depth3Menu[key][i][2] + '</dd>' +
                '<dd>' + depth3Menu[key][i][3] + '</dd>' +
              '</dl>' +
            '</a>' +
            '</li>'
      );
    }

    // var depth2swiper = new Swiper('.sub_menu .left .category .swiper-container', {
    //   slidesPerView:2,
    //   slidesPerGroup:1,
    //   navigation: {
    //     nextEl: '.sub_menu .left .category .swiper-button-next',
    //     prevEl: '.sub_menu .left .category .swiper-button-prev',
    //   }
    // });

    var depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
      init: true,
      initialSlide: 0,
      slidesPerView:1,
      slidesPerGroup:1,
      allowTouchMove: false,
      normalizeSlideIndex: true,
      navigation: {
        nextEl: '.sub_menu .right .swiper-button-next',
        prevEl: '.sub_menu .right .swiper-button-prev',
      },
    });

  })
  var index = 0;
  $('.btn_mobMenu').on('click', function(){
    ++index;
    $('.submenu_wrap').toggleClass('on');
    $(this).toggleClass('on');
    if(index<=1){
      // $('.sub_menu.cameras > ul .left .category > div.swiper-container li:first-child > a').trigger('click')
    }
    $('.lnb_wrap > ul > li:first-child > a').trigger('click')

    // depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
    //   slidesPerView:1,
    //   slidesPerGroup:1,
    //   navigation: {
    //     nextEl: '.sub_menu .right .swiper-button-next',
    //     prevEl: '.sub_menu .right .swiper-button-prev',
    //   },
    // });
    // depth3swiper.update();
    // var depth3swiper = new Swiper('.sub_menu .right .swiper-container', {
    //   slidesPerView:1,
    //   slidesPerGroup:1,
    //   allowTouchMove: false,
    //   navigation: {
    //     nextEl: '.sub_menu .right .swiper-button-next',
    //     prevEl: '.sub_menu .right .swiper-button-prev',
    //   },
    // });
  })

  var productCode
  $('.cont_area01 .top_wrap .swiper-slide a').click(function(){
    productCode=$(this).parents('div.swiper-slide').attr('data-code');
    console.log(productCode);
    $('.modal').show();
    $('body').css({'overflow-y':'hidden'});
    $('.dim').show();
    $('.modal').find('li.img').empty();
    $('.modal').find('li.img').append(
      prcode[productCode][0]
    );
    $('.modal').find('li.info').find('div.text').empty();
    $('.modal').find('li.info').find('div.text').append(
      '<p>'+ prcode[productCode][1] +'</p>' +
      '<dl class="">' +
        '<dt>' + prcode[productCode][2] + '</dt>' +
          '<dd><p>'+ prcode[productCode][3] + '</p></dd>' +
            '<dd class="list"><p>' + prcode[productCode][4] + '</p></dd>' +
          '<dd><strong>' + prcode[productCode][5] + '</strong></dd>' +
        '<dd><span>Excl. Sales Tax</span></dd>' +
      '</dl>'
    );
  })

  $('.modal > a.btn_popclose').on('click', function(){
    $('.modal').hide();
    $('.dim').hide();
    $('body').css({'overflow-y':'scroll'});
  })

  $('.modal .btn_addCart').on('click', function(){
    // $('.popup.bag .pop_cont .list').empty();
    $('.popup.bag .pop_cont .list').append(
      '<li>' +
        '<input type="checkbox" class="cart_chk" checked="checked">' +
        '<a href="#">' + prcode[productCode][0] +  '</a>' +
        '<dl class="">' +
          '<dt>' + prcode[productCode][6] +
            '<select name="quantity" id="">' +
              '<option value="1">1</option>' +
              '<option value="2">2</option>' +
              '<option value="3">3</option>' +
              '<option value="4">4</option>' +
              '<option value="5">5</option>' +
              '<option value="6">6</option>' +
              '<option value="7">7</option>' +
              '<option value="8">8</option>' +
              '<option value="9">9</option>' +
              '<option value="10">10</option>' +
            '</select>' +
            '<span>'+ "Q'ty" + '</span>' +
          '</dt>' +
          '<dd>' + 'color :' + prcode[productCode][3] + '</dd>' +
          '<dd class="price">' + prcode[productCode][5]  + '</dd>' +
        '</dl>' +
      '</li>'
    );
    $('.total_price').text(total);
  })

  var linum;
  function total(){
    var total=0;
    $('.popup.bag .pop_cont .list li').each(function(){
      if($(this).find('.cart_chk').is(":checked")){
        var price=Number($(this).find('.price').text().replace(/[^0-9]/g,''));
        var count=Number($(this).find('select').val());
        total+=price*count;
        console.log(price, count);
      }
    })
    linum = $('.popup.bag .pop_cont .list li .cart_chk:checked').length;
    $('.popup.bag .pop_cont .calc > li.total > strong > span.item_num').text(linum+'item');
    console.log(total);
    total=total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('.total_price').text(total);

  }

  $(document).on('change', '[name=quantity]',function(){
    total();
  })

  $(document).on('change', '.cart_chk',function(){
    total();
  })

  $('.allchk').on('click', function(){
    if($('.allchk').prop('checked')){
      $('.cart_chk').prop('checked', true);
      total();
    }else{
      $('.cart_chk').prop('checked', false);
      total();
    }
  })

  $('.btn_delete.all').on('click', function(){
    $('.popup.bag .pop_cont .list').empty();
    total();
  })

  $('.btn_delete').on('click', function(){
    $('.popup.bag .pop_cont .list input:checked').parent('li').remove();
    total();
  })

  $('.btn_like').on('click', function(){
    $(this).toggleClass('on');
  })






})
