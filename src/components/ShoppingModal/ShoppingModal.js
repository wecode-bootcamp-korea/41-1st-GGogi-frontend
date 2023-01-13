import React, { useState } from 'react';
import AlertModal from '../../components/AlertModal/AlertModal';
import './ShoppingModal.scss';

const ShoppingModal = ({ product, isShoppingModal }) => {
  const [quantity, setQuantity] = useState(1);
  const { id, name, price } = product;

  const plusBtn = () => {
    setQuantity(quantity + 1);
  };
  const minusBtn = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addModalCart = (e) => {
    fetch(`http://10.58.52.62:3000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        productId: id,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'CARTS_CREATED_SUCCESS') {
          alert('장바구니에 추가 완료');
          isShoppingModal();
        } else {
          alert('장바구니에 추가 실패!');
        }
      });
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
            <button className="modalBtn" onClick={minusBtn}>
              -
            </button>
            <div className="plusMinusTotal">{quantity}</div>
            <button className="modalBtn" onClick={plusBtn}>
              +
            </button>
          </div>{' '}
        </div>
      </div>
      <div className="shoppingModalMiddle">
        <div className="shoppingModalTotal">
          <span>합계</span>
          <div className="modalTotalPrice">
            {(parseInt(quantity) * parseInt(price)).toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="shoppingModalBottom">
        <button className="cancelShoppingModalBtn" onClick={isShoppingModal}>
          취소
        </button>
        <button className="addShoppingModalBtn" onClick={addModalCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default ShoppingModal;
