import React from 'react';

const HeroBar = () => {
  return (
    <div className="hero-bar w-full bg-green-900 text-white p-8 flex justify-center rounded">
      <ul className="flex justify-between gap-6 items-center">
        <li>
          <div
            className="uppercase text-2xl sm:text-3xl font-extrabold
            "
          >
            Order Now
          </div>
        </li>
        <li className="bar-item flex items-center">
          <div className="border border-black border-b-6 border-r-4 rounded-full text-sm sm:text-sm py-1 px-2 font-extrabold">
            Pickup
          </div>

          <div className="uppercase font-extrabold mx-2">Or</div>
          <div className="border border-black border-b-6 border-r-4 rounded-full text-sm sm:text-sm py-1 px-2 font-extrabold">
            Delivery
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeroBar;
