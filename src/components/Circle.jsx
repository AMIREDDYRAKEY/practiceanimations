import React from "react";
import { motion } from "framer-motion";

const Circle = () => {
  return (
    <div className="flex justify-center items-center mt-[100px]  gap-6 bg-gray-900">
      {[1, 2, 3,4,5,6].map((circles, i) => (
        <motion.div
          key={i}
          className="w-16 h-16 rounded-full bg-green-500"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Circle;
