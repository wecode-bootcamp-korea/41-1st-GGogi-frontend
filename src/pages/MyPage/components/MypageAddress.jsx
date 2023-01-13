import React, { useState, useEffect } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import './MypageAddress.scss';

const MypageAddress = () => {
  const [userAddressData, setUserAddressData] = useState([]);
  const [isAddress, setIsAddress] = useState('');
  const handleIsAddress = (e) => {
    setIsAddress(e.target.value);
  };
  const postAddress = userAddressData;
  useEffect(() => {
    fetch(`http://10.58.52.62:3000/users/address`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((response) => response.json())
      .then((data) => setUserAddressData(data.data[0]));
  }, []);
  const handleAddressData = () => {
    fetch(`http://10.58.52.62:3000/users/address`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        address: isAddress,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'UPDATE_USER_ADDRESS_SUCCESS') {
          alert('수정 완료');
        }
      });
  };
  const { address, name, phone } = userAddressData;
  const phoneline = (e) =>
    e && e.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  const userPhoneNum = phoneline(phone);
  return (
    <div className="mypageAddress">
      <div className="addressHaader">
        <div className="leftAddressHaader">
          <span className="addressManagement">배송지 관리</span>
          <span className="addressManagementInfo">
            배송지에 따라 상품정보 및 배송 유형이 달라질 수 있습니다.
          </span>
        </div>
        <div />
      </div>
      <div className="addressModify">
        <div className="addressModifyCategory">
          {ADDRESSINFO.map((item) => (
            <div className="addressCategory" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="userAddressInfo">
          <div className="addressCheck">
            <span className="checkPosition">
              <AiOutlineCheck />
            </span>
          </div>
          <input
            className="modifyAddress blockpaddingmargin inputCreateBorderCss"
            onChange={handleIsAddress}
            placeholder={address}
          />
          {}
          <div className="userAddressName blockpaddingmargin">{name}</div>
          <div className="userAddressPhoneNumber blockpaddingmargin">
            {userPhoneNum}
          </div>
          <div className="postDetail blockpaddingmargin">샛별배송</div>
          <div
            className="modifypencil blockpaddingmargin"
            onClick={handleAddressData}
          >
            <HiOutlinePencil />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MypageAddress;
const ADDRESSINFO = [
  { id: 1, title: '선택' },
  { id: 2, title: '주소' },
  { id: 3, title: '받으실 분' },
  { id: 4, title: '연락처' },
  { id: 5, title: '배송유형' },
  { id: 6, title: '수정' },
];
