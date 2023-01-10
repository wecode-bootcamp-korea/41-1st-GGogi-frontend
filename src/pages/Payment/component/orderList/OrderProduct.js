import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ShowOrderList from './showOrderList';

import './OrderProduct.scss';

const OrderProduct = () => {
  const [clickArrowIcon, setClickArrowIcon] = useState(false);

  const onClickArrowIcon = () => {
    setClickArrowIcon(!clickArrowIcon);
  };

  const showWhatYouOrder = (
    //[Todo] 상품 리스트 목록이 1개일 때와 여러 개일 때 구분할 것
    <p> [KF365] 한돈 삼겹살 구이용 1kg (냉장) 외 3개 상품을 주문합니다.</p>
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
        {clickArrowIcon ? <ShowOrderList /> : showWhatYouOrder}
      </div>
    </div>
  );
};

export default OrderProduct;
