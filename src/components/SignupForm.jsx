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
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />  <label for="ConfirmPassword">Confirm Password:</label>
            <input type="password" id="ConfirmPassword" name="ConfirmPassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <br/>
            <label for="Role">Role:</label>
            <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <br/>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>        </form>
    </div>
)
}