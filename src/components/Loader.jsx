import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-start gap-4 flex-col items-center min-h-screen bg-gray-900 pt-[50px]">
           <motion.h2
        className="text-white md:text-[50px] text-2xl font-semibold"
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
