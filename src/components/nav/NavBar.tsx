import { Link } from 'react-scroll';
import { navLinks } from '../../data/navLinks';
import { NavLink } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';

import ActiveCart from '../cart/ActiveCart';
import UserMenu from '../user/UserMenu';
import MobileNav from './MobileNav';

const NavBar = () => {
  return (
    <nav className="navbar flex items-center text-white bg-orange-500 p-6 w-full font-extrabold mb-12">
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
      <ul className="nav-links hidden lg:flex w-full navbar-start gap-2">
        {navLinks.map((link, index) => {
          const isRouterLink = link.name === 'Home' || link.name === 'Menu';
          const linkPath = link.name === 'Home' ? '/' : link.name === 'Menu' ? '/menu' : link.to;
          
          return (
            <li key={index}>
              {isRouterLink ? (
                <NavLink to={linkPath}>
                  <span className="uppercase text-white text-md sm:text-xl font-extrabold hover:cursor-pointer hover:text-green-900">
                    {link.name}
                  </span>
                </NavLink>
              ) : (
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
              )}
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
          <UserMenu />
        </li>
        <li className="order-list-item">
          <NavLink to="/">
            <div className="order-btn border border-black border-b-6 border-r-6 rounded-full text-xs sm:text-lg py-1 px-2">
              Order Now
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
