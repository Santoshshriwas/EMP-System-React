import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmpDashboard from './Components/Dashboard/EmpDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'


const App = () => {
  
 const [user,setUser]= useState(null)
 const handelLogin = (email,password)=>{
  if(email == 'admin@me.com' && password == "123"){
    console.log("This is login admin");
  }
  else if(email == "emp@gmail.com" && password == "emp123"){
    console.log("This is login emp");
    }
  else{
    alert("Invalid credentials")
  }
 }
// handelLogin('emp@gmail.com',"emp123")
  return (
   <>
   {/* {!user ? <Login handelLogin={handelLogin}/>: ''} */}
   {/* <EmpDashboard/>  */}
   <AdminDashboard/>
  
   
   </>
  )
}

export default App
