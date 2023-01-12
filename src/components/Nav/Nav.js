import Navloginsignup from './Navloginsignup';
import Navsearchline from './Navsearchline';
import Navcategori from './Navcategori';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <Navloginsignup />
      <Navsearchline />
      <Navcategori />
    </nav>
  );
};

export default Nav;
