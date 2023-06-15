import React, { useContext, useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.scss";
import { UserContext } from '../../context/UserContext/UserState';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState([]);
  const { getUser, user } = useContext(UserContext);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    // Aquí debes obtener tu conjunto de fechas y almacenarlas en highlightedDates
    const dates = ['2023-06-01', '2023-06-05', '2023-06-10'];
    setHighlightedDates(dates);
  }, []);

  // useEffect(() => {
  //   if (user && user.suscriptions) {
  //     const dates = user.suscriptions.map((suscription) => suscription.time);
  //     setHighlightedDates(dates);
  //   }
  // }, [user]);

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

  const currentDate = new Date();

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
        {user &&
          user.suscriptions &&
          user.suscriptions
            .slice() // Crear una copia del array para no modificar el original
            .sort((a, b) => {
              const timeDiffA = new Date(a.time).getTime() - currentDate.getTime();
              const timeDiffB = new Date(b.time).getTime() - currentDate.getTime();
              return timeDiffA - timeDiffB;
            })
            .map((suscription) => (
              <div className="card_events_inscriptions" key={suscription._id}>
                <div className="div_tipe_event_hour">
                  <p className="type_event_inscription">Evento</p>
                  <p className="hour_event_inscription">{suscription.time?.slice(11, 16)}h</p>
                </div>
                <div className="div_name_event_day">
                  <p className="name_event_inscription">{suscription.event_name}</p>
                  <p className="date_event_inscription">
                    {new Date(suscription.time).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric' // Añadido 'year' para incluir el año
                    }).charAt(0).toUpperCase() +
                      new Date(suscription.time).toLocaleDateString('es-ES', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric' // Añadido 'year' para incluir el año
                      }).slice(1)}
                  </p>
                </div>
                <div className="div_where_event_day">
                  <p className="location_event_inscription">{suscription.place}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CalendarView;




