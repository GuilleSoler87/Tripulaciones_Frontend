import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";
import ReCAPTCHA from "react-google-recaptcha";


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
      <main>
        <div className="welcome">
          <img src="../../../src/images/A.png" alt="" />
          <p>¡Bienvenido!</p>
        </div>


        <div className="loginForm">
          {/* Recaptcha */}
          {!userValidate &&
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

              {/* Recaptcha */}
              <div className="recaptcha">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LdRwnomAAAAAAk7f8Oi04ddDXjI0Yb3q0_YkYcV"
                  onChange={onChangeCapt}
                />
              </div>
              {captchaValidate === false && <div className="error-captcha">Por favor acepta el captcha</div>}
            </form>
          }

        </div>



        <div className="passwordRecovery">
          {!userValidate &&
            <Link to="/passwordrecover" className="link">
              <p>Recuperar contraseña</p>
            </Link>
          }
        </div>
        <div className="alert hidden">
          <p>Usuario o contraseña incorrectos. Vuelve a intentarlo.</p>
        </div>
      </main>
    </>
  );
};

export default Login;
