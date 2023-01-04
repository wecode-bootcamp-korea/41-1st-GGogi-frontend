import React from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CartProductList.scss';

const CartProductList = () => {
  return (
    <div className="cartProductList">
      <div className="productList">
        <BsCheckCircleFill className="checkIcon" />
        {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
        <BsCheckCircle className="uncheckIcon" /> */}
        <img
          className="cartProductImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwhdYPTlIUN1PBNCr36f5sH6utDwBtUN_Gw&usqp=CAU"
          alt="음식사진1"
        />
        <p className="productName">[연세우유 X 마켓컬리] 전용목장우유 900ml</p>
        <button className="wating">버튼</button>
        <span className="price">2,070원</span>
        <button className="deleteBtn">X</button>
      </div>
    </div>
  );
};

export default CartProductList;
