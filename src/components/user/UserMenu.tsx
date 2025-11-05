import { useState } from "react";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import DropdownMenu from "./DropdownMenu";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleDropdownMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="relative flex items-center">
        <div>
          
            <div className="down-arrow flex flex-row items-center gap-1" onClick={handleDropdownMenu}>
              <UserIcon className="text-2xl hover:cursor-pointer" />
              <FaAngleDown className="text-xs hover:cursor-pointer" />
            </div>
        </div>
          <DropdownMenu menuOpen={showMenu} setShowMenu={setShowMenu}/>
      </div>
    </>
  );
};

export default UserMenu;
