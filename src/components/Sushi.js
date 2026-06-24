import React from "react";

function Sushi({ sushi, onEat, balance }) {
  const isEaten = sushi.eaten;
  const canAfford = sushi.price <= balance;

  const handleClick = () => {
    if (!isEaten && canAfford) {
      onEat(sushi);
    }
  };
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {!isEaten ? (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        ) : (
          null
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
