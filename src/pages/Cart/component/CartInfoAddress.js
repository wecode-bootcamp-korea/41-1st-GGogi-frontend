import './CartInfoAddress.scss';
import { useEffect } from 'react';

const CartInfoAddress = ({ userAddress, setUserAddress }) => {
  /* 유저 주소 잘 가져오는지 확인하기 + 유저정보는 바뀔일이 없는데 의존성 배열 추가하라고 함..고민해보기 */
  useEffect(() => {
    fetch('10.58.52.62:3000/users/address', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserAddress(data.results);
      });
  }, []);

  return (
    <div className="CartInfoAddress">
      <div className="addressWrapper">
        <div className="titleSection">
          <img className="pinImg" src="./images/pin.png" alt="pin" />
          <p className="title">배송지</p>
        </div>
        <p className="addressInfo">
          {/* 유저 주소 잘 가져오는지 확인하기 */}
          {userAddress.address}
          <br />
        </p>
        <div className="pointSection">
          <span className="point">샛별배송</span>
        </div>
        <button className="changeAddressBtn">배송지 변경</button>
      </div>
    </div>
  );
};

export default CartInfoAddress;
