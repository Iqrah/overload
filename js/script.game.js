/*jslint browser:true */
//Game

//Init
var width = 800;
var height = 320;
//gLoop;
var canvasGame = document.getElementById('canvasGame');
var ctx = canvasGame.getContext('2d');
canvasGame.width = width;
canvasGame.height = height;

//clears the whole canvas
var clear = function () {
  ctx.fillStyle = '#FFA9A9';
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.closePath();
  ctx.fill();
}

var howManyCircles = 10, circles = [];

for (var i = 0; i < howManyCircles; i++) 
  circles.push([Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() / 2]);

var DrawCircles = function(){
  for (var i = 0; i < howManyCircles; i++) {
    ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
    ctx.beginPath();
    ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
};

var MoveCircles = function(deltaY){
  for (var i = 0; i < howManyCircles; i++) {
    if (circles[i][1] - circles[i][2] > height) {
      circles[i][0] = Math.random() * width;
      circles[i][2] = Math.random() * 100;
      circles[i][1] = 0 - circles[i][2];
      circles[i][3] = Math.random() / 2;
    } else {
      circles[i][1] += deltaY;
    }
  }
};


var GameLoop = function(){
  clear();
  MoveCircles(0.2);
  DrawCircles();
  gLoop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();