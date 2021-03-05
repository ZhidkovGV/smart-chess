import { xor } from "./xor";

export interface Position {
  x: number;
  y: number;
};
export type boardModel = Array<Array<Cell>>;
export type figureColor = 'white' | 'black';
export type figureName = 'pawn' | 'bishop' | 'knight' | 'rook' | 'queen' | 'king';
export class Cell {
  public color: figureColor
  public figure: Figure | null;
  constructor(color: figureColor, figure: Figure | null) {
    this.color = color;
    this.figure = figure;
  }
}

export class GameBoard {
  private _boardModel: boardModel

  constructor(boardModel?: boardModel) {
    this._boardModel = boardModel ? boardModel : this._initBoard();
  }

  get currentBoard(): boardModel {
    return this._boardModel;
  }

  private _initBoard(): boardModel {
    let colorToggle = false;
    const emptyBoard = Array.from({ length: 8 }, () => {
      colorToggle = !colorToggle;
      return Array.from({ length: 8 }, (_, i) => {
        const color = xor(colorToggle, !!(i % 2)) ? 'black' : 'white';
        const cell = new Cell(color, null);
        return cell;
      })
    });
    return emptyBoard;
  }
}

export interface Figure {
  color: figureColor;
  name: figureName;
  move(board: GameBoard): Position[]
}

export class Pawn implements Figure {
  public readonly color: figureColor;
  public readonly name: figureName;
  constructor(color: figureColor) {
    this.color = color;
    this.name = 'pawn';
  }
  public move(board: GameBoard): Position[] {
    return []
  }
}