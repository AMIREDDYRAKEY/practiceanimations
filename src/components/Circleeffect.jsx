import React from 'react'
import { motion } from 'framer-motion';

const Circleeffect = () => {
  return (
    <div className="flex gap-10 h-[300px] justify-around mt-[150px] ">
      <motion.div
        animate={{
          scale: [1, 1, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["50%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="border-2 h-[150px] w-[150px] bg-slate-100"
      />

      <motion.div
        animate={{
          scale: [1, 1, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["1%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="border-2 h-[150px] w-[150px] bg-slate-100"
      />
    </div>
  );
};

export default Circleeffect;
