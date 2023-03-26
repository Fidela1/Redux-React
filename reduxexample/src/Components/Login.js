import React, { useState } from 'react'
import './Login.css'
const login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='login'>
        <form className='login_form'>
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

<button type='submit' className='submit_btn'>submit</button>
        </form>
      
    </div>
  )
}

export default login
