import React, { useState, useEffect } from 'react';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import './ProductList.scss';
const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/products`)
      .then((response) => response.json())
      .then((result) => setProductList(result));
  }, []);

  return (
    <div className="productList">
      <ProductCardList productList={productList} />
    </div>
  );
};

export default ProductList;
