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
          Edit {counter} <code>src/App.js</code> and  to reload.
        </p>
        <button onClick={()=>setCounter(counter+1)}>hola</button>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neural network powr
        </a>
      </header>
    </div>
  );
}

export default hot(module)(App);
