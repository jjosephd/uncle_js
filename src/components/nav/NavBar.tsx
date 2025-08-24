import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';

const NavBar = () => {
  return (
    <nav className="navbar flex items-center text-white bg-orange-500 p-6 w-full font-extrabold mb-12">
      <div className="flex sm:hidden">MenuBtn</div>
      <ul className="nav-links hidden sm:flex w-full navbar-start gap-2">
        {navLinks.map((link, index) => (
          <li key={index} className="">
            <NavLink to={link.link}>
              <span className="uppercase text-white text-md sm:text-xl font-extrabold hover:cursor-pointer">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="btn-container flex w-full navbar-end gap-4">
        <li className="social-list-item">Instagram</li>
        <li className="cart-list-item">Cart</li>
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
