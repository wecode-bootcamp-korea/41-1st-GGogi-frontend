import './MyPageUserInterface.scss';
import '../../styles/common.scss';

const MyPageUserInterface = ({ name, point }) => {
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
                  <div className="deletePointColor">
                    {list.delete} {point}원
                  </div>
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
                  <i className="fa-solid fa-angle-right"></i>
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
                  <i className="fa-solid fa-angle-right"></i>
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

<button className="btnWidthColors userReservesCommonPadding">
  <div className="kurlyBtnColors">나의 컬리스타일</div>
  <div className="kurlyBtnPurpleColors itemMargin">등록하기</div>
</button>;

const USERBIGDATA = [
  { id: 1, title: '적립금', point: '0 원', delete: '소멸 예정' },
  { id: 2, title: '쿠폰', point: '0 개' },
  { id: 3, title: '나의 컬리스타일', point: '등록하기' },
];
