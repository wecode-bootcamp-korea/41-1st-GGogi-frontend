import React from 'react';
import shoppingCart from '../../assets/images/shoppingCart.svg';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img
        className="productImg"
        src={`https://robohash.org/${product.id}?set=set2&size=180x180`}
        alt="productImg"
      />
      <button className="shoppingCartBtn">
        <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
      </button>
      <div className="productInfo">
        <h3 className="productName">{product.username}</h3>
        <div className="contentRow">
          {product.username}
          <span> 원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
