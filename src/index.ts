import { Size } from "./utils";

const gridSize: Size = { width: 50, height: 50 };

class Game {
  private position: Position;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    // get the canvas
    if (
      !(this.canvas = document.getElementById(
        "game-canvas"
      ) as HTMLCanvasElement)
    ) {
      throw new Error("Canvas not found.");
    }
    // get the canvas context
    this.ctx = this.canvas.getContext("2d");
  }
}
