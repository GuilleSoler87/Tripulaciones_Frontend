import React from 'react'
import "./EventSingle.scss";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const EventSingle = () => {
  return (
    <>
      <Header />


      <div className='singleEventMain'>

        <div className='eventPic'></div>

        <div className='eventPicFooter'>
          <p className='picFooterText'>Auditorio Paco Pons - EDEM</p>
          <div className='picFooterIcon'>
            <img src="./src/images/icon_share.png" alt="Compartir" />
          </div>
        </div>

        <div className='dotsOverlay'>
          <img src="./src/images/points_horWhite.png" alt="Puntos" />

        </div>

        <div className='eventBodyMain'>
          <div className='bodyHeaderMain'></div>
          <div className='bodyContentMain'></div>
          <div className='bodyFooterUp'></div>
          <div className='bodyFooterDown'></div>
          

        </div>
      </div>


      <Footer />

    </>
  )
}

export default EventSingle