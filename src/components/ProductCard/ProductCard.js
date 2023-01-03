import React from 'react';
import shoppingCart from '../../assets/images/shoppingCart.svg';
import productImg from '../../assets/images/productImg.jpeg';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <div className="productCard">
      <img className="productImg" src={productImg} alt="productImg" />
      <button className="shoppingCartBtn">
        <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
      </button>
      <div className="productInfo">
        <h3 className="productName">[어부네] 병어 2종 (택 1) (냉동)</h3>
        <div className="contentRow">9900원</div>
        <div className="reviewCount">
          <div>image</div> <div>후기</div>
          <span>14개</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
