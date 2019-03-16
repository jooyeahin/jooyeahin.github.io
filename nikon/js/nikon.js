$(document).ready(function(){

  // 2뎁스 배열
  var depth2Menu={
    cameras:['DSLR CAMERA','MIRRORLESS', 'POINTSHOOT', 'ACTION CAM', 'FILM CAMERA'],
    lenses:['DSLR LENS', 'MORRORLESS LENS'],
    accessories:['DSLR ACCESSORIES', 'MIRRORLESS ACCESSORIES', 'DSLR LENS ACCESSORIES', 'MIRRORLESS LENS ACCESSORIES', 'FLASH ACCESSORIES', 'POINT SHOOT ACCESSORIES']
  }

  // 3뎁스 배열
  var depth3Menu ={
    dslrcamera: {
      D810: ['img/1542_D810_front.png', 'D850', 'FX / 3635M', 'ISO 64~12800 / 9fps'],
      D5600: ['img/1575_D5600_front.png', 'D850', 'DX / 2416MP', 'ISO 100~25600 / 9fps'],
      D850: ['img/1585_D850_front.png', 'D850', 'FX / 4575MP', 'ISO 64~35600 / 9fps'],
      D7500: ['img/1581_D7500_front.png', 'D7500', 'DX / 2088MP', 'ISO 100~51200 / 8fps'],
      D3500: ['img/1590_D3500_front.png', 'D3500', 'DX / 3635M', 'ISO 64~12800 / 9fps'],
      D810A: ['img/1553_D810A_front.png', 'D810A', 'FX / 3635M', 'ISO 200~12800 / 5fps'],
      D750: ['img/1543_D750_front.png', 'D750', 'FX / 2432M', 'ISO 100~12800 / 6.5fps'],
      D500: ['img/1559_D500_front.png', 'D500', '>FX / 2088M', 'ISO 100~51200 / 10fps'],
      D610: ['img/1540-D610-front.png', 'D610', 'DX / 2416M', 'ISO 100~6400 / 6fps'],
      D3400: ['img/1569_D3400_front.png', 'D3400', 'FX / 3635M', 'ISO 100~25600 / 5fps']
    },
    mirrorless: {
      Z7: ['img/1591_Z7_front.png', 'Z7', '4K UHD / 4575M', 'ISO 64~25600 / 9fps'],
      Z6: ['img/1595_Z6_front.png', 'Z6', '4K UHD / 2450M', 'ISO 100~51200 / 12fps']
    },
    pointshoot: {
      A900: ['img/26505_A900_front.png', 'A900', '2029M / 35X', '3" / ISO 3200'],
      A300: ['img/26519_A300_front.png', 'A300', '2005M / 8X', '2.7" / ISO 3200'],
      A100: ['img/26510_B700_front.png', 'A900', '2005M / 5X', '2.7" / ISO 3200'],
      A10: ['img/26518_A10_front.png', 'A10', '1614M / 5X', '2.7" / ISO 1600'],
      P1000: ['img/26522_P1000_front.png', 'P1000', '1605M / 125X', '3.2" / ISO 6400'],
      P900: ['img/26499_P900_front.png', 'P900', '1605 / 83X', '3" / ISO 6400'],
      W300s: ['img/26524_W300_front.png', 'W300s', '1605M / 5X', '3" / ISO 6400'],
      W100: ['img/26515_W100_front.png', 'W100', '1317M / 3X', '2.7" / ISO 1600']
    },
    actioncam: {
      KeyMisson360: ['img/26513_KM360_front.png', 'KeyMisson360', '360&#176; / 30m', '2m" / -10&#8451'],
      KeyMisson170: ['img/26514_KM170_front.png', 'KeyMisson170', '170&#176; / 10m', '2m" / -10&#8451'],
      KeyMisson80: ['img/26502_KM80_front.png', 'KeyMisson360', '80&#176; / 1m', '1.5m" / -10&#8451']
    },
    filmcamera: {
      F6: ['img/1799_F6_front.png', 'F6','',''],
      FM10: ['img/1689_FM10_front.png', 'FM10','','']
    },
    dslrlens: {
      nikkor815mm: ['img/353_20066-AF-S-FISHEYE-NIKKOR-8-15mm.png', 'AF-S FISHEYE NIKKOR 8-15mm ', '8-15mm / 2x', 'FX" / f3.5-4.5'],
      nikkor1024mm: ['img/353_2144_AF-S-DX-Zoom-NIKKOR-12-24mm-f-4G-IF-ED.png', 'AF-S-DX-Zoom-NIKKOR-12-24mm', '10-24mm / 2.4x', 'DX" / f3.5-4.5'],
      nikkor105mm: ['img/353_2148_AF-DX-Fisheye-NIKKOR-10.5mm-f-2.8G-ED.png', 'AF-S FISHEYE NIKKOR 8-15mm', '8-15mm / .', 'DX" / f2.8'],
      nikkor1020mm: ['img/353_20067-AF-P-DX-NIKKOR-10-20mm.png', 'AF-P-DX-NIKKOR-10-20mm', '10-20mm / 2x', 'DX" / f4.5-5.6'],
      nikkor1224mm: ['img/353_2181_AF-S-DX-Zoom-NIKKOR-10-24mm-f-3.5-4.5G-ED_front.png', 'DX-Zoom-NIKKOR-10-24mm', '12-24mm / 2.4x', 'DX" / f4'],
      nikkor1424mm: ['img/353_2163_AF-S-NIKKOR-14-24mm-f-2.8G-ED.png', 'AF-S-NIKKOR-14-24mm', '14mm / 2x', 'FX" / f4'],
      nikkor14mm: ['img/353_1925-AF_NIKKOR_14mm_f_2_8D_ED.png', 'AF_NIKKOR_14mm', '14mm / .', 'FX" / f2.8'],
      nikkor1685mm: ['img/353_20055_16-80E_front.png', '16-80E', '16-85mm / 5.3x', 'DX" / f3.5-5.6'],
    },
    dslraccessories: {
      eh5c: ['img/27182-EH-5c-AC-Adapter.png','EH-5c AC Adapter','',''],
      fh4: ['img/27193-FH-4-Strip-Film-Holder.png','FH-4 Strip Film Holder','',''],
      andc18: ['img/27182-EH-5c-AC-Adapter.png','AN-DC18 Camera Strapr','',''],
      adapterset: ['img/27192-ES-2-Film-Digitalizing-Adapter.png','ES-2 Film Digitizing Adapter Set','',''],
      battery: ['img/27190-EN-EL15a-Rechargeable-Li-ion-Battery.png','EN-EL15a Rechargeable Li-ion Battery','',''],
      DK28: ['img/27187-DK-28-Rubber-Eyecup.png','DK-28 Rubber Eyecup','','']
    },
    mirrorlessaccessories: {
      cameracase: ['img/4224-CF-DC9-Semi-Soft-Camera-Case.png', ' CF-DC9 Semi Soft Camera Case','',''],
      mount: ['img/4224-CF-DC9-Semi-Soft-Camera-Case.png', ' Mount Adapter FTZ','',''],
      camerastrap: ['img/4222-AN-DC19-Camera-Strap-front.png', 'AN-DC19 Camera Strap','',''],
      cap: ['img/4219-BF-N1-Body-Cap.png','  BF-N1 Body Cap','',''],
      battery1: ['img/27190-EN-EL15a-Rechargeable-Li-ion-Battery.png',' EN-EL15a Rechargeable Li-ion Battery','',''],
      battery2: ['img/4218-EN-EL15b-Rechargeable-Battery-ver3.png',' CF-DC9 Semi Soft Camera Case','','']
    },
    dslrlensaccessories: {
      LCK103: ['img/4197-LC-K103-Slip-On-Front-Lens-Cap-front.png', ' LC-K103 Slip-On Front Lens Cap','',''],
      LCK101: ['img/4173-LC-K101-Lens-Cap.png', 'CF-DC9 Semi Soft Camera Case','',''],
      LC55A: ['img/4158-LC_55A-front.png', 'LC-55A 55mm Snap-On Front Lens Cap','',''],
      HK41: ['img/4183-HK-41-Slip-On-Lens-Hood-front.png', 'HK-41 Slip-On Lens Hood','',''],
      HB80: ['img/4175-HB-80-Lens-Hood.png', ' HB-80 Bayonet Lens Hood','',''],
      HB82: ['img/4178-HB-82-Bayonet-Lens-Hood.png', 'HB-82 Bayonet Lens Hood','','']
    },
    mirrorlessaccessories: {
      LC82B: ['img/4196-LC-82B-82mm-Snap-On-Front-Lens-Cap.png', 'LC-82B 82mm Snap-On Front Lens Cap','',''],
      HB86: ['img/4181-HB-86-Bayonet-Lens-Hood.png', ' HB-86 Bayonet Lens Hood','',''],
      HB85: ['img/4184-HB-85-Bayonet-Lens-Hood.png', 'HB-85 Bayonet Lens Hood','',''],
      HB89: ['img/4193-HB-89-Bayonet-Lens-Hood (1).png', ' HB-89 Bayonet Lens Hood','',''],
      CLC1: ['img/4207-CL-C1-Lens-Case.png', '! CL-C1 Lens Case','',''],
      fiter82mm: ['img/2498_82mm_Circular_Polarizing_Filter_II.png', '82mm Circular Polarizing Filter II','','']
    },
    flashaccessories: {
      manual: ['img/manual_front.png', ' SB-910 User manual','',''],
      AS17: ['img/3072-AS-17-Flash-Unit-Coupler_front.png', ' AS-17 TTL Flash Unit Coupler for F3','',''],
      WRR10: ['img/27105-WR_R10.png', ' WR-R10 Wireless Remote Controller (transceiver)','',''],
      WRR10T10: ['img/WR-T10-R10-A10-27106.png', ' WR-R10/WR-T10/WR-A10 Wireless Remote Adapter Set','',''],
      WRA10: ['img/WR-A10-adapter.png', ' WR-A10 Wireless Remote Adapter','',''],
    },
    pointshootaccessories: {
      HolsterBag: ['img/17079-Nikon-Holster-Bag-front.png', ' Nikon Holster Bag','',''],
      EH73P: ['img/Nikon-EH-73P-Charging-Adapter.png', ' EH-73P Charging AC Adapter','',''],
      MLL7: ['img/25952-ML-L7-Bluetooth-Remote-Control.png', ' CF-CP3 Silicone Jacket (Orange)','',''],
      CFCP3orange: ['img/25963-H1617-Silicon-Jacket-Orange.png', ' SB-910 User manual','','']
    }
  }

  // 뎁스2 스와이퍼
  var depth2Swiper = new Swiper('.depth2-frame .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.depth2-frame .swiper-button-next',
      prevEl: '.depth2-frame .swiper-button-prev',
    }
  });

  // 3뎁스 스와이퍼
  var depth3frame = new Swiper('.depth3frame .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.depth3frame .swiper-button-next',
      prevEl: '.depth3frame .swiper-button-prev',
    },
    breakpoints: {
       1024: {
         slidesPerView: 3
       },
       767:{
         slidesPerView: 1
       }
     }
  });

  // 메인배너 스와이퍼
  var menu = [ 'CES 2019', 'D850', 'D3X', 'NIKORR']
  var swiper2 = new Swiper('.main-banner >.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span>'+ (menu[index])  + '</span>' + '</span>';
      },
    },
    navigation: {
      nextEl: '.main-banner .swiper-button-next',
      prevEl: '.main-banner .swiper-button-prev',
    },
  });

  // 프로덕트 스와이퍼
  var productSwiper = new Swiper('.product .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.product .swiper-button-next',
      prevEl: '.product .swiper-button-prev',
    },
    breakpoints: {
       1024: {
         slidesPerView: 3
       },
       767:{
         slidesPerView:2
       },
       500: {
         slidesPerView:1
       }
     }
  });

  // 배너 스와이퍼
  var bannerSwiper = new Swiper('.banner .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    breakpoints: {
       1024: {
         slidesPerView: 1
       }
     }
  });


  // 갤러리 스와이퍼
  var gallerySwiper = new Swiper('.gallery .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
    breakpoints: {
       1024: {
         slidesPerView: 1
       }
     }
  });

  // 뉴스 스와이퍼
  var swiper = new Swiper('.news .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.news .swiper-button-next',
        prevEl: '.news .swiper-button-prev',
      },
  });

  // 하트 아이콘 클릭시 색상 변경
  $('.icon-heart').click(function(){
    $(this).toggleClass('full');
  })

  $('.icon.icon-menu').on('click', function(e){
    e.preventDefault();
    $('header').css('transition','0s');
    if($('.depth2-frame').css('display') == "none"){ //보이게
      $('header').addClass('on');
      $('.gnb').css({'display':'block'})
      $('body').addClass('noScroll')
    }else{ //안보이게
      $('header').removeClass('on');
      $('.gnb').css({'display':'none'})
      $('body').removeClass('noScroll')
    }
    depth3frame.update();
    depth2Swiper.update();
  })

  // ============================ 장바구니 팝업

  var prcode = {
    Product1542:['<img src="img/1542_D810_front.png">', 'Product 1542', 'The Peak point of quality Nikon D810','STEEL BALCK', '-36.35 million pixels in effect <br>-High resolution image is realized by removing optical low pass filter <br>-Supports abundant generation and low noise ISO 64 commercial reduction', 'KRW 2,255,400', 'D810'],
    Product1557:['<img src="img/1557_D5_front.png">', 'Product 1557', 'Innovation for inspiration The Nikon D5.','STEEL BALCK', '- High-speed, high-precision 153 point AF system supports 12 fps high-speed speakers<br>- With 20.82 million pixel full-frame CMOS sensors<br>- 4K UHD ultra-high-definition video can be filmed', 'KRW 7,290,000', 'D5'],
    Product1581:['<img src="img/1581_D7500_front.png">', 'Product 1581', 'I AM AMAZING MOMENTS The Nikon D7500.','STEEL BALCK', '- With EXPED 5, ISO commercial sensitivity ISO 100 - 51200<br>- Supports 4K Full HD video shooting<br>- High-speed continuous shooting of up to approximately 8 fps, 50 frames.', 'KRW 1,880,000', 'D7500'],
    Product1585:['<img src="img/1585_D850_front.png">', 'Product 1585', 'I AM THE DIFFERENCE MAKER The Nikon D850.','STEEL BALCK', '- Employing 45.75 million pixels and reverse-survey Nikon FX format CMOS sensors<br>- Excellent video processing engine, equipped with EXPED 5.<Br>- Commercial sensitivity ISO 64 - 25600, Full Frame 4K UHD response<br>- Fast, continuous shooting at 7m* per second.', 'KRW 3,980,000', 'D850'],
    Product1591:['<img src="img/1591_Z7_front.png">', 'Product 1591', 'High pixel full-frame mirrorless Z 7 The Nikon Z 7.','STEEL BALCK', '- 45.75 million pixels of effective pixel. ISO 64-25600.<br>- High-resolution model Z 7.', 'KRW 3,699,000', 'Z7'],
    Product1689:['<img src="img/1689_FM10_front.png">', 'Product 1689', 'Pure Photography, once again, feels the depth of a picture.','STEEL BALCK', '- FX format full frame, 16.25 million pixel sensor and high sensitivity low noise quality<br>- 39 AF points, enabling fast, accurate, high-speed AF.<br>- Intuitively view/regulate figures at a glance', 'KRW 639,000', 'FM10'],
    Product2181:['<img src="img/2181_AF-S-DX-Zoom-NIKKOR-10-24mm-f-3.5-4.5G-ED_front.png">', 'Product 2181', 'AF DX Fisheye Nikkor ED 10.5mm f/2.8G','STEEL BALCK', 'Have an annular lens angle of 16mm calculated as 35mm<br> An annular lens exclusive to DX format', 'KRW 964,000', 'Nikkor ED 10.5mm'],
    Product4193:['<img src="img/4941_HB-45-Bayonet-Lens-Hood_front.png">', 'Product 4193', 'Bayonet Lens Hood.','STEEL BALCK', '-The HB-79 Bayonet Lens Hood is designed to keep flare from entering the lens when shooting.', 'KRW 49,900', 'Bayonet-Lens-Hood'],
    Product11858:['<img src="img/11858_Extended_Service_Coverage_2_Years_D800.png">', 'Product 11858', '2-Year Extended Service','2 YEARS', 'The Nikon 2-Year Extended Service Coverage (ESC) for the D800,', 'KRW 359,000', '2-Year Extended Service'],
    Product20066:['<img src="img/20066-AF-S-FISHEYE-NIKKOR-8-15mm.png">', 'Product 20066', 'AF S FISHEYE NIKKOR 8-15mm','STEEL BLACK', '- A zoom lens that can produce circular and diagonal angling effects<br>- Applies excellent resolution, description performance, and anti-seismic, anti-span and pollution structures,', 'KRW 1,560,000', 'FISHEYE NIKKOR 8-15mm']
  }

  $('.product .swiper-slide a').click(function(){
    $('body').css({'overflow-y':'hidden'})
    var code=$(this).parents('div.swiper-slide').data('code');
    $('.detail').removeClass('none')
    $('.detail').addClass('block')
    $('.black-layer').css({'display':'block'})
    $('.img-info, .detail-info').empty();
    $('.img-info').append(prcode[code][0])
    $('.detail-info').append(
      '<i></i>'+
      '<span>'+prcode[code][1]+'</span>'+
      '<h3>'+prcode[code][2]+'</h3>'+
      '<p>'+prcode[code][3]+'</p>'+
      '<p>'+prcode[code][4]+'</p>'+
      '<p><strong>'+prcode[code][5]+'</strong></p>'+
      '<span>Excl. Sales Tax</span>'+
      '<div>'+
      '  <button>Body Only</button>'+
      '  <button>Film maker\'s Kit</button>'+
      '</div>'+
      '<button class="addcart" data-code="'+code+'">ADD TO CART</button>'+
      '<button>Call to buy: [02] 555-7834</button>'+
      '<button>Find a store</button>'
    );
  })

  //.detail 태그 바로 밑에 닫기버튼으로 변경


  $('.detail').on('click', '.detail-close', function(){
    $('body').css({'overflow-y':'visible'})
    $('.black-layer').css({'display':'none'})
    $('.detail').removeClass('block')
    $('.detail').addClass('none')
  })


  var cartList={
    // Product1581:['이미지','제품명','색상','가격']
  };

  $('.detail-info').on('click','.addcart',function(){
    var cartcode=$(this).data('code');
    cartList[cartcode]=[];
    cartList[cartcode][0]=prcode[cartcode][0];//이미지
    cartList[cartcode][1]=prcode[cartcode][6];//제품명
    cartList[cartcode][2]=prcode[cartcode][3];//색상
    cartList[cartcode][3]=prcode[cartcode][5];//가격

    //console.log(cartList);

    $('.prlist').empty();
    for (var code in cartList) {
      $('.prlist').append(
        '<li data-code="'+cartcode+'">'
        +'<input type="checkbox" class="chkbx"><a href="">'
        + cartList[code][0] + '</a>'
        + '<dl>'
        + '<dt>' + cartList[code][1]  + '<select name="quantity"><option value="1">1</option> <option value="2">2</option><option value="3">3</option></select>' + '<span >Q\'ty</span>' +'</dt>'
        + '<dd>' + 'color : ' + cartList[code][2] + '</dd>'
        + '<dd class="price">' + cartList[code][3] + '</dd>'
        + '</dl>'
        + '</li>'
      )
    }
  })

  function total(){
    var total=0;
    $('.prlist li').each(function(){
      if($(this).find('.chkbx').is(":checked")){
        var price=Number($(this).find('.price').text().replace(/[^0-9]/g,''));
        var count=Number($(this).find('select').val());
        console.log(price, count);
        total+=price*count;
      }
    })
    console.log(total);
    total=total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('.total-price').text('KRW '+total);
  }

  $(document).on('change', '[name=quantity]',function(){
    total();
  })

  var priceSum = 0;
  var price = 0;
  $(document).on('click', '.chkbx', function(event){
    $('.allchk').prop('checked', false);
    itemNo = $('.chkbx:checked').parents('li').length
    $('.item-no').text('item' + itemNo)
    total();
  })
  var listprice = 0;
  $('.allchk').change(function(){
    if($(this).prop('checked')){
      $('.chkbx').prop('checked', true);
      total();
    }else{
      //console.log('모두체크해제')
      $('.chkbx').prop('checked', false);
      $('.total-price').text('KRW  0');
    }

  // $('.allchk').change(function(){
  //   if($('*.chkbx').is(":checked")==true){
  //     //alert('모든값은 0')
  //     $('.chkbx').prop('checked', false)
  //     priceSum = 0;
  //     $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').empty();
  //     $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').append(
  //       'KRW  ' + '0'
  //     );
  //     console.log('첫번째조건실행')
  //   }else if($('*.chkbx').is(":checked")==false){
  //     //alert('모든값의 합')
  //     $('*.chkbx').prop('checked', true)
  //     $('.chkbx').click(function(){
  //       $('.allchk').prop('checked', false)
  //     })
  //     numb = $('.chkbx:checked').length
  //     console.log(numb)
  //
  //     for (var i = 0; i < numb; i++) {
  //       listprice = parseInt($('.chkbx:checked').parents('li').eq(i).find('.price').text().replace(/[^0-9]/g,''));
  //       //alert(listprice)
  //       priceSum = parseInt(priceSum) + listprice
  //       //console.log(typeof(listprice));
  //       console.log(priceSum)
  //       $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').empty();
  //       $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').append(
  //         'KRW  ' + priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //       );
  //     }
  //     console.log('두번째조건실행')
  //   }
  //   if($('.allchk').is(":checked")==true && $('*.chkbx').prop('checked', true)){
  //     //alert('모든값의 합')
  //     $('*.chkbx').prop('checked', true)
  //     console.log($('.chkbx:checked').length);
  //     priceSum=0;
  //     for (var i = 0; i < $('.chkbx:checked').length; i++) {
  //       listprice = parseInt($('.chkbx:checked').parents('li').eq(i).find('.price').text().replace(/[^0-9]/g,''));
  //       //alert(listprice)
  //       priceSum = parseInt(priceSum) + listprice
  //       //console.log(typeof(listprice));
  //       console.log(priceSum)
  //       $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').empty();
  //       $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').append(
  //         'KRW  ' + priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //       );
  //     }
  //     // $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').empty();
  //     // $('.cart-wrapper > ul:nth-child(3) > li:nth-child(2) > p > span').append(
  //     //   'KRW  ' + priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //     // );
  //     console.log('세번째조건실행')
  //   }
  })


  priceSum = 0;
  price = 0;
  listprice = 0;
  $(document).on('click', '.del-sel', function(){
    $('.chkbx:checked').parents('li').remove();
    cartList = [];
    $('.total-price').text('KRW  0');
    priceSum = 0;
  })
  $(document).on('click', '.del-all' ,function(){
    $('.prlist').empty();
    cartList = [];
    $('.total-price').text('KRW  0');
    priceSum = 0;
  })

// ================미디어쿼리=========================

  $(window).resize(function(){

    windowW=$(window).width();

    if(windowW<768){ //================================== 모바일
      
      //페이지 리로드
      // $(window).bind('resize', function(e){
      //   this.location.reload(false);
      // });
      $('.gnb-back').addClass('desk')
      $(window).scroll(function(e){ // e, e.preventDefault
        e.preventDefault();
        var height = $(document).scrollTop();
        $('header').css('transition','0.3s ease');
        if(height>100){ // 100픽셀 이상 스크롤했을 때
          //--------------100픽셀 이상 스크롤, 스크롤된상태------------------
          //e.preventDefault();
          $('header').addClass('scroll');
          $('header').removeClass('on');
          $('.util-nav').addClass('scroll');
          $('.top-area > h1 > a > img').attr({'src':'img/nikon-logo-small.png'}).css({'margin-top':'20px'});
          //depth3frame.update();
          //depth2Swiper.update();
        }else{ // 스크롤 100픽셀 이하일 때
          //--------------100픽셀 이하 스크롤, 스크롤된상태------------------
          //e.preventDefault();
          $('header').removeClass('scroll');
          $('header').removeClass('scroll-on');
          $('.util-nav').removeClass('scroll')
          $('.top-area > h1 > a > img').attr({'src':'img/nikonlogo.png'}).css({'margin-top':'0px'});
          //depth3frame.update();
          //depth2Swiper.update();
        }
      })

    // 메인메뉴 클릭시 2뎁스 리스트 변경
    $('.gnb > li').click(function(){
      var key=$(this).children('a').text().toLowerCase().replace(/ /g, '');
      $(this)
      //console.log(key, depth2Menu[key]);
      $('.depth2-frame .swiper-wrapper').empty();
      for (var i in depth2Menu[key]) {
        $('.depth2-frame .swiper-wrapper').append(
          '<div class="swiper-slide"><a href="#">'+depth2Menu[key][i]+'</a></div>'
        )
      }
      depth3frame.update();
    });

    //2뎁스 메뉴 클릭시 텍스트 색상 변경
    $('.depth2 .swiper-slide').eq(0).find('a').css({'color':'#ffdd00'})
    $('.depth2').on('click', 'a',function(){
      $('.depth2 .swiper-slide').find('a').css({'color':'#000'})
      $(this).css({'color':'#ffdd00'})
    })

    // 2뎁스 메뉴 클릭시 3뎁스 리스트 변경.
    $('.depth2').on('click', 'a', function(){
      $('.depth2 a').removeClass('active')
      $(this).addClass('active')
      var key=$(this).text().toLowerCase().replace(/ /g, '');
      $('.depth3 .swiper-wrapper').empty();
      for (var i in depth3Menu[key]) {
        $('.depth3 .swiper-wrapper').append(
          '<div class="swiper-slide">' +
          '<img src="'+depth3Menu[key][i][0]+'">' +
          '<dl>' +
          '<dt>'+depth3Menu[key][i][1]+'</dt>' +
          '<dd>'+depth3Menu[key][i][2]+'</dd>' +
          '<dd>'+depth3Menu[key][i][3]+'</dd>' +
          '</dl>'+
          '</div>'
        )
      }
      depth3frame.update();
    });

    // 메인메뉴 클릭시 메뉴 아이콘 색상 변경
    var gnbclk = 0;
    $('.gnb > li').click(function(){
      depth2Swiper.update();
      var dep2idx = $(this).index()+1;
      ++gnbclk
      for(i=0; i<=3; i++){
        $('.gnb > li').eq(i).children('a').find('img').attr({'src':'img/depth2_icon'+ (i+1) +'.png'})
      }
      $(this).children('a').find('img').attr({'src':'img/depth2_icon'+dep2idx+'_1.png'});
      depth3frame.update();
    })

    // 장바구니 아이콘 클릭시 팝업 노출
    $('.icon-bag').on('click', function(e){
      e.preventDefault();
      $('.black-layer, .popup, .cart').show();
      $('.login-text').hide();
    })

    // 로그인 아이콘 클릭시 팝업 노출
    $('.icon-login').on('click', function(e){
      e.preventDefault();
      $('.black-layer, .popup, .login-text').show();
      $('.cart, .cart-btn').hide();
    })

    // 팝업 X버튼 클릭시 팝업 hide()
    $('.icon-close').click(function(e){
      e.preventDefault();
      $('.black-layer, .popup, .login-text, .cart').hide();
    })

    // 헤더 아이콘 메뉴 보이기
    $('.util-nav1 > li > a').removeClass('blind');

    //드랍다운 메뉴 보이기 / 숨기기
    var clk = 0;
    $('.drop-down > li').click(function(){
      ++clk;
      $(this).find('ul').css({'display':'block'})
      if(clk>1){
        clk=0;
        $(this).find('ul').css({'display':'none'})
      }
    })

    // 검색
    var srch = 0;
    $('.icon-search').click(function(e){
      e.preventDefault();
      ++srch;
      $('.search-wrapper').show();
      $('.search-form').show();
      if(srch>1){
        srch=0;
        $('.search-wrapper').hide();
        $('.search-form').hide();
      }
    });

    // 메뉴 아이콘 클릭시 X로 변경
    $('.icon-menu').click(function(){
      $(this).toggleClass('icon-close')
    })

    // 푸터 아코디언 메뉴
    $('.accordion a').off('click');
    $('.accordion a').click(function(e){
      e.preventDefault();
      $('.footer-accordion').stop().slideUp();
      $(this).next().stop().slideToggle();
    })

    $('.footer-top ul li a').click(function(){
      $('.footer-top ul li a').not(this).find('i').removeClass('click')
      $(this).find('i').toggleClass('click')
    })


  } else {        // =================================== 데스크탑
    $('.gnb-back').removeClass('desk')
    // 메인메뉴 클릭시 2뎁스 보이기
    $('.gnb > li > a').off('click').click(function(e){
      e.preventDefault();
      $('header').css('transition','0s');
      if($(this).parent('li').find('div').css("display") == "none"){
        $('header').addClass('on');
        $('.gnb-back').hide();
        $(this).parent('li').find('.gnb-back').show();
      }else{
        $('header').removeClass('on');
        $('.gnb-back').hide();
      }
      //DSLR CAMERA, DSLR LENS, DSLR ACCESSORIES

      $('.gnb-back > ul > li > a').removeClass('active');
      $('.gnb-back > ul > li:nth-child(1) > a').addClass('active');

      var menuIndex=$('.gnb > li > a').index(this);
      var key;
      if(menuIndex!=2){
        switch (menuIndex) {
          case 0: key='dslrcamera'; break;
          case 1: key='dslrlens'; break;
          case 3: key='dslraccessories'; break;
        }
         depth3frameUpdate(key);
       }
    })

    // 스크롤 발생시 헤더 크기 변경
    $(window).scroll(function(){
      var height = $(document).scrollTop();
      $('header').addClass('notrst')
      if(height>100){
        $('header').addClass('scroll')
        $('.top-area > h1 > a > img').attr({'src':'img/nikon-logo-small.png'}).css({'margin-top':'20px'})
        $('.util-nav').addClass('scroll')
      }else{
        $('header').removeClass('scroll')
        $('.top-area > h1 > a > img').attr({'src':'img/nikonlogo.png'}).css({'margin-top':'0px'})
        $('.util-nav').removeClass('scroll')
      }
    })

    // 장바구니 아이콘 클릭시 팝업 노출
    $('.icon-bag').click(function(){
      $('.login-text').hide();
      $('.black-layer').show();
      $('.popup').removeClass('hide');
      $('.popup').addClass('show').css({'height':'100%'})
      $('.cart, .cart-btn').show();
    })

    // 로그인 아이콘 클릭시 팝업 노출
    $('.icon-login').click(function(){
      $('.black-layer, .login-text').show();
      $('.popup').removeClass('hide');
      $('.popup').addClass('show').css({'height':'630px'})
      $('.cart, .cart-btn').hide();
    })

    // 팝업창 내 x버튼 클릭시 팝업 숨기기
    $('.icon-close').click(function(e){
      e.preventDefault();
      $('.black-layer, .login-text, .cart, .cart-btn').hide();
      $('.popup').addClass('hide');
    })

    // 검색 창
      var srcn = 0;
      $('.icon-search').click(function(){
        ++srcn;
        $('.search-wrapper').animate({'left':'0px'})
        if(srcn>1){
          srcn=0;
          $('.search-wrapper').animate({'left':'-200px'})
        }
      });
    }

    // 2뎁스 메뉴 클릭시 색상 변경
    $('.gnb-back > ul > li > a').off('click').click(function(){
      $('.gnb-back > ul > li > a').removeClass('active');
      $(this).addClass('active');

      var key=$(this).text().toLowerCase().replace(/ /g, '');
      console.log(key)
      depth3frameUpdate(key);
    })

    function depth3frameUpdate(key){
      $('.depth3 .swiper-wrapper').empty();
      for (var i in depth3Menu[key]) {
        //console.log(depth3Menu[key][i][0])
        $('.depth3 .swiper-wrapper').append(
          '<div class="swiper-slide">' +
          '<img src="'+depth3Menu[key][i][0]+'">' +
          '<dl>' +
          '<dt>'+depth3Menu[key][i][1]+'</dt>' +
          '<dd>'+depth3Menu[key][i][2]+'</dd>' +
          '<dd>'+depth3Menu[key][i][3]+'</dd>' +
          '</dl>'+
          '</div>'
        )
      }
      depth3frame.update();
    }


  }).resize(); //resize

});
