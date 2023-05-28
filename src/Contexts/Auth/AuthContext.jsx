import React, { createContext, useContext,  useState } from 'react'

export const AuthContext=createContext();


export const AuthContextProvider = ({children}) => {
  
const token=localStorage.getItem("token")//initial token :-null 
const[isLoggedIn,setIsLoggedIn]=useState(token)



  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}


export const AuthState=()=>{
    return useContext(AuthContext)
}
