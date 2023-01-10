import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import './OrderAddress.scss';

const OrderAddress = () => {
  const [showMsg, setShowMsg] = useState(false);

  const onClickShowMsg = () => {
    setShowMsg((prev) => !prev);
  };

  const onClickCloseMsg = () => {
    setShowMsg(false);
  };

  const showAddressInfoMsg = (
    <div className="changeAddressInfoWindow">
      장바구니, 홈에서
      <MdOutlineClose className="closeWindow" onClick={onClickCloseMsg} />
      배송지를 변경할 수 있어요.
    </div>
  );
  return (
    <div className="orderAddress">
      <div className="titleSection">
        <h2 className="orderAddressTitle">주문자 정보</h2>
        <span className="changeAddressInfo" onClick={onClickShowMsg}>
          배송지 변경 안내 <BsQuestionCircle className="questionIcon" />
        </span>
      </div>
      {showMsg && showAddressInfoMsg}
      <div className="orderAddressSection">
        <span className="addressTitle">배송지</span>
        <div className="addressInfo">
          <span className="defaultAddress">기본배송지</span>
          <p className="userAddress">
            경기도 ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 (ㅇㅇ아파트) 0000-0000
          </p>
        </div>
      </div>
      <div className="orderAddressSection">
        <span className="addressTitle">상세정보</span>
        <div className="anotherAddress">
          <p className="plzInputAddress">받으실 분 정보를 입력해주세요. </p>
          <button className="anotherAddressInput">입력</button>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
