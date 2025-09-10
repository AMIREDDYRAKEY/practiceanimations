// Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1f2937] text-white fixed w-full h-[60px] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 ">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold cursor-pointer"
        >
          Welcome
        </motion.h1>
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative cursor-pointer"
            >
              {link}
              <motion.span
                className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden flex flex-col items-center gap-6 bg-[#111827] py-6"
        >
          {links.map((link, i) => (
            <li key={i} className="cursor-pointer text-lg">
              {link}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
