import { Size } from "./utils";

const gridSize: Size = { width: 50, height: 50 };

class Game {
  private position: Position;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    // get the canvas and the canvas context
    if (
      !(this.canvas = document.getElementById(
        "game-canvas"
      ) as HTMLCanvasElement) ||
      !(this.ctx = this.canvas.getContext("2d"))
    ) {
      throw new Error("Canvas not found.");
    }
    this.resizeCanvas();
    this.start();
  }

  private resizeCanvas() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  private start() {}
}

new Game();
