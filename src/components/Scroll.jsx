import React from "react";
import { motion } from "framer-motion";

const Scroll = () => {
    const items = ["One", "Two", "Three", "Four", "Five"];
  return (
     <div className="w-full overflow-hidden bg-gray-900 py-10">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["100%", "0"] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-[200px] h-[150px] flex items-center justify-center bg-blue-600 rounded-lg text-white text-2xl font-bold"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
  );
};

export default Scroll;
