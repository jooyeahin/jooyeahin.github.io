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
      $('header h1 img').attr({'src':'img/AllegorithmicAdobeWhite_1.png'})
      $('header > div > ul > li > a').removeClass('scroll')
      $('header > div > ul').removeClass('scroll')
      $('header > div > ul > li button').removeClass('scroll')
      $('header > div > ul > li:last-child img').attr({'src':'img/person.png'})
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


  $(window).scroll(function(){
  	var windowH = $(window).scrollTop();
    console.log(windowH)

  	if(windowH>2318){
      $('.texture-back').css({'display':'block'});
    }else{
  		$('.texture-back').css({'display':'none'});
  	}
  	var texturetop = windowH-2662;
  	if(windowH>2318){
  			$('.texture-back > li:eq(0)').css({'height':(980-texturetop)+'px'})
  			$('.texture-back > li:eq(1)').css({'height':(1324-texturetop)+'px'})
  			$('.texture-back > li:eq(2)').css({'height':(1668-texturetop)+'px'})
  			$('.texture-back > li:eq(3)').css({'height':(2012-texturetop)+'px'})
  	}

    if(windowH>4660){
      $('.texture-back').hide();
      $('.background2 > img').show();
    }else{
      $('.background2 > img').hide();
    }

    if(windowH>6449){
      $('.background2 > img').hide();
      $('.background3 > img').show();
    }else{
      $('.background3 > img').hide();
    }

    var texturetop1 = windowH-9719;
    if(windowH>9377){
      $('.background3 > img').hide();
      $('.node-back').show();
      $('.node-back > li:eq(0)').css({'height':(980-texturetop1)+'px'})
			$('.node-back > li:eq(1)').css({'height':(1324-texturetop1)+'px'})
			$('.node-back > li:eq(2)').css({'height':(1668-texturetop1)+'px'})
			$('.node-back > li:eq(3)').css({'height':(2012-texturetop1)+'px'})
    }else{
      $('.node-back').hide();
    }


    if(windowH>11781){
      $('.node-back').hide();
      $('.background4 > img').show();
    }else{
      $('.background4 > img').hide();
    }
  })
});
