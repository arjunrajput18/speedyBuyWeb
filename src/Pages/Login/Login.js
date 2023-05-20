import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div>
 
      <form className="login-form-container">
      
        <div className="login-form-innerContainer">
        <h1>Sign In</h1>
          <div className="">
            <div className="login-email">
              <input type="text" placeholder="username" className="input-email"/>
            </div>
            <div className="login-password">
              <input type="password" placeholder="password" className="input-password"/>
            </div>
          </div>

          <button className="login-btn">Login</button>
      
          <button className="login-guest-btn">Login as Guest</button>
       
          <NavLink to="/signup">Don't have account?</NavLink>
        </div>
      </form>
    </div>
  );
};
