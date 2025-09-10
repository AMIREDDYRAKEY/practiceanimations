import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
         <div className="border-2 h-1 w-[100%]"></div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © . All rights reserved.
      </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
