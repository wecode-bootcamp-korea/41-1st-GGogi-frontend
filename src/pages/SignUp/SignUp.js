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

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const {
    email,
    pwd,
    confirmPwd,
    name,
    phone,
    address,
    birthYear,
    birthMonth,
    birthDay,
  } = userInfo;

  const birthdate = birthYear + '-' + birthMonth + '-' + birthDay;

  const onClickCheckEmail = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.62:3000/users/emailcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === '사용 불가능한 이메일입니다.') {
          alert('이미 사용 중인 이메일입니다.');
        } else {
          alert('사용 가능한 이메일입니다.');
        }
      });
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.62:3000/users/signup', {
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
        if (result.message === 'KEY_ERROR') {
          setErrorMsg('빈 칸을 채워주세요');
        } else if (result.message === '이메일 양식이 맞지않습니다.') {
          setErrorMsg('이메일 형식에 맞지 않습니다.');
        } else if (result.message === '비밀번호 양식이 맞지않습니다.') {
          setErrorMsg(
            '비밀번호는 8자리 이상, 숫자와 영어, 특수문자를 포함해야 합니다.'
          );
        } else if (pwd !== confirmPwd) {
          setErrorMsg('비밀번호가 일치하지 않습니다.');
        } else if (result.message === 'SIGNUP_SUCCESS') {
          setErrorMsg('');
          alert('회원가입 되었습니다.');
          navigate('/');
        }
      });
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
      <p className="error">{errorMsg}</p>
      <button type="submit" className="joinBtn" onClick={onClickSignUp}>
        가입하기
      </button>
    </div>
  );
};

export default SignUp;
