import React from 'react';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import { MdShare } from 'react-icons/md';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetailImg">사진</div>
      <section className="productDetailInfo">
        <div className="productDetailName">
          <div className="productDetailNameTop">샛별배송</div>
          <div className="productDetailNameMiddle">
            <div className="productDetailNameMiddleL">
              [kF365] 양념 소불고기 1kg (냉장)
            </div>
            <MdShare className="productDetailNameMiddleR" />
          </div>
        </div>
        <div className="productDetailPrice">18,990원</div>

        <ProductDetailInfo />
      </section>
    </div>
  );
};

export default ProductDetail;
