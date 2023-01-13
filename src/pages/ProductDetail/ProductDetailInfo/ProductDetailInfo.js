import React from 'react';
import './ProductDetailInfo.scss';

const ProductDetailInfo = () => {
  return (
    <div className="productDetailInfo">
      <div className="table">
        {InfoList.map((item) => (
          <div className="tableRow" key={item.id}>
            <div className="tableHead">{item.head}</div>
            <div className="tableBody">
              <div>{item.body}</div>
              {item.body2 ? <div>{item.body2}</div> : ''}
              {item.body3 ? <div>{item.body3}</div> : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailInfo;

const InfoList = [
  {
    id: '1',
    head: '배송',
    body: '23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송 운영시간 별도 확인)',
  },
  { id: '2', head: '판매자', body: '컬리' },
  {
    id: '3',
    head: '포장타입',
    body: '냉장 (종이포장)',
    body2: '택배포장은 에코 포장이 스티로폼으로 대체됩니다.',
  },
  { id: '4', head: '판매타입', body: '냉장 (종이포장)' },
  { id: '5', head: '판매단위', body: '1팩' },
  { id: '6', head: '중량/용량', body: '600g' },
  { id: '7', head: '원산지', body: '상세페이지 별도표기' },
  {
    id: '8',
    head: '알레르기정보',
    body: '- 돼지고기 함유',
    body2:
      '- 이 제품은 알레르기 유발 성분(소고기)을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.',
  },
  {
    id: '9',
    head: '유통기한(또는 소비기한)정보',
    body: '수령일 포함 4일 이상 남은 상품을 보내 드립니다.',
  },
  {
    id: '10',
    head: '축산물이력정보',
    body: '이력번호가 표시된 제품이며, 이력번호는 수령하시는 상품 패키지에서 확인 가능합니다.',
  },
  {
    id: '11',
    head: '안내사항',
    body: '- 해당 상품은 냉장 제품입니다 ',
    body2: '- 정육 상품의 특성상 3% 내외의 중량 차이가 발생할 수 있습니다.',
    body3: '- 상품 수령 후 최대한 빠른 시일내에 섭취를 권장드립니다.',
  },
  {
    id: '12',
    head: '도축 날짜',
    body: '23년 1월 3일',
  },
];
