import React from 'react'
import { Position } from '../helpers/BoardModel';
import { GameController } from '../helpers/GameController';
import './Board.css'


const gameController = new GameController(); 

export const Board: React.FC = () => {
  const gameBoard = gameController.currentBoard;
  const touchFigure = (position: Position) => {
    const markedCells = gameController.getAvailableFigureMoves(position);
    console.log(markedCells);
  }
  return (
    <div className="board">
      {
        gameBoard.map((row, y) =>
          <div className="row" key={y}>
            {row.map((cell, x) => 
              <div className={`cell ${cell.color}`} key={x} onClick={() => touchFigure({x, y})}>
                {cell.figure && <span className={`${cell.figure.color}-figure`} dangerouslySetInnerHTML={{__html: cell.figure.symbol}}></span>}
              </div>)
            }
          </div>
        )
      }
    </div>
  )
}