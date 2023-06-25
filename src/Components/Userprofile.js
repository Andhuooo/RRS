import React, { useState } from "react";
import "./Userprofile.css";
import userprofile from "../userprofile.png";
import Header from "./common/Header";
import { userprofile as fetchUserProfile } from "../libs/api";

function Userprofile() {
  const [user] = useState(localStorage.getItem("user"));
  // const [age] = useState(localStorage.getItem("age"));

  const getUserProfile = async () => {
    try {
      const response = await fetchUserProfile({ email: user });

      if (response && response.status === 200) {
        // Process the response data here
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="user-profile-container" onClick={getUserProfile}>
        <div className="user-profile-header">
          <h2>User Profile</h2>
        </div>
        <div className="user-profile-content">
          <div className="user-profile-picture">
            <img src={userprofile} alt="User Profile" />
          </div>
          <div className="user-profile-details">
            <h3>{user}</h3>
            <p>Email: {user}</p>
            {/* <p>Age: {age}</p> */}
            
            {/* Add additional user details here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
