import React, { useState } from 'react';
import './MypageUserInfo.scss';

const MypageUserInfo = () => {
  const [userAddressData, setUserAddressData] = useState([]);
  const [userNewPwd, setUserNewPwd] = useState({
    confirmPwdagain: '',
    confirmPwd: '',
  });

  const samePassword = (e) => {
    const { name, value } = e.target;
    setUserNewPwd({ ...userNewPwd, [name]: value });
  };

  const { confirmPwdagain, confirmPwd } = userNewPwd;

  const changePsw = (e) => {
    e.preventDefault();
    if (confirmPwdagain === confirmPwd) {
      fetch('http:10.58.52.116:3000/user/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('Token'),
        },
        body: JSON.stringify({ password: 'confirmPwdagain' }),
      });
    }
  };

  const userAddressPostData = (e) => {
    e.preventDefault();

    fetch(`http://10.58.52.116:3000/users/mypage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        address: 'update title',
      }),
    })
      .then((response) => response.json())
      .then((userAddress) => setUserAddressData(userAddress.data[0]));
  };

  const USERMODIFYLIST = [
    {
      id: 1,
      title: '이메일',
      name: 'email',
      type: 'email',
      placeholder: '아이디를 입력해주세요',
    },
    {
      id: 2,
      title: '현재 비밀번호',
      name: 'pwd',
      type: 'password',
      placeholder: '현재 사용중인 비밀번호를 입력해주세요',
    },
    {
      id: 3,
      title: '새 비밀번호',
      name: 'confirmPwd',
      type: 'password',
      placeholder: '변경하실 비밀번호를 입력해주세요',
    },
    {
      id: 4,
      title: '새 비밀번호 확인',
      name: 'confirmPwdagain',
      type: 'password',
      placeholder: '비밀번호를 한 번 더 입력해주세요',
    },
    {
      id: 5,
      title: '이름',
      name: 'named',
      type: 'text',
      placeholder: '이름을 입력해주세요',
    },
    {
      id: 6,
      title: '휴대폰',
      name: 'phone',
      type: 'tel',
      placeholder: '숫자를 입력해주세요',
    },
  ];

  return (
    <div className="mypageUserModify">
      <div className="userModifyHaader">
        <div className="userModifyHaad">
          <span className="userModifyManagement">개인정보수정</span>
        </div>
        <div></div>
      </div>
      <div className="userInfoModify">
        {USERMODIFYLIST.map(({ id, title, name, type, placeholder }) => (
          <form key={id} className="usersInfoModify">
            <div className="userInfoModifytitle">{title}</div>
            <div className="userInputTextFiled">
              <input
                className="userInputModify"
                name={name}
                type={type}
                placeholder={placeholder}
                value={userNewPwd.name}
                onChange={samePassword}
              />
            </div>
          </form>
        ))}
      </div>
      <div className="userInfoModifyDoneBtn">
        <button className="deleteID">탈퇴하기</button>
        <button className="deleteID">회원정보수정</button>
      </div>
    </div>
  );
};
export default MypageUserInfo;
