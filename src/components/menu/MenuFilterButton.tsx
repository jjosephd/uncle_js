import { BiFilterAlt as FilterIcon } from 'react-icons/bi';
import { useStore } from '../../store/store';
const MenuFilterButton = () => {
  const { toggleFilter } = useStore();
  return (
    <div
      className="hover:cursor-pointer hover:bg-orange-500 btn btn-sm btn-ghost border rounded border-slate-400/80 shadow-xl"
      onClick={toggleFilter}
    >
      <span className="font-sans hover:cursor-pointer">Filter</span>
      <button className="">
        <FilterIcon className="text-2xl hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default MenuFilterButton;
