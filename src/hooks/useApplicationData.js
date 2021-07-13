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

  function updateSpots(state, dayId) {
    const newState = { ...state };
    // const dayName = day || state.day;
    const ourDay = newState.days.find((day) => day.id === dayId);
    const ourDayIndex = newState.days.findIndex((day) => day.id === dayId);
    const ourAppointments = ourDay.appointments;
    const ourSpots = ourAppointments.filter(
      (id) => !newState.appointments[id].interview
    );
    const numOfSpots = ourSpots.length;

    const updatedDay = { ...ourDay, spots: numOfSpots };

    newState.days = [...state.days];
    newState.days[ourDayIndex] = updatedDay;
    console.log("Tell me this is working", newState);
    return newState;
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
