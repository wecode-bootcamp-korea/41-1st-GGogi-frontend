import { Fragment, useState } from 'react';
import CartProductList from './CartProductList';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartProduct.scss';

const CartProduct = ({
  cartList,
  setCartList,
  selectedItemIdArr,
  setSelectedItemIdArr,
  handleCheckBtn,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onClickChangeIcon = (e) => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="cartProduct">
      <div className="checkSection">
        <div className="checkCountSection">
          <span className="checkedQuantity">
            {selectedItemIdArr && selectedItemIdArr.length}
          </span>
          <span className="slash"> / </span>
          <span className="wholeQuantity">
            {cartList ? cartList.length : 0}
          </span>
        </div>
        <div className="stick">|</div>
        <div className="deleteBtnSection">
          <button className="deleteSelectionBtn">선택삭제</button>
        </div>
      </div>
      <hr className="cartLineTop" />
      {!cartList?.length ? (
        <div className="emptyBaseketSection">
          <p className="emptyBaseketInfo">장바구니에 담긴 상품이 없습니다.</p>
        </div>
      ) : (
        <Fragment>
          <div className="cartTitleSection">
            <AiOutlineShoppingCart className="cartIcon" />
            <span className="wholeProduct">전체상품</span>
          </div>
          <CartProductList
            cartList={cartList}
            setCartList={setCartList}
            setSelectedItemIdArr={setSelectedItemIdArr}
            handleCheckBtn={handleCheckBtn}
          />
        </Fragment>
      )}

      <hr className="cartLineUnder" />
    </div>
  );
};

export default CartProduct;
