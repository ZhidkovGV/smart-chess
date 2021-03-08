import { boardModel, GameBoardModel, Position } from "./BoardModel";
import { figureColor } from "./Figures";

export class GameController {
  private gameBoard: GameBoardModel;
  private currentTeamMove: figureColor = 'white';

  public get currentBoard(): boardModel {
    return this.gameBoard.currentBoard;
  }

  constructor() {
    this.gameBoard = new GameBoardModel();
  }

  public getAvailableFigureMoves({ x, y }: Position): Position[] {
    const { figure } = this.gameBoard.currentBoard[y][x];
    if (figure && figure.color === this.currentTeamMove) {
      let moves = figure.move(this.gameBoard.currentBoard, { x, y });
      console.log(x, y);
      if (figure.name === 'king' || figure.name === 'rook') {
        moves = [...moves, ...this._castlingMoves()];
      }
      return moves;
    }
    return [];
  }

  public moveFigure({ x: initialX, y: initialY }: Position, { x: newX, y: newY }: Position, moves: Position[]): boolean {
    const { figure } = this.gameBoard.currentBoard[initialY][initialX];
    if (figure) {
      if (moves.find(({ x, y }) => x === newX && y === newY)) {
        this.gameBoard.currentBoard[initialY][initialX].figure = null;
        this.gameBoard.currentBoard[newY][newX].figure = figure;
        this._toggleMove();
        return true
      }
    }
    return false
  }

  private _castlingMoves(): Position[] {
    return [];
  }

  private _toggleMove() {
    this.currentTeamMove = this.currentTeamMove === 'white' ? 'black' : 'white';
  }
}