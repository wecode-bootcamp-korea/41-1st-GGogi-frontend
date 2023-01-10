import React, { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import './MypageAddress.scss';

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
            <div className={item.className} key={item.id}>
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
  { id: 1, title: '선택', className: 'addressSelect' },
  { id: 2, title: '주소', className: 'addressUser' },
  { id: 3, title: '받으실 분', className: 'addressPlace' },
  { id: 4, title: '연락처', className: 'addressPhone' },
  { id: 5, title: '배송유형', className: 'addressHow' },
  { id: 6, title: '수정', className: 'addressModifynd' },
];
