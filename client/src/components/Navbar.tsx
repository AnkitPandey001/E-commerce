import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import UserMenu from "./userMenu";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const productCount = 3;

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  };

  return (
    <div className="bg-primary/40 text-white shadow-md w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-orange-500 text-black font-serif transition-all duration-300">
            Shop
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex-grow px-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg text-black outline-none border border-gray-300 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
          />
        </div>

        {/* Auth and Cart Section */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              {/* Shopping Cart */}
              <div className="relative flex space-x-4">
                <div>
                  <NavLink
                    to="/wishlist"
                    className="bg-gray-900 p-3 rounded-xl flex items-center justify-center hover:bg-gray-700 transition relative"
                  >
                    <FaRegHeart size={20} />
                    {productCount > 0 && (
                      <span
                        className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce"
                      >
                        {productCount}
                      </span>
                    )}
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/cart"
                    className="bg-gray-900 p-3 rounded-xl flex items-center justify-center hover:bg-gray-700 transition relative"
                  >
                    <FaShoppingCart size={20} />
                    {productCount > 0 && (
                      <span
                        className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce"
                      >
                        {productCount}
                      </span>
                    )}
                  </NavLink>
                </div>
              </div>

              {/* User Profile */}
              
              <button
                onClick={toggleUserMenu}
                className="text-lg bg-gray-900 rounded-xl p-2 font-medium hover:text-orange-500 transition-all duration-300"
              >
                <AiOutlineUser size={30} />
              </button>
            </>
          ) : (
            <>
              {/* Login Link */}
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-lg text-black font-semibold  transition-all duration-300 ${
                    isActive ? "text-orange-900 font-extrabold" : "hover:text-orange-500"
                  }`
                }
              >
                Login
              </NavLink>

              {/* Signup Link */}
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-lg text-black  transition-all duration-300 font-semibold ${
                    isActive ? "text-orange-900 font-extrabold" : "hover:text-orange-500"
                  }`
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* User Menu */}
      <UserMenu
        isVisible={isUserMenuVisible}
        onClose={toggleUserMenu}
        logout={logout}
      />
    </div>
  );
};

export default Navbar;
