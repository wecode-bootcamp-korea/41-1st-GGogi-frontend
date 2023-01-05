import React from 'react';
import './Navsearchline.scss';
import Pin from '../../assets/images/pin.png';
import Heart from '../../assets/images/heart.png';
import Cart from '../../assets/images/shoppingCart.png';

const Navsearchline = () => {
  return (
    <div className="navSearchLine">
      <div className="logo">
        <span className="navMarketKurlyEg">kurly</span>
        <span className="navMarketKurlyKr">마켓컬리</span>
      </div>

      <div className="navSearchBar">
        <input
          className="searchBar"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <span>
          <i
            className="fa-solid fa-magnifying-glass navMagnifyingGlassIcon"
            alt="magnifying glass"
          />
        </span>
      </div>

      <div className="navFontIcon">
        <img
          src={Pin}
          className="navLocationPinIcon"
          alt="navLocationPinIcon"
        />
        <img src={Heart} className="navHeartIcon" alt="navHeartIcon" />
        <img src={Cart} className="navCartIcon" alt="navCartIcon" />
      </div>
    </div>
  );
};

export default Navsearchline;
