import React from 'react';
import './Navloginsignup.scss';

const Navloginsignup = () => {
  return (
    <div className="loginSignup">
      <span className="signup">회원가입</span>
      <span className="loginbtn">로그인</span>
      <span className="inquiry">
        고객센터 <i class="fa-sharp fa-solid fa-caret-down" />
      </span>
    </div>
  );
};

export default Navloginsignup;
