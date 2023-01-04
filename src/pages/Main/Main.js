import React, { useState, useEffect } from 'react';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import AlertModal from '../../components/AlertModal/AlertModal';

import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="main">
      <ProductCardList productList={productList} />
      <AlertModal />
    </div>
  );
};

export default Main;
