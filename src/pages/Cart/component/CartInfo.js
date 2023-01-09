import CartInfoAddress from './CartInfoAddress';
import CartInfoPrice from './CartInfoPrice';
import { CARTINFO_ASIDE } from './CartInfoAside';
import './CartInfo.scss';

const CartInfo = ({ cart, setCart, userAddress, setUserAddress }) => {
  return (
    <div className="cartInfo">
      <CartInfoAddress
        userAddress={userAddress}
        setUserAddress={setUserAddress}
      />
      <CartInfoPrice />
      <button className="orderBtn">주문하기</button>
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
