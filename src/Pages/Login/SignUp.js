import React, { useState } from "react";
import "./SignUp.css";
import { NavLink,   useNavigate } from "react-router-dom";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import { VscEyeClosed,VscEye } from 'react-icons/vsc'
export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = AuthState();
  const [toggleEye,setToggleEye]=useState(false)
   
  // console.log(user)
// const location=useLocation();
const navigate=useNavigate()


  const newAccountHandler = async () => {
    if (user.firstName && user.lastName && user.email && user.password ) {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(user),
        });
        console.log(response);
        const data = await response.json();
        // console.log(a, "a");
        const {createdUser,encodedToken}=data
        setIsLoggedIn(true);
        // console.log(createdUser);
        localStorage.setItem("user",JSON.stringify(createdUser))
        localStorage.setItem("token",encodedToken)
        navigate("/productlisting")
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <button className="signup-btn" onClick={newAccountHandler}>
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
