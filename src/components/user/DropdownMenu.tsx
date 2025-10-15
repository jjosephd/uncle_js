import { NavLink } from "react-router-dom"

const DropdownMenu = ({menuOpen}: {menuOpen: boolean}) => {
  return (
    <>
      {menuOpen && (
        <div className="absolute top-10 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <NavLink
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Login
            </NavLink>

            <NavLink
              to="/reviews"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Reviews
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default DropdownMenu  