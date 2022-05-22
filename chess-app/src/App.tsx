import React from 'react';
import './App.css';
import { Board } from './components/board';


function App() {
  const board = new Board();
  return (
    <div className='container'>
      <div className='board'>
        {board.getBoard()}
      </div>
    </div>
  );
}

export default App;
