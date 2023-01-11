import React, { useState, useEffect } from 'react';
import MyPageUserInterface from './MyPageUserInterface';
import MypageCategory from './MypageCategory';
import MypageOrder from './components/MypageOrder';
import MypageUserInfo from './components/MypageUserInfo';
import MypageAddress from './components/MypageAddress';
import './MyPage.scss';

const MyPage = () => {
  const [renderPage, setRenderPage] = useState('MypageOrder');
  const [userCartProduct, setUserCartProduct] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/users/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((response) => response.json())
      .then((data) => setUserCartProduct(data.data[0]));
  }, []);

  const renderFunction = (e) => {
    setRenderPage(e.target.name);
  };
  const { name, orderList, point } = userCartProduct;

  const selectComponent = {
    MypageOrder: <MypageOrder orderList={orderList} />,
    MypageAddress: <MypageAddress />,
    MypageUserinfo: <MypageUserInfo />,
  };

  return (
    <div>
      <MyPageUserInterface name={name} point={point} />
      <div className="mypageUnderLayout">
        <MypageCategory renderFn={renderFunction} />
        {renderPage && selectComponent[renderPage]}
      </div>
    </div>
  );
};

export default MyPage;
