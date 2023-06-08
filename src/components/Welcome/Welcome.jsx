import React from "react";
import "./Welcome.scss";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <main>
        <div className="logoDiv">
          <img src="../../../src/images/agora_logo.png" />
        </div>
        <div className="appTitle">
          <h1>Àgora</h1>
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
      </main>
    </>
  );
};

export default Welcome;
