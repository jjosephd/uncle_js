import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store/store';

const UserMenu = () => {
  const { isMenuOpen } = useStore();

  const menuVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-16 right-10 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h3 className="text-lg font-bold mb-2">User Menu</h3>
          <ul>
            <li>Login / Register</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserMenu;
