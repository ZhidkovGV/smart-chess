import React from 'react'
import './Board.css'
import { GameBoard } from '../helpers/Figures';

export const Board: React.FC = () => {
  const gameBoard = new GameBoard();
  console.log(gameBoard.currentBoard);
  return (
    <div className="board">
      {
        gameBoard.currentBoard.map((row, index) =>
          <div className="row" key={index}>
            {row.map((cell, index) => <div className={`${cell.color} pawn`} key={index}></div>)}
          </div>
        )
      }
    </div>
  )
}