import React, { useEffect, useContext, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import "./Calendar.scss";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Calendar");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setTimeout(() => {
      setActiveComponent('Calendar');
    }, 100);
  }, []);


  return (
    <>

      <div className="main_calendar">
        <div className='calendar'>
          <div className='calendar-container'>
            <Calendar className='react-calendar' onChange={handleDateClick} value={selectedDate} />
          </div>

          <div className='all_events_inscriptions'>

          </div>
        </div>
      </div >
    </>
  );
};

export default CalendarView;


