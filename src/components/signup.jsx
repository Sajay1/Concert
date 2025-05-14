export default function Signup() {
return(
   <div>
    <input type="text" placeholder="Name" value={name} />
    <input type="text" placeholder="Email" value={email} />
    <input type="password" placeholder="Password" value={password}/>
    <input type="ConfirmPassword" placeholder="Confirm Password" value={ConfirmPassword} />
    <select name="Role" id="Role">
        <option value="Admin">Admin</option>
        <option value="User">User</option>
    </select>
   </div>
)
}