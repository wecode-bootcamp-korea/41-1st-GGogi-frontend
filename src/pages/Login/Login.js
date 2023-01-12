import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    id: '',
    pwd: '',
  });

  const handleValues = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const { id, pwd } = inputValues;

  const navigate = useNavigate();

  const onClickLogin = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.62:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: id,
        password: pwd,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'USER_IS_NOT_VALID') {
          alert('이메일을 다시 확인해주세요.');
        } else if (result.message === 'USER_IS_NOT_MATCH') {
          alert('비밀번호를 다시 확인해주세요.');
        } else {
          localStorage.setItem('Token', result.accessToken);
          navigate('/');
        }
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="title">로그인</h1>
        <form onChange={handleValues}>
          <input
            className="inputId"
            name="id"
            type="email"
            defaultValue={id}
            placeholder="아이디를 입력해주세요"
          />
          <input
            className="inputPwd"
            name="pwd"
            type="password"
            defaultValue={pwd}
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="findSection">
            <Link to="/find/id">아이디 찾기</Link>
            <span> | </span>
            <Link to="/find/password">비밀번호 찾기</Link>
          </div>
          <button className="loginBtn" type="submit" onClick={onClickLogin}>
            로그인
          </button>
          <button className="signUpBtn">
            <Link to="/signup">회원가입</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
