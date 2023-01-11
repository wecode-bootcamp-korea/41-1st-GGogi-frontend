import CartInfoAddress from './CartInfoAddress';
import CartInfoPrice from './CartInfoPrice';
import { CARTINFO_ASIDE } from './CartInfoAside';
import './CartInfo.scss';

const CartInfo = ({
  cartList,
  setCartList,
  address,
  handleOrderBtn,
  calTotalPrice,
  convertPrice,
}) => {
  return (
    <div className="cartInfo">
      <CartInfoAddress address={address} />
      <CartInfoPrice
        cartList={cartList}
        setCartList={setCartList}
        calTotalPrice={calTotalPrice}
        convertPrice={convertPrice}
      />
      {/* 주문하기 누르면 데이터가 백엔드로 전달되도록 해야 함 */}
      <button className="orderBtn" onClick={handleOrderBtn}>
        주문하기
      </button>
      <div className="cartInfoAside">
        {CARTINFO_ASIDE.map((item) => {
          return (
            <ul key={item.id}>
              <li className="cartInfoAsideList">・ {item.content}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CartInfo;
