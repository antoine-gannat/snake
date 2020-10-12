import { throws } from "assert";
import { GameMapSize } from "./Game";
import GameMap from "./GameMap";
import { MapElement, Position } from "./utils";

enum Direction {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

export default class Snake {
  private bodyParts: Position[] = [];
  private direction: Direction = Direction.RIGHT;
  private grow: boolean = false;
  constructor(startPos: Position) {
    this.bodyParts.push(startPos);
    window.addEventListener("keydown", this.changeDirection.bind(this));
  }

  private changeDirection(keyEvent: KeyboardEvent) {
    let newDirection: Direction = <Direction>keyEvent.key;
    switch (newDirection) {
      case Direction.UP:
        this.direction =
          this.direction !== Direction.DOWN ? newDirection : this.direction;
        break;
      case Direction.DOWN:
        this.direction =
          this.direction !== Direction.UP ? newDirection : this.direction;
        break;
      case Direction.LEFT:
        this.direction =
          this.direction !== Direction.RIGHT ? newDirection : this.direction;
        break;
      case Direction.RIGHT:
        this.direction =
          this.direction !== Direction.LEFT ? newDirection : this.direction;
        break;
    }
  }

  private checkColision(map: GameMap, newHeadPosition: Position) {
    const cellContent = map.get(newHeadPosition);

    switch (cellContent) {
      case MapElement.SNAKE:
        throw new Error("You lost !!");
      case MapElement.FRUIT:
        this.grow = true;
        map.delete(newHeadPosition);
        break;
    }
  }

  private moveBodyParts(map: GameMap, newHeadPosition: Position) {
    const lastElement = this.bodyParts[this.bodyParts.length - 1];
    const lastElementPos: Position = { x: lastElement.x, y: lastElement.y };
    for (let i = this.bodyParts.length - 1; i >= 0; i--) {
      map.delete(this.bodyParts[i]);
      if (i === 0) {
        this.bodyParts[i] = newHeadPosition;
      } else {
        this.bodyParts[i] = this.bodyParts[i - 1];
      }
      map.set(this.bodyParts[i], MapElement.SNAKE);
    }
    if (this.grow) {
      this.bodyParts.push(lastElementPos);
      this.grow = false;
    }
  }

  public move(map: GameMap) {
    // get the first body part
    const newHeadPosition = { x: this.bodyParts[0].x, y: this.bodyParts[0].y };
    // calculate new position
    switch (this.direction) {
      case Direction.UP:
        newHeadPosition.y =
          newHeadPosition.y - 1 < 0
            ? GameMapSize.height - 1
            : newHeadPosition.y - 1;
        break;
      case Direction.DOWN:
        newHeadPosition.y =
          newHeadPosition.y + 1 >= GameMapSize.height
            ? 0
            : newHeadPosition.y + 1;
        break;
      case Direction.LEFT:
        newHeadPosition.x =
          newHeadPosition.x - 1 < 0
            ? GameMapSize.width - 1
            : newHeadPosition.x - 1;
        break;
      case Direction.RIGHT:
        newHeadPosition.x =
          newHeadPosition.x + 1 >= GameMapSize.width
            ? 0
            : newHeadPosition.x + 1;
        break;
    }
    // check colision with map elements
    this.checkColision(map, newHeadPosition);
    // move the body
    this.moveBodyParts(map, newHeadPosition);
  }
}
