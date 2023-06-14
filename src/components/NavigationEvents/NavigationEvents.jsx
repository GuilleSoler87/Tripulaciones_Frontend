import React, { useState, useContext, useEffect } from 'react';
import './NavigationEvents.scss';
import { EventContext } from '../../context/EventContext/EventState';

const NavigationEvents = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  
  return (
    <div className='main_container_navigation_events'>
      <div className='eventRecomendFixed'></div>
      <div className='eventSideText'>
        <p className='sideText'>Recomendados para ti</p>
      </div>
      <div className='eventSideScroll'>
        <div className='eventSideArray'>
          <div className='eventside1'>
            <div className='sideUpContainer'>
              <div className='iconarrow'>
                <img src="./src/images/IconArrow_Events.png" alt="Flecha" />
              </div>
            </div>
            <div className='sideDownContainer'>
              <div className='downLeft'>
                <p className='leftEventType'>Charla</p>
                <p className='leftEventTitle'>Juan Roig</p>
                <p className='leftEventTime'>17:00</p>
                <p className='leftEventDate'>Martes 6 de Junio</p>
              </div>
              <div className='downRight'>
                <div className='rightButtonTag1'>
                  <p className='tagText1'>Emprendimiento</p>
                </div>
                <div className='rightButtonTag2'>
                  <p className='tagText2'>Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div className='eventside1'>
            <div className='sideUpContainer'>
              <div className='iconarrow'>
                <img src="./src/images/IconArrow_Events.png" alt="Flecha" />
              </div>
            </div>
            <div className='sideDownContainer'>
              <div className='downLeft'>
                <p className='leftEventType'>Charla</p>
                <p className='leftEventTitle'>Juan Roig</p>
                <p className='leftEventTime'>17:00</p>
                <p className='leftEventDate'>Martes 6 de Junio</p>
              </div>
              <div className='downRight'>
                <div className='rightButtonTag1'>
                  <p className='tagText1'>Emprendimiento</p>
                </div>
                <div className='rightButtonTag2'>
                  <p className='tagText2'>Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div className='eventside1'>
            <div className='sideUpContainer'>
              <div className='iconarrow'>
                <img src="./src/images/IconArrow_Events.png" alt="Flecha" />
              </div>
            </div>
            <div className='sideDownContainer'>
              <div className='downLeft'>
                <p className='leftEventType'>Charla</p>
                <p className='leftEventTitle'>Juan Roig</p>
                <p className='leftEventTime'>17:00</p>
                <p className='leftEventDate'>Martes 6 de Junio</p>
                </div>
                
              <div className='downRight'>
                <div className='rightButtonTag1'>
                  <p className='tagText1'>Emprendimiento</p>
                </div>
                <div className='rightButtonTag2'>
                  <p className='tagText2'>Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='eventDownText'>
        <p className='downText'>No te pierdas nada</p>
      </div>
      <div className='eventList_Down'>
        {events.map(event => (
          <div className='eventBig1' key={event._id}>
            <div className='bigUpContainer'>
              <div className='iconarrowblue'>
                <img src="./src/images/IconArrow_Ev_BLUE.png" alt="Flecha" />
              </div>
            </div>
            <div className='img_notice_box'>
              <img src={"https://desafio-backend-production.up.railway.app/events/" + event.img} alt={event.event_name} className="img_events_top" />
            </div>
            <div className='bigDownContainer'>
              <div className='bDownLeft'>
                <p className='bLeftEventType'>Evento</p>
                <p className='bLeftEventTitle'>{event.event_name}</p>
                <p className='bLeftEventTime'>{event.time?.slice(11, 16)}</p>
                <p className='bLeftEventDate'>{event.time ? new Date(event.time).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }) : ''}</p>
              </div>
              <div className='bDownRight'>
                <div className='bRightButtonTag1'>
                  <p className='bTagText1'>{event.eventTags[0]}</p>
                </div>
                <div className='bRightButtonTag2'>
                  <p className='bTagText2'>{event.eventTags[1]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
);
};

export default NavigationEvents;