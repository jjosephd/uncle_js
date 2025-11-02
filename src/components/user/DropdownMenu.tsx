import { NavLink } from "react-router-dom"
import { FaSignInAlt, FaStar, FaCalendarAlt } from "react-icons/fa"

const DropdownMenu = ({menuOpen, setShowMenu}: {menuOpen: boolean, setShowMenu: (showMenu: boolean) => void}) => {
  return (
    <>
      {menuOpen && (
                <div className="absolute top-10 mt-2 w-48 bg-white rounded-md shadow-lg">

          <div className="py-1">
            <NavLink
              to="/login"
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowMenu(false)}
            >
              <FaSignInAlt className="mr-3 text-orange-500" />
              <span>Login</span>
            </NavLink>

            <NavLink
              to="/reviews"
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowMenu(false)}
            >
              <FaStar className="mr-3 text-orange-500" />
              <span>Reviews</span>
            </NavLink>

            <NavLink
              to="/reservations"
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowMenu(false)}
            >
              <FaCalendarAlt className="mr-3 text-orange-500" />
              <span>Reservations</span>
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default DropdownMenu  