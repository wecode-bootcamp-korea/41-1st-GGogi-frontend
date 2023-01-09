import { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import PlusMinusBtn from './../../../components/PlusMinusBtn/PlusMinusBtn';
import './CartProductList.scss';

const CartProductList = () => {
  const [itemList, setItemList] = useState([]);

  // 아이템 리스트를 담아서 컴포넌트로 보내고, 컴포넌트에서 map()으로 리스트 뿌리기?
  // 이것을 Cart.jsx에서 해야하는지 아니면 CartProductList에서 해야하는지.
  useEffect(() => {
    fetch('http://10.58.52.62:3000/cart', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // setItemList(data.results);
      });
  }, []);

  return (
    <div className="cartProductList">
      {itemList.map((item) => {
        return (
          <div key={item.id} className="productList">
            <BsCheckCircleFill className="checkIcon" />
            {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
          <BsCheckCircle className="uncheckIcon" /> */}
            <img className="cartProductImg" src={item.img} alt="음식사진1" />
            <p className="productName">{item.title}</p>
            {/* [Todo] 버튼 컴포넌트 merge되면 사용 예정 */}
            <PlusMinusBtn />
            <span className="price">{item.price}원</span>
            <button className="deleteBtn">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
