import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ShowOrderList from './showOrderList';
import './OrderProduct.scss';

const OrderProduct = ({ cartProducts }) => {
  const [clickArrowIcon, setClickArrowIcon] = useState(false);
  const onClickArrowIcon = () => {
    setClickArrowIcon(!clickArrowIcon);
  };

  const showWhatYouOrder = (
    <p className="reperesnetTitle">
      {cartProducts || cartProducts[0].productName} 외&nbsp;
      {cartProducts && cartProducts.length - 1}개의 상품을 주문합니다.
    </p>
  );
  return (
    <div className="orderProduct">
      <div className="titleSection">
        <h2 className="orderProductTitle">주문 상품</h2>
        {clickArrowIcon ? (
          <IoIosArrowUp className="arrowIcon" onClick={onClickArrowIcon} />
        ) : (
          <IoIosArrowDown className="arrowIcon" onClick={onClickArrowIcon} />
        )}
      </div>
      <div className="orderProductContent">
        {clickArrowIcon ? (
          <ShowOrderList cartProducts={cartProducts} />
        ) : (
          showWhatYouOrder
        )}
      </div>
    </div>
  );
};

export default OrderProduct;
