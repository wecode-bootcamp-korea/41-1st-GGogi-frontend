import Navloginsignup from './Navloginsignup';
import Navsearchline from './Navsearchline';
import Navcategory from './Navcategory';
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
