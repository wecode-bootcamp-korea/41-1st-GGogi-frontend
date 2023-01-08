import React from 'react';
import OrderProduct from './component/orderList/OrderProduct';
import OrdererInfo from './component/ordererInfo/OrdererInfo';
import OrderAddress from './component/ordererInfo/OrderAddress';
import './Payment.scss';
import HowToPay from './component/howToPay/HowToPay';
import PersonalInfo from './component/personalInfo/PersonalInfo';

const Payment = () => {
  return (
    <div className="payment">
      <h1 className="paymentTitle">주문서</h1>
      <div className="PaymentComponentSection">
        <OrderProduct />
        <OrdererInfo />
        <OrderAddress />
        <HowToPay />
        <PersonalInfo />
      </div>
      <div className="paymentBtnSection">
        <button className="paymentBtn">49310원 결제하기</button>
        <div className="paymentInfo">
          [주문완료]상태일 경우에만 주문 취소 가능합니다.
          <br />
          미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.
          <br />
          배송 불가 시, 결제수단으로 환불됩니다. 일부 또는 전체 상품이 품절 등의
          사유로 배송되지 못할 경우, 신속하게 환불해 드리겠습니다.
          <br />
          카카오페이, 토스, 네이버페이, 페이코 결제 시 결제하신 수단으로만
          환불됩니다.
        </div>
      </div>
    </div>
  );
};

export default Payment;