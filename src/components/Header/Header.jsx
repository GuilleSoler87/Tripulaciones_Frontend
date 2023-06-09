import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {

  const navigate = useNavigate();

  
  useEffect(() => {
  }, []);
  

  return (
    <>
      <div className="headerContainer">
        <h1>Header</h1>
      </div>
    </>
  );
};

export default Header;
