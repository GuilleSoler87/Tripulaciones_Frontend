import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "./Contacts.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import noContacts from "../../../src/images/no_contacts.png";
import noPic from "../../../src/images/no_pic.png";
import { MdStar, MdStarBorder } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Contacts = () => {
  const {
    user,
    users,
    getUser,
    getAllUsers,
    filterByUsername,
    addContact,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("Contacts");
  const [data, setData] = useState({
    username: "",
  });

  useEffect(() => {
    async function fetchData() {
      await getUser();
      await getAllUsers();
      setLoading(false); // Set loading to false when data has been loaded
    }
    fetchData();
    setTimeout(() => {
      setActiveComponent("Contacts");
    }, 100);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="contactsContainer">
          <div className="searchBarContainer">
            <div className="titleAndButtonContainer">
              <h1>Contactos</h1>
              <button>
                <MdStar className="filterFavouriteButton" />
              </button>
            </div>
            <div className="searchBar">
              <form>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Buscar contacto"
                  value="Buscar contacto"
                  name="username"
                />
                <button className="searchButton" type="submit">
                  <FaSearch className="searchIcon" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const userContactList = user.contacts.map((x) => x._id);

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
    filterByUsername(data.username);
  };

  const handleAddContact = (userId) => {
    addContact(userId);
    setTimeout(() => {
      getUser();
    }, 500);
  };

  const extractFilePathFromImage = (path) => {
    const url = "https://desafio-backend-production.up.railway.app/";
    return url + path.replace("uploads/", "");
    // const url = "https://desafio-backend-production.up.railway.app";
    // const match = path.match(/uploads[\\\/](.+)/);
    // return match ? url + "/" + match[1].replace(/\\/g, '/') : null;
  };

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
      {users.map((item) => {
        const isContact = userContactList.includes(item._id);
        return (
          <div className="contactCard">
            <button
              className="favourite"
              onClick={() => handleAddContact(item._id)}
            >
              {isContact ? (
                <MdStar className="favouriteButton" />
              ) : (
                <MdStarBorder className="favouriteButton" />
              )}
            </button>
            <div className="contactImage">
              <img src={item.img ? extractFilePathFromImage(item.img) : noPic} />
            </div>
            <p className="contactUsername">{item.username}</p>
            <p className="contactPosition">{item.cargo ? item.cargo : "Estudiante"}</p>
            <button
              className="seeProfile"
              onClick={() => navigate(`/otherprofile/${item._id}`)}
            >
              Ver perfil
            </button>
          </div>
        );
      })}
    </div>
  );
  // const contactsList = (
  //   <div className="contactsList">
  //     {user.contacts.map((item) => {
  //       if (!item.userId.img) {
  //         item.userId.img = noPic;
  //       } else {
  //         item.userId.img = extractFilePathFromImage(item.userId.img);
  //       }
  //       if (!item.userId.cargo) {
  //         item.userId.cargo = "Estudiante";
  //       }
  //       return (
  //         <div className="contactCard">
  //           <button
  //             className="favourite"
  //             onClick={() => handleMakeFavourite(item.userId._id)}
  //           >
  //             {item.favourite ? (
  //               <MdStar className="favouriteButton" />
  //             ) : (
  //               <MdStarBorder className="favouriteButton" />
  //             )}
  //           </button>
  //           <div className="contactImage">
  //             <img src={item.userId.img} />
  //           </div>
  //           <p className="contactUsername">{item.userId.username}</p>
  //           <p className="contactPosition">{item.userId.cargo}</p>
  //           <button className="seeProfile" onClick={() => navigate(`/otherprofile/${item.userId._id}`)}>Ver perfil</button>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <>
      <Header />
      <div className="contactsContainer">
        <div className="searchBarContainer">
          <div className="titleAndButtonContainer">
            <h1>Contactos</h1>
            <button>
              <MdStar className="filterFavouriteButton" />
            </button>
          </div>
          <div className="searchBar">
            <form onSubmit={handleSubmit}>
              <input
                className="usernameInput"
                type="text"
                placeholder="Buscar contacto"
                value={data.username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                name="username"
              />
              <button className="searchButton" type="submit">
                <FaSearch className="searchIcon" />
              </button>
            </form>
          </div>
        </div>
        {user.contacts && contactsList}
        {!user.contacts && noContactsDisplay}
      </div>
      <Footer
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </>
  );
};

export default Contacts;
