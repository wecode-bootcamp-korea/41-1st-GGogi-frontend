import React from 'react';

const SignUpInput = () => {
  return (
    <div className="signUpInput">
      <input
        className="inputValue"
        name="email"
        type="email"
        defaultValue={email}
        placeholder="이메일을 입력해주세요"
      />
      <p className="error">{emailError}</p>}
    </div>
  );
};

export default signUpInput;
