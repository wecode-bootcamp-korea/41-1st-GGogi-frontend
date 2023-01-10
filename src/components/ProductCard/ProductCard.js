import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingModal from '../../components/ShoppingModal/ShoppingModal';
import shoppingCart from '../../assets/images/shoppingCart.svg';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [shoppingModal, setShoppingModal] = useState();
  const { image_url, name, price } = product;
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/productdetail/${id}`);
  };
  const isShoppingModal = (e) => {
    setShoppingModal(!shoppingModal);
  };

  return (
    <div className="productCard">
      <img
        className="productImg"
        src={image_url}
        alt="productImg"
        onClick={() => showProduct(product.id)}
      />
      <button className="shoppingCartBtn" onClick={isShoppingModal}>
        <img className="shoppingCart" src={shoppingCart} alt="shoppingCart" />
      </button>
      <div className="productInfo">
        <h3 className="productName">{name}</h3>
        <div className="contentRow">
          {price}
          <span> 원</span>
        </div>
      </div>
      {shoppingModal ? (
        <ShoppingModal product={product} isShoppingModal={isShoppingModal} />
      ) : null}
    </div>
  );
};

export default ProductCard;
