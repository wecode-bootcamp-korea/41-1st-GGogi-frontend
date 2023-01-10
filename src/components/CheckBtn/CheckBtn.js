import React, { useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CheckBtn.scss';

const CheckBtn = ({}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickChangeIcon = (e) => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="checkBtn" onClick={onClickChangeIcon}>
      {isChecked ? (
        <BsCheckCircleFill className="checkBtnTrue" />
      ) : (
        <BsCheckCircle className="checkBtnFalse" />
      )}
    </div>
  );
};

export default CheckBtn;
