import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Search.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchItem, setSearchItem] = useState([]);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    const searchLocation = searchParams.get('keyword') || '';
    fetch(`http://10.10.10.10:3000/search?keyword=${searchLocation}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then((res) => res.json())
      .then((data) => setSearchItem(data));
    if (searchItem.length < 1) {
      setSearchError(searchLocation);
    }
  });

  return (
    <div className="searchPage">
      {searchError && (
        <div className="searchErrorMessage">
          <span className="notFindSearchItem">"{searchError}"</span>에 대한
          검색결과
          <div className="notFindMassage">
            <div className="notFindGlassIcon">
              <i
                className="fa-solid fa-magnifying-glass notFindMassage"
                alt="magnifying glass"
              />
            </div>
            <div>
              <p className="notFindSearch">검색된 상품이 없습니다.</p>
            </div>
          </div>
        </div>
      )}
      {searchItem.map((item) => (
        <ProductCard key={item} productList={item} />
      ))}
    </div>
  );
};

export default Search;
