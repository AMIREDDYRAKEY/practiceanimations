import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ["Mushrooms", "Peppers", "Onions", "Olives", "Extra Cheese", "Tomatoes"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[400px] text-center">
        <h3 className="text-2xl font-bold text-pink-500 mb-6">
           Step 2: Choose Toppings
        </h3>

        <ul className="space-y-3">
          {toppings.map((topping) => {
            let spanClass =
              pizza.toppings.includes(topping)
                ? "bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg"
                : "bg-gray-700 text-gray-300 px-6 py-2 rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300";

            return (
              <li key={topping} onClick={() => addTopping(topping)}>
                <span className={spanClass} style={{ cursor: "pointer" }}>
                  {topping}
                </span>
              </li>
            );
          })}
        </ul>

        {pizza.toppings.length > 0 && (
          <div className="mt-6">
            <Link to="/order">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300">
                Order 
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toppings;
