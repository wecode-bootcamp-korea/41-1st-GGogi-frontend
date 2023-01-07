import React, { useState } from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = ({ product }) => {
  const [count, setCount] = useState(1);
  const plusCount = () => {
    return setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };

  // const totalPrice = (product) => {
  //   return Int(count) * product.price;
  // };

  return (
    <div className="plusMinusBtn">
      <button className="modalBtn" onClick={minusCount}>
        -
      </button>
      <div className="plusMinusTotal">{count}</div>
      <button className="modalBtn" onClick={plusCount}>
        +
      </button>
    </div>
  );
};

export default PlusMinusBtn;
