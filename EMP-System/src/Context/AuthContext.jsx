import React, { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

const AuthContext = ({children}) => {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   // getLocalStorage()
  // })
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthContext;
