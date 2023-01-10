import React from 'react';
import './CartInfoPrice.scss';

const CartInfoPrice = ({
  cartList,
  setCartList,
  calTotalPrice,
  convertPrice,
}) => {
  //[Todo] cart 정보 가져와서 합산해야 함
  const CART_PRICEINFO = [
    {
      id: 1,
      name: '상품금액',
      price: calTotalPrice && convertPrice(calTotalPrice),
    },
    {
      id: 2,
      name: '배송비',
      price: 0,
    },
    {
      id: 3,
      name: '결제예정금액',
      price: calTotalPrice && convertPrice(calTotalPrice),
    },
  ];

  return (
    <div className="cartInfoPrice">
      {CART_PRICEINFO.map((item) => {
        return (
          <div key={item.id} className="priceInfoSection">
            <span className="priceTitle">{item.name}</span>
            <div className="priceSection">
              <span className="priceInfo">{item.price}</span>
              <span className="priceUnit"> 원</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartInfoPrice;
