import { MapElement, Position } from "./utils";

export default class GameMap {
  private elements: [Position, MapElement][] = [];

  public set(position: Position, type: MapElement) {
    this.elements.push([position, type]);
  }

  public get(position: Position): MapElement | undefined {
    for (const el of this.elements) {
      if (el[0].x === position.x && el[0].y === position.y) {
        return el[1];
      }
    }
    return undefined;
  }

  public forEach(callback: (value: MapElement, key: Position) => void) {
    for (const el of this.elements) {
      callback(el[1], el[0]);
    }
  }

  public delete(position: Position) {
    for (let i = 0; i < this.elements.length; i++) {
      const el = this.elements[i];
      if (el[0].x === position.x && el[0].y === position.y) {
        this.elements.splice(i, 1);
        return;
      }
    }
  }
}
