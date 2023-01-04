import React from 'react';
import './PlusMinusBtn.scss';

const PlusMinusBtn = () => {
  return (
    <div className="plusMinusBtn">
      <button className="ModalBtn">-</button>
      <div className="plusMinusTotal">1</div>
      <button className="ModalBtn">+</button>
    </div>
  );
};

export default PlusMinusBtn;
