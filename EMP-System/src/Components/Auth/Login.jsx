import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const submiteHandler= (e)=>{
     e.preventDefault()
    console.log("submit button clicked");
    console.log(email,password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-700 p-20 rounded-xl'>
        <form onSubmit={(e)=>{
          submiteHandler(e)
        }} className='flex
        flex-col items-center justify-center'>
          {/* <label className='block text-lg font-bold mb-2'>Enter A Email</label> */}
          <input value={email} onChange={(e)=>{setEmail(e.target.value);
          }} required type='email' className=' w-full p-4 outline-none bg-transparent  mb-4 mt-4 border-2
          border-emerald-600 text-xl py-3 px-5 text-black rounded-full' placeholder='Enter your email'/>
          {/* <label className='block text-lg font-bold mb-2'>Enter A Password</label> */}
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required type='password' className=' w-full p-4 outline-none bg-transparent  mb-4 mt-4 border-2
          border-emerald-600 text-xl py-3 px-5 text-black rounded-full'placeholder='Enter your password'/>
          <button className='flex text-center justify-center p-4 outline-none bg-transparent  mb-4 mt-4 border-4
          bg-emerald-600 text-xl py-3 px-5 text-white font-bold border-red-600 rounded-full'>Log in</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
