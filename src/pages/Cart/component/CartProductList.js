import CheckBtn from '../../../components/CheckBtn/CheckBtn';
import { useEffect, useState } from 'react';
import './CartProductList.scss';

const CartProductList = ({
  cartList,
  setCartList,
  setSelectedItemIdArr,
  handleCheckBtn,
  convertPrice,
}) => {
  // useEffect(()=>{},[deleteItem])

  const [deleteItem, setDeleteItem] = useState('');

  //1. deleteItem 변수 저장하기 V
  //2. 클릭했을 때 useEffcet로 fetch Delete 전송 V
  //3. 결과가 좋으면 그때 삭제 기능 발동!

  const handleDeleteItem = (id) => {
    // setDeleteItem(id);
    console.log(id);

    fetch(`http://10.58.52.62:3000/carts/deleteItem?cartId=${id}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('Token'),
        'Content-Type': 'application/json',
      },
    }).then(handleRemove(id));
  };

  const handleRemove = (id) => {
    setCartList(cartList.filter((el) => el.cartId !== id));
    localStorage.setItem('cartList', JSON.stringify(cartList));
  };

  const handleAdd = (cartId) => {
    const updateQty = cartList.map((cart) => {
      if (cart.cartId === cartId) {
        return { ...cart, quantity: cart.quantity + 1 };
      } else return cart;
    });
    setCartList(updateQty);
  };

  const handleSubtrac = (cartId) => {
    const updateQty = cartList.map((cart) => {
      if (cart.cartId === cartId && cart.quantity > 1) {
        return { ...cart, quantity: cart.quantity - 1 };
      } else return cart;
    });
    setCartList(updateQty);
  };

  return (
    <div className="cartProductList">
      {cartList?.map((cart) => {
        const { cartId, price, productName, quantity, thumbnailImage } = cart;
        return (
          <div key={cartId} className="productList">
            <CheckBtn
              cartId={cartId}
              setSelectedArr={setSelectedItemIdArr}
              handleCheckBtn={handleCheckBtn}
            />
            <img
              className="cartProductImg"
              src={thumbnailImage}
              alt="음식사진1"
            />
            <p className="productName">{productName}</p>
            <div className="plusMinusBtn">
              <button
                className="modalBtn"
                alt="minus"
                onClick={() => handleSubtrac(cartId)}
              >
                -
              </button>
              <div className="plusMinusTotal">{quantity}</div>
              <button className="modalBtn" onClick={() => handleAdd(cartId)}>
                +
              </button>
            </div>
            <span className="price">
              {price * quantity && convertPrice(price * quantity)}원
            </span>
            <button
              className="deleteBtn"
              onClick={() => handleDeleteItem(cartId)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
