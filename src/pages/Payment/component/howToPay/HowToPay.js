import React from 'react';
import PaymentAmount from './PaymentAmount';
import './HowToPay.scss';

const HowToPay = ({ userPoint, calTotalPrice }) => {
  return (
    <div className="howToPay">
      <div className="howToPaySection">
        <div className="howToPayWrapper">
          <h2 className="titleSection">쿠폰/적립금</h2>
          <div className="payContentRow">
            <span className="payTitle">쿠폰 적용</span>
            <button className="useCouponBtn">
              사용가능 쿠폰 0장 / 전체 0장
              <span className="downArrowIcon"> ▾</span>
            </button>
          </div>
          <div className="payContentRow">
            <span className="payTitle">적립금 적용</span>
            <div className="usePointSection">
              <input
                type="text"
                className="usePointInput"
                placeholder="0"
                defaultValue={parseInt(userPoint).toLocaleString()}
              />
              <button className="allUseBtn">모두사용</button>
              <div className="pointInfo">
                <p className="availablePointInfo">
                  사용가능 적립금&nbsp;
                  <span className="availablePoint">
                    {userPoint && parseInt(userPoint).toLocaleString()}
                  </span>
                  원
                </p>
                <span className="howToSeePointHistory">
                  적립금 내역 : 마이컬리 - 적립금
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="howToPayWrapper">
          <h2 className="titleSection">결제 수단</h2>
          <div className="payContentRow">
            <span className="payTitle">결제수단 선택</span>
            <div className="methodOfPayment">
              <button className="paybtn creditCard">신용카드</button>
              <button className="paybtn simplePayment">간편결제</button>
              <button className="paybtn phonePayment">휴대폰</button>
            </div>
          </div>
          <p className="paymentInfo">
            ※ 카카오페이, 토스, 네이버페이, 페이코 결제 시 결제하신 수단으로만
            환불되는 점 양해 부탁드립니다.
          </p>
          <p className="paymentInfo">
            ※ 고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
            가입한 토스 페이먼츠의 구매안전(에스크로) 서비스를 이용하실 수
            있습니다.
          </p>
        </div>
      </div>
      <div className="paymentAside">
        <div className="paymentAsideSticky">
          <PaymentAmount calTotalPrice={calTotalPrice} userPoint={userPoint} />
        </div>
      </div>
    </div>
  );
};

export default HowToPay;
