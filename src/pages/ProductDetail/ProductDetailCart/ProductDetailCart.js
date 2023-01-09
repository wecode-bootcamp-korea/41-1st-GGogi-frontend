import React from 'react';
import './ProductDetailCart.scss';
import PlusMinusBtn from '../../../components/PlusMinusBtn/PlusMinusBtn';
import { VscHeart } from 'react-icons/vsc';
import { BsBell } from 'react-icons/bs';

const ProductDetailCart = ({ product }) => {
  return (
    <div className="productDetailCart">
      <div className="tableRow">
        <div className="tableHead">배송</div>
        <div className="tableBody">
          <div className="detailCartCount">
            <div className="detailCartCountName">{product.name} </div>
            <div className="detailCartCountBottom">
              <div className="detailCartCountBtn">
                <PlusMinusBtn product={product} />
              </div>
              <div className="detailCartCountPrice">{product.price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailCartTotal">
        <div className="detailCartTotalTop">총 상품금액:</div>
        <div className="detailCartTotalPrice">{product.price}</div>
      </div>
      <div className="detailCartTotalBtn">
        <VscHeart className="cartIcon" />
        <BsBell className="cartIcon" />
        <button className="cart">장바구니 담기</button>
      </div>
    </div>
  );
};

export default ProductDetailCart;
