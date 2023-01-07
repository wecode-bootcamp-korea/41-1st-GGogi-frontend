import React, { useState } from 'react';
import './MypageAddress.scss';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';

const MypageAddress = () => {
  const [userAddressData, setUserAddressData] = useState([]);

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

  return (
    <div className="mypageAddress">
      <div className="addressHaader">
        <div className="leftAddressHaader">
          <span className="addressManagement">배송지 관리</span>
          <span className="addressManagementInfo">
            배송지에 따라 상품정보 및 배송 유형이 달라질 수 있습니다.
          </span>
        </div>
        <div></div>
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
          <div className="modifyAddress blockpaddingmargin">
            <div className="nowAddress">기존 배송지</div>
            경기 남양주시 오남읍 진건오남로797번길 31 (현대아파트) 103동 1507호
          </div>
          <div className="userAddressName blockpaddingmargin">하평안</div>
          <div className="userAddressPhoneNumber blockpaddingmargin">
            010-6859-6427
          </div>
          <div className="postDetail blockpaddingmargin">샛별배송</div>
          <div className="modifypencil blockpaddingmargin">
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
