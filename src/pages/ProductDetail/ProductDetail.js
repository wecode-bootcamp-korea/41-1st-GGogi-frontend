import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdShare } from 'react-icons/md';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailCart from './ProductDetailCart/ProductDetailCart';
import GGogi from '../../assets/images/GGogi.png';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { name, price, image_url } = productDetail;
  console.log(productDetail);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.62:3000/products/${productId}`)
      // fetch(`http://10.58.52.62:3000/products`)
      .then((result) => result.json())
      .then((data) => setProductDetail(data));
  }, [productId]);

  return (
    <div className="productDetail">
      <div className="productDetailTop">
        <img src={image_url} className="productDetailImg" />
        <section className="productDetailInfo">
          <div className="productDetailName">
            <div className="productDetailNameTop">샛별배송</div>
            <div className="productDetailNameMiddle">
              <div className="productDetailNameMiddleL">{name}</div>
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
