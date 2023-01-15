import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MypageUserInfo.scss';

const MypageUserInfo = () => {
  const [userAddressData, setUserAddressData] = useState([]);
  const [isSuccessMessage, setIssuccessMassage] = useState([]);
  const [userNewPwd, setUserNewPwd] = useState({
    oldPassword: '',
    newPassword: '',
    againPassword: '',
  });
  const navigate = useNavigate();

  const goToMypage = () => {
    navigate(0);
  };

  const passwordValue = (e) => {
    const { name, value } = e.target;
    setUserNewPwd({ ...userNewPwd, [name]: value });
  };

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
      })
        .then((res) => res.stringify.json())
        .then((res) => setIssuccessMassage(res));
      if (isSuccessMessage.massage === 'UPDATE_USER_PASSWORD_SUCCESS') {
        alert('비밀번호를 변경하였습니다.');
      }
    }
    return goToMypage();
  };

  const { oldPassword, newPassword, againPassword } = userNewPwd;

  const { email, name, phone } = userAddressData;

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

  const USERMODIFY = [
    {
      id: 1,
      name: 'email',
      title: '이메일',
      type: 'email',
      placeholder: email,
    },
    {
      id: 2,
      name: 'oldPassword',
      title: '현재 비밀번호',
      type: 'password',
      placeholder: '현재 사용중인 비밀번호를 입력해주세요',
    },
    {
      id: 3,
      name: 'newPassword',
      title: '새 비밀번호',
      type: 'password',
      placeholder: '변경하실 비밀번호를 입력해주세요',
    },
    {
      id: 4,
      name: 'againPassword',
      title: '새 비밀번호 확인',
      type: 'password',
      placeholder: '비밀번호를 한 번 더 입력해주세요',
    },
    {
      id: 5,
      name: 'named',
      title: '이름',
      type: 'text',
      placeholder: name,
    },
    {
      id: 6,
      name: 'phone',
      title: '휴대폰',
      type: 'tel',
      placeholder: phone,
    },
  ];

  return (
    <div className="mypageUserModify">
      <div className="userModifyHaader">
        <div className="userModifyHaad">
          <span className="userModifyManagement">개인정보수정</span>
        </div>
        <div />
      </div>
      <div className="userInfoModify">
        {USERMODIFY.map(({ id, name, title, type, placeholder }) => {
          return (
            <form className="usersInfoModify" key={id}>
              <div className="userInfoModifytitle">{title}</div>
              <div className="userInputTextFiled">
                {id >= 2 && id <= 4 ? (
                  <input
                    className="userInputModify"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="on"
                    value={userNewPwd[name]}
                    onChange={passwordValue}
                  />
                ) : (
                  <input
                    className="userInputModify"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    disabled
                  />
                )}
              </div>
            </form>
          );
        })}
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
