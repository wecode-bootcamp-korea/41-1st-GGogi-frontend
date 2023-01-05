import React from 'react';
import './ProductDetailCart.scss';
import PlusMinusBtn from '../../../components/PlusMinusBtn/PlusMinusBtn';

const ProductDetailCart = () => {
  return (
    <div className="productDetailCart">
      <div className="tableRow">
        <div className="tableHead">배송</div>
        <div className="tableBody">
          <div className="detailCartCount">
            <div className="detailCartCountName">
              [KF365] 양념 소불고기 1kg (냉장)
            </div>
            <div className="detailCartCountBottom">
              <div className="detailCartCountBtn">
                <PlusMinusBtn />
              </div>
              <div className="detailCartCountPrice">18,990원</div>
            </div>
          </div>
        </div>
      </div>
      <div>18,990원</div>
      <div>버튼</div>
    </div>
  );
};

export default ProductDetailCart;
