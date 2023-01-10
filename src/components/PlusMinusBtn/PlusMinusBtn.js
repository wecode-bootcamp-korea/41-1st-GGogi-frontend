import React from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = ({ quantity }) => {
  return (
    <div className="plusMinusBtn">
      <button className="modalBtn">-</button>
      <div className="plusMinusTotal">{quantity}</div>
      <button className="modalBtn">+</button>
    </div>
  );
};

export default PlusMinusBtn;
