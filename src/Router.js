import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';

import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';

import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order/checkout" element={<Payment />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
