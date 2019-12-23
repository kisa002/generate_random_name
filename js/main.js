$(document).ready(function() {
    step = 1;
    length = 0;
    count = 0;
    
    initAnimation();
    
    $('.first .btn-1').on('click', function(e) {
        $('.first .btn-1').removeAttr('selected');
        $(this).attr('selected', '');
        
        length = $(this).attr('length');
    });
    
    $('.second .btn-1').on('click', function(e) {
        $('.second .btn-1').removeAttr('selected');
        $(this).attr('selected', '');
        
        count = $(this).attr('count');
    });
    
    $('.next').on('click', function(e) {
        step++;
        
        if(step == 3)
            $('.container').css('animation', 'animSlideNextResult 1s ease both');
        else
            $('.container').css('animation', 'animSlideLeft 1s ease both');
    });
    
    $('.prev').on('click', function(e) {
        step--;
        
        if(step == 2)
            $('.container').css('animation', 'animSlidePrevResult 1s ease both');
        else
            $('.container').css('animation', 'animSlideRight 1s ease both');
    });
    
    function nextStep() {
        step++;
        
        if(step == 1) {
            $('.first').css('display', 'block');
            $('.second').css('display', 'none')
        }
        
        if(step == 2) {
            $('.first').css('display', 'none');
            $('.second').css('display', 'block')
        }
    }
    
    function initAnimation() {
        
    }
});