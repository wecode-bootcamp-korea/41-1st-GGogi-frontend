
import React, { useState, useEffect } from 'react';

import './MyPageUserInterface.scss';
import '../../styles/common.scss';

const MyPageUserInterface = ({ name, point }) => {
  const [mypageUserData, setMypageUserData] = useState([]);
  const pointStr = Number(point);
  const [state, setState] = useState([]);
  const pointDeleteDot = Math.floor(pointStr);

  const USERBIGDATA = [
    {
      id: 1,
      title: '적립금',
      point: `${pointDeleteDot} 원`,
      delete: '소멸 예정',
    },
    { id: 2, title: '쿠폰', point: '0 개' },
    { id: 3, title: '나의 컬리스타일', point: '등록하기' },
  ];

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/users/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((response) => response.json())
      .then((data) => setMypageUserData(data.data[0]));
  }, []);

  return (
    <div className="myPageUserInterface">
      <div className="myPageGrid">
        <div className="userInfrm">
          <div className="userProfileName">
            <div className="welcomeUser">
              <p className="welcomeBox">웰컴</p>
            </div>
            <div className="myPageUserName">{name}</div>
          </div>
          <div className="userAccumulate">
            <p>적립 5%</p>
            <p>최초 1회 무료 배송</p>
          </div>
          <div className="userLevel">
            <button className="userlevelBtn">전체등급 보기</button>
            <button className="userlevelBtn">다음 달 예상등급 보기</button>
          </div>
        </div>
        <div className="userReserves">
          {USERBIGDATA.map((list) => {
            return (
              <button
                className="btnWidthColors userReservesCommonPadding "
                key={list.id}
              >
                <div className="kurlyBtnColors">{list.title}</div>
                <div
                  className={
                    list.point === '원'
                      ? 'kurlyBtnPurpleColors marginDown'
                      : 'kurlyBtnPurpleColors marginnthDown'
                  }
                >
                  {list.point === '원' && '0  '}
                  {list.point}
                </div>
                {list.title === '적립금' && (
                  <div className="deletePointColor">{list.delete} 원</div>
                )}
              </button>
            );
          })}
        </div>
        <div className="kurlyPromotion">
          <div className="kurlyPurpleBox">
            <button className="btnWidthColors kurlyPromotionCommonPadding">
              <div className="kurlyBtnColors">
                컬리 퍼플 박스
                <span className="spanArrowColor">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </div>
              <div className="kurlyBtnPurpleColors">알아보기</div>
            </button>
          </div>
          <div className="kurlyPass">
            <button className="btnWidthColors kurlyPromotionCommonPadding">
              <div className="kurlyBtnColors">
                컬리 패스
                <span className="spanArrowColor">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </div>
              <div className="kurlyBtnPurpleColors">알아보기</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageUserInterface;
