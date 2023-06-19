import React from 'react'
import "./Menu.scss";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DinnerFKS from '../../images/fork-knife-spoon.png';
import IconClose from '../../images/icon_close.png';

const Menu = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/home");
      };

    return (
        <>
            <Header />
            <div className='main_menu_container'>

                <Link  to="/home" className="close_menu_button" onClick={handleButtonClick}>
                    <img src={IconClose} alt="Cerrar" className="icon_close" />                    
                </Link>


                <div className='title_menu'>
                    <p className='title_menu_tile'>Menú del día</p>
                    <p className='date_menu_title'>16 de Junio de 2023</p>
                    <hr className='separator_menu_title' />
                </div>

                <div className='first_dinner'>
                    <p className='first_dinner_title'>Primer plato</p>
                    <p className='first_dinner_menu1'>Nem vietnamita</p>
                    <p className='first_dinner_menu2'>Ensalada de pasta</p>
                    {/* <p className='first_dinner_menu3'>Salmorejo</p> */}
                </div>
                <div className='second_dinner'>
                    <p className='second_dinner_title'>Segundo plato</p>
                    <p className='second_dinner_menu1'>Arroz al horno</p>
                    <p className='second_dinner_menu2'>Osobuco</p>
                    <p className='second_dinner_menu3'>Pescado de lonja</p>

                </div>
                <div className='sweet_dinner'>
                    <p className='sweet_dinner_title'>Postre</p>
                    <p className='sweet_dinner_menu1'>Fruta</p>
                    <p className='sweet_dinner_menu2'>Lácteos</p>
                    <p className='sweet_dinner_menu3'>Postre casero</p>

                </div>
                <div className='dinner_img'>
                    <img src={DinnerFKS} alt="DinnerFKS" className="DinnerFKS" />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Menu