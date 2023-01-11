import React from 'react';

const MainSlide = () => {
  const [slidePx, setSlidePx] = useState(0);
  const widthPx = 1920;

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + widthPx);
  };

  const toNext = () => {
    slidePx > -(widthPx * 2) && setSlidePx(slidePx - widthPx);
  };
  return;
};

export default MainSlide;
