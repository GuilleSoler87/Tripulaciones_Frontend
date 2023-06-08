import React from "react";
import "./Welcome.scss";
import { useNavigate } from "react-router-dom";
import AgoraIllustration from "../../../src/images/agora_illustration.png";
import RiskyPeople from "../../../src/images/risky_people.png";
import LogoAgora from "../../../src/images/logo_agora.png";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="main-container-welcome">
        <div className="logo-risky-people">
          <img src={RiskyPeople} />
        </div>
        <div className="logoDiv">
          <img src={AgoraIllustration} />
        </div>
        <div className="appTitle">
          <img src={LogoAgora} />
        </div>
        <div className="introText">
          <p>
            {" "}
            Únete a la comunidad de <strong>MdE</strong> para informarte de las
            últimas noticias y conectar con alumnos de EDEM, startups de
            Lanzadera y Angels
          </p>
        </div>
        <div className="startButton" onClick={handleSubmit}>
          <button>Empezar</button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
