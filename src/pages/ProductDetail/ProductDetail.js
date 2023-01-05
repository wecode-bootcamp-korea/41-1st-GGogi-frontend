import React from 'react';
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
            <div className="productDetailNameMiddleR">공유버튼</div>
          </div>
        </div>
        <div className="productDetailPrice">18,990원</div>
        <div className="productDetailInfo">상세정보표</div>
        <div className="productDetailCard">상품추가카드</div>
      </section>
    </div>
  );
};

export default ProductDetail;
