import React, { useState, useEffect } from 'react';
import CartProduct from './component/CartProduct';
import CartInfo from './component/CartInfo';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [selectedItemIdArr, setSelectedItemIdArr] = useState([]);
  const [address, setAddress] = useState();

  useEffect(() => {
    fetch('/data/cartList.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        setCartList(data);
      });
  }, []);

  let totalPriceArr = [];
  if (cartList.length === 0) return;
  for (let i = 0; i < cartList.length; i++) {
    totalPriceArr.push(cartList[i].quantity * cartList[i].price);
  }
  const calTotalPrice = totalPriceArr.reduce((a, b) => a + b);

  // useEffect(() => {
  //   fetch('http://10.58.52.62:3000/carts', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('Token'),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { address, cartList } = data;
  //       setAddress(address);
  //       setCartList(cartList);
  //     });
  // }, []);

  // 주문하기 버튼 OnClick
  const handleOrderBtn = (e) => {
    e.preventDefault();
    // 주문 필요한 상품 백엔드로 송신
    console.log(selectedItemIdArr);
  };

  const handleCheckBtn = (cartId) => {
    const hasSelectedCartId = selectedItemIdArr.includes(cartId);
    if (hasSelectedCartId) {
      setSelectedItemIdArr(selectedItemIdArr.filter((item) => item !== cartId));
    } else {
      setSelectedItemIdArr(selectedItemIdArr.concat(cartId));
    }
  };

  return (
    <div className="cart">
      <h1 className="header">장바구니</h1>
      <div className="cartWrapper">
        <CartProduct
          cartList={cartList}
          setCartList={setCartList}
          handleCheckBtn={handleCheckBtn}
          selectedItemIdArr={selectedItemIdArr}
          setSelectedItemIdArr={setSelectedItemIdArr}
        />
        <CartInfo
          address={address}
          cartList={cartList}
          setCartList={setCartList}
          handleOrderBtn={handleOrderBtn}
          calTotalPrice={calTotalPrice}
        />
      </div>
    </div>
  );
};

export default Cart;
