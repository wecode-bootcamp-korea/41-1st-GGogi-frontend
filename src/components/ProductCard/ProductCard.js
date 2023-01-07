import React from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingCart from '../../assets/images/shoppingCart.svg';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/productdetail/${id}`);
  };
  const { img, title, price } = product;
  return (
    <div className="productCard">
      <img
        className="productImg"
        src={img}
        alt="productImg"
        onClick={() => showProduct(product.id)}
      />
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
