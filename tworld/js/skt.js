/*

var cnt=0;
var cntend=5;
var w=1903
$(function(){
   $("#leftarrow").click(function(){
       cnt=cnt+1;
        $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 300);
       if(cnt > cntend)
       { 
           cnt=0;
        $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 300); 
        }
              
   });
});
*/


$(function()
  {
    $(".over").mouseover(function(){
        $("#whiteopa").show();
    });
    $(".over").mouseout(function(){
        $("#whiteopa").hide();
    });
});






$(function(){
    var cnt=0;
    var cntend=5;
    var w=1903;
    
    
   $("#rightarrow").click(function(){
       cnt++;
       
        if (cnt>cntend)
            {
                cnt=0;
                $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 500);
            }
       $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 300);
        });
    
    
    $("#leftarrow").click(function(){
       cnt--;
       
        if (cnt<0)
            {
                cnt=5;
                $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 500);
            }
       $("#bannreframe").animate({"margin-left":-(cnt*w)+"px"}, 300);
        });
    
    $("#navmenu ul li").click(function(){
        var no=$(this).index()
        //alert($(this).index());
        if (no<6)
            {
                $("#bannreframe").animate({"margin-left":-(no*w)+"px"}, 300);
            }
        
    });

    
});



$(function()
  {
    var seccnt=0;
    var seccntend=3;
    var secw=1200;
 
    $("#sec_rightarrow").click(function(){
       seccnt++;
       
        if (seccnt>seccntend)
            {
                seccnt=0;
                $("#sec_bann ul").animate({"margin-left":-(seccnt*secw)+"px"}, 500);
            }
       $("#sec_bann ul").animate({"margin-left":-(seccnt*secw)+"px"}, 300);
        });
    
    $("#sec_leftarrow").click(function(){
       seccnt--;
       
        if (seccnt<0)
            {
                seccnt=3;
                $("#sec_bann ul").animate({"margin-left":-(seccnt*secw)+"px"}, 500);
            }
       $("#sec_bann ul").animate({"margin-left":-(seccnt*secw)+"px"}, 300);
        });
    
   
});






/*
$("#sec_rightarrow").click(function(){
       cnt2--;
       
        if (cnt2>cnt2end)
            {
                cnt2=0;
                $("#sec_bann ul").animate({"margin-left":-(cnt2*w2)+"px"}, 500);
            }
       $("#sec_bann ul").animate({"margin-left":-(cnt2*w2)+"px"}, 300);
        });

*/






var count=1;

function add()
{
   main_bann1.style.display="none";
    main_bann2.style.display="none";
    main_bann3.style.display="none";
    main_bann4.style.display="none";
    main_bann5.style.display="none";
    main_bann6.style.display="none";
    if(count<6)
        ++count;
    else
        count=1;
   // alert(count);
     switch (count)
       {
           case 1:main_bann1.style.display="block";break;
           case 2:main_bann2.style.display="block";break;
           case 3:main_bann3.style.display="block";break;
           case 4:main_bann4.style.display="block";break;
           case 5:main_bann5.style.display="block";break;
            case 6:main_bann6.style.display="block";break;
       }
}


function sub()
{
    main_bann1.style.display="none";
    main_bann2.style.display="none";
    main_bann3.style.display="none";
    main_bann4.style.display="none";
    main_bann5.style.display="none";
    main_bann6.style.display="none";
    if(count>1)
        --count;
    else
        count=6;
   // alert(count);
     switch (count)
       {
           case 1:main_bann1.style.display="block";break;
           case 2:main_bann2.style.display="block";break;
           case 3:main_bann3.style.display="block";break;
           case 4:main_bann4.style.display="block";break;
           case 5:main_bann5.style.display="block";break;
            case 6:main_bann6.style.display="block";break;
       }
}



var sw=0;

function move(js)
{
    
   sw=js;
    switch(js)
        {
            case 1: move1.style.marginTop="-50px";break;                    
            case 2: move2.style.marginTop="-50px";break;
                    
            case 3: move3.style.marginTop="-50px";break;
                  
            case 4: move4.style.marginTop="-50px";break;
        }
    if(js==1)
        {
            move2.style.marginTop="0px";
            move3.style.marginTop="0px";
            move4.style.marginTop="0px";
        }
    else if(js==2)
       {
            move1.style.marginTop="0px";
            move3.style.marginTop="0px";
            move4.style.marginTop="0px";
        }
     else if(js==3)
       {
            move1.style.marginTop="0px";
            move2.style.marginTop="0px";
            move4.style.marginTop="0px";
        }
    else if(js==4)
       {
            move1.style.marginTop="0px";
            move2.style.marginTop="0px";
            move3.style.marginTop="0px";
        }
}




function mouseOver(js)
{
   
     switch(js)
        {
            case 1: move1.style.marginTop="-50px";break;
            case 2: move2.style.marginTop="-50px";break;
            case 3: move3.style.marginTop="-50px";break;
            case 4: move4.style.marginTop="-50px";break;
        }
}
function mouseOut(js)
{
    if(sw==0)
        {            
           move1.style.marginTop="0px";
            move2.style.marginTop="0px";
            move3.style.marginTop="0px";
            move4.style.marginTop="0px";
        }
    if(sw==1)
        {            
           move2.style.marginTop="0px";
            move3.style.marginTop="0px";
            move4.style.marginTop="0px";
        }
    else if(sw==2)
        {            
                    
           move1.style.marginTop="0px";
            move3.style.marginTop="0px";
            move4.style.marginTop="0px";
       
        }
    else if(sw==3)
        {            
                    
           move1.style.marginTop="0px";
            move2.style.marginTop="0px";
            move4.style.marginTop="0px";
       
        }
    else if(sw==4)
        {            
                    
           move1.style.marginTop="0px";
            move3.style.marginTop="0px";
            move2.style.marginTop="0px";
       
        }
}








/*

function move(js)
{
    select1.style.display="none";
    select2.style.display="none";
    select3.style.display="none";
    select4.style.display="none";
    switch(js)
        {
            case 1:select1.style.display="block"; break;
            case 2:select2.style.display="block"; break;
            case 3:select3.style.display="block"; break;
            case 4:select4.style.display="block"; break;
        }
}
*/


$(function()
 {
    $("#move1").click(function()
    {
        $("#select1").show();
        $("#select2").hide();
        $("#select3").hide();
        $("#select4").hide();
        
    })
    $("#move2").click(function()
    {
        $("#select2").show();
        $("#select1").hide();
        $("#select3").hide();
        $("#select4").hide();
    })
    $("#move3").click(function()
    {
        $("#select3").show();
        $("#select2").hide();
        $("#select1").hide();
        $("#select4").hide();
    })
    $("#move4").click(function()
    {
        $("#select4").show();
        $("#select2").hide();
        $("#select3").hide();
        $("#select1").hide();
    })
    
    
});





var previous = this.value;
var sw2;
$(function()
 {
    $(".move").css("cursor", "pointer")
    $(".move").click(function()
    {
        
        $(this).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
               .css('box-shadow', '15px 15px 150px #444');
        sw2=$(this).index()+1;
    });
    $(".move").mouseover(function()
    {
        
        $(this).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
        
    });
    /*
    $(".move").mouseout(function()
    {
         $(".move").css("backgroundColor", "#545271").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    */
    $(".move").mouseout(function()
    {
         $("#move1").css("backgroundColor", "#4e4c69").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move1"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    $(".move").mouseout(function()
    {
         $("#move2").css("backgroundColor", "#545271").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    $(".move").mouseout(function()
    {
         $("#move3").css("backgroundColor", "#605e7f").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    $(".move").mouseout(function()
    {
         $("#move4").css("backgroundColor", "#6e6c8c").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    
    
    
    
    
    
    $(function(){
        
        var btn;
        
        $("#button ul li").click(function(){
            
            $(".buttonimg").css("margin-left", "-35px");
            $(this).find("img").css("margin-left", "0px");
            btn=$(this).index()+1;
        });
        $("#button ul li").mouseover(function(){
            
            $(".buttonimg").css("margin-left", "-35px");
            $(this).find("img").css("margin-left", "0px");
            $("#move"+btn).find("img").css("margin-left", "0px");
        });
        $("#button ul li").mouseout(function(){
            
            $(".buttonimg").css("margin-left", "-35px");
            $(this).find("img").css("margin-left", "-35px");
            $("#move"+btn).find("img").css("margin-left", "0px");
            
        });
        
      
    });
    
    
    


    /*
    $(".move").mouseover(function()
    {
        
        $(this).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
               .css('box-shadow', '15px 15px 150px #444');
        
    });
    $(".move").mouseout(function()
    {
         $(".move").css("backgroundColor", "#545271").css("color", "white")
                  .css('box-shadow', 'none');
         $("#move"+sw2).css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
               .css('box-shadow', '15px 15px 150px #444');
    });
  */
    
/*    
   
    $("#move1").click(function()
    {
        $("#move1").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
        $("#move").css("backgroundColor", "#545271").css("color", "white");
        $("#move3").css("backgroundColor", "#605e7f").css("color", "white");
        $("#move4").css("backgroundColor", "#6e6c8c").css("color", "white");
    });
    
    $("#move2").click(function()
    {
        $("#move1").css("backgroundColor", "#4e4c69").css("color", "white");
        $("#move2").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
        $("#move3").css("backgroundColor", "#605e7f").css("color", "white");
        $("#move4").css("backgroundColor", "#6e6c8c").css("color", "white");
    });
    
    $("#move3").click(function()
    {
        $("#move1").css("backgroundColor", "#4e4c69").css("color", "white");
        $("#move2").css("backgroundColor", "#545271").css("color", "white");
        $("#move3").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
        $("#move4").css("backgroundColor", "#6e6c8c").css("color", "white");
    });
    
    $("#move4").click(function()
    {
        $("#move1").css("backgroundColor", "#4e4c69").css("color", "white");
        $("#move2").css("backgroundColor", "#545271").css("color", "white");
        $("#move3").css("backgroundColor", "#605e7f").css("color", "white");
        $("#move4").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444');
    });
    
    
    
    
    
    $("#move1").mouseover(function()
     {
        $("#move1").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
        });
    $("#move2").mouseover(function()
     {
        $("#move2").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
      });
    $("#move3").mouseover(function()
     {
        $("#move3").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
      });
    $("#move4").mouseover(function()
     {
        $("#move4").css("backgroundColor", "white").css("color", "#555").css('box-shadow', '15px 15px 150px #444')
      });
    
    
    
    
    
    
     $("#move1").mouseout(function()
     {
         $("#move").css("backgroundColor", "#4e4c69");
         $("#move1").css("backgroundColor", "white").css("color", "black").css('box-shadow', 'none')
      });
    $("#move2").mouseout(function()
     {
         $("#move").css("backgroundColor", "#4e4c69");
        $("#move2").css("backgroundColor", "white").css("color", "black").css('box-shadow', 'none')
      });
    $("#move3").mouseout(function()
     {
        $("#move3").css("backgroundColor", "#605e7f").css("color", "white").css('box-shadow', 'none')
      });
    $("#move4").mouseout(function()
     {
        $("#move4").css("backgroundColor", "#6e6c8c").css("color", "white").css('box-shadow', 'none')
      });
*/

        $("#playbtn1").click(function(){
            
            $("#playbtn1").hide();
            $("#playbtn2").show();
        });
        $("#playbtn2").click(function(){
            
            $("#playbtn2").hide();
            $("#playbtn1").show();
        });
});












/*
var secbanncount=1;

function secbannSub()
{
    sec_bann1.style.display="none";
    sec_bann2.style.display="none";
    sec_bann3.style.display="none";
    sec_bann4.style.display="none";
    if(secbanncount>1)
        --secbanncount;
    else
        secbanncount=4;
    switch (secbanncount)
        {
            case 1: sec_bann1.style.display="block"; break;
            case 2: sec_bann2.style.display="block"; break;
            case 3: sec_bann3.style.display="block"; break;
            case 4: sec_bann4.style.display="block"; break;
        }
}



function secbannAdd()
{
    sec_bann1.style.display="none";
    sec_bann2.style.display="none";
    sec_bann3.style.display="none";
    sec_bann4.style.display="none";
    if(secbanncount<4)
        ++secbanncount;
    else
        secbanncount=1;
    switch (secbanncount)
        {
            case 1: sec_bann1.style.display="block"; break;
            case 2: sec_bann2.style.display="block"; break;
            case 3: sec_bann3.style.display="block"; break;
            case 4: sec_bann4.style.display="block"; break;
        }
}

*/



/*
function btn(js){
    main_bann1.style.display="none";
    main_bann2.style.display="none";
    main_bann3.style.display="none";
    main_bann4.style.display="none";
    main_bann5.style.display="none";
    main_bann6.style.display="none";
    switch(js)
        {
            case 1: main_bann1.style.display="block"; break;
            case 2: main_bann2.style.display="block"; break;
            case 3: main_bann3.style.display="block"; break;
            case 4: main_bann4.style.display="block"; break;
            case 5: main_bann5.style.display="block"; break;
            case 6: main_bann6.style.display="block"; break;
        }
}
*/



/*
$(function()
  {
    $("#playbtn2").click(function()
    {
        
            auto();
            var rollingId;
            function auto() {
                
                rollingId = setInterval(function(){ start(); }, 100);
                            };
            function start() {
                for (i=0; i<=5; i++){
                $("#bannreframe").animate({"margin-left":-(1903*i)+"px"}, 300);
                };
            };
           
    });
});

*/


/*
var strA = new Array();
  strA[0] = 0;
  strA[1] = 1903;
  strA[2] = 3806;
  strA[3] = 5718;
  strA[4] = 7612;
  strA[5] = 9515;

$(function()
{
  $("#playbtn1").click(function()
    {
        alert("ok")
	  	setInterval("show()". 3000);
        
	  
	  	function show()
        {
            
			count++;
            	
            $("#bannreframe").animate({"margin-left":-(strA[count]*1903)+"px"});
				
		};
  });
});
*/

/*
var autocnt = 0;
			autocnt++;
			if(count>5){
				count=0;
				$("#bannreframe").stop().animate({"margin-left":"0px"}, 2000);
			};
			$("#bannreframe").stop().animate({"margin-left":-(1903*autocnt)+"px"}, 2000);
		};
*/




/*
$(function()
  {
	var count=0;
	$("#playbtn2").click(function()
	{
		setInterval(function(){show()}, 4000);
		
		function show(){
			count=count+1;
			if(count>5){
				count=0;
				$("#bannreframe").stop().animate({"margin-left":-(1903*count)+"px"}, 300);
			}
			
			$("#bannreframe").stop().animate({"margin-left":-(1903*count)+"px"}, 300);
		};
	});
	
});
*/


$(function()
  {
	var count=0;
	$("#playbtn2").click(function()
	{
		var timer=setInterval(function(){show()}, 4000);
		$("#playbtn1").click(function()
			{
				clearInterval(timer);
			});
		
	});
	
});

function show(){
			count=count+1;
			if(count>5){
				count=0;
				$("#bannreframe").stop().animate({"margin-left":-(1903*count)+"px"}, 300);
			}
			
			$("#bannreframe").stop().animate({"margin-left":-(1903*count)+"px"}, 300);
			
		};










