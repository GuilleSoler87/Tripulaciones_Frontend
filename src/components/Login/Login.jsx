import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <main>
        <div className="appTitle">
          <h1>À</h1>
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

export default Login;
