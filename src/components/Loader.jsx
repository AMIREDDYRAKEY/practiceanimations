import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-start flex-col items-center min-h-screen bg-gray-900">
           <motion.h2
        className="text-white text-[50px] font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, type:"keyframes", duration: 1.2 }}
      >
        For Loading.....
      </motion.h2>
      <motion.div
        className="w-[200px] h-[200px] border-4 border-t-pink-500 border-gray-700 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
