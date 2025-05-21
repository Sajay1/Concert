import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/SignupForm';
import Login from './components/Login';
import { div } from 'framer-motion/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

export default function App() {

  return(
  <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
      </Routes>
  </div>
);
}

