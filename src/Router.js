import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Search from './pages/Search/Search';
import Payment from './pages/Payment/Payment';
import Categories from './pages/Categories/Categories';
import MyPage from './pages/MyPage/MyPage';
import Test from './pages/Test';

const Router = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={<Cart cartList={cartList} setCartList={setCartList} />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order" element={<Payment />} />
        <Route path="/search" element={<Search />} />
        <Route path="/caregorys" element={<Categories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
