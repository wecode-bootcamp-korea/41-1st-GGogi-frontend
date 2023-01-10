import React from 'react';
import './MainCardMini.scss';

const MainCardMini = () => {
  return (
    <div className="mainCardMini">
      <div className="mainCardMiniInfo">
        <div className="mainCardMiniImg">큰사진</div>
        <div className="mainCardMiniContent">
          <div className="mainCardMiniInfoTitle">
            일상을 호캉스로, 더 조선호텔
          </div>
          <div className="mainCardMiniInfoContent">
            특별한 한 해의 시작을 준비하고 있다면, 침실부터 바꿔 보는 건 어때요?
            침구의 변화만으로도 좋은 호텔에 들어선 것과 같은 안락함을 느낄 수
            있답니다. 컬리가 소개하는 더 조선호텔의 침구는 5성급 호텔의 품격을
            고스란히 담았어요.하루의 시작과 마무리를 책임지는 침실의 변화와 함께
            더 나은 새해를 맞이하세요 ✨
          </div>
        </div>
      </div>
      <div className="mainCardList">
        <div className="mainCardListItem">1</div>
        <div className="mainCardListItem">2</div>
        <div className="mainCardListItem">3</div>
        <div className="mainCardListItem">4</div>
      </div>
      <div className="mainCardListAll">
        <button className="mainCardListBtn">전체보기</button>
      </div>
    </div>
  );
};
export default MainCardMini;
