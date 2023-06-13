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
          <div className='bodyHeaderMain'>
            <div className='headerMainLeft'>
              <p className='eventType'>Charla</p>
              <p className='eventTitle'>Juan Roig</p>
            </div>
            <div className='headerMainRight'>
              <p className='mainButtonText'>Asistiré</p>
            </div>
          </div>
          <div className='bodyContentMain'>
            <p className='bodyContentText'>El próximo martes 6 de junio, nuestro querido Juan Roig vendrá a las instalaciones de EDEM para hablarnos sobre emprendimiento. <br />
              Es una charla dedicada especialmente para los alumnos de primero de grado, pero todos sois bienvenidos. <br />
              Hablaremos de la expansión que está teniendo Mercadona, las empresas imlicadas en el proceso y cómo ha ido evolucionando en estos últimos años. </p>
          </div>
          <div className='bodyFooterUp'>
            <p className='footerUpTime'>17:00h</p>
            <p className='footerUpAsistentes'>43 asistentes</p>
          </div>
          <div className='bodyFooterDown'>
            <p className='footerDownDate'>Martes 6 de junio de 2023</p>
            <p className='footerDownInscritos'>112 inscritos online</p>
          </div>


        </div>
      </div>


      <Footer />

    </>
  )
}

export default EventSingle