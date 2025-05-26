import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/SignupForm';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import Create from './admin/Create';
import Delete from './admin/Delete';
import Updates from './admin/Updates';

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/delete' element={<Delete/>}></Route>
          <Route path='/update' element={<Updates/>}></Route>

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
  );
}
