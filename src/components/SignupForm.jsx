import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
        role
      });
      setMessage('User registered successfully');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setRole('Admin');
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('https://imgs.search.brave.com/AyvS9nTktqchL6N57dj0Pr8CM84_yln4Wa0NFsyzHlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NDk1MjEwL3Bob3Rv/L2NvbmNlcnQtY3Jv/d2QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpzNTk0bThm/NUxKN0RxSlRLMnk2/Vi1Tb2p3dmtFUXRn/aU5Pc20wQTJzTmM9')] bg-cover bg-center min-h-screen">
      <div className="mx-auto flex max-w-sm flex-col gap-y-4 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
        <h1 className="text-[28px] font-bold text-center text-gray-800 dark:text-white">Sign Up</h1>
        {message && <p className="text-red-500 text-center">{message}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-[18px] text-gray-800 dark:text-white">Name</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 p-2 text-black dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-[18px] text-gray-800 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 p-2 text-black dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-[18px] text-gray-800 dark:text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black dark:text-white w-full rounded-md border-2 border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmpassword" className="text-[18px] text-gray-800 dark:text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-black dark:text-white w-full rounded-md border-2 border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="text-[18px] text-gray-800 dark:text-white">Role</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 p-2 text-black dark:text-white"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
