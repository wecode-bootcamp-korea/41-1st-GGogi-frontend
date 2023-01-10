import React, { useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CheckBtn.scss';

const CheckBtn = ({ cartId, handleCheckBtn }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickChangeIcon = (e) => {
    handleCheckBtn(cartId);
    setIsChecked((prev) => !prev);
  };
  return (
    <div key={cartId} className="checkBtn" onClick={onClickChangeIcon}>
      {isChecked ? (
        <BsCheckCircleFill className="checkBtnTrue" />
      ) : (
        <BsCheckCircle className="checkBtnFalse" />
      )}
    </div>
  );
};

export default CheckBtn;
