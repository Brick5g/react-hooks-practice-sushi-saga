import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => 
        setSushi(
          data.map((item) => ({
            ...item,
            eaten: false,
          }))
        )
      );
  }, []);

  const handleMoreSushi = () => {
    setStartIndex((prev) => prev + 4);
  };

  const handleEatSushi = (clickedSushi) => {
    if (clickedSushi.eaten) return;
    if (clickedSushi.price > balance) 
    return;

    setBalance ((prev) => prev - clickedSushi.price);

    setSushi((prev) => 
      prev.map((s) => 
        s.id === clickedSushi.id ? {...s, eaten: true} : s
      )
    )
  }


  return (
    <div className="app">
      <SushiContainer
        sushi={sushi}
        startIndex={startIndex}
        onEat={handleEatSushi}
        onMoreSushi={handleMoreSushi}
        balance={balance} 
      />
      <Table balance={balance} />
    </div>
  );
}

export default App;
