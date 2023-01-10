import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './MainCard.scss';

const MainCard = () => {
  return (
    <div className="mainCard">
      <div>최대 80% 선물 빅세일</div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default MainCard;
