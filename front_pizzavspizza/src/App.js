import './App.css';
import Pizzalist from './pizzerias/pizzeriaslist';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://bit.ly/book-pizza" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <Pizzalist/>
      </header>
    </div>
  );
}

export default App;
