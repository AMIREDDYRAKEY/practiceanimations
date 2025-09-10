import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition">
           Pizza Builder
        </Link>
        <nav className="space-x-6">
          <Link
            to="/base"
            className="hover:text-pink-400 transition font-medium"
          >
            Base
          </Link>
          <Link
            to="/toppings"
            className="hover:text-pink-400 transition font-medium"
          >
            Toppings
          </Link>
          <Link
            to="/order"
            className="hover:text-pink-400 transition font-medium"
          >
            Order
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
