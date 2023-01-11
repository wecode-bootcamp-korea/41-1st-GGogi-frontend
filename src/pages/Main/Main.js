import React, { useState, useEffect, Fragment } from 'react';
import Category from '../../components/Category/Category';
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
    <Fragment>
      <div className="main">
        <ShoppingModal />
        <ProductCardList productList={productList} />
      </div>
      <Category />
    </Fragment>
  );
};

export default Main;
