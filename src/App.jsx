import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchPrice = () => {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(res => res.json())
        .then(data => setPrice(data.bitcoin.usd))
        .then(() => setTime(new Date()))
        .catch(err => console.error('Error fetching price:', err));
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 300000); 
    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <h1>Bitcoin Price: ${price}</h1>
      <p>Last updated: {time.toLocaleString()}</p>
    </>
  );
}

export default App;

