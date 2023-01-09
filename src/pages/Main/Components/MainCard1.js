import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './MainCard1.scss';

const MainCard1 = () => {
  return (
    <div className="mainCard1">
      <div>최대 80% 선물 빅세일</div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default MainCard1;
