import React, { useState } from "react";
import axios from "axios";
// import DayList from "./DayList";
// import Appointment from "./Appointment";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 1,
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({ ...state, appointments: appointments });
      });
  };

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      console.log("this is axios response ---", response);
      setState({ ...state, appointments: appointments });
    });
  };

  return {
    state: state,
    setState: setState,
    setDay: setDay,
    bookInterview: bookInterview,
    cancelInterview: cancelInterview,
  };
}
