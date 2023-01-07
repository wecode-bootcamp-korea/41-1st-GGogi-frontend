import React from 'react';
import shoppingCart from '../../assets/images/shoppingCart.svg';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="productCard">
      <img className="productImg" src={img} alt="productImg" />
      <button className="shoppingCartBtn">
        <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
      </button>
      <div className="productInfo">
        <h3 className="productName">{title}</h3>
        <div className="contentRow">
          {price}
          <span> 원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
