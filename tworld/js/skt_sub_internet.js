 $( document ).ready( function() {
        $( window ).scroll( function() {
          
			
			if ( $( window ).scrollTop() > 60 ) {
              
            $( '#menu_sub' ).css( "position", "fixed" ).css( "top", "30px" ).css( "z-index", "4" );
            $("#tlogo").css("display", "block")
			$("nav").hide();
          } else {
            $( '#menu_sub' ).css( "position", "absolute" ).css( "top", "90px" );
               $("#tlogo").css("display", "none")
			  $("nav").show();
          }
        });
      });
