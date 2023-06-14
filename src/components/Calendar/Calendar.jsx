import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.scss";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    // Aquí debes obtener tu conjunto de fechas y almacenarlas en highlightedDates
    const dates = ['2023-06-01', '2023-06-05', '2023-06-10'];
    setHighlightedDates(dates);
  }, []);

  const tileClassName = ({ date }) => {
    const formattedDate = formatDate(date);

    return highlightedDates.includes(formattedDate) ? 'highlighted-day' : null;
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="main_calendar">
      <div className='calendar'>
        <div className='calendar-container'>
          <Calendar
            className='react-calendar'
            onChange={handleDateClick}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
      </div>


      <div className="background_title_inscriptions">
        <p className="event_title_scroll_inscriptions">Próximos eventos</p>
      </div>
      <div className="scroll_event_inscriptions">

        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>

        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>

        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>

        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>
        <div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div><div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div><div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div><div className="card_events_inscriptions">
          <div className="div_tipe_event_hour">
            <p className="type_event_inscription">Charla</p>
            <p className="hour_event_inscription">17:00h</p>
          </div>
          <div className="div_name_event_day">
            <p className="type_event_inscription">Juan Roig</p>
            <p className="hour_event_inscription">Martes 6 de Junio</p>
          </div>
          <div className="div_where_event_day">
            <p className="location_event_inscription">Auditorio Paco Pons</p>
          </div>
        </div>

      </div>
    </div>

  );
};

export default CalendarView;



