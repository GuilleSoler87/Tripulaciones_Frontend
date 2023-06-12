import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Calendar = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Calendar");


  useEffect(() => {
    setTimeout(() => {
      setActiveComponent('Calendar');
    }, 100);
  }, []);


  return (
    <>
      <Header />
      <div className="calendarContainer">
        <h1>Calendar</h1>
      </div>
      <Footer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
    </>
  );
};

export default Calendar;
