import React from 'react';
import { useState } from 'react';
import './MypageBtn.scss';

const MypageBtn = ({ id, name, link, renderFn }) => {
  const [clickevent, setClickevent] = useState({});

  const changeBtnColor = () => {
    setClickevent(!clickevent);
  };

  const [changedBtnColor, SetChangedBtnColor] = useState(false);

  const changedBtnColors = (e) => {
    if (changedBtnColor === true) {
      SetChangedBtnColor(!changedBtnColor);
    } else SetChangedBtnColor(!changedBtnColor);
  };

  return (
    <button
      className={changedBtnColor === true ? 'clickMypageBtn' : 'mypageBtn'}
      name={link}
      onClick={(e) => renderFn(e)}
      key={id}
    >
      <div className="btnfontsize15">{name}</div>
      <div className="btnfontsize15">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </button>
  );
};

export default MypageBtn;
