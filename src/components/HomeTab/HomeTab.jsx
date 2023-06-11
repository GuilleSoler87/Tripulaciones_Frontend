import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeTab.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuImg from "../../../src/images/menu_icon.png";
import PointsUpAll from "../../../src/images/points_upAll.png";
import TabNotices from '../TabNotices/TabNotices';



const HomeTab = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleTabClick = () => {
    navigate("/home");
  };

  useEffect(() => {
  }, []);


  return (
    <>
      <Header />
      <div className="main_homeTabContainer">

        <div className="top_Tabnotices">
          <p className="noticesTab_title">Noticias</p>
          <Link to="/menu" className="go_to_menu" onClick={handleMenuClick}>
            <img src={MenuImg} alt="Menu" className="img_menu" />
          </Link>
        </div>
        <div className="div_img_points">
          <img src={PointsUpAll} alt="Points" className="img_points_up_all" />
        </div>

        <div className="div_buttons_homeTab">
          <button type="submit" className="submit_MdEtab" onClick={handleTabClick}>
            MdE
          </button><button type="submit" className="submit_tabtab_not">
            Tablón de anuncios
          </button>
        </div>

        <div className="navigation_homeContainerTab">
          <TabNotices />
        </div>


      </div>
      <Footer />
    </>
  );
};

export default HomeTab;