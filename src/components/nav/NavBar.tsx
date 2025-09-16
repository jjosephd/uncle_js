import { Link } from 'react-scroll';
import { navLinks } from '../../data/navLinks';
import { NavLink } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';

import ActiveCart from '../cart/ActiveCart';
import { useStore } from '../../store/store';
import Login from '../user/Login';

const NavBar = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <nav className="navbar flex items-center text-white bg-orange-500 p-6 w-full font-extrabold mb-12">
      <div className="flex lg:hidden">MenuBtn</div>
      <ul className="nav-links hidden lg:flex w-full navbar-start gap-2">
        {navLinks.map((link, index) => {
          if (link.name === 'Menu') {
            return (
              <li key={index}>
                <NavLink to="/menu">
                  <span className="uppercase text-white text-md sm:text-xl font-extrabold hover:cursor-pointer hover:text-green-900">
                    {link.name}
                  </span>
                </NavLink>
              </li>
            );
          }
          return (
            <li key={index}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="uppercase text-white text-md sm:text-xl font-extrabold hover:cursor-pointer hover:text-green-900">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="btn-container flex w-full navbar-end gap-4 items-center">
        <li className="social-list-item">
          <FaInstagram className="text-xl hover:cursor-pointer" />
        </li>
        <li className="cart-list-item">
          <ActiveCart />
        </li>
        <li className="login-list-item">
          <Login />
        </li>
        <li className="order-list-item">
          <NavLink to="/">
            <div className="order-btn border border-black border-b-6 border-r-6 rounded-full text-lg sm:text-2xl py-1 px-2">
              Order Now
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
