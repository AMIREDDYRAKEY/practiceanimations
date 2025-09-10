import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from './components/Navbar';
import Contact from './components/Contact';
 import Cards from './components/Cards';
 import Hero from './components/Hero'
import Clickanimate from './components/Clickanimate';
import Circle from './components/Circle';
import Borderanimate from './components/Borderanimate';
import Scroll from './components/Scroll';
import Footer from './components/Footer';
const App = () => {
 

  return (
    <div>
       <div><Navbar/></div>
       <div><Hero/></div>
      <div><Cards/></div>
      <div><Clickanimate/></div>
      <div><Scroll/></div>
       <div><Borderanimate/></div>
       <div><Circle/></div>
      <div><Contact/></div>
      <div><Footer/></div>
    </div>
  );
};

export default App;
