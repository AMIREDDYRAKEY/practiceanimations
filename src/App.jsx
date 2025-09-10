import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from './components/Base';
import Home from './components/Home';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Loader from './components/Loader';
import Contact from './components/Contact';
 import Cards from './components/Cards';
import Hero from './components/Hero';
const App = () => {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
      <div>
        <Hero/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Loader/>
      </div>
      <div>
        <Contact/>
      </div>
    </Router>
  );
};

export default App;
