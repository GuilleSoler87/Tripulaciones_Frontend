import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotificationsScroll from "../NotificationScroll/NotificationsScroll";


const Notification = () => {
  const [activeComponent, setActiveComponent] = useState("Notifications");
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      setActiveComponent('Notifications');
    }, 100);
  }, []);


  return (
    <>
      <Header />
      <div className="main_notificationContainer">
        <div className="main_scrollContainer">
          <NotificationsScroll />
        </div>
      </div>
      <Footer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
    </>
  );
};

export default Notification;
