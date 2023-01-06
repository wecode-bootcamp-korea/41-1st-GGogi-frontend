import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdShare } from 'react-icons/md';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailCart from './ProductDetailCart/ProductDetailCart';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/1`
    )
      .then((result) => result.json())
      .then((data) => setProductDetail(data));
  }, []);

  return (
    <div className="productDetail">
      <img src={productDetail.img} className="productDetailImg" />
      <section className="productDetailInfo">
        <div className="productDetailName">
          <div className="productDetailNameTop">샛별배송</div>
          <div className="productDetailNameMiddle">
            <div className="productDetailNameMiddleL">
              {productDetail.title}
            </div>
            <MdShare className="productDetailNameMiddleR" />
          </div>
        </div>
        <div className="productDetailPrice">{productDetail.price}</div>
        <ProductDetailInfo />
        <ProductDetailCart product={productDetail} />
      </section>
    </div>
  );
};

export default ProductDetail;
