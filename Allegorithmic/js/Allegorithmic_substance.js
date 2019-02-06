$(document).ready(function(){
  $(window).scroll(function(){
    var windowH = $(document).scrollTop();
    //console.log(windowH)
    if(windowH>90){
      $('header').addClass('scroll')
      $('header h1').addClass('scroll')
      $('header h1 img').attr({'src':'img/AllegorithmicAdobeWhite.png'})
      $('header > div > ul > li > a').addClass('scroll')
      $('header > div > ul').addClass('scroll')
      $('header > div > ul > li button').addClass('scroll')
      $('header > div > ul > li:last-child img').attr({'src':'img/person_1.png'})
      $('header > div > ul > li:last-child img').addClass('scroll')
    }else{
      $('header').removeClass('scroll')
      $('header h1').removeClass('scroll')
      $('header h1 img').attr({'src':'img/AllegorithmicAdobeWhite.png'})
      $('header > div > ul > li > a').removeClass('scroll')
      $('header > div > ul').removeClass('scroll')
      $('header > div > ul > li button').removeClass('scroll')
      $('header > div > ul > li:last-child img').attr({'src':'img/person_1.png'})
      $('header > div > ul > li:last-child img').removeClass('scroll')
    }
  });

  var footerIcon = {
    iconArray40: ['linkedin_white.jpg', 'linkedin_black.jpg'],
    iconArray41: ['twitch_white.jpg', 'twitch_black.jpg'],
    iconArray50: ['youtube_white.jpg', 'youtube_black.jpg'],
    iconArray51: ['sketchfab_white.jpg', 'sketchfab_black.jpg'],
    iconArray60: ['facebook_white.jpg', 'facebook_black.jpg'],
    iconArray61: ['twitter_white.jpg', 'twitter_black.jpg'],
    iconArray70: ['pinterest_white.jpg', 'pinterest_balck.jpg']
  }

  $('footer > div > ul > li a').mouseover(function(){
    var snsidx = $(this).parents('li.sns').index();
    var liidx = $(this).parents('li').index();
    console.log(liidx)
    $(this).find('img').attr({'src':'img/' + footerIcon['iconArray' + snsidx + liidx][0] })
  })
  $('footer > div > ul > li a').mouseout(function(){
    var snsidx = $(this).parents('li.sns').index();
    var liidx = $(this).parents('li').index();
    $(this).find('img').attr({'src':'img/' + footerIcon['iconArray' + snsidx + liidx][1] })
  })

});
