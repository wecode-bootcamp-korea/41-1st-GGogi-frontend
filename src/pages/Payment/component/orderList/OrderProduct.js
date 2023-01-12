import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ShowOrderList from './showOrderList';

import './OrderProduct.scss';

const OrderProduct = ({ cartProducts, convertPrice }) => {
  const [clickArrowIcon, setClickArrowIcon] = useState(false);
  console.log(cartProducts);
  const onClickArrowIcon = () => {
    setClickArrowIcon(!clickArrowIcon);
  };

  // const showWhatYouOrder = (
  //   //[Todo] 상품 리스트 목록이 1개일 때와 여러 개일 때 구분할 것

  // );

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
          <ShowOrderList
            cartProducts={cartProducts}
            convertPrice={convertPrice}
          />
        ) : (
          <p className="reperesnetTitle">
            {cartProducts[0].price && cartProducts[0].productName} 외&nbsp;
            {cartProducts && cartProducts.length - 1}개의 상품을 주문합니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderProduct;
