import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navcategory.scss';

const Navcategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState('');
  const [categoeyPoint, setCategoryPoint] = useState(false);
  const [subCategory, setSubCategory] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [scrollSubActive, setScrollSubActive] = useState(true);

  const handleClick = (e) => {
    setSubCategoryId(e.target.id);
    setCategoryPoint(true);
  };

  const scrollFixed = () => {
    if (scrollY > 96) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  const handleOff = (e) => setSubCategory(!subCategory);

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

  useEffect(() => {
    fetch('/data/categoryProductData.json')
      .then((response) => response.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <div className={scrollActive ? ' navCategoryfixed' : 'navCategory'}>
      <div className="categoryStyle">
        <div className="sideCategory">
          <button className="category">
            <i className="fa-solid fa-bars"></i>
            카테고리
          </button>
          <ul className="middleCategory">
            {categoryData.map((item, idx) => (
              <li
                key={item.id}
                id={item.id}
                className="meatCategory"
                onMouseEnter={handleClick}
              >
                <div className="MeatCategoryTitle">{item.title}</div>
                {idx + 1 === Number(subCategoryId) && categoeyPoint && (
                  <div className="subCategorydiv">
                    {categoryData[subCategoryId - 1].item.map((sub) => {
                      return (
                        <ul
                          key={sub.id}
                          className="subCategoryul"
                          onMouseLeave={handleOff}
                        >
                          <Link to="/" className="subCategoryli">
                            {sub.name}
                          </Link>
                        </ul>
                      );
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="itemCategory">
          {NAVLIST.map((item) => (
            <span className="categoryBtn" key={item.id}>
              {item.name}
            </span>
          ))}
        </button>
        <button className="luciferParcel">
          <span className="lucifer">샛별 택배 </span>
          <span className="parcel"> 배송안내</span>
        </button>
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
