import React, { useReducer } from "react";

const Developer = () => {
  const formatTime = (utcDate) => {
    let date = new Date(utcDate);
    date.setHours(date.getHours() - 0);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return date.toTimeString().slice(0, 5);
    }

    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return "Ayer";
    }

    var lastMonday = new Date();
    lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    if (date > lastMonday) {
      return [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ][date.getDay() - 1];
    }

    return (
      ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear());
  };

  const date1 = "2023-06-10T01:07:06.855Z"; // today
  const date2 = "2023-06-09T11:47:06.855Z"; // yesterday
  const date3 = "2023-06-08T17:47:06.855Z"; // 05/06/2023
  const date4 = "2023-06-07T17:47:06.855Z"; // 05/06/2023
  const date5 = "2023-06-06T17:47:06.855Z"; // 05/06/2023
  const date6 = "2023-06-05T17:47:06.855Z"; // 05/06/2023
  const date7 = "2023-06-04T17:47:06.855Z"; // 05/06/2023
  const date8 = "2023-06-03T17:47:06.855Z"; // 05/06/2023

  return (
    <>
      <h1>Developer</h1>
      <h3>{formatTime(date1)}</h3>
      <h3>{formatTime(date2)}</h3>
      <h3>{formatTime(date3)}</h3>
      <h3>{formatTime(date4)}</h3>
      <h3>{formatTime(date5)}</h3>
      <h3>{formatTime(date6)}</h3>
      <h3>{formatTime(date7)}</h3>
      <h3>{formatTime(date8)}</h3>
    </>
  );
};

export default Developer;
