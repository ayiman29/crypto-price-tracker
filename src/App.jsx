import { useState, useEffect } from 'react';
import './App.css';
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import Doge from './components/Doge'

function App() {
  const [flag, setFlag] = useState("LOADING")
  function bitcoinSelector() {
    setFlag("B")

  }
  function ethereumSelector() {
    setFlag("E")

  }
  function dogeSelector() {
    setFlag("D")

  }
  return (
    <>
      <div>
        <div style={{ display: flag === "B" ? "block" : "none" }}>
          <Bitcoin />
        </div>
        <div style={{ display: flag === "E" ? "block" : "none" }}>
          <Ethereum />
        </div>
        <div style={{ display: flag === "D" ? "block" : "none" }}>
          <Doge />
        </div>
      </div>

      <div className = "selectors">
        <button
          onClick={bitcoinSelector}
          className={flag === "B" ? "active" : ""}
        >
          Bitcoin
        </button>

        <button
          onClick={ethereumSelector}
          className={flag === "E" ? "active" : ""}
        >
          Ethereum
        </button>

        <button
          onClick={dogeSelector}
          className={flag === "D" ? "active" : ""}
        >
          DOGE
        </button>

      </div>
    </>
  );
}

export default App;

