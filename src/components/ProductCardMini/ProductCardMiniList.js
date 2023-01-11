import React from 'react';
import ProductCardMini from './ProductCardMini';

const ProductCardMiniList = ({ productList }) => {
  return (
    <div className="productList">
      {productList.map((product) => (
        <ProductCardMini key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardMiniList;
