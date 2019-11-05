$(document).ready(function(){

  // 190614 화면 상단 스크롤 계싼
  $(window).scroll(function(){
    var scrollH = $(document).scrollTop();
    console.log(scrollH);
    if(scrollH > 209){
      $('.lnb_area').addClass('fixed')
    }else{
      $('.lnb_area').removeClass('fixed')
    }
  })

  // GNB 2뎁스 클릭시 3뎁스 열림/닫힘
  var dep3Idx = 0;
  $('.dep2 > ul > li > a').on('click', function(){
    ++dep3Idx;
    $(this).children('i').addClass('minus');
    $(this).next('.dep3').addClass('open')
    if(dep3Idx>1){
      dep3Idx = 0;
      $(this).children('i').removeClass('minus');
      $(this).next('.dep3').removeClass('open')
    }
  })

  // main banner initializing
  var swiper = new Swiper('.main_banner .swiper-container', {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });

  var bannPlay = 0;
  $('.main_banner .swiper-container').on('click', '.play_btn', function(){
    ++bannPlay;
    $(this).addClass('pause');
    swiper.autoplay.stop();
    if(bannPlay > 1){
      bannPlay = 0;
      $(this).removeClass('pause');
      swiper.autoplay.start();
    }
  });

  $('.dep1').hover(function(){
    $('#GNB').toggleClass('hover');
    // $('.dep1').parents('li').removeClass('hover')
    $(this).toggleClass('hover');
  });
  $('.dep2 a').hover(function(){
    $(this).parents('div').toggleClass('atv');
    $(this).toggleClass('atv');
  });


  $('.lnb_dep').hover(function(){
    $('.lnb').toggleClass('hover');
    $(this).toggleClass('hover');
    $(this).children('ul').toggleClass('hover');
  });
  $('.lnb_dep2 a').hover(function(){
    $(this).toggleClass('atv');
  });

  //join_final 화살표 클릭시
  //info_mng 화살표 클릭시
  $('.agree_arrow').click(function(){

    $(this).parent('.cont_title').next('.cont_text').toggleClass('open');
    $(this).toggleClass('up');

    $(this).parent('li').next('li').toggleClass('open');
  });






  //팝업

$.fn.btnPop = function(){
 $.each(this, function(i,v){
		var s = $(v).attr("href");
        $(s).popup('show');
    });
};

$(function(){
$('.pop_btn').click(function(){
        $(this).btnPop();
        return false;
    });
});



/*사진 업로드 이미지처리*/

$(function () {
$('#file-upload').click(function (e) {
e.preventDefault();
$('#profile').click();
});
});


$(function(){
	$('.login_form ul li').click(function(){
		$('.login_form ul li').removeClass('on');
		$(this).addClass('on');
		$('.login_input').removeClass('on');
		var $href = $(this).children('a').attr('href');
		$('.login_input'+$href).addClass('on');

		return false;
	});
});




});


function pop_close(){
$('.popup').popup('hide');
}

// 190624 추가분 접수변경 페이지 엑셀 업로드 버튼 동작
$(function () {
  $('.excel_upload').click(function (e) {
    e.preventDefault();
    $('#excelUpBtn').click();
  });
});

// 190626 추가분 단체 엑셀 페이지 엑셀 업로드 버튼 동작
$(function () {
  $('.excUp').click(function (e) {
    e.preventDefault();
    $('#excInput').click();
  });
});
