import React from 'react';
import ProductCard from './ProductCard';

const ProductCardList = ({ productList }) => {
  return (
    <div className="productList">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
