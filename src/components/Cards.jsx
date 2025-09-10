// AnimatedCards.jsx
import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "AR", description: "AAAAAAAAAA." },
  { title: "AR", description: "AAAAAAAAA." },
  { title: "AR", description: "AAAAAAAAAAA." },
];

const Cards = () => {
  return (
    <section className="py-16 bg-gray-800 flex justify-center">
      <div className="grid md:grid-cols-3 gap-[100px] px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay:index*0.6  }}
            whileHover={{ scale: 1.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
