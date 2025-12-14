import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSignInAlt, FaStar, FaCalendarAlt } from 'react-icons/fa';

const DropdownMenu = ({
  menuOpen,
  setShowMenu,
}: {
  menuOpen: boolean;
  setShowMenu: (showMenu: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300,
            bounce: 0.2,
          }}
          className="absolute top-5 right-0 w-48 bg-slate-800/90 backdrop-blur-sm rounded-md shadow-lg overflow-hidden z-50"
          aria-label="Drop Down Menu"
        >
          <motion.div
            className="py-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/login"
                className="flex items-center px-4 py-3 text-sm text-white hover:bg-slate-700/80 transition-colors duration-200"
                onClick={() => setShowMenu(false)}
              >
                <FaSignInAlt className="mr-3 text-orange-500" />
                <span>Login</span>
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/reviews"
                className="flex items-center px-4 py-3 text-sm text-white hover:bg-slate-700/80 transition-colors duration-200"
                onClick={() => setShowMenu(false)}
              >
                <FaStar className="mr-3 text-orange-500" />
                <span>Reviews</span>
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/reservations"
                className="flex items-center px-4 py-3 text-sm text-white hover:bg-slate-700/80 transition-colors duration-200"
                onClick={() => setShowMenu(false)}
              >
                <FaCalendarAlt className="mr-3 text-orange-500" />
                <span>Reservations</span>
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
