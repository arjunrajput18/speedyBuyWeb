import React, { useState } from "react";
import "./SignUp.css";
import { NavLink,   useNavigate } from "react-router-dom";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import { VscEyeClosed,VscEye } from 'react-icons/vsc'
import { DataState } from "../../Contexts/Data/DataContext";
import { newAccountHandler } from "../../Services/AuthService/AuthService";
export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = AuthState();
  const [toggleEye,setToggleEye]=useState(false)
  const { dispatch } = DataState();
const navigate=useNavigate()


    
  return (
    <form className="signup-container" onSubmit={(e) => e.preventDefault()}>
      <div className="signup-innerContainer">
        <h2 className="text-center ">Sign Up</h2>
        <div className="name-container">
          <div>
            <label>First Name</label>
            <input
              placeholder="Test"
              className="signup-input-box"
              required
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              placeholder="Admin"
              className="signup-input-box"
              required
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="email-box">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            className="signup-input-box"
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="password-box">
          <label>Password</label>
          <div className="relative">
          <input
            type={toggleEye?"text":"password"}
            placeholder="******"
            className="signup-input-box"
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          { user.password &&  <p className="eye-icon-signup" onClick={()=>setToggleEye(!toggleEye)}>
                {toggleEye? <VscEye/>:<VscEyeClosed/>}
            </p>}
          </div>
        
        </div>
        <div>
          <button className="signup-btn" onClick={()=>newAccountHandler(user,setIsLoggedIn,dispatch,navigate)}>
            Create New Account
          </button>
        </div>
        <NavLink to={"/login"} className="text-center">
          Already have an account
        </NavLink>
      </div>
    </form>
  );
};
