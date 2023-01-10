import CartInfoAddress from './CartInfoAddress';
import CartInfoPrice from './CartInfoPrice';
import { CARTINFO_ASIDE } from './CartInfoAside';
import './CartInfo.scss';

const CartInfo = ({ cartList, setCartList, address }) => {
  // 버튼을 눌렀을 때 전송해야 할 데이터 담기
  // const onClickSignUp = (e) => {
  //   e.preventDefault();
  //   fetch('http://10.58.52.62:3000/users/signup', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json; charset=utf-8' },
  //     body: JSON.stringify({
  //       email: email,
  //       name: name,
  //       password: pwd,
  //       address: address,
  //       phone: phone,
  //       birthdate: birthdate,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result)=>console.log(result))

  return (
    <div className="cartInfo">
      <CartInfoAddress address={address} />
      <CartInfoPrice />
      {/* 주문하기 누르면 데이터가 백엔드로 전달되도록 해야 함 */}
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
