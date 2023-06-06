import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Password.scss";
// import { UserContext } from "../../context/UserContext/UserState";


const Password = () => {
  // const { recoverPassword } = useContext(UserContext);
  const [data, setData] = useState({
    username: "",
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
    recoverPassword(data);
    setData({
      username: "",
    });
  };

  return (
    <>
      <main>
        <div className="welcome">
          <img src="../../../src/images/A.png" alt="" />
        </div>
        <div className="recoveryTitle">
          <p>¿Has olvidado la contraseña?</p>
        </div>
        <div className="pwRecoveryForm">
          <form onSubmit={handleSubmit}>
            <div className="pwHeader">
              <label htmlFor="username">Usuario de MdE</label>
              <p className="hidden">Usuario incorrecto</p>
            </div>
            <input
              type="text"
              placeholder="username@edem.es"
              value={data.username}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="username"
            />
            <button type="submit" className="submitRecovery">
            Recuperar contraseña
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Password;
