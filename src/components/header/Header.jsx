import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ` +
    (isActive
      ? "bg-gray-100 text-gray-900 underline"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50");

  return (
    <header
      className={"bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-40 "}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center gap-8">
          <NavLink className={linkClass} to={"/"}>
            Home
          </NavLink>
          <NavLink className={linkClass} to={"/posts"}>
            Posts
          </NavLink>
          <NavLink className={linkClass} to={"/signup"}>
            Sign up
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
