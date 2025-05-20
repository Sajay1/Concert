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
        <div className='flex flex-col gap-y-4'>
        <form onSubmit={handleSubmit}>
          <div className=''>
          <label htmlFor="username">Name</label>
          <input type="text" />
          </div>
        </form>     
        </div>
    </div>
    </div>
)
}