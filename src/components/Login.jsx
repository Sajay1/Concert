import React, { useState,useEffect } from 'react';
import axios from 'axios';



export default function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
   axios.post('http://localhost:5000/api/login')
    .then(res => set(res.data))
    .catch(err => console.error('API error:', err));
    onCreated('');

    setEmail('')
    setPassword('')

  }

  

useEffect(() => {
  axios.post('http://localhost:5000/api/login')
    .then(res => set(res.data))
    .catch(err => console.error('API error:', err));
}, []);


    return(
    <div className='flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900'>
      <div className='mx-auto bg-transparent-500 min-w-md gap-y-4 flex flex-col shadow-lg p-6 border rounded-lg dark:bg-transparent-800'>
        <h1 className='text-[28px] font-bold dark:text-white mb-6 text-center'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <div className='flex flex-col'>
             <label htmlFor="email" className='text-[18px] dark:text-white'>Email</label>
          <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full rounded-md border-2 border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="password" className='text-[18px] dark:text-white'>Password</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full rounded-md border-2 border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
           
      <div className='mx-auto flex flex-col w-50 border rounded border-gray-500 dark:border-white-500'>
        <button type="submit" className='text-[20px] text-gray-500 dark:text-white bg-blue-400 p-2 hover:bg-blue-500'>Login</button>
      </div>
      <div className='mx-auto flex flex-col'>
        <span className='dark:text-white'>Don't have an account? <a className='text-blue-400 dark:text-blue-400' href="/signup">Signup</a></span>
      </div>
         </form>     
    </div>
    </div>
)
}