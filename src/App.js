import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {hot} from 'react-hot-loader';

function App() {
  const [counter,setCounter] = useState(0);
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and it will reload preserving state. Counter:{counter}.
        </p>
        <button onClick={()=>setCounter(counter+1)}>Button</button>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
}

export default hot(module)(App);
