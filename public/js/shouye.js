$(function(){

    $('.a-1').click(function(){
        $('.scroll-colse').hide();
        // $('.content').animate({top:'+30px'},'fast');
        $('.content').css('padding-top','0.95rem');
    });


    



	var oDiv = $('.slide-banner')
	var oUlBig =$('.slide-banner .oul');
    var aBigLi =$('.oul li');
    var oDivSmall =$('.slide-banner .smal');
    var aLiSmall = $('.smal li');
    var now = 0;
    aLiSmall.each(function(e){
     	$(this).click(function(){
     		now=e;
	     	tab();
    	});
    });
   var timer = setInterval(function(){
    	now++;
    	if(now<8){
    		tab();
    	}else{
    		now=0;
    		tab();
    	}
    }, 2000);
    oDiv.mouseover(function() {
        clearInterval(timer);
    });
    oDiv.mouseout(function() {
        timer = setInterval(function(){
    	now++;
    	if(now<8){
    		tab();
    	}else{
    		now=0;
    		tab();
    	}
    }, 2000);
    });
    function tab(){
    	aLiSmall.each(function(){
     		aLiSmall.removeClass();
     	});
     	$('.smal li:eq('+now+')').addClass('thistital');
     	startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth));
    }
    function startMove(obj, att, add) {
	    clearInterval(obj.timer)
	    obj.timer = setInterval(function() {
	        var cutt = Math.round(parseFloat(obj.css(att)));
	        // alert(cutt);
	        var speed = (add - cutt) / 8;
	        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	        if (cutt == add) {
	            clearInterval(obj.timer)
	        } else {
	             obj.css(att,cutt+speed+'px');
	        }
	    }, 30)
	}	


    var oDiv1 = $('.gengxin')
    var oUlBig1 =$('.gengxin .oul');
    var aBigLi1 =$('.oul li');
    var oDivSmall1 =$('.gengxin .smal1');
    var aLiSmall1 = $('.smal1 li');
    var i = 0;
    aLiSmall1.each(function(e){
        $(this).click(function(){
            i=e;
            tab1();
        });
    });


    function tab1(){
        aLiSmall1.each(function(){
            aLiSmall1.removeClass();
        });
        $('.smal li:eq('+i+')').addClass('thistitle');
        startMove(oUlBig1, 'left', -(i * aBigLi1[0].offsetWidth));
    }

           
});


