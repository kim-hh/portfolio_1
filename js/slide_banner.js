<<<<<<< HEAD
$(function(){ 
    var visual = $('.brandVisual > ul > li');
    var button = $('.buttonList > li');
    var current = 0;
    var num =visual.length;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    $('.brandVisual, .buttonList').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == num){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 3000);
     console.log(setIntervalId);
        
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
=======
$(function(){ 
    var visual = $('.brandVisual > ul > li');
    var button = $('.buttonList > li');
    var current = 0;
    var num =visual.length;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    $('.brandVisual, .buttonList').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == num){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 3000);
     console.log(setIntervalId);
        
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
>>>>>>> d7435828f252d8dbd4d173dc92533b30bc6399cc
});