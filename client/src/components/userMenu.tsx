import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserMenuProps } from "../utils/Types";
import { ImCross } from "react-icons/im";


const UserMenu: React.FC<UserMenuProps> = ({ isVisible, onClose, logout }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (isVisible) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 p-4"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-lg font-bold text-red-500 hover:text-red-700 transition"
      >
        <ImCross/>
      </button>

      {/* Menu Items */}
      <ul className="mt-4 space-y-4">
        <li>
          <NavLink
            to="/orders"
            className="block bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition"
          >
            Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="block bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <button
            onClick={logout}
            className="w-full text-left bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition"
          >
           Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
