import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/SignupForm';
import { div } from 'framer-motion/client';

export default function App() {

  return(
  <div>
      <Navbar/>
  <Signup/>
  </div>
);
}

