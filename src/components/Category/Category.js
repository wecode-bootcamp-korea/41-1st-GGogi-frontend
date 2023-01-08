import React from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import { GrRotateRight } from 'react-icons/gr';
import './Category.scss';

const CATEGORY_LIST = [
  {
    category_id: 1,
    name: '소고기',
    quantity: 10,
    url: '/',
  },
  {
    category_id: 2,
    name: '돼지고기',
    quantity: 10,
    url: '/',
  },
  {
    category_id: 3,
    name: '양고기',
    quantity: 10,
    url: '/',
  },
  {
    category_id: 4,
    name: '닭고기',
    quantity: 10,
    url: '/',
  },
  {
    category_id: 5,
    name: '오리고기',
    quantity: 10,
    url: '/',
  },
];

const Category = () => {
  return (
    <div className="category">
      <div className="titleSection">
        <span className="categoryTitle">필터</span>
        <span className="filterInit">
          <GrRotateRight className="initIcon" />
          초기화
        </span>
      </div>
      <div className="categoryListWrapper">
        <div className="categoryType">
          <span className="categoryTitle">카테고리</span>
        </div>
        <ul className="categoryList">
          {CATEGORY_LIST.map((item) => {
            return (
              <li key={item.category_id} className="categoryItem">
                <div className="categoryItemSection">
                  <BsCheckCircle className="checkedIcon" />
                  <span className="categoryName">{item.name}</span>
                  <span className="categoryQuantity">{item.quantity}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
