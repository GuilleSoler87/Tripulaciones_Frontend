import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { UserContext } from "../../context/UserContext/UserState";


const Profile = () => {
  const { user, token, getUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, [])

  if (!user) {
    return "loading";
  }

  return (
    <>
      <h1>Profile</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </>
  );
};

export default Profile;
