import React from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = () => {
  return (
    <div className="plusMinusBtn">
      <button className="btn">-</button>
      <div className="plusMinusTotal">1</div>
      <button className="btn">+</button>
    </div>
  );
};

export default PlusMinusBtn;
