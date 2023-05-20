import React from "react";
import "./Profile.css"
import { AuthState } from "../../Contexts/Auth/AuthContext";
export const Profile = () => {
const {setIsLoggedIn}=AuthState()



  const logOutHandler=()=>{
    setIsLoggedIn(null)
    localStorage.clear()
  }
const {firstName,lastName,email}=JSON.parse(localStorage.getItem("user"))

  return (
    <div className="profile-container">
      <div className="profile-innerContainer">
        <h2>Account</h2>
        <div>
          <h2>Profile Details</h2>
        </div>
        <div>
          <span className="font-bold">Full name:</span>
          <span>{firstName} {lastName}</span>
        </div>
        <div>
          <span className="font-bold">Email:</span>
          <span>{email}</span>
        </div>
        <div>
          <h2>Account Settings</h2>
        </div>
        <div>
          <button onClick={logOutHandler}>Log Out</button>
        </div>
      </div>
    </div>
  );
};
