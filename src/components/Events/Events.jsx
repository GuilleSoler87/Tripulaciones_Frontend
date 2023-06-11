import React from 'react'
import "./Events.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavigationEvents from '../NavigationEvents/NavigationEvents';

const Events = () => {
    return (
        <>
            <Header />
            <div className='main_container_events'>
                <div className='events_top_header'>


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