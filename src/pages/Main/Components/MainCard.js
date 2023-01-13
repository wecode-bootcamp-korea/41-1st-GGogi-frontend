import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './MainCard.scss';

const MainCard = () => {
  const [productCard, setProductCard] = useState([]);
  const [searchProductCard, setSearchProductCard] = useSearchParams();
  const offset = searchProductCard.get('offset', 0);

  useEffect(() => {
    fetch(`http://15.164.226.7:3000/products?offset=${offset}&limit=4`)
      .then((response) => response.json())
      .then((result) => setProductCard(result));
  }, [offset]);

  const movePage = (pageNumber) => {
    searchProductCard.set('offset', (pageNumber - 1) * 4);
    setSearchProductCard(searchProductCard);
  };

  return (
    <div className="mainCard">
      <div className="mainCardTitle">이 상품 어때요?</div>
      <div className="mainCardSlide">
        {productCard.map((productCard) => (
          <ProductCard
            key={productCard.id}
            className="mainCardSlideItem"
            product={productCard}
          />
        ))}
      </div>
      <div className="mainCardSlideBtn">
        <RiArrowLeftSLine
          className="mainCardSlideBtnLeft"
          onClick={() => movePage(1)}
        />
        <RiArrowRightSLine
          className="mainCardSlideBtnRight"
          onClick={() => movePage(2)}
        />
      </div>
    </div>
  );
};

export default MainCard;
