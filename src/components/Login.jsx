import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await axios.post('http://localhost:5000/api/userlogin', {
  Email: email,
  Password: password
},
{
    withCredentials: true // ✅ So session cookie is set
  }
);

const role = res.data.role; // Assuming the response contains a Role field
      console.log('Login successful:', res.data);
      // Optionally redirect or store token
      localStorage.setItem('role', res.data.role); // Store token in localStorage
console.log('Role:', res.data.role); // Log the role for debugging

      setEmail('');
      setPassword('');
      setError('');

      if(role === 'Admin') {
        navigate('/admin'); }
        else if(role === "User"){// Redirect to admin page
      navigate('/home');} // Redirect to home page after successful login
      else{
        navigate('/'); // Redirect to login page if role is not recognized
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('https://imgs.search.brave.com/AyvS9nTktqchL6N57dj0Pr8CM84_yln4Wa0NFsyzHlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NDk1MjEwL3Bob3Rv/L2NvbmNlcnQtY3Jv/d2QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpzNTk0bThm/NUxKN0RxSlRLMnk2/Vi1Tb2p3dmtFUXRn/aU5Pc20wQTJzTmM9')] bg-cover bg-center min-h-screen min-w-full">
      <div className='mx-auto opacity-87 min-w-md gap-y-4 flex flex-col shadow-lg p-6 border rounded-lg bg-slate-200 dark:bg-slate-800'>
        <h1 className='text-[28px] font-bold dark:text-white mb-6 text-center'>Login</h1>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-[18px] dark:text-white'>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded-md border-2 border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 dark:text-white'
              required
            />
          </div>
   <div>
            <label htmlFor="password" className="text-[18px] text-gray-800 dark:text-white">
              Password
            </label>
            <div className="relative ">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded-md border-2 border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 dark:text-white'
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-gray-600 dark:text-gray-300"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className='mx-auto w-full p-5'>
            <button
              type="submit"
              className='w-full text-[20px] text-white bg-blue-500 p-2 rounded hover:bg-blue-600'
            >
              Login
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
