import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navloginsignup.scss';

const Navloginsignup = () => {
  const navigate = useNavigate();

  const goToSignUp = () => navigate('./signup');
  const goToMypage = () => navigate('./mypage');
  const goTologin = () => navigate('./Login');

  const Token = localStorage.getItem('Token');

  return (
    <div className="loginSignup">
      {Token && (
        <button className="signup" onClick={goToMypage}>
          히평안님
        </button>
      )}
      {Token == undefined && (
        <button className="signup " onClick={goToSignUp}>
          회원가입
        </button>
      )}
      {Token == undefined && (
        <button className="loginbtn " onClick={goTologin}>
          로그인
        </button>
      )}

      <button className="inquiry ">
        고객센터 <i className="fa-sharp fa-solid fa-caret-down" />
      </button>
    </div>
  );
};

export default Navloginsignup;
