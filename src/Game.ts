import Canvas from "./Canvas";
import GameMap from "./GameMap";
import Snake from "./Snake";
import { MapElement, Position, Size } from "./utils";

export const GameMapSize: Size = { width: 20, height: 20 };

export default class Game {
  private canvas = new Canvas();
  private map = new GameMap();
  private snake: Snake;

  constructor() {
    this.snake = new Snake({
      x: GameMapSize.width / 2,
      y: GameMapSize.height / 2,
    });
    this.start();
  }

  private mainloop() {
    this.canvas.clear();
    this.snake.move(this.map);
    this.canvas.render(this.map);
  }

  private getRandomCell(): Position {
    function randomNb(max: number) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    return { x: randomNb(GameMapSize.width), y: randomNb(GameMapSize.height) };
  }

  private addFruit() {
    let position: Position;
    // while the cell is filled
    while (this.map.get((position = this.getRandomCell())));
    // set the fruit
    this.map.set(position, MapElement.FRUIT);
  }

  private start() {
    // call the mainloop 60 times per second
    setInterval(this.mainloop.bind(this), 300);
    setInterval(this.addFruit.bind(this), 5000);
  }
}
