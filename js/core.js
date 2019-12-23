$(document).ready(function() {
    words = [];
    
    init();
    console.log(getRandomWord());
    
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
});