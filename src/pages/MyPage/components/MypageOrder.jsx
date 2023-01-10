import React, { useState } from 'react';
import './MypageOrder.scss';

const MypageOrder = ({ orderList }) => {
  const [userAddressData, setUserAddressData] = useState([]);

  const userAddressPostData = (e) => {
    e.preventDefault();

    fetch(`http://10.58.52.116:3000/users/mypage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        address: 'update title',
      }),
    })
      .then((response) => response.json())
      .then((userAddress) => setUserAddressData(userAddress.data[0]));
  };
  return (
    <div className="mypageOrder">
      <div className="ordersHaader">
        <div className="orderHaader">
          <span className="orderManagement">주문 내역</span>
          <span className="orderManagementInfo">
            최대 지난 3년간의 주문 내역까지 확인할 수 있어요
          </span>
        </div>
        <div></div>
      </div>
      <div className="staticHeader">
        <div className="staticHead">주문 내역 목록</div>
        <div className="staticHeadItem">주문내역 상세보기 ></div>
      </div>
      <div>
        {orderList &&
          orderList.map(
            (
              { orderNum, productId, orderStatus, productName, thumbnailImage },
              idx
            ) => {
              return (
                <div key={productId} className="getCartData">
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
                        <div className="getCartItem">29,900원</div>
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

const ORDERINFO = [
  {
    id: 1,
    img: './images/gogi.jpg',
    title: '키위새 구이',
    ordernum: '98236456453',
    howorder: '무통장 입금',
    price: '10원',
  },
  {
    id: 2,
    img: './images/gogi.jpg',
    title: '참새 구이',
    ordernum: '349394839',
    howorder: '무통장 입금',
    price: '200원',
  },
  {
    id: 3,
    img: './images/gogi.jpg',
    title: '까마귀 구이',
    ordernum: '8687757767',
    howorder: '무통장 입금',
    price: '3,000원',
  },
];
