import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './MainCard.scss';

const MainCard = () => {
  return (
    <div className="mainCard">
      <div className="mainCardTitle">이 상품 어때요?</div>
      <div className="mainCardSlide">
        <div className="mainCardSlideItem">hi</div>
        <div className="mainCardSlideItem">hi</div>
        <div className="mainCardSlideItem">hi</div>
        <div className="mainCardSlideItem">hi</div>
      </div>
      <div className="mainCardSlideBtn">
        <RiArrowLeftSLine className="mainCardSlideBtnLeft" />
        <RiArrowRightSLine className="mainCardSlideBtnRight" />
      </div>
    </div>
  );
};

export default MainCard;
