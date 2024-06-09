import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonUsage from './mybutton';
import TryFabricjs from './fabricjs';

function App2() {
  return (
    <div className="App">
   <TryFabricjs/>
       <ButtonUsage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ButtonUsage />
    </div>
  );
}

export default App2;
