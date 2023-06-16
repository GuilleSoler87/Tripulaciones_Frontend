import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  MdHome,
  MdDateRange,
  MdContacts,
  MdNotifications,
  MdChat,
} from "react-icons/md";

const Footer = ({ activeComponent, setActiveComponent }) => {
  return (
    <>
      <div className="buttonsContainer">
        <Link
          to="/home"
          className="icon"
          style={{
            color: ["Home", "HomeTab"].includes(activeComponent) ? "#CB7862" : "ligthgray",
          }}
          onClick={() => setActiveComponent("Home")}
        >
          <MdHome />
        </Link>
        <Link
          to="/events"
          className="icon"
          style={{
            color: ["Events","EventsSingle", "MainCalendar"].includes(activeComponent) ? "#CB7862" : "ligthgray",
          }}
          onClick={() => setActiveComponent("Events")}
        >
          <MdDateRange />
        </Link>
        <Link
          to="/contacts"
          className="icon"
          style={{
            color: ["Contacts", "OtherProfile"].includes(activeComponent) ? "#CB7862" : "ligthgray",
          }}
          onClick={() => setActiveComponent("Contacts")}
        >
          <MdContacts />
        </Link>
        <Link
          to="/notification"
          className="icon"
          style={{
            color: activeComponent === "Notifications" ? "#CB7862" : "ligthgray",
          }}
          onClick={() => setActiveComponent("Notifications")}
        >
          <MdNotifications />
        </Link>
        <Link
          to="/chatlist"
          className="icon"
          style={{
            color: activeComponent === "ChatList" ? "#CB7862" : "ligthgray",
          }}
          onClick={() => setActiveComponent("ChatList")}
        >
          <MdChat />
        </Link>
      </div>
    </>
  );
};

export default Footer;
