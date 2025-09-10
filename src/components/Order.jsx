import React from "react";

const Order = ({ pizza }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-green-400 mb-4">
           Thank You for Your Order!
        </h2>
        <p className="text-center text-lg mb-3">
          You ordered a <span className="font-semibold">{pizza.base}</span> pizza
          with:
        </p>
        <div className="space-y-2">
          {pizza.toppings.length > 0 ? (
            pizza.toppings.map((topping) => (
              <div
                key={topping}
                className="bg-gray-700 px-4 py-2 rounded-lg text-center hover:bg-green-500 hover:text-black transition"
              >
                {topping}
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-center">No toppings selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
