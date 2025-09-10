
import { IoArrowRedo } from 'react-icons/io5';

const HeroBar = () => {
  return (
    <div className="hero-bar w-full bg-green-900 text-white p-8 flex justify-center rounded">
      <ul className="flex flex-col sm:flex-row justify-between gap-6 items-center">
        <li className="flex items-center">
          <div
            className="uppercase text-2xl sm:text-3xl font-extrabold
            "
          >
            Order Now
          </div>
          <IoArrowRedo className="text-2xl" />
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
