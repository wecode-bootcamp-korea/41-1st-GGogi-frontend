import React from 'react';
import CartProductList from './CartProductList';
import './CartProduct.scss';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartProduct = () => {
  return (
    <div className="cartProduct">
      <div className="checkSection">
        <BsCheckCircleFill className="checkIcon" />
        {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
        <BsCheckCircle className="uncheckIcon" /> */}
        <span className="wholeCheckWord">전체선택</span>
        <div className="checkCountSection">
          <span className="checkedQuantity">0</span>
          <span className="slash">/</span>
          <span className="wholeQuantity">4</span>
        </div>
        <div className="stick">|</div>
        <div className="deleteBtnSection">
          <button className="deleteSelectionBtn">선택삭제</button>
        </div>
      </div>
      <hr className="cartLine" />
      <div className="cartTitleSection">
        <AiOutlineShoppingCart className="cartIcon" />
        <span className="wholeProduct">전체상품</span>
      </div>
      <CartProductList />
    </div>
  );
};

export default CartProduct;
