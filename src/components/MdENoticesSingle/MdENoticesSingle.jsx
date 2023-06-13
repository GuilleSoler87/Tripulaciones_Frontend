import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './MdENoticesSingle.scss';
import { useParams } from 'react-router-dom';
import { NoticeContext } from '../../context/NoticeContext/NoticeState';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SendButton from "../../images/send_button.png"
import UserCommDemo from "../../images/user_demo_comments.png"
import BackButton from "../../images/icon_return_back.png"

const MdENoticesSingle = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const { getNoticeId, notice, token } = useContext(NoticeContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        comment: "",
    });

    useEffect(() => {
        async function fetchData() {
            await getNoticeId(_id);
            setLoading(false); // Set loading to false when data has been loaded
        }
        fetchData();
    }, []);

    if (loading) {
        return "loading";
    }

    const handleButtonClick = () => {
        navigate("/home");
      };

    const formatImageURL = (path) => {
        const API_URL = "https://desafio-backend-production.up.railway.app/";
        const correctedPath = path.replace("uploads", "")
        return API_URL + correctedPath;
    }

    const handleInputChange = (event) => {
        setData(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del comentario
        console.log('Comentario enviado:', data);
        setData(''); // Restablecer el valor del input después de enviar el comentario
    };

    return (
        <>
            <Header />

            <div className='scroll_container_single_notices'>
                <div className='main_div_single_notices'>
                    <div className='return_to_home_button' onClick={handleButtonClick}>
                        <img src={BackButton} className="userimgcomm" alt="user_img_comment" />
                    </div>
                    <div className='main_img_single_notice'>
                        <img src={formatImageURL(notice.img)} alt={notice.title} className="single_notice" />
                    </div>

                    <div className='main_div_text_single_notices'>
                        <div className='content_in_text_single_notices'>
                            <div className='published_time'>
                                Publicado {notice.time.substring(0, 10).split('-').reverse().join('-')}
                            </div>
                            <div className='title_notice_single_notices'>{notice.title}</div>
                            <div className='body_notice_single_notices'>{notice.description}</div>
                            <hr className="separator_line_single_notices" />
                        </div>
                    </div>
                    <div className="div_add_comments">
                        <div className="div_background_comment">

                            <form className="comments_form" onSubmit={handleSubmit}>
                                <label className="comment_label" htmlFor="comment_label">
                                    Comentarios
                                </label>
                                <div className='input_div_with_button'>
                                    <input
                                        className="comment_input"
                                        type="text"
                                        placeholder="Escribe un comentario"
                                        value={data.comment}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                        name="text"
                                    />
                                    <div className='send_button_div'>
                                        <img src={SendButton} className="send_button_img" alt="Send_comment" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="div_show_all_comments">
                        <div className='user_profile_comments'>
                            <p className='user_name_comments'>Laura Gómez</p>
                            <p className='user_name_userType_comments'>Estudiante EDEM</p>
                        </div>
                        <div className='body_user_comment_profile'>
                            <div className='user_img_profile_comments'>
                                <img src={UserCommDemo} className="userimgcomm" alt="user_img_comment" />
                            </div>
                            <p className='body_text_comments'>¡Me encantó la charla de Feending! Trabajar con ellos sería muy top!A</p>
                        </div>
                        <hr className="separator_line_comments_single_notices" />
                    </div>



                </div>

            </div>
            <Footer />
        </>
    );
};

export default MdENoticesSingle;
