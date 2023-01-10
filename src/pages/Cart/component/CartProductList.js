import CheckBtn from '../../../components/CheckBtn/CheckBtn';
import './CartProductList.scss';

const CartProductList = ({
  cartList,
  setCartList,
  setSelectedItemIdArr,
  handleCheckBtn,
  convertPrice,
}) => {
  const handleRemove = (id) => {
    console.log(id); //el.cartId !== id
    fetch('/data/cartList.json', {
      method: 'DELETE',
      // headers: {
      //   Authorization: userToken,
      // },
      body: JSON.stringify({ productId: id }),
    });
    setCartList(cartList.filter((el) => el.cartId !== id));

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
            <button className="deleteBtn" onClick={() => handleRemove(cartId)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductList;
