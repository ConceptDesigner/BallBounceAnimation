/**************************************
 TITLE: Positioning and Animating  James Lewis (JL)
 CREATE DATE: 05 April 2016
 PURPOSE: To position and animate 
 LAST MODIFIED ON: 01 April 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY:
 Update:
***************************************/
$(document).ready(function(){

var dvAnimationArea = document.querySelector("#animationArea");

//create the 'ball' for this animation
var ball = document.createElement('div');
ball.classList.add('pbox');
dvAnimationArea.appendChild(ball);

//position for our 'ball'
var x = 150;
var y = 10;

//Pulling velocity out like this
//makes it easier to change velocity during runtime
//try different numbers for these two variables :)
var velocityX = 1;
var velocityY = 1;

//start the animation interval
setInterval(update, 5);

function update() {
  ball.style.top = y + "px";
  ball.style.left = x + "px";
  ball.style.right = x + "px";
  ball.style.bottom = y + "px";
 
	if(y >= 280) {
        //bounce the ball
        velocityY = -1; 
	y = 280;
 }

	if(y <= 0) {
        //bounce the ball
        velocityY = 1; 
	y = 0;
 }

	if(x >= 280) {
        //bounce the ball
        velocityX = -1; 
	x = 280;
} 

	if(x <= 0) {
        //bounce the ball
        velocityX = 1; 
	x = 0;
 }

  x = x + velocityX;
  y = y + velocityY;
}

});
