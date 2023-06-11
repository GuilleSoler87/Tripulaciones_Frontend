import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "./Header.scss";


const Header = () => {
  const { user, getUser, getChatsFromUser } = useContext(UserContext);
  const navigate = useNavigate();

  const tempDiv = (
    <div className="headerContainer">
      {/* Inside this div will go same as normal div, might reuse on the return */}
      <h1>Oooops</h1> 
    </div>
  )

  
  // useEffect(() => {
  //   getUser();
  //   getChatsFromUser();
  // }, []);

  // if (!user) {
  //   return tempDiv ;
  // }  

  return (
    <>
      <div className="headerContainer">
        <h1>Headerrrrs</h1>
      </div>
    </>
  );
};

export default Header;
