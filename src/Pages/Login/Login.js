import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./login.css";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { DataState } from "../../Contexts/Data/DataContext";
export const Login = () => {
  const { setIsLoggedIn } = AuthState();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const { dispatch } = DataState();

  const loginHandler = async () => {
    if (email && password) {
      const creds = {
        email,
        password,
      };

      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(creds),
        });
        // console.log(response)
        const { foundUser, encodedToken } = await response.json();
        if (response.status === 200) {
          // console.log("a")
          setIsLoggedIn(true);
          localStorage.setItem("user", JSON.stringify(foundUser));
          // localStorage.setItem("token", encodedToken);
          dispatch({type:"SET_TOKEN",payload:encodedToken});
          navigate(location?.state?.from?.pathname);

          // location?.state?.from?.pathname
        } else {
          alert(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }

    // console.log(email)
  };

  const guestLoginhandler = async () => {
    const creds = {
      email: "arjun@gmail.com",
      password: "rajput",
    };
    setEmail(creds.email);
    setPassword(creds.password);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const data = await response.json(); //readable format convert //if not await used promise is pending
      // console.log( await response.json()) readiable format convert into .json()
      // console.log( await response.json())

      const { foundUser, encodedToken } = data;
      // console.log(foundUser.email)
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(foundUser)); //foundUse is object[obj,obj]
      const encoded=localStorage.setItem("token", encodedToken);
      dispatch({type:"SET_TOKEN",payload:encodedToken});
      // console.log(location);
      console.log("login guest click");
      console.log(location);
      navigate(location?.state?.from?.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="login-form-container" onSubmit={submitHandler}>
        <div className="login-form-innerContainer">
          <h1>Sign In</h1>
          <div className="">
            <div className="login-email">
              <input
                type="text"
                placeholder="username"
                className="input-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="login-password relative">
              <input
                type={toggleEye ? "text" : "password"}
                placeholder="password"
                className="input-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {password && (
                <p
                  className="eye-icon"
                  onClick={() => setToggleEye(!toggleEye)}
                >
                  {toggleEye ? <VscEye /> : <VscEyeClosed />}
                </p>
              )}
            </div>
          </div>

          <button className="login-btn" onClick={loginHandler}>
            Login
          </button>

          <button className="login-guest-btn" onClick={guestLoginhandler}>
            Login as Guest
          </button>

          <NavLink to="/signup">Don't have account?</NavLink>
        </div>
      </form>
    </div>
  );
};
