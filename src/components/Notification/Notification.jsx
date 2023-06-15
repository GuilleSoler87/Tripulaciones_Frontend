import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification1 from "../../../src/images/notifications/Card_horizontales1.png";
import Notification2 from "../../../src/images/notifications/Card_horizontales2.png";
import Notification3 from "../../../src/images/notifications/Card_horizontales3.png";
import Notification4 from "../../../src/images/notifications/Card_horizontales4.png";
import Notification5 from "../../../src/images/notifications/Card_horizontales5.png";
import Notification6 from "../../../src/images/notifications/Card_horizontales6.png";
import Notification7 from "../../../src/images/notifications/Card_horizontales7.png";
import Notification8 from "../../../src/images/notifications/Card_horizontales8.png";
import Notification9 from "../../../src/images/notifications/Card_horizontales9.png";

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
        <div className="scroll_notificationContainer">
          <div className="notification_card">
            <img src={Notification1} alt="notification1" className="notification1" />
          </div>
          <div className="notification_card">
            <img src={Notification2} alt="notification2" className="notification2" />
          </div>
          <div className="notification_card">
            <img src={Notification3} alt="notification3" className="notification3" />
          </div>
          <div className="notification_card">
            <img src={Notification4} alt="notification4" className="notification4" />
          </div>
          <div className="notification_card">
            <img src={Notification5} alt="notification5" className="notification5" />
          </div>
          <div className="notification_card">
            <img src={Notification6} alt="notification6" className="notification6" />
          </div>
          <div className="notification_card">
            <img src={Notification7} alt="notification7" className="notification7" />
          </div>
          <div className="notification_card">
            <img src={Notification8} alt="notification8" className="notification8" />
          </div>
          <div className="notification_card">
            <img src={Notification9} alt="notification9" className="notification9" />
          </div>
          
        </div>
      </div>
      <Footer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
    </>
  );
};

export default Notification;
