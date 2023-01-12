import React, { useEffect, useState } from 'react';
import './PaymentAmount.scss';

const PaymentAmount = () => {
  const [paymentAmountList, setPaymentAmountList] = useState([]);

  useEffect(() => {
    fetch('/data/paymentAmountData.json')
      .then((result) => result.json())
      .then((data) => setPaymentAmountList(data));
  }, []);

  return (
    <div className="paymentAmount">
      <h2 className="paymentAmountTitle"> 결제 금액</h2>
      <div className="paymentAmountInfo">
        {paymentAmountList.map((item) => {
          const { id, title, price } = item;
          return (
            <div className="paymentAmountItem" key={id}>
              <span className="AmountTitle">{title}</span>
              <span className="paymentAmountNum">{price}원</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentAmount;
