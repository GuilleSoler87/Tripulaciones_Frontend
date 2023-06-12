import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { UserContext } from "../../context/UserContext/UserState";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import noPic from "../../../src/images/no_pic.png";
import noBgPic from "../../../src/images/no_bg_pic.png";

const Profile = () => {
  const { user, getUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return (
      <>
        <Header />
        <div className="profileContainer">
          <div className="imageContainer"></div>
          <div className="profileInfoContainer"></div>
        </div>
        <Footer />
      </>
    );
  }

  const extractFilePathFromImage = (path) => {
    const url = "https://desafio-backend-production.up.railway.app/";
    return url + path.replace("uploads/", "");
  };

  const interestsDiv = user.interest.map((item) => {
    return <p className="item">{item.name}</p>;
  });

  const hobbiesDiv = user.hobbies.map((item) => {
    return <p className="item">{item.name}</p>;
  });

  return (
    <>
      <Header />
      <div className="profileContainer">
        <div className="imageContainer">
          <img
            className="backgroundImage"
            src={
              user.backgroundImg
                ? extractFilePathFromImage(user.backgroundImg)
                : noBgPic
            }
          />
          <div className="profileImageContainer">
            <img
              className="profileImage"
              src={user.img ? extractFilePathFromImage(user.img) : noPic}
            />
          </div>
        </div>
        <div className="profileInfoContainer">
          <p className="profileUsername">{user.username}</p>
          <p className="profileUsertype">
            {user.userType.name.replace("Usuario ", "")}
          </p>
          <p className="profileDegree">{user.degree.name}</p>
          <p className="profilePosition">{user.cargo || "Estudiante"}</p>
          <p className="profileBio">{user.bio}</p>
          <p className="profileTitle">Intereses</p>
          <div className="interestsContainer">{interestsDiv}</div>
          <p className="profileTitle">Hobbies</p>
          <div className="hobbiesContainer">{hobbiesDiv}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
