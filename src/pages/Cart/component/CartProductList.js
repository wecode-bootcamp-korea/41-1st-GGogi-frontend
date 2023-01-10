import { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import PlusMinusBtn from './../../../components/PlusMinusBtn/PlusMinusBtn';
import './CartProductList.scss';

const CartProductList = ({ cartList, setCartList }) => {
  console.log(cartList);
  return (
    <div className="cartProductList">
      {/* cart 로 이름 바꾸기 */}
      {cartList.map((cart) => {
        const { cartId, price, productName, quantity, thumbnailImage } = cart;
        return (
          <div key={cartId} className="productList">
            <BsCheckCircleFill className="checkIcon" />
            {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
          <BsCheckCircle className="uncheckIcon" /> */}
            <img
              className="cartProductImg"
              src={thumbnailImage}
              alt="음식사진1"
            />
            <p className="productName">{productName}</p>
            {/* [Todo] 버튼 컴포넌트 merge되면 사용 예정 */}
            <PlusMinusBtn quantity={quantity} />
            <span className="price">{price}원</span>
            <button className="deleteBtn">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
