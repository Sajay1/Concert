import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/SignupForm';

export default function App() {

  return(
  <div>
      <div className=''>
      <Navbar/>
    </div>
    <div>    
      <Signup/>
    </div>
  </div>
);
}

