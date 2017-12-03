var start = (function() {
	'use strict';

function text() {
    var cs  = document.getElementById('stage');
    var ctx = cs.getContext('2d');
    var w   = cs.width;
    var h   = cs.height;
    var n = 0; //文字のカウンタ
    var m = 10; //横にずれていくよ

    function render() {

        if(n === 10) {
            n = 0;
	        ctx.clearRect(m, m, w, h);            
            ctx.fillText("G",m,50);
            m +=15;
        } else {
            n++;
        }
        var wordArray = ["N","o","w"," ", "L","o","a","d","i","n","G"];

        ctx.clearRect(m, m, w, h);
        ctx.font = '16px/2 sans-serif';
        ctx.fillText(wordArray[n], m,50);
    }

    setInterval(render, 100);

}
text();


});