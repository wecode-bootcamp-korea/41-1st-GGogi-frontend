import React from 'react';
import './CartInfo.scss';
import CartInfoAddress from './CartInfoAddress';
import CartInfoPrice from './CartInfoPrice';

const CartInfo = () => {
  return (
    <div className="cartInfo">
      <CartInfoAddress />
      <CartInfoPrice />
    </div>
  );
};

export default CartInfo;
