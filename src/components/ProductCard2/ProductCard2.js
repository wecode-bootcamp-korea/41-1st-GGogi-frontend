import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import ShoppingModal from '../ShoppingModal/ShoppingModal';
import './ProductCard2.scss';

const ProductCard2 = ({ product }) => {
  const [shoppingModal2, setShoppingModal2] = useState();
  const isShoppingModal2 = (e) => {
    setShoppingModal2(!shoppingModal2);
  };

  return (
    <div className="productCard2">
      <img src={product.img} className="productCard2Img" />
      <div className="productCard2Middle">
        <div className="productCard2title">{product.title}</div>
        <div className="productCard2price">{product.price}원</div>
      </div>
      <div className="productCard2Cart">
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

export default ProductCard2;
