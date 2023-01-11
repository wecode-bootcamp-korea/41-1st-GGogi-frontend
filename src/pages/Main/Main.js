import React, { useState, useEffect, Fragment } from 'react';
import Category from '../../components/Category/Category';
import ShoppingModal from '../../components/ShoppingModal/ShoppingModal';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import './Main.scss';
import MainCard from './Components/MainCard';
import MainCardMini from './Components/MainCardMini';
import MainScroll from './MainScroll';

const Main = () => {
  return (
    <Fragment>
      <div className="main">
        <ShoppingModal />
        <ProductCardList productList={productList} />
      </div>
      <Category />
    </Fragment>
    <div className="main">
      <MainCardMini />
      <MainCard />
      <MainScroll />
    </div>
  );
};

export default Main;
