import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacts.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import noContacts from "../../../src/images/no_contacts.png";

const Contacts = () => {
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

  useEffect(() => {}, []);

  const noContactsDisplay = (
    <>
      <div className="noContactText">
        <p className="nope1">¡Oh vaya!</p>
        <p className="nope2">Parece que aún no tienes contactos añadidos</p>
        <p className="nope3">
          Marca como favoritos los perfiles que más te interesen para verlos
          aquí.
        </p>
      </div>
      <div className="noContactsImage">
        <img src={noContacts} />
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className="contactsContainer">
        <div className="searchBarContainer">
          <div className="titleAndButtonContainer">
            <h1>Contactos</h1>
            <button>
              <span className="material-symbols-outlined">star</span>
            </button>
          </div>
          <div className="searchBar">
            {/* <form action={handleSearch}> */}
            <form>
              <input
                className="usernameInput"
                type="text"
                placeholder="Buscar contacto"
                value={data.username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                name="username"
              />
            </form>
          </div>
        </div>
        {true && noContactsDisplay}
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
