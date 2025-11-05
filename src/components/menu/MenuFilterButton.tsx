import { BiFilterAlt as FilterIcon } from 'react-icons/bi';
import { useStore } from '../../store/store';
import { FaAngleDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const MenuFilterButton = () => {
  const { toggleFilter, filterActive } = useStore();
  return (
    <div
      className="hover:cursor-pointer mt-16 hover:bg-orange-500 btn btn-sm btn-ghost border rounded border-slate-400/80 shadow-xl text-white"
      onClick={toggleFilter}
    >
      <button className="">
        <FilterIcon className="text-lg hover:cursor-pointer" />
      </button>
      <span className="font-sans hover:cursor-pointer">Filter</span>
      <motion.div animate={{ rotate: filterActive ? 180 : 0 }}>
        <FaAngleDown className="text-xs hover:cursor-pointer" />
      </motion.div>
    </div>
  );
};

export default MenuFilterButton;
