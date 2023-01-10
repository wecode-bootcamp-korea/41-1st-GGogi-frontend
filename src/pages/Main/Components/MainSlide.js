import { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './MainSlide.scss';

export const ProductsMain = () => {
  const [productData, setProductData] = useState([]);
  const [px, setPx] = useState(0);

  useEffect(() => {
    fetch('#')
      .then((res) => res.json())
      .then((result) => {
        setProductData(result);
      });
  }, []);

  const overFlowValue =
    productData.length < 5 ? 0 : (productData.length - 5) * 265;
  const CARDWIDTH = 265;

  const handleClickLeft = () => {
    if (px <= -overFlowValue) {
      setPx((prev) => prev + CARDWIDTH);
    }
  };

  const handleClickRight = () => {
    if (px >= -overFlowValue) {
      setPx((prev) => prev - CARDWIDTH);
    }
  };

  return (
    <div className="productsMain">
      <p className="productsName">{productName}</p>
      <FiChevronLeft
        size="25px"
        className="carouselBtn"
        onClick={handleClickLeft}
      />
      <FiChevronRight
        size="25px"
        className="carouselBtn"
        onClick={handleClickRight}
      />
      <div className="carouselContainer">
        <div
          className="productLists"
          style={{ transform: `translate(${px}px)` }}
        >
          {productData.map(({ product }) => (
            <ProductCard key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
