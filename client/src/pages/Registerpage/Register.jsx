import axios from 'axios'
import React, {useState} from 'react'

export default function Register() {
    const [username, setUsername] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


const RegisterUser= async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/v1/user/register',{
        username: username,
        email:email,
        password:password
    })
    console.log(response)
}

  return (
    <div className='container'>
        <form className='form'>
            <label>Email</label>
            <input type="text"placeholder='Your email' onChange={(e)=> setEmail(e.target.value)}/>
            <label>Username</label>
            <input type="text"placeholder='User name' onChange={(e)=> setUsername(e.target.value)}/>
            <label>Password</label>
            <input type="password"placeholder='Your password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn' onClick={RegisterUser} type='submit'>Register</button>
        </form>
    </div>
  )
}


