import React, { useState, useEffect } from 'react';
import './MyPageUserInterface.scss';
import '../../styles/common.scss';

const MyPageUserInterface = () => {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.116:3000/users/mypage`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
      .then((response) => response.json())
      .then((myPageData) => setUserProfile(myPageData));
  }, []);

  return (
    <div className="myPageUserInterface">
      <div className="myPageGrid">
        <div className="userInfrm">
          <div className="userProfileName">
            <div className="welcomeUser">
              <p className="welcomeBox">웰컴</p>
            </div>
            <div className="myPageUserName">username</div>
          </div>
          <div className="userAccumulate">
            <p>적립 5%</p>
            <p>최초 1회 무료 배송</p>
          </div>
          <div className="userLevel">
            <button className="userlevelBtn cursor">전체등급 보기</button>
            <button className="userlevelBtn cursor">
              다음 달 예상등급 보기
            </button>
          </div>
        </div>
        <div className="userReserves">
          <div className="userPoint">
            <button className="btnWidthColors userReservesCommonPadding cursor">
              <div className="kurlyBtnColors">적립금</div>
              <div className="kurlyBtnPurpleColors itemMargin">0원</div>
              <div className="deletePointColor">소멸 예정 0원</div>
            </button>
          </div>
          <div className="userCoupon">
            <button className="btnWidthColors userReservesCommonPadding cursor">
              <div className="kurlyBtnColors">쿠폰</div>
              <div className="kurlyBtnPurpleColors itemMargin">0개</div>
            </button>
          </div>
          <div className="userBigdata">
            <button className="btnWidthColors userReservesCommonPadding cursor">
              <div className="kurlyBtnColors">나의 컬리스타일</div>
              <div className="kurlyBtnPurpleColors itemMargin">등록하기</div>
            </button>
          </div>
        </div>
        <div className="kurlyPromotion">
          <div className="kurlyPurpleBox">
            <button className="btnWidthColors kurlyPromotionCommonPadding cursor">
              <div className="kurlyBtnColors">
                컬리 퍼플 박스<span className="spanArrowColor"> ></span>
              </div>
              <div className="kurlyBtnPurpleColors">알아보기</div>
            </button>
          </div>
          <div className="kurlyPass">
            <button className="btnWidthColors kurlyPromotionCommonPadding cursor">
              <div className="kurlyBtnColors">
                컬리 패스 <span className="spanArrowColor"> ></span>
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
