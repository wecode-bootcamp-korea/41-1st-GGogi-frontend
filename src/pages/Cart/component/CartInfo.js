import React from 'react';
import './CartInfo.scss';
import CartInfoAddress from './CartInfoAddress';
import CartInfoPrice from './CartInfoPrice';

const CartInfo = () => {
  return (
    <div className="cartInfo">
      <CartInfoAddress />
      <CartInfoPrice />
      <button className="orderBtn">주문하기</button>
    </div>
  );
};

export default CartInfo;
