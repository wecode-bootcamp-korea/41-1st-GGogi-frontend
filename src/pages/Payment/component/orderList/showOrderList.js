import React from 'react';
import './showOrderList.scss';

const ShowOrderList = ({ cartProducts }) => {
  return (
    <div className="orderList">
      {cartProducts.map((product) => {
        const { cartId, price, productName, quantity, thumbnailImage } =
          product;
        return (
          <div className="showOrderList" key={cartId}>
            <img
              className="orderProductImage"
              src={thumbnailImage}
              alt="상품 이미지"
            />
            <div className="orderProductName">{productName}</div>
            <span className="orderQuantity">{quantity}개</span>
            <span className="orderItemPrice">
              {parseInt(price * quantity).toLocaleString} 원
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ShowOrderList;
