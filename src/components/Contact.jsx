import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col gap-5 justify-center p-4 items-center min-h-screen bg-gray-900 mt-10 ">
     <div>
         <motion.div
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, x:100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 ,delay:0.5}}
      >
        Contact Us
      </motion.div>
       <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-md md:text-md w-[70%] text-gray-300 mb-8  max-w-2xl"
            >
              We help you create modern web experiences with animations, interactivity, and simplicity.
            </motion.p>
            </div>
       <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[100%] max-w-md text-white"
        initial={{ opacity: 1, X: 50 }}
        animate={{ opacity: 1, y:[0,10,0]}}
        transition={{ duration: 3, ease: "linear" ,repeat:Infinity}}
      >
        <motion.h2
          className="text-2xl font-bold text-pink-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
           Contact Us
        </motion.h2>

        <form className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
              rows={4}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
