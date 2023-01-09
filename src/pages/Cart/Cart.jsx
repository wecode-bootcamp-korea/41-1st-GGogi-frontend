import React from 'react';
import CartProduct from './component/CartProduct';
import CartInfo from './component/CartInfo';
import './Cart.scss';

const Cart = ({ cartList, setCartList, userAddress, setUserAddress }) => {
  return (
    <div className="cart">
      <h1 className="header">장바구니</h1>
      <div className="cartWrapper">
        <CartProduct cartList={cartList} setCartList={setCartList} />
        <CartInfo
          cartList={cartList}
          setCartList={setCartList}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
      </div>
    </div>
  );
};

export default Cart;
