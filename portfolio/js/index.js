$(document).ready(function(){
  //스크롤 위치에 따른 헤더 변화
  $(window).scroll(function(){
    var height = $(document).scrollTop();
    //console.log(height)
    if(height>100){
      $('header').addClass('scroll');
      $('header h1').addClass('scroll');
    }else{
      $('header').removeClass('scroll');
      $('header h1').removeClass('scroll');
    }

    if(height>415){
      $('.portfolio-pic ul li').addClass('scroll')
    }
  })

  // 페이지 로드 직후
  window.onload = function(){
    $('.main-banner > div > h2:nth-child(1)').addClass('onload');
    function h22onload(){
      $('.main-banner > div > h2:nth-child(2)').addClass('onload');
    };
    setTimeout(h22onload, 1000);
    function h2onload(){
      $('.main-banner > div > div').addClass('onload');
    };
    setTimeout(h2onload, 1700);
  }

  // a태그 href속성 제거 및 스크롤 이동
  $(".menubar").find('a').removeAttr("href");
  $('.menubar > li').eq(0).on('click', function(){
    $('html').animate( { scrollTop : 0 }, 500 );
  })
  $('.menubar > li').eq(1).on('click', function(){
    $('html').animate( { scrollTop : 0 }, 500 );
  })
  $('.menubar > li').eq(2).on('click', function(){
    $('html').animate( { scrollTop : 910 }, 500 );
  })
  $('.menubar > li').eq(3).on('click', function(){
    $('html').animate( { scrollTop : 1614 }, 500 );
  })


  $('.portfolio-pic ul li:lt(3)').show();
    var items =  6;
    var shown =  3;
    var three = 3;
    $('.more').click(function () {
      console.log('more')
      shown = $('.portfolio-pic ul li:visible').length+3;
      if(shown <= items) {
        $('.portfolio-pic ul li:lt('+shown+')').show(300);
      } else if(shown > items){
        $('.portfolio-pic ul li').hide();
        $('.portfolio-pic ul li:lt('+three+')').show(300);
      }
    });

  $('.title-wrapper li a').click(function(){
    if($(this).parents('li').index()===0){
      $('.portfolio-pic li').show();
    }else if($(this).parents('li').index()===1){
      $('.portfolio-pic li').hide();
      $('.desktop').show();
    }else if($(this).parents('li').index()===2){
      $('.portfolio-pic li').hide();
      $('.mobile').show();
    }else if($(this).parents('li').index()===3){
      $('.portfolio-pic li').hide();
      $('.responsive').show();
    }
  })
})
