import React, { useState } from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = ({ num }) => {
  const [quantity, setQuantity] = useState(num);

  const plusCount = () => {
    return setQuantity((prev) => prev + 1);
  };

  const minusCount = () => {
    if (quantity > 1) {
      return setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="plusMinusBtn">
      <button className="modalBtn" onClick={minusCount}>
        -
      </button>
      <div className="plusMinusTotal">{quantity}</div>
      <button className="modalBtn" onClick={plusCount}>
        +
      </button>
    </div>
  );
};

export default PlusMinusBtn;
