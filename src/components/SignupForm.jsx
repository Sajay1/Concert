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
        <h1 className='block bg-[#316ff6] align-items-center'>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className='white'>Name:</label>
            <input className='bg-white rounded-md' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label htmlFor="email">Email:</label>
            <input className='bg-white rounded-md' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label htmlFor="password">Password:</label>
            <input className='bg-white rounded-xl' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />  <label for="ConfirmPassword">Confirm Password:</label>
            <input className='bg-white rounded-md' type="password" id="ConfirmPassword" name="ConfirmPassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <br/>
            <label for="Role">Role:</label>
            <select   name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <br/>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>        </form>
    </div>
    </div>
)
}