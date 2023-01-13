import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navcategori.scss';

const Navcategori = () => {
  const [categoriData, setCategoriData] = useState([]);
  const [subCategoriId, setSubCategoriId] = useState('');
  const [categoeyPoint, setCategoriPoint] = useState(false);
  const [subCategori, setSubCategori] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const handleClick = (e) => {
    setSubCategoriId(e.target.id);
    setCategoriPoint(true);
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

  const handleOff = (e) => setSubCategori(!subCategori);

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
    fetch('/data/categoriProductData.json')
      .then((response) => response.json())
      .then((data) => setCategoriData(data));
  }, []);
  return (
    <div className={scrollActive ? ' navCategorifixed' : 'navCategori'}>
      <div className="categoriStyle">
        <div className="sideCategori">
          <button className="categori">
            <i className="fa-solid fa-bars" />
            카테고리
          </button>
          <ul className="middleCategori">
            {categoriData.map((item, idx) => (
              <li
                key={item.id}
                id={item.id}
                className="meatCategori"
                onMouseEnter={handleClick}
              >
                <div className="MeatCategoriTitle">{item.title}</div>
                {idx + 1 === Number(subCategoriId) && categoeyPoint && (
                  <div className="subCategoridiv">
                    {categoriData[subCategoriId - 1].item.map((sub) => {
                      return (
                        <ul
                          key={sub.id}
                          className="subCategoriul"
                          onMouseLeave={handleOff}
                        >
                          <Link to={`/categoris?categoris=${sub.id}`}>
                            <div className="subName">{sub.name}</div>
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
        <button className="itemCategori">
          {NAVLIST.map((item) => (
            <span className="categoriBtn" key={item.id}>
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

export default Navcategori;

const NAVLIST = [
  { id: '1', name: '신상품' },
  { id: '2', name: '베스트' },
  { id: '3', name: '알뜰쇼핑' },
  { id: '4', name: '특가/헤택' },
];
