import { Fragment } from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import CartProductList from './CartProductList';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartProduct.scss';

const CartProduct = ({
  cartList,
  setCartList,
  selectedItemIdArr,
  setSelectedItemIdArr,
  handleCheckBtn,
  convertPrice,
}) => {
  return (
    <div className="cartProduct">
      <div className="checkSection">
        <BsCheckCircleFill className="checkIcon" />
        {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
        <BsCheckCircle className="uncheckIcon" /> */}
        <span className="wholeCheckWord">전체선택</span>
        <div className="checkCountSection">
          <span className="checkedQuantity">{selectedItemIdArr.length}</span>
          <span className="slash"> / </span>
          <span className="wholeQuantity">{cartList.length}</span>
        </div>
        <div className="stick">|</div>
        <div className="deleteBtnSection">
          <button className="deleteSelectionBtn">선택삭제</button>
        </div>
      </div>
      <hr className="cartLineTop" />
      {cartList.length === 0 ? (
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
            convertPrice={convertPrice}
          />
        </Fragment>
      )}

      <hr className="cartLineUnder" />
    </div>
  );
};

export default CartProduct;
