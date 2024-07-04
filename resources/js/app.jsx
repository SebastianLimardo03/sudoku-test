import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';  // Ensure this path is correct
import '../css/sudoku.css';  // Ensure this path is correct

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
