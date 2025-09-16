import { FaRegUserCircle as UserIcon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
      <div className="relative flex items-center">
        <div>
          <NavLink to="/login">
            <UserIcon className="text-2xl hover:cursor-pointer" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
