// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import img from '../assets/img.png'
const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
        initial={{ scale: 1 }}
        animate={{ scale:2 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          welcome 
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#4f46e5" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl"
        >
          Get Started
        </motion.button>
      </div>
      <motion.div
        className="absolute w-16 h-16 bg-white opacity-20 rounded-full top-20 left-10"
        animate={{ y: ["0px", "0px", "0px","50px"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-32 right-16"
        animate={{ y: ["0px", "-30px", "0px"] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
};

export default Hero;
