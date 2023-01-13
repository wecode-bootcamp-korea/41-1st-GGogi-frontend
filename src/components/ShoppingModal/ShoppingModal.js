import React, { useState } from 'react';
import './ShoppingModal.scss';

const ShoppingModal = ({ product, isShoppingModal }) => {
  const { name, price, id } = product;
  const [count, setCount] = useState(1);
  const [modalTotalPrice, setModalTotalPrice] = useState(
    parseInt(price).toLocaleString()
  );

  const plusCount = ({ price }) => {
    setCount(count + 1);
    setModalTotalPrice(price * count);
  };

  const minusCount = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };

  const addShoppingModal = (e) => {
    fetch(`http://10.58.52.62:3000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        productId: id,
        quantity: count,
      }),
    })
      .then((res) => res.json())
      .then();
  };

  return (
    <div className="shoppingModal">
      <div className="shoppingModalTop">
        <div className="shoppingModalName">{name}</div>
        <div className="shoppingModalCount">
          <div className="shoppingModalPrice">
            {parseInt(price).toLocaleString()}원
          </div>
          <div className="plusMinusBtn">
            <button className="modalBtn" onClick={minusCount}>
              -
            </button>
            <div className="plusMinusTotal">{count}</div>
            <button className="modalBtn" onClick={plusCount}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="shoppingModalMiddle">
        <div className="shoppingModalTotal">
          <span>합계</span>
          <div className="modalTotalPrice">{modalTotalPrice}원</div>
        </div>
      </div>
      <div className="shoppingModalBottom">
        <button className="cancelShoppingModalBtn" onClick={isShoppingModal}>
          취소
        </button>
        <button className="addShoppingModalBtn" onClick={addShoppingModal}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default ShoppingModal;
