import React, { useContext, useEffect, useState } from 'react';
import './MdENoticesSingle.scss';
import { useParams } from 'react-router-dom';
import { NoticeContext } from '../../context/NoticeContext/NoticeState';

const MdENoticesSingle = () => {
    const { _id } = useParams();
    const { getNoticeId, notice } = useContext(NoticeContext);


    useEffect(() => {
      getNoticeId(_id);
    }, [_id]);





    return (
        <>

            <div>MdENoticesSingle</div>
            <div>{notice.img}</div>
            <div>{notice.title}</div>
            <div>{notice.description}</div>
            <div>{notice.time}</div>


        </>





    );
};

export default MdENoticesSingle