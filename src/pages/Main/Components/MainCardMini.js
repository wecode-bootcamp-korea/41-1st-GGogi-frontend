import React, { useState, useEffect } from 'react';
import ProductCardMini from '../../../components/ProductCardMini/ProductCardMini';
import beef2 from '../../../assets/images/beef2.jpg';
import './MainCardMini.scss';

const MainCardMini = () => {
  const [mainCardMini, setMainCardMini] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/products?limit=4`)
      .then((response) => response.json())
      .then((result) => setMainCardMini(result));
  }, []);

  return (
    <div className="mainCardMini">
      <div className="mainCardMiniInfo">
        <img src={beef2} alt="beef" className="mainCardMiniImg" />

        <div className="mainCardMiniContent">
          <div className="mainCardMiniInfoTitle">
            일상을 즐겁게, 미슐랭을 집에서
          </div>
          <div className="mainCardMiniInfoContent">
            특별한 한 해의 시작을 준비하고 있다면, 음식부터 바꿔 보는 건 어때요?
            음식의 변화만으로도 좋은 미슐랭 음식점에 들어선 것과 같은 만족감을
            느낄 수 있답니다. 컬리가 소개하는 더 고기는 미슐랭 5스타 품격을
            고스란히 담았어요. 하루의 시작과 마무리를 책임지는 침실의 변화와
            함께 더 나은 새해를 맞이하세요 ✨
          </div>
        </div>
      </div>
      <div className="mainCardList">
        {mainCardMini.map((mainCardMini) => (
          <ProductCardMini
            key={mainCardMini.id}
            product={mainCardMini}
            className="mainCardListItem"
          />
        ))}
      </div>
      <div className="mainCardListAll">
        <button className="mainCardListBtn">전체보기</button>
      </div>
    </div>
  );
};
export default MainCardMini;
