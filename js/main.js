$(document).ready(function() {
    words = [];
    
    step = 1;
    length = 0;
    count = 0;
    
    init();
    
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
        
        if(step == 3) {
            amount = count == 1 ? 5 : count == 10 ? 3.5 : count == 20 ? 1.5 : count == 30 ? -0.5 : 0;
            $('header').css('margin-top', 'calc(' + amount + 'rem + ' + amount + 'vh)');
            
            createWords();
            $('.container').css('animation', 'animSlideNextResult 1s ease both');
        }
        else {
            $('.container').css('animation', 'animSlideLeft 1s ease both');
        }
    });
    
    $('.prev').on('click', function(e) {
        step--;
        $('header').css('margin-top', 'calc(4rem + 4vh)');
        
        if(step == 2)
            $('.container').css('animation', 'animSlidePrevResult 1s ease both');
        else
            $('.container').css('animation', 'animSlideRight 1s ease both');
    });
    
    $('.refresh').on('click', function(e) {
//        percent = count == 1 ? 23 : count == 10 ? 20 : count == 20 ? 12 : count == 30 ? 4 : 0;
        
        animScaleDown();
        setTimeout(() => animScaleUp(), 700);        
    });
    
    function animScaleDown() {
        $('.results').css('transform', 'scale(0)');
    }
    
    function animScaleUp() {
        createWords();
        
        $('.results').css('transform', 'scale(1)');
    }
    
    function createWords() {
        $('.third .results').children().remove();
        for(i=0; i<count; i++) {
            word = '';
            for(j=0; j<length; j++) {
                word += getRandomWord();
            }
            btn = $('.third .results').append('<button class="btn-3">' + word + '</button>');
            
            btn.children().last().on('click', function(e) {
                copyToClipboard($(this).text());
                showToast($(this).text() + '를 복사 하였습니다.');
            });
        }
    }
    
    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }
    
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
    
    var toastTimer;
    
    function showToast(text) {
        if($('.toast').attr('show') == "") {
            hideToast();
            
            toastTimer = setTimeout(() => showToast(text), 400);
            return;
        }
        
        $('.toast').text(text);
        $('.toast').attr('show', '');
        
        toastTimer = setTimeout(() => hideToast(), 1500);
    }
    
    function hideToast() {
        clearTimeout(toastTimer);
        $('.toast').removeAttr('show');
    }
    
    function init() {
        addWord('니');
        addWord('나');
        addWord('카');
        addWord('라');
        addWord('파');
        addWord('하');
        addWord('레');
        addWord('제');
        addWord('케');
        addWord('테');
        addWord('네');
        addWord('데');
        addWord('페');
        addWord('제');
        addWord('렌');
        addWord('젠');
        addWord('더');
        addWord('비');
        addWord('시');
        addWord('이');
        addWord('지');
        addWord('치');
        addWord('키');
        addWord('티');
        addWord('히');
        addWord('프');
        addWord('트');
        addWord('크');
        addWord('흐');
        addWord('르');
        addWord('즈');
        addWord('브');
        addWord('노');
        addWord('호');
        addWord('로');
        addWord('코');
        addWord('포');
        addWord('도');
        addWord('온');
        addWord('론');
        addWord('므');
    }
    
    function addWord(word) {
        words.push(word);
    }
    
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }
    
    function getRandomWords() {
        return words[Math.floor(Math.random() * words.length)];
    }
});