import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Elbek. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            User
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Login
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
