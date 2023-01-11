import React from 'react';
import './MypageBtn.scss';

const MypageBtn = ({ id, name, link, renderFn }) => {
  return (
    <button
      className="mypageBtn"
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
