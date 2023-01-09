import React, { useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CheckBtn.scss';

const CheckBtn = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickChangeIcon = (e) => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
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
