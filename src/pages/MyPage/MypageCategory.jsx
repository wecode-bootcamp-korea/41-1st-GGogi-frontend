import React from 'react';
import MypageBtn from './components/MypageBtn';
import './MypageCategory.scss';

const MypageCategory = ({ renderFn }) => {
  return (
    <div className="mypageCategory">
      <div className="myGgoginame">마이꼬기</div>
      <ul>
        {MAINPAGELIST.map(({ id, name, link }) => {
          return (
            <MypageBtn key={id} name={name} renderFn={renderFn} link={link} />
          );
        })}
      </ul>
      <div className="helpBanner">
        <p className="needHelp">도움이 필요하신가요?</p>
        <p className="oneOnOne">1:1 문의하기</p>
      </div>
    </div>
  );
};

export default MypageCategory;

const MAINPAGELIST = [
  { id: 1, name: '주문 내역', link: 'MypageOrder' },
  { id: 2, name: '배송지 관리', link: 'MypageAddress' },
  { id: 3, name: '개인 정보 수정', link: 'MypageUserinfo' },
  { id: 4, name: '선물 내역' },
  { id: 5, name: '찜한 상품' },
  { id: 6, name: '상품 후기' },
  { id: 7, name: '상품 문의' },
  { id: 8, name: '적립금' },
  { id: 9, name: '쿠폰' },
  { id: 10, name: '나의 꼬기 스타일' },
];
