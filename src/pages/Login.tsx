import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();

  const username: any = useRef()
  const password: any = useRef()

  const getUsername = localStorage.getItem("usernameData");
  const getPassword = localStorage.getItem("passwordData");

  const handleFormSubmit = () => {
    if(username.current.value === "1" && password.current.value === "1") {
      localStorage.setItem("usernameData", "1");
      localStorage.setItem("passwordData", "1");
      navigate("/dashboard")
    }
  }

  return (
    <div className='bg-gray-700 h-screen flex flex-col justify-center gap-4 items-center'>
      <form onSubmit={() => handleFormSubmit()} className='flex flex-col items-center gap-4'>
        <div>
          <input ref={username} className='bg-white p-3' type="text" placeholder="Enter username"></input>
        </div>
        <div>
          <input ref={password} className='bg-white p-3' type="password" placeholder="Enter password"></input>
        </div>
        <button className='bg-gray-900 p-3 text-white'>Log In</button>
      </form>
    </div>
  )
}

