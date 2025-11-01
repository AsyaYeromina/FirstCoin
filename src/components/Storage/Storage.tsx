import React, { useState } from "react";
import "./Storage.scss";
import coinImage from "../../assets/1coin.png";

function Storage() {
  const [numCoins, setNumCoins] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumCoins(isNaN(value) ? 0 : value);
  };

  const handleDecrement = () => {
    setNumCoins((prev) => Math.max(0, prev - 1));
  };

  const handleIncrement = () => {
    setNumCoins((prev) => prev + 1);
  };

  const renderCoins = () => {
    if (numCoins > 30) {
      return Array.from({ length: numCoins }, (_, i) => (
         <div key={i} className="storage__coin">
            <div key={i} className="storage__coin--yellow-circle"></div>
         </div>
      ));
    } else {
      return Array.from({ length: numCoins }, (_, i) => (
        <div key={i} className="storage__coin">
          <img src={coinImage} alt="coin" className="storage__coin-img" />
        </div>
      ));
    }
  };

  return (
    <div className="storage">
      <h2 className="storage__title">My bank</h2>
      <div className="storage__input-wrapper">
        <button
          onClick={handleDecrement}
          className="storage__button storage__button--decrement"
          aria-label="Decrease coins"
        >
          -
        </button>
        <input
          type="number"
          placeholder="Enter number of coins"
          value={numCoins === 0 ? "" : numCoins}
          onChange={handleInputChange}
          className="storage__coin-input"
        />
        <button
          onClick={handleIncrement}
          className="storage__button storage__button--increment"
          aria-label="Increase coins"
        >
          +
        </button>
      </div>
      <div className="storage__coins-container">{renderCoins()}</div>
    </div>
  );
}

export default Storage;
