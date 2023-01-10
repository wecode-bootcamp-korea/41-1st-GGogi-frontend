import React from 'react';
import './slide.scss';

const Slide = ({ count, slideList, slideRef, handleSlider }) => {
  return (
    <>
      <ul ref={slideRef} className="slideWrap">
        {slideList.map((slide) => (
          <li key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </li>
        ))}
      </ul>
      <div className="inner">
        <div className="pagination">
          {slideList.map((button) => (
            <button
              type="button"
              key={button.id}
              onClick={() => {
                handleSlider(button.id);
              }}
              className={button.id === count ? 'active' : ''}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
