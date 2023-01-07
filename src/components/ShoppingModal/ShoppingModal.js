import React from 'react';
import PlusMinusBtn from '../PlusMinusBtn/PlusMinusBtn';
import './ShoppingModal.scss';

const ShoppingModal = ({ product, isShoppingModal }) => {
  return (
    <div className="shoppingModal">
      <div className="shoppingModalTop">
        <div className="shoppingModalName">{product.title}</div>
        <div className="shoppingModalCount">
          <div className="shoppingModalPrice">{product.price}원</div>
          <PlusMinusBtn />
        </div>
      </div>
      <div className="shoppingModalMiddle">
        <div className="shoppingModalTotal">
          <span>합계</span>
          <div className="modalTotalPrice">{product.price}원</div>
        </div>
      </div>
      <div className="shoppingModalBottom">
        <button className="cancelShoppingModalBtn" onClick={isShoppingModal}>
          취소
        </button>
        <button className="addShoppingModalBtn">장바구니 담기</button>
      </div>
    </div>
  );
};

export default ShoppingModal;
