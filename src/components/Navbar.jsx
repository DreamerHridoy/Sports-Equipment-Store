import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name / Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Equipment Store
        </Link>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/ Equipment" className="text-white hover:text-gray-400">
                All Sports Equipment
              </Link>
            </li>
            <li>
              <Link to="users" className="text-white hover:text-gray-400">
                Users
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="addEquipment"
                    className="text-white hover:text-gray-400"
                  >
                    Add Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="EquipmentList"
                    className="text-white hover:text-gray-400"
                  >
                    My Equipment List
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* User Authentication Links */}
        <div>
          {user ? (
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-white hover:text-gray-400">
                {user.displayName}
              </span>
              <button
                // onClick={() => /* Handle log out logic here */}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="ml-4 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
