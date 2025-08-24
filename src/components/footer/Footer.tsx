import React from 'react';
import { navLinks, subLinks } from '../../data/navLinks';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-orange-500 w-full h-auto sm:h-48">
      <ul className="flex flex-col sm:flex-row sm:mx-auto justify-between sm:gap-6 p-4">
        {navLinks.map((link, index) => (
          <li key={index} className="">
            <NavLink to={link.link}>
              <span className="uppercase text-white text-2xl sm:text-4xl font-extrabold hover:cursor-pointer">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col sm:flex-row sm:mx-auto justify-between gap-6 p-4">
        {subLinks.map((link, index) => (
          <li key={index} className="">
            <NavLink to={link.link}>
              <span className="text-white font-extrabold hover:cursor-pointer">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
