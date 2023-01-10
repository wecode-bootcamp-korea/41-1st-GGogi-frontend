import React, { useState, useEffect } from 'react';
import './MypageUserInfo.scss';

const MypageUserInfo = () => {
  const [userAddressData, setUserAddressData] = useState([]);
  const [userNewPwd, setUserNewPwd] = useState({
    oldPassword: '',
    newPassword: '',
    againPassword: '',
  });

  const passwordValue = (e) => {
    const { name, value } = e.target;
    setUserNewPwd({ ...userNewPwd, [name]: value });
  };

  const { oldPassword, newPassword, againPassword } = userNewPwd;

  const { email, name, phone } = userAddressData;

  const changePsw = (e) => {
    e.preventDefault();
    if (newPassword === againPassword) {
      fetch('http://10.58.52.62:3000/users/password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('Token'),
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: againPassword,
        }),
      });
    }
  };

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((response) => response.json())
      .then((userAddress) => setUserAddressData(userAddress.data[0]));
  }, []);
  console.log(userNewPwd);
  return (
    <div className="mypageUserModify">
      <div className="userModifyHaader">
        <div className="userModifyHaad">
          <span className="userModifyManagement">개인정보수정</span>
        </div>
        <div></div>
      </div>
      <div className="userInfoModify">
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">이메일</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="email"
              type="email"
              placeholder={email}
            />
          </div>
        </form>
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">현재 비밀번호</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="oldPassword"
              type="password"
              value={oldPassword}
              onChange={passwordValue}
              placeholder="현재 사용중인 비밀번호를 입력해주세요"
            />
          </div>
        </form>
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">새 비밀번호</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="newPassword"
              type="password"
              value={newPassword}
              onChange={passwordValue}
              placeholder="변경하실 비밀번호를 입력해주세요"
            />
          </div>
        </form>
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">새 비밀번호 확인</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="againPassword"
              type="password"
              value={againPassword}
              onChange={passwordValue}
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
          </div>
        </form>
        {newPassword !== againPassword && (
          <div className="againPwd">* 비밀번호를 확인 해주세요.*</div>
        )}
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">이름</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="named"
              type="text"
              placeholder={name}
            />
          </div>
        </form>
        <form className="usersInfoModify">
          <div className="userInfoModifytitle">휴대폰</div>
          <div className="userInputTextFiled">
            <input
              className="userInputModify"
              name="phone"
              type="tel"
              placeholder={phone}
            />
          </div>
        </form>
      </div>
      <div className="userInfoModifyDoneBtn">
        <button className="deleteID">탈퇴하기</button>
        <button className="deleteID" onClick={changePsw}>
          회원정보수정
        </button>
      </div>
    </div>
  );
};
export default MypageUserInfo;
