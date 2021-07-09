const { default: Appointment } = require("components/Appointment");

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
    },
  ],
  appointments: {
    1: { id: 1, time: "12pm", interview: null },
    2: { id: 2, time: "1pm", interview: null },
    3: {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 },
    },
    4: { id: 4, time: "3pm", interview: null },
    5: {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 },
    },
  },
};

const dayProvided = "Monday";

function getAppointmentsForDay(state, dayProvided) {
  const appointmentsArray = [];
  const statedDay = state.days.filter((day) => day.name === dayProvided);
  if (statedDay.length === 0) {
    return appointmentsArray;
  }
  const statedApp = statedDay[0].appointments.forEach((id) => {
    appointmentsArray.push(state.appointments[id]);
  });
  return appointmentsArray;
}

export { getAppointmentsForDay };
