import React from "react";
import "./Profile.css";

const Profile = ({id, image, name}) => {
  return (
    <div className="profile">
      <img src = {image} alt="Self" height = "100px" width="100px"/>
      <h2>{name}</h2>
      <h3>{id}</h3>
    </div>
  )
};

export default Profile;