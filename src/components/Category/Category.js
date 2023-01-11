import React, { useState, useEffect } from 'react';
// [TODO] 체크 아이콘 컴포넌트 merge 되면 사용하기
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import { GrRotateRight } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Category.scss';

const Category = () => {
  const [showCategoryList, setShowCategoryList] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('./data/categoryListData.json')
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res);
      });
  }, []);

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
          <div className="iconSection">
            {showCategoryList ? (
              <IoIosArrowDown
                className="arrowIcon"
                onClick={() => setShowCategoryList(!showCategoryList)}
              />
            ) : (
              <IoIosArrowUp
                className="arrowIcon"
                onClick={() => setShowCategoryList(!showCategoryList)}
              />
            )}
          </div>
        </div>
        <ul
          className={showCategoryList ? 'categoryListUl' : 'categoryListUlNone'}
        >
          {categoryList.map((item) => {
            const { category_id, name, quantity } = item;
            return (
              <li key={category_id} className="categoryItem">
                <div className="categoryItemSection">
                  <BsCheckCircle className="checkedIcon" />
                  <span className="categoryName">{name}</span>
                  <span className="categoryQuantity">{quantity}</span>
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
