import React, { useEffect, useState } from 'react';
import ProductCardMiniList from '../../components/ProductCardMini/ProductCardMiniList';
import './Main.scss';
import MainCard from './Components/MainCard';

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
      <MainCard />
      <ProductCardMiniList productList={productList} />
    </div>
  );
};

export default Main;
