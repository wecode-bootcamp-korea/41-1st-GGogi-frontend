import React from 'react';
import './SlideCard.scss';

const SlideCard = () => {
  return (
    <div className="slideCard">
      <div className="slideCardContent">
        <div className="slideCardInfo">
          <div className="slideCardInfoTitle">설 연휴 선물 준비</div>
          <div className="slideCardInfoContent">소고기 완전 정복!</div>
          <div className="slideCardInfoDate">날짜</div>
        </div>

        <div className="slideCardImg" />
      </div>
    </div>
  );
};

export default SlideCard;
