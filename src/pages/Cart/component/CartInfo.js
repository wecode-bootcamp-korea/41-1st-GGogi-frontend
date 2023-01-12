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
}) => {
  return (
    <div className="cartInfo">
      <CartInfoAddress address={address} />
      <CartInfoPrice
        cartList={cartList}
        setCartList={setCartList}
        calTotalPrice={calTotalPrice}
      />
      <button className="orderBtn" onClick={handleOrderBtn}>
        주문하기
      </button>
      <div className="cartInfoAside">
        {CARTINFO_ASIDE.map((item) => {
          const { id, content } = item;
          return (
            <ul key={id}>
              <li className="cartInfoAsideList">・ {content}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CartInfo;
