$(document).ready(function(){

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
    
  }).resize();
});
