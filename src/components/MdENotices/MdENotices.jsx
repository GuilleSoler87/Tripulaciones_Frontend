import React, { useState } from 'react';
import "./MdENotices.scss";
import DemoImg from "../../../src/images/img_demo_home.png";
import CommentButt from "../../../src/images/comments_button.png";
import AddButt from "../../../src/images/add_notices_button.png";
import ShareButt from "../../../src/images/share_notices_button.png";
import LikeButt from "../../../src/images/like_notices_button.png";
import IconCloseWhite from '../../images/icon_close_white.png';

const MdENotices = () => {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className='scroll_div_notices'>
        <div className='main_notice_box'>
          <div className='img_notice_box'>
            <img src={DemoImg} alt="ImgNotices" className="img_notices_home" />
          </div>
          <div className='buttons_notices'>
            <div className='all_buttons_notice'>
              <div className='button_comments_notices'>
                <img src={CommentButt} alt="CommentButt" className="comments_notices" />
              </div>
              <div className='rest_button_notices'>
                <img src={AddButt} alt="AddButt" className="add_notices_button" onClick={handleButtonClick} />
                <img src={ShareButt} alt="ShareButt" className="share_notices_button" />
                <img src={LikeButt} alt="LikeButt" className="like_notices_button" />
              </div>
            </div>
          </div>
          <div className='text_notices_content'>
            <div className='all_text_content_notices'>
              <p className={`text_agora_notices ${expanded ? 'expanded' : 'collapsed'}`}>
                ¡Bienvenido a Ágora! 🙌🎉<br /><br />
                🌐La aplicación para el ecosistema de Marina de Empresas en Valencia. Conecta, colabora y prospera en un espacio diseñado para emprendedores.<br /><br />
                💭Descubre eventos, contenido inspirador y oportunidades únicas. Encuentra mentores y socios estratégicos.<br /><br />
                🫵Ágora es el impulso que necesitas para alcanzar el éxito empresarial. Únete a nuestra comunidad y transforma tu futuro.<br /><br />
                Bienvenido a un mundo de innovación y crecimiento. ¡Comienza tu viaje en Ágora hoy mismo!<br />

              </p>
              <div className='view_more_button'>
                <p className='expander_button' onClick={toggleText}>
                  Ver más
                </p>
              </div>
              <div className='view_comments_button'>
                Ver los comentarios
              </div>
            </div>
          </div>
        </div>

        <div className='main_notice_box'>
          <div className='img_notice_box'>
            <img src={DemoImg} alt="ImgNotices" className="img_notices_home" />
          </div>
          <div className='buttons_notices'>
            <div className='all_buttons_notice'>
              <div className='button_comments_notices'>
                <img src={CommentButt} alt="CommentButt" className="comments_notices" />
              </div>
              <div className='rest_button_notices'>
                <img src={AddButt} alt="AddButt" className="add_notices_button" onClick={handleButtonClick} />
                <img src={ShareButt} alt="ShareButt" className="share_notices_button" />
                <img src={LikeButt} alt="LikeButt" className="like_notices_button" />
              </div>
            </div>
          </div>
          <div className='text_notices_content'>
            <div className='all_text_content_notices'>
              <p className={`text_agora_notices ${expanded ? 'expanded' : 'collapsed'}`}>
                ¡Bienvenido a Ágora! 🙌🎉<br /><br />
                🌐La aplicación para el ecosistema de Marina de Empresas en Valencia. Conecta, colabora y prospera en un espacio diseñado para emprendedores.<br /><br />
                💭Descubre eventos, contenido inspirador y oportunidades únicas. Encuentra mentores y socios estratégicos.<br /><br />
                🫵Ágora es el impulso que necesitas para alcanzar el éxito empresarial. Únete a nuestra comunidad y transforma tu futuro.<br /><br />
                Bienvenido a un mundo de innovación y crecimiento. ¡Comienza tu viaje en Ágora hoy mismo!<br />

              </p>
              <div className='view_more_button'>
                <p className='expander_button' onClick={toggleText}>
                  Ver más
                </p>
              </div>
              <div className='view_comments_button'>
                Ver los comentarios
              </div>
            </div>
          </div>
        </div>
      </div>
        {showPopup && (
          <div className='Popup_add_Notices'>
            <div className='icon_close_notices_white'>
              <img src={IconCloseWhite} alt="Cerrar" className="icon_close_white" onClick={handleClosePopup} />
            </div>
            <div className='title_popup_add_notices'>
              <p className='main_popup_text'>
                Si quieres que publiquemos alguna noticia de interés envíanos un correo electrónico con toda la información a este email:
              </p>
            </div>
            <div className='email_add_notices'>
              <p className='email_popup_text'>
                noticias@edem.es
              </p>
            </div>
          </div>
        )}
    </>
  );
};

export default MdENotices;
