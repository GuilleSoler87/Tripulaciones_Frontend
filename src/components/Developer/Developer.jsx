import React, { useEffect } from "react";
import axios from "axios";

const Developer = () => {
  const API_URL = "http://13.38.31.251/events_recommendations";

  const fetchData = async () => {
    const res = await axios.get(API_URL);
    return res;
  }

  useEffect(() => {
    const fetchDataAndLog = async () => {
      const res = await fetchData();
      console.log(res);
    };
    fetchDataAndLog();
  }, [])

  return (
    <>
      <h1>Developer</h1>
    </>
  );
};

export default Developer;
