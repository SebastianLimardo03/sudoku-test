import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';

const App = () => {
    const [board, setBoard] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');
    const [message, setMessage] = useState('');

    useEffect(() => {
        generateBoard(difficulty);
    }, [difficulty]);

    const generateBoard = (difficulty) => {
        axios.get(`/api/sudoku/generate?difficulty=${difficulty}`)
            .then(response => {
                console.log('Generated Board:', response.data);  // Debug the response
                setBoard(response.data);
                setMessage('');
            })
            .catch(error => {
                console.error('Error generating board:', error);
                setMessage('Error generating board. Please try again.');
            });
    };

    const handleCellChange = (rowIndex, cellIndex, value) => {
        const newBoard = [...board];
        newBoard[rowIndex][cellIndex] = parseInt(value) || 0;
        setBoard(newBoard);
    };

    const validateBoard = () => {
        axios.post('/api/sudoku/validate', { board })
            .then(response => {
                setMessage(response.data.valid ? 'Board is valid!' : 'Board is invalid!');
            })
            .catch(error => {
                console.error('Error validating board:', error);
                setMessage('Error validating board. Please try again.');
            });
    };

    return (
        <div className="sudoku-app">
            <h1>Sudoku</h1>
            <div>
                <label>
                    Difficulty:
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <button onClick={() => generateBoard(difficulty)}>Generate New Board</button>
            </div>
            <Board board={board} onCellChange={handleCellChange} />
            <button onClick={validateBoard}>Validate</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;
