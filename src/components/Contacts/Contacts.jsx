import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "./Contacts.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import noContacts from "../../../src/images/no_contacts.png";
import noPic from "../../../src/images/no_pic.png";
import { MdStar, MdStarBorder } from "react-icons/md";


const Contacts = () => {
  const { user, getUser, makeContactFavourite } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

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

  const handleMakeFavourite = (userId) => {
    makeContactFavourite(userId);
    setTimeout(() => {
      getUser();
    }, 500);
  }

  const extractFilePathFromImage = (path) => {
    const url = "https://desafio-backend-production.up.railway.app";
    // const url = "http://localhost:8080/"; //CHANGE to pertinent URL
    const match = path.match(/uploads[\\\/](.+)/);
    return match ? url + "/" + match[1].replace(/\\/g, '/') : null;
  }
  
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

  const contactsList = (
    <div className="contactsList">
      {user.contacts.map(usero => {
        if (!usero.userId.img) {
          usero.userId.img = "../../src/images/no_pic.png";
        } else {
          usero.userId.img = extractFilePathFromImage(usero.userId.img);
        }
        if (!usero.userId.cargo) {
          usero.userId.cargo = "Estudiante";
        }
        return (
          <div className="contactCard">
            <button className="favourite" onClick={() => handleMakeFavourite(usero.userId._id)} >
              {usero.favourite ? <MdStar className="favouriteButton" /> : <MdStarBorder className="favouriteButton" />}
            </button>
            <div className="contactImage">
              <img src={usero.userId.img} />
            </div>
            <p className="contactUsername">{usero.userId.username}</p>
            <p className="contactPosition">{usero.userId.cargo}</p>
            <button className="seeProfile">Ver perfil</button>
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <Header />
      <div className="contactsContainer">
        <div className="searchBarContainer">
          <div className="titleAndButtonContainer">
            <h1>Contactos</h1>
            <button>
              <MdStar />
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
        {user.contacts && contactsList}
        {!user.contacts && noContactsDisplay}
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
