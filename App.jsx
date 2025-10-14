import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const[email,setmail]=useState();
  const[password,setpassword]=useState();

  const handalevent=()=>{
        const playout={
          Email:email,
          Password:password
        }
        console.log("Output",playout)
        axios.post('https://api.escuelajs.co/api/v1/auth/login',playout)
        localStorage.setItem("Token",res.data.access_token)
        .then((res)=>{
          alert("Login Success")
          console.log("Login Successful",res)
        })
        .catch((err)=>{
          alert("Login Failde")
          console.log("Login Failde",err)
        })

  }
    return(
      <>
      <div className="Home">
        <p>Login Page</p>
        <div className="">
          <p>Email</p>
          <input onChange={(e)=>setmail(e.target.value)} type="text" name="" id="" />
        </div>
        <div className="">
          <p>password</p>
          <input onChange={(e)=>setpassword(e.target.value)} type="text" />
        </div>
        <button onClick={handalevent}>Login</button>
      </div>
      </>
    )
}

export default App
