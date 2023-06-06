import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";


const Login = () => {
  const { login, token } = useContext(UserContext);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.message) {
      return null;
    }
    login(data);
    setData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <main>
        <div className="welcome">
          <img src="../../../src/images/A.png" alt="" />
          <p>¡Bienvenido!</p>
        </div>
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuario de MdE</label>
            <input
              type="text"
              placeholder="username@edem.es"
              value={data.username}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="username"
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="•••••••"
              value={data.password}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="password"
            />
            <button type="submit" className="submitLogin">
              Empezar
            </button>
          </form>
        </div>
        <div className="passwordRecovery">
          <Link to="/passwordrecover" className="link">
            <p>Recuperar contraseña</p>
          </Link>
        </div>
        <div className="alert hidden">
          <p>Usuario o contraseña incorrectos. Vuelve a intentarlo.</p>
        </div>
      </main>
    </>
  );
};

export default Login;
