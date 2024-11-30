import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/top-rated", text: "Top" },
    { to: "/kids-wear", text: "Kids" },
    { to: "/mens-wear", text: "Mens" },
    { to: "/trending", text: "Trending" },
  ];

  return (
    <nav className="p-2">
      <ul className="flex space-x-8 justify-center">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-black font-semibold  hover:text-gray-400"
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
