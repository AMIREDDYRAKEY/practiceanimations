import React from "react";
import { motion } from "framer-motion";

const PizzaBox = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 relative overflow-hidde">
      
       <motion.div
        className="absolute w-[450px] h-[450px] border-8 border-pink-500 rounded-full opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      <div className="relative w-48 h-48 z-10">
        <motion.div
          className="absolute inset-0 bg-yellow-800 rounded-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type:"spring"  }}
        />

        

        {/* Pizza */}
        <motion.div
          className="absolute inset-6 bg-yellow-400 rounded-full border-4 border-yellow-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default PizzaBox;
