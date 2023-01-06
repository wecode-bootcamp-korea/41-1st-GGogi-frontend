import React from 'react';
import { useState } from 'react';
import './MypageBtn.scss';

const MypageBtn = ({ id, name, link, renderFn }) => {
  const [clickevent, setClickevent] = useState(false);

  const changeBtnColor = () => {
    setClickevent(!state);
  };

  return (
    <button
      className={clickevent.isActive ? 'clickMypageBtn' : 'mypageBtn'}
      name={link}
      onClick={(e) => renderFn(e) && changeBtnColor()}
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
