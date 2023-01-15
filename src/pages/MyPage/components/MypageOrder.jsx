import React, { useState } from 'react';
import './MypageOrder.scss';

const MypageOrder = ({ orderList }) => {
  return (
    <div className="mypageOrder">
      <div className="ordersHaader">
        <div className="orderHaader">
          <span className="orderManagement">주문 내역</span>
          <span className="orderManagementInfo">
            최대 지난 3년간의 주문 내역까지 확인할 수 있어요
          </span>
        </div>
        <div />
      </div>
      <div className="staticHeader">
        <div className="staticHead">주문 내역 목록</div>
        <div className="staticHeadItem">주문내역 상세보기 ></div>
      </div>
      <div>
        {orderList &&
          orderList.map(
            (
              { orderNum, orderStatus, productName, thumbnailImage, price },
              idx
            ) => {
              return (
                <div key={idx} className="getCartData">
                  <div className="cartItemListDiv">
                    <img className="orderImg" src={thumbnailImage} />
                    <div>
                      <div className="cartItemListDiv">
                        <div className="orderFontSize">상품명 : </div>
                        <div className="getCartItem">{productName}</div>
                      </div>
                      <div className="cartItemListDiv">
                        <div className="orderFontSize">주문번호 : </div>
                        <div className="getCartItem">{orderNum}</div>
                      </div>
                      <div className="cartItemListDiv">
                        <div className="orderFontSize">결제방법 : </div>
                        <div className="getCartItem">적립금 차감</div>
                      </div>
                      <div className="cartItemListDiv">
                        <div className="orderFontSize">결제금액 : </div>
                        <div className="getCartItem">
                          {parseInt(price).toLocaleString()}원
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="orderDone">{orderStatus}</div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default MypageOrder;
