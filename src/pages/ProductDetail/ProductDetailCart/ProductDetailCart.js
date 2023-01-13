import React, { useState } from 'react';
import './ProductDetailCart.scss';
import { VscHeart } from 'react-icons/vsc';
import { BsBell } from 'react-icons/bs';

const ProductDetailCart = ({ product }) => {
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
  const addDetailCart = (e) => {
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
      .then();
  };

  return (
    <div className="productDetailCart">
      <div className="tableRow">
        <div className="tableHead">배송</div>
        <div className="tableBody">
          <div className="detailCartCount">
            <div className="detailCartCountName">{name}</div>
            <div className="detailCartCountBottom">
              <div className="detailCartCountBtn">
                <div className="plusMinusBtn">
                  <button className="modalBtn" onClick={minusBtn}>
                    -
                  </button>
                  <div className="plusMinusTotal">{quantity}</div>
                  <button className="modalBtn" onClick={plusBtn}>
                    +
                  </button>
                </div>
              </div>
              <div className="detailCartCountPrice">
                {parseInt(price).toLocaleString()}원
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailCartTotal">
        <div className="detailCartTotalTop">총 상품금액:</div>
        <div className="detailCartTotalPrice">
          {(parseInt(quantity) * parseInt(price)).toLocaleString()}원
        </div>
      </div>
      <div className="detailCartTotalBtn">
        <VscHeart className="cartIcon" />
        <BsBell className="cartIcon" />
        <button className="cart" onClick={addDetailCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCart;
