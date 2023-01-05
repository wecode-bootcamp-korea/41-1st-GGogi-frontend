import React from 'react';
import SignUpItem from './components/SignUpItem';
import './SignUp2.scss';

const SignUp2 = () => {
  return (
    <div className="signUp">
      <h1 className="signUpTitle">회원가입</h1>
      <div className="inputInfo">
        <span className="star">* </span>
        <span className="inputItemsInfo">필수입력사항</span>
      </div>
      <hr className="signUpLine" />
      <div className="signUpInputSection">
        <SignUpItem />
      </div>
    </div>
  );
};

export default SignUp2;
