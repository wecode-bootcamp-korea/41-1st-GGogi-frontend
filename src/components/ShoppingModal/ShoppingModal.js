import React from 'react';
import './ShoppingModal.scss';

const ShoppingModal = () => {
  return (
    <div className="ShoppingModal">
      <div className="ModalTop">
        <div>[버블몽키]캔디밤 솰라사ㅗㄹ라</div>
        <div>
          <div>2900원</div>
          <div>- 수량 +</div>
        </div>
      </div>

      <div className="ModalMiddle">
        <div>
          <div>합계</div>
          <div>6900원</div>
        </div>
        <div>로그인 후, 회원가입 적립혜택 제공</div>
      </div>
      <div className="ModalBottom">
        <div>취소</div>
        <div>장바구니 담기</div>
      </div>
    </div>
  );
};

export default ShoppingModal;
