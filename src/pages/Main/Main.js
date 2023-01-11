import React from 'react';
import './Main.scss';
import MainCard from './Components/MainCard';
import MainCardMini from './Components/MainCardMini';
import MainScroll from './MainScroll';

const Main = () => {
  return (
    <div className="main">
      <MainCardMini />
      <MainCard />
      <MainScroll />
    </div>
  );
};

export default Main;
