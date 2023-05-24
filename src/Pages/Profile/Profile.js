import React, { useState } from "react";
import "./Profile.css";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import { Address } from "./Address";
import { NewAddress } from "./NewAddress";
import { AddressState } from "../../Contexts/Data/AddressContext";
export const Profile = () => {

  const { setIsLoggedIn } = AuthState();
  const [toggleBtn, setToggleBtn] = useState(true);
  const {isHideBox, setisHideBox}=AddressState()
 
 
  const logOutHandler = () => {
    setIsLoggedIn(null);
    localStorage.clear();
  };
  const { firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );


  return (
    <div>
      <p className="text-center heading-profile ">Account</p>
      { isHideBox&& <NewAddress setisHideBox={setisHideBox} />}
      <div className="profile-container">
        <div className="profile-innerContainer">
          <div className="btn-profile-div">
            <button
              onClick={() => setToggleBtn(!toggleBtn)}
              className={`btn-profile ${toggleBtn ? "btn-profile-color" : ""}`}
            >
              Profile
            </button>
            <button
              onClick={() => setToggleBtn(!toggleBtn)}
              className={`btn-address ${!toggleBtn ? "btn-profile-color" : ""}`}
            >
              Address
            </button>
          </div>
          {!toggleBtn && <Address />}
          {toggleBtn && (
            <div className="profile-tab-container">
              <div>
                <div>
                  <h2>Profile Details</h2>
                </div>
                <div>
                  <span className="font-bold">Full name:</span>
                  <span>
                    {firstName} {lastName}
                  </span>
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
          )}
        </div>
      </div>
    </div>
  );
};
