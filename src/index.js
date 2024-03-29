import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

let imgBall = document.getElementById("ball_png");

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ctx.drawImage(imgBall, 30, 30, 30, 30);

  requestAnimationFrame(gameLoop);
}

gameLoop();
