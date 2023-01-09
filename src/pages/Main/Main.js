import React, { useState, useEffect } from 'react';
import ShoppingModal from '../../components/ShoppingModal/ShoppingModal';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import './Main.scss';
import ProductCardList2 from '../../components/ProductCard2/ProductCard2List';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/legobitna/hnm-react-router/products/'
    )
      .then((result) => result.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="main">
      <ProductCardList2 productList={productList} />
    </div>
  );
};

export default Main;
