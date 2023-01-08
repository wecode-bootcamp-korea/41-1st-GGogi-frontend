import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpItem from './components/signUpItem/SignUpItem';
import UserAgreement from './components/userAgreement/UserAgreement';
import { INPUT_DATA } from './inputData';
import './SignUp.scss';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    pwd: '',
    confirmPwd: '',
    name: '',
    phone: '',
    address: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const navigate = useNavigate();

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const {
    email,
    pwd,
    //[Todo] pwd != confirmPwd 일 때 error 메세지 띄우기
    confirmPwd,
    name,
    phone,
    address,
    birthYear,
    birthMonth,
    birthDay,
  } = userInfo;

  const birthdate = birthYear + '-' + birthMonth + '-' + birthDay;

  const onClickSignUp = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.116:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
        name: name,
        password: pwd,
        address: address,
        phone: phone,
        birthdate: birthdate,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'SUCCESS') {
          alert('회원가입 되었습니다.');
          navigate('/');
        }
      });
  };

  const onClickCheckEmail = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.116:3000/users/emailcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signUp">
      <h1 className="signUpTitle">회원가입</h1>
      <div className="inputInfo">
        <span className="star">* </span>
        <span className="inputItemsInfo">필수입력사항</span>
      </div>
      <hr className="signUpLine" />
      <div className="signUpInputSection">
        <form>
          {INPUT_DATA.map((item) => {
            return (
              <SignUpItem
                key={item.id}
                title={item.title}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                handleUserInfo={handleUserInfo}
                onClickCheckEmail={onClickCheckEmail}
              />
            );
          })}
        </form>
      </div>
      <hr className="signUpLine" />
      <UserAgreement />
      <button type="submit" className="joinBtn" onClick={onClickSignUp}>
        가입하기
      </button>
    </div>
  );
};

export default SignUp;
