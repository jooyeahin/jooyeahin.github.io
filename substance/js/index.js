$(document).ready(function(){
  var newsSwiper = new Swiper('.tech-news > .swiper-container', {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.tech-news > .swiper-button-next',
        prevEl: '.tech-news > .swiper-button-prev',
      }
    });
  var commSwiper = new Swiper('.community > .swiper-container', {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.community > .swiper-button-next',
        prevEl: '.community > .swiper-button-prev',
      }
    });
  var storiesSwiper = new Swiper('.stories > .swiper-container', {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.stories > .swiper-button-next',
        prevEl: '.stories > .swiper-button-prev',
      }
    });
  var learnSwiper = new Swiper('.learn > .swiper-container', {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.learn > .swiper-button-next',
        prevEl: '.learn > .swiper-button-prev',
      }
    });


  $(window).scroll(function(e){
    e.preventDefault();
    var height = $(document).scrollTop();
    //console.log(height);
    if(height>800){ $('header').addClass('scroll') }
    else{ $('header').removeClass('scroll') }
  })

  var clk = 0;
  $('a.show').on('click', function(){
    ++clk
    // var newsSwiper = new Swiper($(this).parents('article').children('div.swiper-container'), { initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
    //   nextEl: $(this).parents('article').children('div.swiper-button-next'), prevEl: $(this).parents('article').children('div.swiper-button-prev') }
    // });
    $(this).parents('article').children('span').find('a').removeClass('blind')
    $(this).text('SEE LESS')
    $(this).parents('article').children('div.swiper-button-next').hide();  $(this).parents('article').children('div.swiper-button-prev').hide();
    if(clk>1){
      clk=0;
      $(this).text('SEE MORE')
      $(this).parents('article').children('span').find('a').addClass('blind')
      $(this).parents('article').children('div.swiper-button-next').show();  $(this).parents('article').children('div.swiper-button-prev').show();
    }
    $(this).parents('article').children('div.news-list').slideToggle();
  })

  $('.footer-sns > li > a').hover(function(){
    $(this).toggleClass('hover');
  })
  var moblieMenu = 0;
  $('.menu-bar').on('click', function(){
    ++moblieMenu
    $('body').css({'overflow':'hidden'})
    $('.mobile-menu').show();
    if(moblieMenu>1){
      $('.mobile-menu').hide();
      $('body').css({'overflow':'initial'})
      moblieMenu = 0;
    }
  })
  // 미디어쿼리
  $(window).resize(function(){
    windowW=$(window).width();
    if(windowW>1200){
      var newsSwiper = new Swiper('.tech-news > .swiper-container', {
        initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var commSwiper = new Swiper('.community > .swiper-container', {
        initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var storiesSwiper = new Swiper('.stories > .swiper-container', {
        initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var learnSwiper = new Swiper('.learn > .swiper-container', {
        initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
        $('a.show').on('click', function(){
          var newsSwiper = new Swiper($(this).parents('article').children('div.swiper-container'), { initialSlide: 0, slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
            nextEl: $(this).parents('article').children('div.swiper-button-next'), prevEl: $(this).parents('article').children('div.swiper-button-prev') }
          });
        })
    }
    if(windowW<1200){

      var newsSwiper = new Swiper('.tech-news > .swiper-container', {
        initialSlide: 0, slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var commSwiper = new Swiper('.community > .swiper-container', {
        initialSlide: 0, slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var storiesSwiper = new Swiper('.stories > .swiper-container', {
        initialSlide: 0, slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var learnSwiper = new Swiper('.learn > .swiper-container', {
        initialSlide: 0, slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
        $('a.show').on('click', function(){
          var newsSwiper = new Swiper($(this).parents('article').children('div.swiper-container'), { initialSlide: 0, slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
            nextEl: $(this).parents('article').children('div.swiper-button-next'), prevEl: $(this).parents('article').children('div.swiper-button-prev') }
          });
        })
    }
    if(windowW<1024){
      var newsSwiper = new Swiper('.tech-news > .swiper-container', {
        initialSlide: 0, slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var commSwiper = new Swiper('.community > .swiper-container', {
        initialSlide: 0, slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var storiesSwiper = new Swiper('.stories > .swiper-container', {
        initialSlide: 0, slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var learnSwiper = new Swiper('.learn > .swiper-container', {
        initialSlide: 0, slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
        $('a.show').on('click', function(){
          var newsSwiper = new Swiper($(this).parents('article').children('div.swiper-container'), { initialSlide: 0, slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
            nextEl: $(this).parents('article').children('div.swiper-button-next'), prevEl: $(this).parents('article').children('div.swiper-button-prev') }
          });
        })
    }
    if(windowW<600){
      var newsSwiper = new Swiper('.tech-news > .swiper-container', {
        initialSlide: 0, slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var commSwiper = new Swiper('.community > .swiper-container', {
        initialSlide: 0, slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var storiesSwiper = new Swiper('.stories > .swiper-container', {
        initialSlide: 0, slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
      var learnSwiper = new Swiper('.learn > .swiper-container', {
        initialSlide: 0, slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
          nextEl: $(this).parents('article').children('div.swiper-button-next'),
          prevEl: $(this).parents('article').children('div.swiper-button-prev')
        }
        });
        $('a.show').on('click', function(){
          var newsSwiper = new Swiper($(this).parents('article').children('div.swiper-container'), { initialSlide: 0, slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, navigation: {
            nextEl: $(this).parents('article').children('div.swiper-button-next'), prevEl: $(this).parents('article').children('div.swiper-button-prev') }
          });
        })
    }


  }).resize();
});
