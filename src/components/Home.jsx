import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white" 
    style={{intial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1.5}}}
    >  
      <motion.h2
        initial={{ x: -100, y: -100, opacity: 0 }}
  animate={{ x: 0, y: 0, opacity: 1  }}
  transition={{ duration: 4, type:'spring', stiffness:200}}
  style={{ fontSize: 50, color: "#ff2994" }}
  className="font-bold mb-6 text-center"
      >
        Welcome to Pizza Joint 
      </motion.h2>
      <Link to="/base">
        <motion.button
  animate={{ scale: 1.5 }}
  transition={{ duration: 0.7 }}
  className="px-3 py-3 rounded-lg bg-pink-600 text-white font-semibold transition-all"
>
  Create Your Pizza
</motion.button>

      </Link>
    </motion.div>
  );
};

export default Home;
