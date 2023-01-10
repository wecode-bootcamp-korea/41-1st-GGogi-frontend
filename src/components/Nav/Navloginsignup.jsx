import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navloginsignup.scss';

const Navloginsignup = () => {
  const [userLoginName, setuserLoginName] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/users/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((response) => response.json())
      .then((data) => setuserLoginName(data.data[0]));
  }, []);

  const { name } = userLoginName;

  const navigate = useNavigate();

  const goToSignUp = () => navigate('./signup');
  const goToMypage = () => navigate('./mypage');
  const goTologin = () => navigate('./Login');

  const Token = localStorage.getItem('Token');

  return (
    <div className="loginSignup">
      {Token && (
        <button className="signup" onClick={goToMypage}>
          {name}님
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
