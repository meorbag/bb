
var canvas = document.getElementById("blockbreaker");
var scorep=document.getElementById("scorep");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/5;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 20;
var paddleWidth = 150;
var aPaddle = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

var red=1;
var blue=1;
var green=1;	
var purple=1;
var yellow=1;
var black=1;
var score = 0;
var ballcolor="#00FFFF";
var block1="#FF0000";
var block2="#0000FF";
var block3="#347C17";
var block4="#660099";
var block5="#FFFF00";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

		function keyDownHandler(k) {
			if(k.key == "Right" || k.key == "ArrowRight") {
				rightPressed = true;
			}
			else if(k.key == "Left" || k.key == "ArrowLeft") {
				leftPressed = true;
			}
		}

		function keyUpHandler(k) {
			if(k.key == "Right" || k.key == "ArrowRight") {
				rightPressed = false;
			}
			else if(k.key == "Left" || k.key == "ArrowLeft") {
				leftPressed = false;
			}
		}
	
		function collision() {
			
			if(red==1){
			if(x >110 && x <270 && y > 40 && y < 70) {
				dy = -dy;
				red=0;
				score=score+20;
				ballcolor=block1;                
				}
			}
			
			if(blue==1){
			if(x >360 && x <520 && y > 40 && y < 70) {
				dy = -dy;
				blue=0;
				score=score+40;
				ballcolor=block2;                       
				}
			}
			
			if(green==1){
			if(x >620 && x <780 && y > 40 && y < 70) {
				dx = -dx;
				green=0;
				score=score+80;
				ballcolor=block3;		                          
				}
			}
			
			if(purple==1){
			if(x >230 && x <390 && y > 130 && y < 160) {
				dy = -dy;
				purple=0;
				score=score+60;
				ballcolor=block4;                       
				}
			}
			
			if(yellow==1){
			if(x >500 && x <660 && y > 130 && y < 160) {
				dy = -dy;
				yellow=0;
				score=score+50;
				ballcolor=block5;
				}
			}
			if(x >70 && x <370 && y > 320 && y < 336) {
				dy = -dy;
				}
			if(score == 250) {
                        alert("congratulations!!");
                        document.location.reload();
                        clearInterval(interval);				
		}
	}

		function drawBall() {
			ctx.beginPath();
			ctx.arc(x, y, ballRadius, 0, Math.PI*2);
			ctx.fillStyle = ballcolor;
			ctx.fill();
			ctx.closePath();
			
		}
		function drawPaddle() {
					
			ctx.beginPath();
			ctx.rect(aPaddle, canvas.height-paddleHeight, paddleWidth, paddleHeight);
			ctx.fillStyle = "#00FFFF";
			ctx.fill();
			ctx.closePath();
			scorep.innerHTML="Score : "+score;
		}

			function drawBlock(){
				
				if(red==1){	
				ctx.beginPath();
				ctx.rect(110,40,160,30);
				ctx.fillStyle="#FF0000";
				ctx.fill();
				ctx.closePath();	
				 }
	
				if(blue==1){
				ctx.beginPath();
				ctx.rect(360,40,160,30);
				ctx.fillStyle="#0000FF";
				ctx.fill();
				ctx.closePath();
				 }
				
				if(green==1){  
				ctx.beginPath();
				ctx.rect(620,40,160,30);
				ctx.fillStyle="#347C17";
				ctx.fill();
				ctx.closePath();
				}
				   			
				if(purple==1){	
				ctx.beginPath();
				ctx.rect(230,130,160,30);
				ctx.fillStyle="#660099";
				ctx.fill();
				ctx.closePath();
				}

				
				if(yellow==1){	
				ctx.beginPath();
				ctx.rect(500,130,160,30);
				ctx.fillStyle="#FFFF00";
				ctx.fill();
				ctx.closePath();
				}

				ctx.beginPath();
				ctx.rect(70,320,300,16);
				ctx.fillStyle="#000000";
				ctx.fill();
				ctx.closePath();

			}
	
	function drawScore() {
	 
	}
			

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawBall();
			drawPaddle();
			drawBlock();
			collision();
			drawScore();

			if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
				dx = -dx;
			}
			if(y + dy < ballRadius) {
				dy = -dy;
			}
			else if(y + dy > canvas.height-ballRadius) {
				
				if(x > aPaddle && x < aPaddle + paddleWidth) {
					dy = -dy;
				}
				else {
					alert("GAME OVER");
					document.location.reload();
					clearInterval(interval);
				}
			}

			if(rightPressed && aPaddle < canvas.width-paddleWidth) {
				aPaddle += 7;
			}
			else if(leftPressed && aPaddle > 0) {
				aPaddle -= 7;
			}

			x += dx;
			y += dy;
		}

var interval = setInterval(draw, 10);