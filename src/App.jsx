import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/SignupForm';
import Login from './components/Login';
import { div } from 'framer-motion/client';
import { Route } from 'react-router-dom';

export default function App() {

  return(
  <div>
      <Navbar/>
  <Signup/>
  </div>
);
}

