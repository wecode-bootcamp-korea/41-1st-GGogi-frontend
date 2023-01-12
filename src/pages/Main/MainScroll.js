import React, { useState } from 'react';
import './MainScroll.scss';
import beef2 from '../../../src/assets/images/beef2.jpg';
import chicken2 from '../../../src/assets/images/chicken2.jpg';
import pork2 from '../../../src/assets/images/pork2.jpg';
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
        <img src={beef2} alt="beefImg" className="mainScrollImg" />
        <img src={chicken2} alt="chickenImg" className="mainScrollImg" />
        <img src={pork2} alt="ductImg" className="mainScrollImg" />
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
