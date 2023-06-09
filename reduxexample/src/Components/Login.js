import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css'
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        login({
          name:name,
          email:email,
          password:password,
          loggedIn:true,
})
)
      
    }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
<h1> Login</h1>
<input type='Name'
 placeholder='name'
  value={name} 
  onChange = {(e) => setName(e.target.value)}/>

<input type='Email' 
placeholder='email' 
value={email}
onChange = {(e) => setEmail(e.target.value)}/>
<input type='Password' 
placeholder='password' 
value={password}
onChange = {(e) => setPassword(e.target.value)}/>

<button type='submit' className='submit_btn'>Signin</button>
        </form>
      
    </div>
  )
}

export default Login
