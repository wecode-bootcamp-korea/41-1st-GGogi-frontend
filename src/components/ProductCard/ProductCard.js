import React from 'react';
import shoppingCart from '../../assets/images/shoppingCart.svg';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img className="productImg" src={product.img} alt="productImg" />
      <button className="shoppingCartBtn">
        <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
      </button>
      <div className="productInfo">
        <h3 className="productName">{product.title}</h3>
        <div className="contentRow">
          {product.price}
          <span> 원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
