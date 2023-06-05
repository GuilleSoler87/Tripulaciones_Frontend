import React from "react";
import "./Welcome.scss";

const Welcome = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <div className="logoDiv">
          <img src="../../../src/images/agora_logo.png" />
        </div>
        <div className="appTitle">
          <h2>Àgora</h2>
        </div>
        <div className="introText">
          <p>
            {" "}
            Únete a la comunidad de <strong>MdE</strong> para informarte de las
            últimas noticias y conectar con alumnos de EDEM, startuos de
            Lanzadera y Angels
          </p>
        </div>
        <div className="startButton">
          <button>Empezar</button>
        </div>
      </main>
    </>
  );
};

export default Welcome;
