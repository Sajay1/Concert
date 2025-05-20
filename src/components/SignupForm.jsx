import React, { useState,useEffect } from 'react';
import axios from 'axios';



export default function Signup() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");
    const [role,setRole]=useState("Admin","User");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post();
    onCreated('');
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setRole("Admin","User")
  }

  

useEffect(() => {
  axios.post('http://localhost:5000/api/signup')
    .then(res => set(res.data))
    .catch(err => console.error('API error:', err));
}, []);


    return(
    <div className='flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900'>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <h1 className='text-[28px] font-bold text-white mb-6 text-center'>SignUp</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <div className='flex flex-col'>
             <label htmlFor="username" className='text-[18px]'>Name</label>
          <input type="text" id="username" value={name} onChange={(e)=>setName(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="email" className='text-[18px] text-green-100'>Email</label>
          <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="password" className='text-[18px] text-green-100'>Password</label>
          <input type="text" id="username" value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="confirmpassowrd" className='text-[18px] text-green-100'>Confirm Password</label>
          <input type="text" id="username" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="username" className='text-[18px] text-green-100'>Role</label>
             <select name="role" id="role" className='text-white border-white border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value={role} onChange={(e)=>setRole(e.target.value)}> 
            <option value="Admin">Admin</option>
            <option value="User">User</option>
             </select>
          </div>
         </form>     
    </div>
    </div>
)
}