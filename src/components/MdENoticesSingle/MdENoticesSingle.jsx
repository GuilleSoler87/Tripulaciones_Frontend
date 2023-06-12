import React, { useContext, useEffect, useState } from 'react';
import './MdENoticesSingle.scss';
import { useParams } from 'react-router-dom';
import { NoticeContext } from '../../context/NoticeContext/NoticeState';

const MdENoticesSingle = () => {
    const { _id } = useParams();
    const { getNoticeId, notice, token } = useContext(NoticeContext);
    const [loading, setLoading] = useState(true);

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

export default MdENoticesSingle;