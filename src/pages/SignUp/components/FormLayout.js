import React from 'react';
import { SIGNUPINPUT_LIST } from './SignUpInputList';

const FormLayout = () => {
  return (
    <div className="signUpInput">
      {SIGNUPINPUT_LIST.map((item) => {
        return (
          <div key={item.id} className="signUpSection">
            <div className="nameSection">
              <label htmlFor={item.type}>
                {item.title}
                <span className="star">*</span>
              </label>
            </div>
            <div className="inputSection"></div>
            <div className="btnSection">
              {/* <button className="comfirmRepetition" onClick={onClickCheckEmail}>
                중복확인
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormLayout;
