import React from "react";
import { motion } from "framer-motion";

const Circle = () => {
  return (
    <div className="flex justify-center  h-screen gap-6 bg-gray-900">
      
        <motion.div
          className="w-20 h-20 rounded-full bg-red-500 "
          animate={{ y:[0,-100,0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay:  0.2,
            ease:"easeIn",
          }}
        />
     
    </div>
  );
};

export default Circle;
