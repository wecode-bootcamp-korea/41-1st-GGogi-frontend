import React from 'react';
import ProductCard2 from './ProductCard2';

const ProductCardList2 = ({ productList }) => {
  return (
    <div className="productList">
      {productList.map((product) => (
        <ProductCard2 key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList2;
