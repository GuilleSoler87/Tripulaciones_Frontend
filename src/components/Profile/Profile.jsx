import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { UserContext } from "../../context/UserContext/UserState";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Profile = () => {
  const { user, token, chats, getUser, getChatsFromUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    getChatsFromUser();
  }, [])

  if (!user) {
    return "loading";
  }


  return (
    <>
      <Header />
      <div className="profileContainer">
        <h1>Profile</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
