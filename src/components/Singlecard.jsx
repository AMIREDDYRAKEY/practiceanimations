// AnimatedCards.jsx
import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "AR", description: "AAAAAAAAAA." },
];

const Singlecard = ({open,setopen}) => {
  return (
    <section className="flex justify-center pt-20 z-10 md:ml-[100px]">
      <div className="grid md:grid-cols-3 md:gap-[100px] px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white md:w-[500px] md:h-[200px] h-[250px] w-[250px] rounded-xl flex justify-center items-center flex-col shadow-lg  cursor-pointer"
            
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-2xl  font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
       
          <motion.button className="absolute md:top-3 md:right-3 top-[90px] right-[30px] text-gray-500 hover:text-red-500 font-bold text-xl" onClick={()=>setopen(!open)}>X</motion.button>
             </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Singlecard;
