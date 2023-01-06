import React from 'react';
import './ProductDetailInfo.scss';

const ProductDetailInfo = () => {
  return (
    <div className="productDetailInfo">
      <div className="table">
        <div className="tableRow">
          <div className="tableHead">배송</div>
          <div className="tableBody">
            23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송
            운영시간 별도 확인)
          </div>
        </div>
        <div className="tableRow">
          <div className="tableHead">판매자</div>
          <div className="tableBody">컬리</div>
        </div>
        <div className="tableRow">
          <div className="tableHead">포장타입</div>
          <div className="tableBody">
            <div>냉장 (종이포장)</div>
            <div>택배포장은 에코 포장이 스티로폼으로 대체됩니다.</div>
          </div>
        </div>
        <div className="tableRow">
          <div className="tableHead">판매타입</div>
          <div className="tableBody">냉장 (종이포장)</div>
        </div>
        <div className="tableRow">
          <div className="tableHead">판매단위</div>
          <div className="tableBody">1팩</div>
        </div>
        <div className="tableRow">
          <div className="tableHead">중량/용량</div>
          <div className="tableBody">500g</div>
        </div>
        <div className="tableRow">
          <div className="tableHead">원산지</div>
          <div className="tableBody">상세페이지 별도표기</div>
        </div>
        <div className="tableRow">
          <div className="tableHead">알레르기정보</div>
          <div className="tableBody">
            - 돼지고기 함유
            <br />- 본 제품은 대두, 밀, 소고기, 우유, 토마토, 새우, 아황산류,
            닭고기, 조개류(굴, 홍합, 전복), 오징어, 잣, 알류, 게, 복숭아, 땅콩,
            호두, 고등어, 메밀이 함유된 제품과 동일라인에서 생산되고 있습니다.
          </div>
        </div>
        <div className="tableRow">
          <div className="tableHead">유통기한(또는 소비기한)정보</div>
          <div className="tableBody">
            수령일 포함 4일 이상 남은 상품을 보내 드립니다.
          </div>
        </div>
        <div className="tableRow">
          <div className="tableHead">축산물이력정보</div>
          <div className="tableBody">
            이력번호가 표시된 제품이며, 이력번호는 수령하시는 상품 패키지에서
            확인 가능합니다.
          </div>
        </div>
        <div className="tableRow">
          <div className="tableHead">안내사항</div>
          <div className="tableBody">
            - 해당 상품은 냉장 제품입니다
            <br />- 정육 상품의 특성상 3% 내외의 중량 차이가 발생할 수 있습니다.
            <br />- 상품 수령 후 최대한 빠른 시일내에 섭취를 권장드립니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
