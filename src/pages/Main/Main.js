import React from 'react';
import MainCard from './Components/MainCard';
import MainCardMini from './Components/MainCardMini';
import MainScroll from './MainScroll';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <MainScroll />
      <MainCard />
      <MainCardMini />
    </div>
  );
};

export default Main;
