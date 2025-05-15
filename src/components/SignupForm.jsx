import React, { use, useState } from 'react';



export default function Signup() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");
    const [role,setRole]=useState("Admin","User");
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
            <input type="submit" value="Signup"/>
        </form>
    </div>
)
}