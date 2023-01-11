import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ShoppingModal from '../ShoppingModal/ShoppingModal';
import './ProductCardMini.scss';

const ProductCardMini = ({ product }) => {
  const { name, price, thumbnail_image } = product;
  const navigate = useNavigate();
  const [shoppingModal2, setShoppingModal2] = useState();
  const showMiniProduct = (id) => {
    navigate(`/productdetail/${id}`);
  };
  const isShoppingModal2 = (e) => {
    setShoppingModal2(!shoppingModal2);
  };

  return (
    <div className="productCardMini">
      <img
        src={thumbnail_image}
        alt="thumbnailImg"
        className="productCardMiniImg"
        onClick={() => showMiniProduct(product.id)}
      />
      <div
        className="productCardMiniMiddle"
        onClick={() => showMiniProduct(product.id)}
      >
        <div className="productCardMinititle">{name}</div>
        <div className="productCardMiniprice">{price}원</div>
      </div>
      <div className="productCardMiniCart">
        <button className="productCart2Btn" onClick={isShoppingModal2}>
          <BsCart2 />
          담기
        </button>
      </div>
      {shoppingModal2 ? (
        <ShoppingModal product={product} isShoppingModal={isShoppingModal2} />
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductCardMini;
