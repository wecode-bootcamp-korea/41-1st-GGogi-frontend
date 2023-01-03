import React from 'react';
import './ShoppingModal.scss';

const ShoppingModal = () => {
  return (
    <div className="shoppingModal">
      <div className="shoppingModalTop">
        <div className="shoppingModalName">[예찬원] 사골 미역국</div>
        <div className="shoppingModalCount">
          <div>2900원</div>
          <div>- 수량 +</div>
        </div>
      </div>

      <div className="shoppingModalMiddle">
        <div className="shoppingModalPrice">
          <span>합계</span>
          <div>6900원</div>
        </div>
        <span>로그인 후, 회원가입 적립혜택 제공</span>
      </div>
      <div className="shoppingModalBottom">
        <button>취소</button>
        <button>장바구니 담기</button>
      </div>
    </div>
  );
};

export default ShoppingModal;
