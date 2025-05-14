import React from 'react';

export default function Signup() {
return(
    <div>
        <h1>Signup</h1>
        <form>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />  <label for="ConfirmPassword">Confirm Password:</label>
            <input type="password" id="ConfirmPassword" name="ConfirmPassword" required/>
            <br/>
            <label for="Role">Role:</label>
            <input type="text" id="Role" name="Role" required/>
            <br/>
            <input type="submit" value="Signup"/>
        </form>
    </div>
)
}