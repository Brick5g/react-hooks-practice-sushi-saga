import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushi, startIndex, onEat, onMoreSushi, balance }) {
  const visibleSushi = sushi.slice(startIndex, startIndex + 4);
  
  return (
    <div className="belt">
      {visibleSushi.map((item) => (
        <Sushi
          key={item.id}
          sushi={item}
          onEat={onEat}
          balance={balance}
        />
      ))}
      <MoreButton onClick={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
