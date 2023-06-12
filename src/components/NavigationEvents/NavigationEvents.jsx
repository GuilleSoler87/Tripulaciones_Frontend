import React from 'react'
import "./NavigationEvents.scss";

const NavigationEvents = () => {
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
            </div>
            <div className='eventside2'>
            </div>
            <div className='eventside3'>
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