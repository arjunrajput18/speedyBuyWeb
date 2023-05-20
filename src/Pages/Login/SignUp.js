import React from 'react'
import "./SignUp.css"
import { NavLink } from 'react-router-dom'
export const SignUp = () => {
  return (
    <form className='signup-container'>
        <div className='signup-innerContainer'>
            <h2 className='text-center '>Sign Up</h2>
            <div className='name-container'>
            <div>
            <label>First Name</label>
                <input placeholder='Test' className='signup-input-box'/>
            </div>
             <div>
                <label>Last Name</label>
                <input placeholder='Admin' className='signup-input-box'/>
             </div>
            </div>
            <div className='email-box'>
                <label >Email Address</label>
                <input placeholder='test@gmail.com' className='signup-input-box'/>
            </div>
            <div className='password-box' >
                <label>Password</label>
                <input placeholder='******' className='signup-input-box'/>
            </div>
            <div>
                <button className='signup-btn'>Create New Account</button>
            </div>
            <NavLink to={"/login"} className='text-center'>Already have an account</NavLink>
        </div>
    </form>
  )
}
