import { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import './CartProductList.scss';

const CartProductList = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('/data/cartProductData.json')
      .then((result) => result.json())
      .then((data) => setCartList(data));
  }, []);

  return (
    <div className="cartProductList">
      {cartList.map((item) => {
        return (
          <div key={item.id} className="productList">
            <BsCheckCircleFill className="checkIcon" />
            {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
          <BsCheckCircle className="uncheckIcon" /> */}
            <img className="cartProductImg" src={item.img} alt="음식사진1" />
            <p className="productName">{item.title}</p>
            {/* [Todo] 버튼 컴포넌트 merge되면 사용 예정 */}
            <button className="wating">버튼</button>
            <span className="price">{item.price}원</span>
            <button className="deleteBtn">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
