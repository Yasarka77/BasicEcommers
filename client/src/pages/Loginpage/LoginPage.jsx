

import React, { useState } from 'react'
import axios from 'axios'
import './LoginPage.css'

export default function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const LoginUser=async(e)=>{
        e.preventDefault()
        const response = await axios.post('http://localhost:3000/api/v1/user/login',{
            email:email,
            password:password
        })
        console.log(response.data.data)
        localStorage.setItem('userlogged',JSON.stringify(response.data.data))

    }
  return (
    <div className='container'>
        <form className='form'>
          <label>Email</label>
            <input type="text"placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
          <label>Password</label>
            <input type="password"placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn' onClick={LoginUser} type='submit'>Login</button>
        </form>
    </div>
  )
}

