import CartProductList from './CartProductList';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartProduct.scss';
import Cart from '../Cart';

const CartProduct = () => {
  return (
    <div className="cartProduct">
      <div className="checkSection">
        <BsCheckCircleFill className="checkIcon" />
        {/* [Todo] 선택 여부에 따라 버튼 다르게 만들기
        <BsCheckCircle className="uncheckIcon" /> */}
        <span className="wholeCheckWord">전체선택</span>
        <div className="checkCountSection">
          <span className="checkedQuantity">0</span>
          <span className="slash">/</span>
          {/* 전체 수량 나오게끔 연결해야 함 */}
          <span className="wholeQuantity">4</span>
        </div>
        <div className="stick">|</div>
        <div className="deleteBtnSection">
          <button className="deleteSelectionBtn">선택삭제</button>
        </div>
      </div>
      <hr className="cartLineTop" />
      {/* 장바구니에 담긴 상품이 없으면 여기부터 안보이게 하기 */}
      <div className="cartTitleSection">
        <AiOutlineShoppingCart className="cartIcon" />
        <span className="wholeProduct">전체상품</span>
      </div>
      {/* {cart.length === 0 ? (
        <div className="emptyBaseketSection">
          <p className="emptyBaseketInfo">장바구니에 담긴 상품이 없습니다.</p>
        </div>
      ) : (
        <CartProductList />
      )} */}

      <hr className="cartLineUnder" />
    </div>
  );
};

export default CartProduct;
