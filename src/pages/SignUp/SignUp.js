import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    userName: '',
    pwd: '',
    confirmPwd: '',
    address: '',
    phone: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const { email, userName, pwd, confirmPwd, address, phone } = inputValues;

  const [errorMsg, setErrorMsg] = useState({
    emailError: '',
    pwdError: '',
    confirmPwdError: '',
    userNameError: '',
    phoneError: '',
  });

  const { emailError, pwdError, confirmPwdError, userNameError, phoneError } =
    errorMsg;

  const hadnleValues = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const { birthYear, birthMonth, birthDay } = inputValues;
  const birthdate = birthYear.slice(-2) + birthMonth + birthDay;

  const onClickSignUp = (e) => {
    e.preventDefault();
    fetch('http://10.58.52.143:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
        name: userName,
        password: pwd,
        address: address,
        phone: phone,
        birthdate: birthdate,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="signUp">
      <h1 className="title">회원가입</h1>
      <div className="criticalItems">
        <span className="star">* </span>
        <span className="caution">필수입력사항</span>
      </div>
      <hr className="line" />
      <form onChange={hadnleValues}>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="email">
              이메일<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="email"
              type="email"
              defaultValue={email}
              placeholder="이메일을 입력해주세요"
            />
            <p className="error">{emailError}</p>
          </div>
          <div className="btnSection">
            <button className="comfirmRepetition">중복확인</button>
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="pwd">
              비밀번호<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="pwd"
              type="password"
              defaultValue={pwd}
              placeholder="비밀번호를 입력해주세요"
            />
            <p className="error">{pwdError}</p>
          </div>
          <div className="btnSection">
            <div className="none" />
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="confirmPwd">
              비밀번호확인<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="confirmPwd"
              type="password"
              defaultValue={confirmPwd}
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
            <p className="error">{confirmPwdError}</p>
          </div>
          <div className="btnSection">
            <div className="none" />
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="name">
              이름<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="userName"
              type="text"
              defaultValue={userName}
              placeholder="이름을 입력해주세요"
            />
            <p className="error">{userNameError}</p>
          </div>
          <div className="btnSection">
            <div className="none" />
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="phone">
              휴대폰<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="phone"
              type="tel"
              defaultValue={phone}
              placeholder="숫자만 입력해주세요"
            />
            <p className="error">{phoneError}</p>
          </div>
          <div className="btnSection">
            <button className="getCode">인증번호받기</button>
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="address">
              주소<span className="star">*</span>
            </label>
          </div>
          <div className="inputSection">
            <input
              className="inputValue"
              name="address"
              type="text"
              defaultValue={address}
              placeholder="주소를 입력해주세요"
            />
            <p className="notifyAddress">
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
          <div className="btnSection">
            <div className="none" />
          </div>
        </div>
        <div className="signUpSection">
          <div className="nameSection">
            <label htmlFor="address">생년월일</label>
          </div>
          <div className="inputSection">
            <div className="birthWrapper">
              <input
                className="inputValue inputBirth"
                name="birthYear"
                type="text"
                defaultValue={birthYear}
                placeholder="YYYY"
              />
              /
              <input
                className="inputValue inputBirth"
                name="birthMonth"
                type="text"
                defaultValue={birthMonth}
                placeholder="MM"
              />
              /
              <input
                className="inputValue inputBirth"
                name="birthDay"
                type="text"
                defaultValue={birthDay}
                placeholder="DD"
              />
            </div>
          </div>
          <div className="btnSection">
            <div className="none" />
          </div>
        </div>
        <hr className="line" />
        <div className="signUpBtnSection">
          <button type="submit" className="signupBtn" onClick={onClickSignUp}>
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
