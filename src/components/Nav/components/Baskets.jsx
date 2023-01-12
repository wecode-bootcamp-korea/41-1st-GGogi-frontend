import React, { useState, useEffect } from 'react';
import './Baskets.scss';

const Baskets = () => {
  const [cartCountNum, setcartCountNum] = useState(1);

  useEffect(() => {
    const cartCount = localStorage.getItem('baskets');
    if (cartCount) {
      setcartCountNum(cartCount.length + 1);
    }
  }, [cartCountNum]);

  return (
    <> {cartCountNum && <div className="cartCountIcon">{cartCountNum}</div>}</>
  );
};

export default Baskets;
