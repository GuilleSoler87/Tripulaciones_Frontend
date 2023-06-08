import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {

  const navigate = useNavigate();

  
  useEffect(() => {
  }, []);
  

  return (
    <>
      <div className="buttonsContainer">
        <Link to="/home" className="icon">
          <span className="material-symbols-outlined">home</span>
        </Link>
        <Link to="/calendar" className="icon">
          <span className="material-symbols-outlined">calendar_month</span>
        </Link>
        <Link to="/contacts" className="icon">
          <span className="material-symbols-outlined" id="central-icon">group</span>
        </Link>
        <Link to="/notification" className="icon">
          <span className="material-symbols-outlined">notifications</span>
        </Link>
        <Link to="/chatlist" className="icon">
          <span className="material-symbols-outlined">chat</span>
        </Link>
      </div>
    </>
  );
};

export default Footer;
