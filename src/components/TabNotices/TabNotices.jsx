import React, { useState } from 'react';
import "./TabNotices.scss";
import DemoImg from "../../../src/images/img_demo_home.png";
import CommentButt from "../../../src/images/comments_button.png";
import AddButt from "../../../src/images/add_notices_button.png";
import ShareButt from "../../../src/images/share_notices_button.png";
import LikeButt from "../../../src/images/like_notices_button.png";

const TabNotices = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className='scroll_div_notices'>
        <div className='main_notice_box'>
          <div className='img_notice_box'>
            <img src={DemoImg} alt="ImgNotices" className="img_notices_home" />
          </div>
          <div className='buttons_notices_tab'>
            <div className='all_buttons_notice'>
              <div className='button_comments_notices'>
                <img src={CommentButt} alt="CommentButt" className="comments_notices" />
              </div>
              <div className='rest_button_notices'>
                <img src={AddButt} alt="AddButt" className="add_notices_button" />
                <img src={ShareButt} alt="ShareButt" className="share_notices_button" />
                <img src={LikeButt} alt="LikeButt" className="like_notices_button" />
              </div>
            </div>
          </div>
          <div className='text_notices_content'>
            <div className='all_text_content_notices'>
              <p className={`text_agora_notices ${expanded ? 'expanded' : 'collapsed'}`}>
                Ayer tuvimos la suerte de conocer en Marina de Empresas a las nuevas startups seleccionadas en @lanzadera.es. <br />
                Fue un placer escuchar los pitch y descubrir todo el potencial que se suma a nuestra "inteligencia colectiva". <br />
                WELCOME HOME, RISKIES<br />

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
    </>
  );
};

export default TabNotices;