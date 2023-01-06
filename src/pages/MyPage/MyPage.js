import { useState } from 'react';
import MyPageUserInterface from './MyPageUserInterface';
import MypageCategory from './MypageCategory';
import MypageOrder from './components/MypageOrder';
import MypageUserInfo from './components/MypageUserInfo';
import MypageAddress from './components/MypageAddress';
import './MyPage.scss';

const MyPage = () => {
  const [renderPage, setRenderPage] = useState('MypageOrder');

  const renderFunction = (e) => {
    setRenderPage(e.target.name);
  };

  const selectComponent = {
    MypageOrder: <MypageOrder />,
    MypageAddress: <MypageAddress />,
    MypageUserinfo: <MypageUserInfo />,
  };

  return (
    <div>
      <MyPageUserInterface />
      <div className="mypageUnderLayout">
        <MypageCategory renderFn={renderFunction} />
        {renderPage && selectComponent[renderPage]}
      </div>
    </div>
  );
};

export default MyPage;
