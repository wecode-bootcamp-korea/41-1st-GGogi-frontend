import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import { GrRotateRight } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Category.scss';

const Category = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('./data/categoryListData.json')
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res);
      });
  }, []);

  const categoryListUl = document.getElementsByClassName('categoryListUl');
  console.log(categoryListUl);
  const onClickShowList = () => {
    setShowCategoryList(!showCategoryList);
  };

  const hideCategoryList = () => {
    showCategoryList
      ? (categoryListUl.style = 'maxHeight: 100vh, opacity: 1')
      : (categoryListUl.style = 'maxHeight: 0;');
  };

  const changeArrowIcon = showCategoryList ? (
    <IoIosArrowDown
      className="arrowIcon"
      onClick={() => {
        onClickShowList();
      }}
    />
  ) : (
    <IoIosArrowUp className="arrowIcon" onClick={onClickShowList} />
  );

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
          <div className="iconSection" onClick={hideCategoryList}>
            {changeArrowIcon}
          </div>
        </div>
        <ul className="categoryListUl">
          {categoryList.map((item) => {
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
