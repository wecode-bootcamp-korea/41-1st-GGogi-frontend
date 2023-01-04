import React from 'react';
import './ShoppingModal.scss';

const ShoppingModal = () => {
  return (
    <div className="shoppingModal">
      <div className="shoppingModalTop">
        <div className="shoppingModalName">[예찬원] 사골 미역국</div>
        <div className="shoppingModalCount">
          <span className="shoppingModalPrice">29,000원</span>
          <input
            className="modalTotalInput"
            type="number"
            placeholder="0"
            min="0"
          />
        </div>
      </div>
      <div className="shoppingModalMiddle">
        <div className="shoppingModalTotal">
          <span>합계</span>
          <div className="modalTotalPrice">29,000원</div>
        </div>
      </div>
      <div className="shoppingModalBottom">
        <button className="cancelShoppingModalBtn">취소</button>
        <button className="addShoppingModalBtn">장바구니 담기</button>
      </div>
    </div>
  );
};

export default ShoppingModal;
