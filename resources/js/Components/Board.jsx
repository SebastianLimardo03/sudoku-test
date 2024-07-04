import React from 'react';

const Board = ({ board, onCellChange }) => {
    return (
        <div className="sudoku-board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, cellIndex) => (
                        <input
                            key={cellIndex}
                            type="number"
                            min="1"
                            max="9"
                            value={cell !== 0 ? cell : ''}
                            onChange={(e) => onCellChange(rowIndex, cellIndex, e.target.value)}
                            className="sudoku-cell"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
