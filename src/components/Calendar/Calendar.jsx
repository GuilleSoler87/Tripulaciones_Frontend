import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.scss";
import Footer from "../Footer/Footer";

const Calendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <h1>Calendar</h1>
      <Footer />
    </>
  );
};

export default Calendar;
