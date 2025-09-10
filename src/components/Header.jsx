import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl  px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition"
        >
          Pizza Builder
        </Link>     
        <nav className="hidden lg:flex space-x-6">
          <Link to="" className="hover:text-pink-400 transition font-medium">
            Base
          </Link>
          <Link to="" className="hover:text-pink-400 transition font-medium">
            Toppings
          </Link>
          <Link to="" className="hover:text-pink-400 transition font-medium">
            Order
          </Link>
        </nav>

        
      </div>

     
    </header>
  );
};

export default Header;
