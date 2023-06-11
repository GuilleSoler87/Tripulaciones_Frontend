import React from 'react'
import "./Events.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavigationEvents from '../NavigationEvents/NavigationEvents';

const Events = () => {
    return (
        <>
            <Header />
            <div className='main_eventsContainer'>
                <div className='events_top_header'>
                <p className="events_title">Eventos</p>
<div className='toolTipFather'>
    <div className='tooltipTextContainer'>
        <p className='tooltipText'>Mis eventos</p>
    </div>
    <div className='tooltipArrow'>

    </div>
</div>
                </div>


                
                <div className='events_component_container'>
                    <NavigationEvents />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Events