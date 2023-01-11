import React, { useEffect, useState } from 'react';
import './Main.scss';
import MainCard from './Components/MainCard';
import MainCardMini from './Components/MainCardMini';

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
      <MainCardMini />
      <MainCard />
    </div>
  );
};

export default Main;
