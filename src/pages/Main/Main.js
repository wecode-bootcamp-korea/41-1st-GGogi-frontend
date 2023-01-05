import React, { useState, useEffect } from 'react';
import ShoppingModal from '../../components/ShoppingModal/ShoppingModal';
import ProductCardList from '../../components/ProductCard/ProductCardList';
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
      <ShoppingModal />
      <ProductCardList productList={productList} />
    </div>
  );
};

export default Main;
