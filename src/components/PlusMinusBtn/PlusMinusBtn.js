import React from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = ({ product }) => {
  return (
    <div className="plusMinusBtn">
      <button className="modalBtn">-</button>
      <div className="plusMinusTotal">1</div>
      <button className="modalBtn">+</button>
    </div>
  );
};

export default PlusMinusBtn;
