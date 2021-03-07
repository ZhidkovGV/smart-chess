import { Bishop, Figure, figureColor, FigureConstructor, King, Knight, Pawn, Queen, Rook } from "./Figures";
import { xor } from "./xor";


interface TeamConfig {
  pawnsRow: number;
  bigGuysRow: number;
  color: figureColor;
}

const blackConfig: TeamConfig = {
  pawnsRow: 1,
  bigGuysRow: 0,
  color: 'black'
}

const whiteConfig: TeamConfig = {
  pawnsRow: 6,
  bigGuysRow: 7,
  color: 'white'
}

const figuresPositionMap = new Map<number, FigureConstructor>([
  [0, Rook],
  [1, Knight],
  [2, Bishop],
  [3, Queen],
  [4, King],
  [5, Bishop],
  [6, Knight],
  [7, Rook]
])

export interface Position {
  x: number;
  y: number;
};

export type boardModel = Cell[][];

export class Cell {
  public color: figureColor
  public figure: Figure | null;
  constructor(color: figureColor, figure: Figure | null) {
    this.color = color;
    this.figure = figure;
  }
}

export class GameBoardModel {
  private _boardModel: boardModel

  constructor(boardModel?: boardModel) {
    this._boardModel = boardModel ? boardModel : this._dropFigures(this._initBoard());
  }

  get currentBoard(): boardModel {
    return this._boardModel;
  }

  private _dropFigures(board: boardModel): boardModel {
    const teamsConfig = [whiteConfig, blackConfig];
    teamsConfig.forEach(teamConfig => {
      board[teamConfig.pawnsRow].forEach(cell => cell.figure = new Pawn(teamConfig.color));
      board[teamConfig.bigGuysRow].forEach((cell, index) => {
        const figureClass = figuresPositionMap.get(index)
        cell.figure = new figureClass!(teamConfig.color) as Figure;
      })
    })
    return board;
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
