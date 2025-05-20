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
    <div className="flex flex-col justify-center items-center bg-[url('https://imgs.search.brave.com/AyvS9nTktqchL6N57dj0Pr8CM84_yln4Wa0NFsyzHlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NDk1MjEwL3Bob3Rv/L2NvbmNlcnQtY3Jv/d2QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpzNTk0bThm/NUxKN0RxSlRLMnk2/Vi1Tb2p3dmtFUXRn/aU5Pc20wQTJzTmM9')] bg-cover bg-center min-h-screen">
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
              <h1 className='text-[28px] font-bold text-gray dark:text-white flex flex-col mb-6 text-center'>SignUp</h1>

               <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='flex flex-space-x-4 mb-4'>
             <label htmlFor="username" className='text-[18px] text-gray dark:text-white'>Name</label>
          <input type="text" id="username" value={name} onChange={(e)=>setName(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="email" className='text-[18px] text-gray dark:text-white'>Email</label>
          <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="password" className='text-[18px] text-gray dark:text-white'>Password</label>
          <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="confirmpassowrd" className='text-[18px] text-gray dark:text-white'>Confirm Password</label>
          <input type="text" id="confirmpassowrd" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="role" className='text-[18px] text-gray dark:text-white'>Role</label>
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