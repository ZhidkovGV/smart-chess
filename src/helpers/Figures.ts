import { GameBoardModel, Position } from "./BoardModel";


export type figureColor = 'white' | 'black';
export type figureName = 'pawn' | 'bishop' | 'knight' | 'rook' | 'queen' | 'king';
export interface Figure {
  color: figureColor;
  name: figureName;
  symbol: string;
  move(board: GameBoardModel): Position[]
};

export type FigureConstructor = { new (color: figureColor): Figure};

export class Pawn implements Figure {
  public readonly color: figureColor;
  public readonly name = 'pawn';
  public readonly symbol = '&#9817;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: GameBoardModel): Position[] {
    return []
  }
}

export class King implements Figure {
  public readonly color: figureColor;
  public readonly name = 'king';
  public readonly symbol = '&#9812;';
  constructor(color: figureColor) {
    this.color = color;
  }
  public move(board: GameBoardModel): Position[] {
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
  public move(board: GameBoardModel): Position[] {
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
  public move(board: GameBoardModel): Position[] {
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
  public move(board: GameBoardModel): Position[] {
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
  public move(board: GameBoardModel): Position[] {
    return []
  }
}



