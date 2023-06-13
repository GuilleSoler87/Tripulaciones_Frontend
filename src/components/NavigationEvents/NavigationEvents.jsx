import React, { useState, useContext, useEffect } from 'react'
import "./NavigationEvents.scss";
import { EventContext } from '../../context/EventContext/EventState';

const NavigationEvents = () => {
  const { events, getEvents } = useContext(EventContext);


  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>

      <div className='main_container_navigation_events'>

        <div className='eventRecomendFixed'>
        </div>
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
                  <p className='leftEventType'> Charla</p>
                  <p className='leftEventTitle'>Juan Roig </p>
                  <p className='leftEventTime'>17:00 </p>
                  <p className='leftEventDate'> Martes 6 de Junio</p>

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
                  <p className='leftEventType'> Charla</p>
                  <p className='leftEventTitle'>Juan Roig </p>
                  <p className='leftEventTime'>17:00 </p>
                  <p className='leftEventDate'> Martes 6 de Junio</p>

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
                  <p className='leftEventType'> Charla</p>
                  <p className='leftEventTitle'>Juan Roig </p>
                  <p className='leftEventTime'>17:00 </p>
                  <p className='leftEventDate'> Martes 6 de Junio</p>

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


          <div className='eventDown1'>
          </div>
          <div className='eventDown2'>
          </div>
          <div className='eventDown3'>
          </div>
        </div>
      </div>




    </>
  )
}

export default NavigationEvents