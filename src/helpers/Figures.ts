import { boardModel, Cell, Position } from "./BoardModel";
import { bordersCheck } from "./borders-check";

export type figureColor = 'white' | 'black';
export type figureName = 'pawn' | 'bishop' | 'knight' | 'rook' | 'queen' | 'king';

export interface Figure {
  color: figureColor;
  name: figureName;
  symbol: string;
  move(board: boardModel, currentPosition: Position): Position[]
};

export type FigureConstructor = { new(color: figureColor): Figure };

export class Pawn implements Figure {
  public readonly color: figureColor;
  public readonly name = 'pawn';
  public readonly symbol = '&#9817;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel, currentPosition: Position): Position[] {
    const { x, y } = currentPosition;
    const yMoveDirection = board[y][x].figure!.color === 'white' ? -1 : 1;
    const moves: Position[] = Array.from({ length: 3 }, () => ({ y: y + yMoveDirection }))
      .map((move, index) => Object.assign(move, { x: x + (index - 1) } as Position))
      .filter(move => bordersCheck(move))
      .filter(move => this._isMoveAvailable(board[move.y][move.x], move, x));
    return moves
  }

  private _isMoveAvailable(checkCell: Cell, position: Position, currentColumn: number): boolean {
    if(position.x > currentColumn || position.x < currentColumn) {
      if(!checkCell.figure || checkCell.figure?.color === this.color) {
        return false;
      }
    } else if(checkCell.figure) {
      return false;
    }
    return true
  }
}

export class King implements Figure {
  public readonly color: figureColor;
  public readonly name = 'king';
  public readonly symbol = '&#9812;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel): Position[] {
    return []
  }
}

export class Queen implements Figure {
  public readonly color: figureColor;
  public readonly name = 'queen';
  public readonly symbol = '&#9813;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel): Position[] {
    return []
  }
}

export class Rook implements Figure {
  public readonly color: figureColor;
  public readonly name = 'rook';
  public readonly symbol = '&#9814;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel): Position[] {
    return []
  }
}

export class Bishop implements Figure {
  public readonly color: figureColor;
  public readonly name = 'bishop';
  public readonly symbol = '&#9815;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel): Position[] {
    return []
  }
}

export class Knight implements Figure {
  public readonly color: figureColor;
  public readonly name = 'knight';
  public readonly symbol = '&#9816;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: boardModel): Position[] {
    return []
  }
}



