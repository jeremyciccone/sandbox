//Pendulum Wave (ActionScript)
/*
    private const NUM_BALL:int = 24;
    private var loadingBall:Vector.<Shape> = new Vector.<Shape>(NUM_BALL);
    private var timeStep:int = 0;
    private const BALL_HEIGHT:int = 40;

    public function animateBalls(e:Event):void
    {
        for (var i:int = 0; i < NUM_BALL; i++ )
        {
            loadingBall[i].graphics.clear();
            loadingBall[i].graphics.beginFill(0x0B5F95);
            loadingBall[i].graphics.drawCircle(455+5*i,getY(i,timeStep),2);
        }
        timeStep++;
    }

    public function getY(i:int, t:int):int
    {
        return 260 + BALL_HEIGHT/2 * (1 + Math.sin((timeStep * (i/500 + 0.02)) % 2*Math.PI));
    }
*/

var numberOfBalls = 24;
var ball = '<circle cx="0" cy="0" r="40" stroke="black" stroke-width="3" fill="black" />';
var timeStep = 0;
var ballRadius = 5;
var ballSpacing = 2.5;
var offsetX = 20;
var offsetY = 20;
var freqHeight = 100;
var width = (numberOfBalls-1)*ballRadius*ballSpacing + (offsetX*2);
var height = freqHeight + (2*offsetY);
var bgColor = '#1C1C1C';
var ballColor = '#FF7F00';
var frameRate = 1000/30;


function animateWave() {
    $('.loading').empty();
    $('.loading').css('background', bgColor);
    for(i=0; i < numberOfBalls; i++) {
        currentBall = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        currentBall.setAttribute('cx', (offsetX + ballRadius*ballSpacing*i));
        currentBall.setAttribute('cy', getY(i, timeStep));
        currentBall.setAttribute('r', ballRadius);
        var rand = '#'+Math.floor(Math.random()*16777215).toString(16);
        currentBall.setAttribute('fill', ballColor);
        $('.loading').append(currentBall);
    }
}

function getY(i, t) {
    return offsetY + freqHeight/2 * (1 + Math.sin((timeStep * (i/500 + 0.02)) % 2*Math.PI));
}



$(document).ready(function() {

    $('.loading').width(width);
    $('.loading').height(height);
    var maxSteps = 10000;
    var timeline = setInterval(function(){ animateWave(); timeStep++; if(timeStep==maxSteps) { stopIt(); }}, frameRate);

    function stopIt() {
        clearInterval(timeline);
    }

});