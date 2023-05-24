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
//  const [loading,setLoading]=useState(true)
 
  const logOutHandler = () => {
    setIsLoggedIn(null);
    localStorage.clear();
  };
  // const user= JSON.parse(
  //   localStorage.getItem("user")
  // );
  var userJson = localStorage.getItem("user");
  if (userJson) {
    var user = JSON.parse(userJson);
  } else {
    localStorage.removeItem("user");
  }
  
// const { firstName, lastName, email } =user

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
                  <h2>Profile Details</h2>
                </div>
                <div className="main-profile-details">
                <div className="align-profile-details">
                  <div className="details-title">Full name:</div>
                  
                </div>
                <div className="text-field">
                    {user?.firstName} {user?.lastName}
                  </div>
                <div className=" align-profile-details">
                  <div className="details-title">Email:</div>
                
                </div>
                
                <div className="text-field">{user?.email}</div></div>
                <div>
                  <h2>Account Settings</h2>
                </div>
                <div>
                  <button onClick={logOutHandler} className="profile-logout-btn">Log Out</button>
                </div>
              </div>
           
          )}
        </div>
      </div>
    </div>
  );
};
