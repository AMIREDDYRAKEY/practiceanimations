import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from './components/Navbar';
import Contact from './components/Contact';
 import Cards from './components/Cards';
 import Hero from './components/Hero'
import Clickanimate from './components/Clickanimate';
import Circle from './components/Circle';
const App = () => {
 

  return (
    <div>
       <div><Navbar/></div>
       <div><Hero/></div>
      <div><Cards/></div>
      <div><Clickanimate/></div>
      <div><Contact/></div>
    </div>
  );
};

export default App;
