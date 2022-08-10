export class Ball {
  constructor(canvasWidth, canvasHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;
    this.x = this.radius + Math.random() * (canvasWidth - this.radius * 2);
    this.y = this.radius + Math.random() * (canvasHeight - this.radius * 2);
  }

  draw(ctx, color, canvasWidth, canvasHeight) {
    this.x += this.vx;
    this.y += this.vy;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    this.bounceWindow(canvasWidth, canvasHeight);
  }

  bounceWindow(canvasWidth, canvasHeight) {
    if (this.x <= this.radius || this.x >= canvasWidth - this.radius) {
      this.vx *= -1;
      this.x += this.vx;
    }
    if (this.y <= this.radius || this.y >= canvasHeight - this.radius) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}
