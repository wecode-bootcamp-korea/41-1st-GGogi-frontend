import React, { useState, useEffect } from 'react';
import CartProduct from './component/CartProduct';
import CartInfo from './component/CartInfo';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [address, setAddress] = useState();
  useEffect(() => {
    fetch('http://10.58.52.62:3000/cart', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { address, cartList } = data;
        setAddress(address);
        setCartList(cartList);
      });
  }, []);

  return (
    <div className="cart">
      <h1 className="header">장바구니</h1>
      <div className="cartWrapper">
        <CartProduct cartList={cartList} setCart={setCartList} />
        <CartInfo address={address} cartList={cartList} setCart={setCartList} />
      </div>
    </div>
  );
};

export default Cart;
