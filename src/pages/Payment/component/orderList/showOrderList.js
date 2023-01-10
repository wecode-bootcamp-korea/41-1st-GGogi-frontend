import React from 'react';
import './showOrderList.scss';

const ShowOrderList = () => {
  return (
    <div className="showOrderList">
      <img
        className="orderProductImage"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/%EB%B3%B4%EC%84%B1%EB%85%B9%EB%8F%88_%EC%8A%A4%ED%82%A8%ED%8C%A9_%EC%98%88%EC%8B%9C_%281%29.jpg"
        alt="상품 이미지"
      />
      <div className="orderProductName">
        [KF365] 한돈 삼겹살 구이용 1kg(냉장)
      </div>
      <span className="orderQuantity">1개</span>
      <span className="orderItemPrice">24900원</span>
    </div>
  );
};

export default ShowOrderList;
