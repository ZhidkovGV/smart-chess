import React from 'react'
import { GameBoardModel } from '../helpers/BoardModel';
import './Board.css'


export const Board: React.FC = () => {
  const gameBoard = new GameBoardModel();
  console.log(gameBoard.currentBoard);
  return (
    <div className="board">
      {
        gameBoard.currentBoard.map((row, index) =>
          <div className="row" key={index}>
            {row.map((cell, index) => 
              <div className={`cell ${cell.color}`} key={index}>
                {cell.figure && <span className={`${cell.figure.color}-figure`} dangerouslySetInnerHTML={{__html: cell.figure.symbol}}></span>}
              </div>)
            }
          </div>
        )
      }
    </div>
  )
}