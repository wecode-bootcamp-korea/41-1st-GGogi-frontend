import React from 'react';
import Navlinkcategory from './Navlinkcategory';
import './Navcategory.scss';

const Navcategory = () => {
  return (
    <div className="navCategory">
      <div className="sideCategory">
        <span className="category">
          <i class="fa-solid fa-bars"></i> 카테고리
        </span>
      </div>
      <div className="itemCategory">
        {NAVLIST.map((item) => (
          <Navlinkcategory name={item.name} />
        ))}
      </div>
      <div className="luciferParcel">
        <span className="lucifer">샛별 택배 </span>
        <span className="parcel"> 배송안내</span>
      </div>
    </div>
  );
};
export default Navcategory;

const NAVLIST = [
  { id: '1', name: '신상품' },
  { id: '2', name: '베스트' },
  { id: '3', name: '알뜰쇼핑' },
  { id: '4', name: '특가/헤택' },
];
