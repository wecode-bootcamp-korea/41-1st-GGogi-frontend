import React from 'react';
import './CartInfoPrice.scss';

const CartInfoPrice = ({ calTotalPrice }) => {
  const CART_PRICEINFO = [
    {
      id: 1,
      name: '상품금액',
      price: parseInt(calTotalPrice()).toLocaleString(),
    },

    {
      id: 2,
      name: '배송비',
      price: 0,
    },
    {
      id: 3,
      name: '결제예정금액',
      price: parseInt(calTotalPrice()).toLocaleString(),
    },
  ];

  return (
    <div className="cartInfoPrice">
      {CART_PRICEINFO.map((item) => {
        const { id, name, price } = item;
        return (
          <div key={id} className="priceInfoSection">
            <span className="priceTitle">{name}</span>
            <div className="priceSection">
              <span className="priceInfo">{price}</span>
              <span className="priceUnit"> 원</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartInfoPrice;
