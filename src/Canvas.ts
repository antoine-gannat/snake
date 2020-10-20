import { GameMapSize } from "./Game";
import GameMap from "./GameMap";
import { MapElement, Size } from "./utils";

export default class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cellSizeInPixels: Size;

  constructor() {
    // create the canvas and get the canvas context
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    // reize the canvas on window resize
    window.addEventListener("resize", this.resizeCanvas.bind(this));
  }

  // resize the canvas to the size of the window
  private resizeCanvas() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;

    this.cellSizeInPixels = {
      width: this.ctx.canvas.width / GameMapSize.width,
      height: this.ctx.canvas.height / GameMapSize.height,
    };
  }

  // clear the canvas
  public clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public render(map: GameMap) {
    map.forEach((elementType, position) => {
      switch (elementType) {
        case MapElement.SNAKE:
          this.ctx.fillStyle = "green";
          break;
        case MapElement.FRUIT:
          this.ctx.fillStyle = "red";
          break;
        default:
          return;
      }
      this.ctx.fillRect(
        position.x * this.cellSizeInPixels.width,
        position.y * this.cellSizeInPixels.height,
        this.cellSizeInPixels.width,
        this.cellSizeInPixels.height
      );
    });
  }
}
