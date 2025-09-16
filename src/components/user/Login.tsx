import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/store';
import { FaRegUserCircle as UserIcon } from 'react-icons/fa';
import UserMenu from './UserMenu';

const Login = () => {
  const { isMenuOpen, toggleMenu } = useStore();

  const menuVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    }, // This 'visible' key was duplicated and had an 'opacity: 0' which would hide the menu immediately.
    // The second 'visible' key below will be used.
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="relative flex items-center" onClick={toggleMenu}>
        <div>
          <UserIcon className="text-2xl hover:cursor-pointer" />
        </div>
      </div>
      <UserMenu />
    </>
  );
};

export default Login;
