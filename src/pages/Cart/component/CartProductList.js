import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CartProductList.scss';

const CartProductList = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setCartList(data));
  }, []);

  return (
    <div className="cartProductList">
      {cartList.map((item) => {
        return (
          <div key={item.id} className="productList">
            <BsCheckCircleFill className="checkIcon" />
            {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
          <BsCheckCircle className="uncheckIcon" /> */}
            <img
              className="cartProductImg"
              src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
              alt="음식사진1"
            />
            <p className="productName">[연세우유 X 마켓컬리] {item.name}</p>
            <button className="wating">버튼</button>
            <span className="price">{item.username}원</span>
            <button className="deleteBtn">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
