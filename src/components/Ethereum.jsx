import { useEffect, useState } from "react";

export default function Ethereum() {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchPrice = () => {
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
        .then((res) => res.json())
        .then((data) => setPrice(data.ethereum.usd))
        .then(() => setTime(new Date()))
        .catch((err) => console.error("Error fetching price:", err));
    };

    fetchPrice(); 
    const interval = setInterval(fetchPrice, 60000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="price-box-ethereum">
      <h2>Ethereum Price: ${price}</h2>
      <p>Last updated: {time.toLocaleTimeString()}</p>
    </div>
  );
}