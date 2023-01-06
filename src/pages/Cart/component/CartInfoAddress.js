import './CartInfoAddress.scss';

const CartInfoAddress = () => {
  return (
    <div className="CartInfoAddress">
      <div className="addressWrapper">
        <div className="titleSection">
          <img className="pinImg" src="./images/pin.png" alt="pin" />
          <p className="title">배송지</p>
        </div>
        <p className="addressInfo">
          경기도 ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 100 (ㅇㅇ아파트) 1000-1000
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
