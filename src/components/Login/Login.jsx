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
  {/* Recaptcha */ }
  const captcha = useRef(null);
  const [captchaValidate, changeCaptchaValidate] = useState(null);
  const [userValidate, changeUserValidate] = useState(false);

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token, userValidate) {
      setTimeout(() => {
        navigate("/home");
      }, 100);
    }
    if (token && token.length > 0) {
      console.log("You have successfully logged in");
    }
    if (!token) {
      console.log("Oooooooooooooops");
    }
  }, [token, userValidate]);


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
    {/* Recaptcha */ }
    if (captcha.current.getValue()) {
      changeUserValidate(true);
      changeCaptchaValidate(true);
    } else {
      changeUserValidate(false);
      changeCaptchaValidate(false);
    }

    console.log(data);
    login(data);
    setData({
      email: "",
      password: "",
    });
  };
  {/* Recaptcha */ }
  const onChangeCapt = () => {
    if (captcha.current.getValue()) {
      changeCaptchaValidate(true);
    }
  }

  return (
    <>
      <div className="main-cont-login">

        <div className="a_logo">
          <img src={ALogo} />
        </div>
        <div className="points_up">
          <img src={PuntoSup} />
        </div>
        <p className="p_welcome">¡Bienvenido!</p>


        <div className="div_loginForm">
          {/* Recaptcha */}
          {!userValidate &&
            <form className="login_form" onSubmit={handleSubmit}>
              <label className="email_label" htmlFor="email">Usuario de MdE</label>
              <input
                className="email_input"
                type="text"
                placeholder="username@edem.es"
                value={data.email}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                name="email"
              />
              <label className="password_label" htmlFor="password_label">Contraseña</label>
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
                <p>Usuario o contraseña incorrectos.<br/> Vuelve a intentarlo.</p>
              </div>
              <button type="submit" className="submitLogin">
                Iniciar sesión
              </button>

              {/* Recaptcha */}
              <div className="recaptcha">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LdRwnomAAAAAAk7f8Oi04ddDXjI0Yb3q0_YkYcV"
                  onChange={onChangeCapt}
                />
              </div>
              {captchaValidate === false && (
                <div className={`error-captcha ${captchaValidate ? 'hidden' : ''}`}>
                  <p><b>Por favor, acepta el captcha</b></p>
                </div>
              )}
            </form>
          }

        </div>

        <div className="passwordRecovery">
          {!userValidate &&
            <Link to="/passwordrecover" className="link">
              <p className="recover_pass">Recuperar contraseña</p>
            </Link>
          }
        </div>
        <div className="points_down">
          <img src={PointsDown} />
        </div>


      </div>
    </>
  );
};

export default Login;
