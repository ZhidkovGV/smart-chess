import React, { useState } from 'react'
import { Position } from '../helpers/BoardModel';
import { GameController } from '../helpers/GameController';
import './Board.css'


const gameController = new GameController();

export const Board: React.FC = () => {
  const [hightlightedCells, setHighlightedCells] = useState<Position[]>([])
  const [touchedCell, setTouchedCell] = useState<null | Position>(null);
  const gameBoard = gameController.currentBoard;
  const cellClicked = (position: Position) => {
    if (touchedCell) {
      if(gameController.moveFigure(touchedCell, position, hightlightedCells)) {
        setHighlightedCells([]);
        setTouchedCell(null);
        return;
      }
    }
    const markedCells = gameController.getAvailableFigureMoves(position);
    setHighlightedCells(markedCells);
    setTouchedCell(position);
    console.log(markedCells);
  }
  return (
    <div className="board">
      {
        gameBoard.map((row, y) =>
          <div className="row" key={y}>
            {row.map((cell, x) =>
              <div
                className={
                  `cell 
                    ${cell.color} 
                    ${hightlightedCells.find(({ x: cellX, y: cellY }) => cellX === x && cellY === y) ? 'hightlight' : ''}`
                }
                key={x}
                onClick={() => cellClicked({ x, y })}>
                {
                  cell.figure &&
                  <span className={`${cell.figure.color}-figure`} dangerouslySetInnerHTML={{ __html: cell.figure.symbol }}>
                  </span>
                }
              </div>)
            }
          </div>
        )
      }
    </div>
  )
}