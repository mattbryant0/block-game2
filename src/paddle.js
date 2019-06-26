export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;
    this.gameWidth = gameWidth;
    this.maxspeed = 5;
    this.speed = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  moveLeft() {
    this.speed = -this.maxspeed;
  }

  moveRight() {
    this.speed = this.maxspeed;
  }

  stop() {
    this.speed = 0;
  }
  draw(ctx) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x = this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
