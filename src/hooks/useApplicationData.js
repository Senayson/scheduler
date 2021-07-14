import { useState } from "react";
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
    console.log("This is bfr book/app", state.appointments);
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        setState((state) => ({ ...state, appointments: appointments }));
        setState((state) => updateSpots(state));
        //console.log("This is aft book/app", state.appointments);
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
      // console.log("this is axios response ---", response);
      setState((state) => ({ ...state, appointments: appointments }));
      setState((state) => updateSpots(state));
    });
  };

  function updateSpots(state) {
    const days = state.days.map((day) => {
      return {
        ...day,
        spots: day.appointments.filter(
          (id) => !state.appointments[id].interview
        ).length,
      };
    });
    return { ...state, days };
  }

  return {
    state: state,
    setState: setState,
    setDay: setDay,
    updateSpots: updateSpots,
    bookInterview: bookInterview,
    cancelInterview: cancelInterview,
  };
}
