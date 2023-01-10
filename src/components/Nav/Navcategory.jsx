import React, { useState, useEffect } from 'react';
import './Navcategory.scss';

const Navcategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [subCategory, setSubCategory] = useState(true);
  const [isActive, setIsActive] = useState({
    categoeyPoint: false,
    scrollActive: false,
  });

  const { categoeyPoint, scrollActive } = isActive;

  const handleClick = (e) => {
    setSubCategoryId(e.target.id);
    setIsActive({ categoeyPoint: true });
  };

  const scrollFixed = () => {
    if (scrollY > 96) {
      setScrollY(window.pageYOffset);
      setIsActive({ scrollActive: true });
    } else {
      setScrollY(window.pageYOffset);
      setIsActive({ scrollActive: false });
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
                          <li className="subCategoryli">{sub.name}</li>
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
          {NAVLIST.map(({ id, name }) => (
            <span className="categoryBtn" key={id}>
              {name}
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
  { id: '1', name: '신상품', className: 'newProduct' },
  { id: '2', name: '베스트', className: 'bestProduct' },
  { id: '3', name: '알뜰쇼핑', className: 'saleProduct' },
  { id: '4', name: '특가/헤택', className: 'eventProduct' },
];
