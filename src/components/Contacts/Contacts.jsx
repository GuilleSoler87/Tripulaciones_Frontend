import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacts.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import noContacts from "../../../src/images/no_contacts.png";


const Contacts = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      <Header />
      <div className="contactsContainer">
        <h1>Contacts</h1>
        <div className="noContactText">
          <p>¡Oh vaya!</p>
          <p>Parece que aún no tienes contactos añadidos</p>
          <p>Marca como favoritos los perfiles que más te interesen para verlos aquí.</p>
        </div>
        <div className="noContactsImage">
          <img src={noContacts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
