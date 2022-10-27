import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent'
import FirstProps from './Components/FirstProps'
import { useState } from "react";

function App() {

  const [number, SetNumber] = useState(0)
  const changeNumber = () => {
    SetNumber(number + 1);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id='fontnumber'> Número: {number}</p>
        <button onClick={changeNumber} id='botao'> Clique aqui mudar o número </button>
        <p>
          Primeiro teste react Softex - Vanildo 
        </p>
        <div id="font">
        <FirstComponent/>
        </div>
        <FirstProps nome="Vanildo" />
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn React
        </a>
      </header>
    </div>
  );
}

export default App;
