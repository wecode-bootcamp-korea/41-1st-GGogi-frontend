import Navloginsignup from './components/Navloginsignup';
import Navsearchline from './components/Navsearchline';
import Navcategory from './components/Navcategory';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <Navloginsignup />
      <Navsearchline />
      <Navcategory />
    </nav>
  );
};

export default Nav;
