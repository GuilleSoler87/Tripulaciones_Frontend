import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Calendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <Header />
      <div className="calendarContainer">
        <h1>Calendar</h1>
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
