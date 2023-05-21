import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext=createContext();


export const AuthContextProvider = ({children}) => {
  
const token=localStorage.getItem("token")//initial token :-null 
const[isLoggedIn,setIsLoggedIn]=useState(token)
// console.log(isLoggedIn,"aaa")


  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}


export const AuthState=()=>{
    return useContext(AuthContext)
}
