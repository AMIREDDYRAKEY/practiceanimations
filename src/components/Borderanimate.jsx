import React from "react";
import { motion } from "framer-motion";

const Borderanimate = () => {
  const boxes = [
    { id: 1, color: "border-blue-500" },
    { id: 2, color: "border-pink-500" },
    { id: 3, color: "border-green-500" },
    { id: 4, color: "border-yellow-500" },
    { id: 5, color: "border-purple-500" },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center  bg-gray-900">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className={`md:w-80 w-60 h-80 border-2 ${box.color} rounded-md flex items-center justify-center text-white font-bold`}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 1, ease: "linear" }}
        >
           {box.id}
        </motion.div>
      ))}
    </div>
  );
};

export default Borderanimate;
