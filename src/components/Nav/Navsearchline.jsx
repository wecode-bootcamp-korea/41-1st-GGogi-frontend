import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pin from '../../assets/images/pin.png';
import Heart from '../../assets/images/heart.png';
import Cart from '../../assets/images/shoppingCart.png';
import './Navsearchline.scss';

const Navsearchline = () => {
  const [reset, setReset] = useState('');
  const navigatre = useNavigate();
  const goToMain = () => navigatre('./');

  const handleSearchValue = (e) => {
    setReset(e.target.value);
  };

  const getSearchValue = (e) => {
    if (e.key === 'Enter') {
      const searchKeyword = reset;
      navigatre(`/search?keyword=${searchKeyword}`);
      setReset('');
    }
  };

  return (
    <div className="navSearchLine">
      <div className="logo" onClick={goToMain}>
        <span className="navMarketKurlyEg">GGOGI</span>
        <span className="navMarketKurlyKr">마켓꼬기</span>
      </div>

      <div className="navSearchBar">
        <input
          className="searchBar"
          type="text"
          placeholder="검색어를 입력해주세요"
          value={reset}
          onChange={handleSearchValue}
          onKeyPress={(e) => getSearchValue(e)}
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
