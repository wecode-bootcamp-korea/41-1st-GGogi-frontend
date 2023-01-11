import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from './component/CartProduct';
import CartInfo from './component/CartInfo';
import './Cart.scss';

const Cart = ({ cartList, setCartList }) => {
  const [selectedItemIdArr, setSelectedItemIdArr] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [address, setAddress] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.52.62:3000/carts', {
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

  console.log(cartList);
  const calTotalPrice = () => {
    let totalPriceArr = [];
    if (cartList) {
      for (let i = 0; i < cartList.length; i++) {
        totalPriceArr.push(cartList[i].quantity * cartList[i].price);
      }
      return totalPriceArr.reduce((a, b) => a + b, 0);
    } else return 0;
  };

  const convertPrice = (price) => {
    return price.toLocaleString();
  };

  // 보낼 값 계산하기
  let orderProductList = [];
  const orderProduct = () => {
    for (let i = 0; i < selectedItemIdArr.length; i++) {
      orderProductList.push(
        cartList.find((el) => el.cartId === selectedItemIdArr[i])
      );
    }
    return orderProduct;
  };

  // 주문하기 버튼 OnClick
  const handleOrderBtn = (e) => {
    e.preventDefault();
    orderProduct();
    console.log(orderProductList);
    orderProductList.map((el) => {
      const { cartId, productId, quantity } = el;
      console.log(cartId, productId, quantity);
      fetch('http://10.58.52.62:3000/carts', {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('Token'),
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          productId: productId,
          cartId: cartId,
          quantity: quantity,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === 'UPDATE_ITEM_QUANTITY_SUCCESS') {
            navigate('/order/checkout');
          }
        });
    });

    // 주문 필요한 상품 백엔드로 송신

    console.log(selectedItemIdArr);
  };
  // 버튼을 눌렀을 때 전송해야 할 데이터 담기
  // const onClickSignUp = (e) => {

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
          convertPrice={convertPrice}
        />
        <CartInfo
          address={address}
          cartList={cartList}
          setCartList={setCartList}
          handleOrderBtn={handleOrderBtn}
          calTotalPrice={calTotalPrice}
          convertPrice={convertPrice}
        />
      </div>
    </div>
  );
};

export default Cart;
