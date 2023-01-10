import CheckBtn from '../../../components/CheckBtn/CheckBtn';
import './CartProductList.scss';

const CartProductList = ({
  cartList,
  setCartList,
  setSelectedItemIdArr,
  handleCheckBtn,
}) => {
  const handleRemove = (id) => {
    setCartList(cartList.filter((el) => el.cartId !== id));
    console.log(cartList);

    // fetch('http://10.58.52.62:3000/cart/deleteItem', {
    //     method: 'DELETE',
    //     headers: {
    //       Authorization: localStorage.getItem('Token'),
    //     },
    //     body: JSON.stringify({
    //       productId: cartId,
    //     }),
    // id와 같지 않은 것들을 새로 담아주기
  };

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
              <button className="modalBtn" alt="minus">
                -
              </button>
              <div className="plusMinusTotal">{quantity}</div>
              <button className="modalBtn" alt="plus">
                +
              </button>
            </div>
            <span className="price">{price * quantity}원</span>
            <button
              className="deleteBtn"
              id={cartId}
              onClick={() => handleRemove(cartId)}
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
