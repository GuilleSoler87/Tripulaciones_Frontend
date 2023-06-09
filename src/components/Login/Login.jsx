import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";
import ReCAPTCHA from "react-google-recaptcha";
import ALogo from "../../../src/images/A.png";
import PuntoSup from "../../../src/images/puntos_sup.png";
import PointsDown from "../../../src/images/points_down.png";

const Login = () => {
  const { login, token } = useContext(UserContext);
  const captcha = useRef(null);
  const [captchaValidate, setCaptchaValidate] = useState(null);
  const [userValidate, setUserValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [attempts, setAttempts] = useState(3);

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });


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

  useEffect(() => {
    if (token && token.length > 0 && userValidate) {
      setTimeout(() => {
        navigate("/home");
      }, 50);
    }
  }, [token, userValidate]);




  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      return null;
    }

    if (attempts === 0) { // Bloquear acceso si los intentos se han agotado
      setErrorMessage("Cuenta bloqueada, número de intentos excedido");
      return;
    }

    if (captcha.current.getValue()) {
      setUserValidate(true);
      setCaptchaValidate(true);
    } else {
      setUserValidate(false);
      setCaptchaValidate(false);
    }

    try {
      const response = await login(data, captchaValidate); // Pasa captchaValidate como parámetro
      if (response.success) {
        // El login fue exitoso y el captcha se ha aceptado
        setData({
          email: "",
          password: "",
        });
        setErrorMessage(null);

      } else {
        // El login falló, se muestra el mensaje de error correspondiente
        setErrorMessage(response.data.message);
        setAttempts(attempts - 1);
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Usuario y contraseña incorrectos");
      }


      setData({
        email: "",
        password: "",
      });
      captcha.current.reset();
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      setAttempts(attempts - 1);
    }
  };

  const onChangeCaptcha = (value) => {
    if (value) {
      setCaptchaValidate(true);
    }
  };

  return (
    <>
      <div className="main-cont-login">
        <div className="a_logo">
          <img src={ALogo} alt="Logo de A" />
        </div>
        <div className="points_up">
          <img src={PuntoSup} alt="Puntos superiores" />
        </div>
        <p className="p_welcome">¡Bienvenido!</p>

        <div className="div_loginForm">

          <form className="login_form" onSubmit={handleSubmit}>
            <label className="email_label" htmlFor="email">
              Usuario de MdE
            </label>
            <input
              className="email_input"
              type="text"
              placeholder="username@edem.es"
              value={data.email}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="email"
            />
            <label className="password_label" htmlFor="password_label">
              Contraseña
            </label>
            <input
              className="password_input"
              type="password"
              placeholder="•••••••"
              value={data.password}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="password"
            />
            <div className="alert_hidden">
              {errorMessage && <p>{errorMessage}</p>}
            </div>

            <button type="submit" className="submitLogin">
              Iniciar sesión
            </button>

            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LdRwnomAAAAAAk7f8Oi04ddDXjI0Yb3q0_YkYcV"
                onChange={onChangeCaptcha}
              />
            </div>
            {captchaValidate === false && (
              <div className={`error-captcha ${captchaValidate ? 'hidden' : ''}`}>
                <p><b>Por favor, acepta el captcha</b></p>
              </div>
            )}
          </form>

        </div>

        <div className="passwordRecovery">
          {!userValidate && (
            <Link to="/passwordrecover" className="link">
              <p className="recover_pass">Recuperar contraseña</p>
            </Link>
          )}
        </div>
        <div className="points_down">
          <img src={PointsDown} alt="Puntos inferiores" />
        </div>
      </div>
    </>
  );
};

export default Login;
