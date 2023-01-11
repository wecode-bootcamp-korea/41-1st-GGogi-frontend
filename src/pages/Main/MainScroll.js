import React, { useState } from 'react';
import './MainScroll.scss';
import beef from '../../../src/assets/images/beef.jpg';
import chicken1 from '../../../src/assets/images/chicken1.jpg';
import duck from '../../../src/assets/images/duck.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
function MainScroll() {
  const [slidePx, setSlidePx] = useState(0);
  const widthPx = 1920;

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + widthPx);
  };

  const toNext = () => {
    slidePx > -(widthPx * 2) && setSlidePx(slidePx - widthPx);
  };

  return (
    <div className="mainScroll">
      <div
        className="mainScrollBox"
        style={{
          transform: `translateX(${slidePx}px)`,
          transition: '0.5s ease',
        }}
      >
        <img src={beef} alt="beefImg" className="mainScrollImg" />
        <img src={chicken1} alt="chickenImg" className="mainScrollImg" />
        <div src={duck} className="mainScrollImg" />
      </div>

      <div>
        <div className="mainScrollBtn">
          <BsChevronLeft className="mainScrollBtnLeft" onClick={toPrev} />
          <BsChevronRight className="mainScrollBtnRight" onClick={toNext} />
        </div>
      </div>
    </div>
  );
}

export default MainScroll;
