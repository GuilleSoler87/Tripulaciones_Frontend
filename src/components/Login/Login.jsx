import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";


const Login = () => {
  const { login, isLoggedIn,token } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
    if (token) {
      setTimeout(() => {
        navigate("/profile");
      }, 1900);
    }
    if (token && token.length > 0) {
      console.log("You have successfully logged in");
    }
    if (!token) {
      console.log("Oooooooooooooops");
    }
  }, [token]);


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
    if (!data.email || !data.password) {
      return null;
    }
    console.log(data);
    login(data);
    setData({
      email: "",
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
            <label htmlFor="email">Usuario de MdE</label>
            <input
              type="text"
              placeholder="username@edem.es"
              value={data.email}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="email"
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
