import { Link } from 'react-scroll';
import { navLinks } from '../../data/navLinks';
import { NavLink } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';

import ActiveCart from '../cart/ActiveCart';
import UserMenu from '../user/UserMenu';
import MobileNav from './MobileNav';

const NavBar = () => {
  return (
    <nav
      className="navbar flex items-center text-white bg-orange-500 p-6 w-full font-extrabold mb-12"
      data-testid="navbar"
    >
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
      <ul className="nav-links hidden lg:flex w-full navbar-start gap-2">
        {navLinks.map((link, index) => {
          const isRouterLink = link.name === 'Home' || link.name === 'Menu';
          const linkPath =
            link.name === 'Home'
              ? '/'
              : link.name === 'Menu'
              ? '/menu'
              : link.to;

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

      <ul className="btn-container flex w-full navbar-end gap-2 items-center ">
        <li
          data-testid="instagram-btn"
          className="social-list-item border rounded-full py-1 px-3 border-black border-b-4 border-r-2 hover:border-b-6 hover:border-r-6 hover:scale-110 transition-all duration-200 hover:cursor-pointer"
        >
          <FaInstagram className="text-2xl hover:cursor-pointer" />
        </li>
        <li
          data-testid="cart-btn"
          className="cart-list-item border rounded-full py-1 px-3 border-black border-b-4 border-r-2 hover:border-b-6 hover:border-r-6 hover:scale-110 transition-all duration-200 hover:cursor-pointer"
        >
          <ActiveCart />
        </li>
        <li
          data-testid="user-menu"
          aria-label="user-menu"
          className="login-list-item border rounded-full items-center px-2 py-1 border-black border-b-4 border-r-2 hover:border-b-6 hover:border-r-6 hover:scale-110 transition-all duration-200 hover:cursor-pointer"
        >
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
