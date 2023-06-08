import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";
import { UserContext } from "../../context/UserContext/UserState";

const Footer = () => {
  const { user, getUser } = useContext(UserContext);

  const navigate = useNavigate();

  

  useEffect(() => {
    getUser();
    getSingleChat(_id).then(() => setLoading(false));
  }, []);
  




 


  return (
    <>
    </>
  );
};

export default Footer;
