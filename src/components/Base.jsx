import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ pizza, addBase }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[400px] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="text-2xl font-bold text-pink-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Step 1: Choose Your Base
        </motion.h3>

        <ul className="space-y-3">
          {bases.map((base, index) => {
            let spanClass =
              pizza.base === base
                ? "bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg"
                : "bg-gray-700 text-gray-300 px-6 py-2 rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300";

            return (
              <motion.li
                key={base}
                onClick={() => addBase(base)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <span className={spanClass} style={{ cursor: "pointer" }}>
                  {base}
                </span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/toppings">
              <motion.button
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next →
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Base;
