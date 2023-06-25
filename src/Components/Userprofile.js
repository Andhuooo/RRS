
import React, { useState } from "react";
import "./Userprofile.css";
import userprofile from "../userprofile.png";

function Userprofile() {
  const [user] = useState(localStorage.getItem("user"));
  const [age] = useState(localStorage.getItem("age"));
  
  

  return (
    <div className="user-profile-container">
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
          <p>Age: {age}</p>
          
          {/* Add additional user details here */}
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
