// Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-[0px] min-h-screen flex flex-col justify-center items-center bg-[#111827] text-center px-6">

      <motion.h1
      initial={{opacity:1,x:0}}
          animate={{opacity:2,x:10 }}   
      transition={{duration:2, repeat: Infinity,repeatType:"mirror",ease:"easeOut"  }}
        className="text-4xl md:text-6xl font-bold text-white mb-4"
      >
        Welcome to This Website
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl"
      >
        We help you create modern web experiences with animations, interactivity, and simplicity.
      </motion.p>
      <div className="md:flex md:flex-row flex flex-col md:mt-2 mt-9 md:gap-4 gap-10">      
        <motion.button
         animate={{ y: [0, -20, 0] }}   
      transition={{duration: 3, repeat: Infinity,repeatType: "loop",ease: "easeInOut"              
      }}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-[#111827] hover:border-[1px] transition"
      >
        Get Started
      </motion.button>
       <motion.button
         
         animate={{ y: [0, 0, -30] }}   
      transition={{duration: 3, repeat: Infinity,repeatType:"reverse",ease: "easeInOut"              
      }}
        className="px-8 py-3 border-[1px] text-white font-semibold rounded-full shadow-lg  hover:bg-blue-700 hover:text-black"
      >
        Get Started
      </motion.button>
      </div>
    </section>
  );
};

export default Hero;
