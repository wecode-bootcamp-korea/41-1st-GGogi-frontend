import { Fragment, useState } from 'react';
// [Todo] 전체 체크버튼과 개별 체크버튼 연결하기
// import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
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
  // [Todo] 전체 체크버튼과 개별 체크버튼 연결하기
  const onClickChangeIcon = (e) => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="cartProduct">
      <div className="checkSection">
        {/* [Todo] 전체 체크버튼과 개별 체크버튼 연결하기 */}
        {/* <div className="checkBtn" onClick={onClickChangeIcon}>
          {isChecked ? (
            <BsCheckCircleFill className="checkBtnTrue" />
          ) : (
            <BsCheckCircle className="checkBtnFalse" />
          )}
        </div>
        <span className="wholeCheckWord">전체선택</span> */}
        <div className="checkCountSection">
          <span className="checkedQuantity">
            {selectedItemIdArr && selectedItemIdArr.length}
          </span>
          <span className="slash"> / </span>
          <span className="wholeQuantity">{cartList && cartList.length}</span>
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
