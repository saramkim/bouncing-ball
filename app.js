// 윈도우 창 크기에 맞춰 canvas 크기 새로 지정하기
// class App {
//   constructor() {
//     this.canvas = document.createElement("canvas");
//     this.ctx = this.canvas.getContext("2d");

//     document.body.appendChild(this.canvas);

//     window.addEventListener("resize", this.resize.bind(this));
//     this.resize();
//   }

//   resize() {
//     this.canvas.width = document.body.clientWidth;
//     this.canvas.height = document.body.clientHeight;

//     this.animate();
//   }

//   animate() {
//     this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
//     this.ctx.fillStyle = "#b197fc";
//     this.ctx.fill();

//     this.ctx.beginPath();
//     this.ctx.arc(200, 200, 50, 0, 2 * Math.PI);
//     this.ctx.fillStyle = "#faa2c1";
//     this.ctx.fill();
//     this.ctx.closePath();
//   }
// }
// new App();

import { Ball } from "./ball.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.canvas.width, this.canvas.height, 30, 15);
    this.animate();
  }

  resize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.ctx, "red", this.canvas.width, this.canvas.height);
  }
}

new App();
