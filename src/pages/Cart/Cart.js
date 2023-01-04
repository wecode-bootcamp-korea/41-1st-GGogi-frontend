import React from 'react';
import CartProduct from './component/CartProduct';
import CartInfo from './component/CartInfo';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="header">장바구니</h1>
      <div className="cartWrapper">
        <CartProduct />
        <CartInfo />
      </div>
    </div>
  );
};

export default Cart;
