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
  //2. 클릭했을 때 useEffcet로 fetch Delete 전송
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
    }).then((result) => console.log(result));
    // .then((result) => {
    //   if (result.message === 'DELETE_ITEM_SUCCEE') {
    //     handleRemove(deleteItem);
    //   }
    // });
  };
  console.log(deleteItem);

  // useEffect(() => {
  //   if (deleteItem === '') return;
  //   fetch(`http://10.52.58.62:3000/carts/deleteItem?cartId=${deleteItem}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: localStorage.getItem('Token'),
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       cartId: deleteItem,
  //     }),
  //   })
  //     .then((result) => console.log(result))
  //     .then((result) => {
  //       if (result.message === 'DELETE_ITEM_SUCCEE') {
  //         handleRemove(deleteItem);
  //       }
  //     });
  // }, [deleteItem]);

  const handleRemove = (id) => {
    setCartList(cartList.filter((el) => el.cartId !== id));
    localStorage.setItem('cartList', JSON.stringify(cartList));

    fetch(`http://10.52.58.62:3000/carts/deleteItem?cartId=${deleteItem}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('Token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartId: deleteItem,
      }),
    }).then((result) => console.log(result));
    // .then((result) => {
    //   if (result.message === 'DELETE_ITEM_SUCCEE') {
    //     handleRemove(deleteItem);
    //   }
    // });

    // fetch('http://10.58.52.62:3000/cart/deleteItem', {
    //     method: 'DELETE',
    //     headers: {
    //       Authorization: localStorage.getItem('Token'),
    //     },
    //     body: JSON.stringify({
    //       productId: id,
    //     }),
    // id와 같지 않은 것들을 새로 담아주기
  };
  console.log(cartList);

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

  // let totalPriceArr = [];
  // for (let i = 0; i < cartList.length; i++) {
  //   totalPriceArr.push(cartList[i].quantity * cartList[i].price);
  // }
  // const calTotalPrice = totalPriceArr.reduce((a, b) => a + b);
  // console.log(calTotalPrice);

  return (
    <div className="cartProductList">
      {cartList.map((cart) => {
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
