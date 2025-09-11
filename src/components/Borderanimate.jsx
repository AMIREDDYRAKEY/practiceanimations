import React from "react";
import { motion } from "framer-motion";

const Borderanimate = () => {
  const boxes = [
    { id: 1, color: "border-blue-500" },
    { id: 2, color: "border-pink-500" },
    { id: 3, color: "border-green-500" },
    
  ];

  return (
    <div className="grid  grid-cols-3  ml-[100px] gap-[10px] items-center mt-10  bg-gray-900">
      {boxes.map((box) => (
        <motion.div
  key={box.id}
  className={`md:w-50 w-60 h-40 border-[1px] ${box.color} rounded-md flex items-center justify-center text-white font-bold shadow-lg cursor-pointer`}
  animate={{ 
    opacity: 1,               
    rotateY:360,       
    boxShadow: "0px 20px 40px rgba(0,0,0,0.4)" 
  }}
  transition={{ 
    duration: 4,       
    ease: "linear",    
    delay: 2,
    repeat: Infinity   
  }}
  style={{ perspective: 1000 }}
>
  {box.id}
</motion.div>

      ))}
    </div>
  );
};

export default Borderanimate;
