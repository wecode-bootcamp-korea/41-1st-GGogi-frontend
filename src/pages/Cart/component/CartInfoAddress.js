import './CartInfoAddress.scss';

const CartInfoAddress = ({ address }) => {
  return (
    <div className="CartInfoAddress">
      <div className="addressWrapper">
        <div className="titleSection">
          <img className="pinImg" src="./images/pin.png" alt="pin" />
          <p className="title">배송지</p>
        </div>
        <p className="addressInfo">
          {address}
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
