import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdShare } from 'react-icons/md';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailCart from './ProductDetailCart/ProductDetailCart';
import GGogi from '../../assets/images/GGogi.png';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { title, price, img } = productDetail;

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/1`
    )
      .then((result) => result.json())
      .then((data) => setProductDetail(data));
  }, []);

  return (
    <div className="productDetail">
      <div className="productDetailTop">
        <img src={img} className="productDetailImg" />
        <section className="productDetailInfo">
          <div className="productDetailName">
            <div className="productDetailNameTop">샛별배송</div>
            <div className="productDetailNameMiddle">
              <div className="productDetailNameMiddleL">{title}</div>
              <MdShare className="productDetailNameMiddleR" />
            </div>
          </div>
          <div className="productDetailPrice">{price}</div>
          <ProductDetailInfo />
          <ProductDetailCart product={productDetail} />
        </section>
      </div>
      <img className="productDetailImages" src={GGogi} alt="whyGGogi" />
    </div>
  );
};

export default ProductDetail;
