const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2, 3],
  },
  {
    id: 2,
    name: "Tuesday",
    appointments: [],
  },
  {
    id: 3,
    name: "Wednesday",
    appointments: [4],
  },
];
const appointments = {
  1: {
    id: 1,
    time: "1pm",
    interview: {
      student: "Bob",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "2pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "3pm",
    interview: null,
  },
  4: {
    id: 4,
    time: "4pm",
    interview: null,
  },
};
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

function updateSpots(state, day) {
  const newState = { ...state };
  const dayName = day || state.day;
  const ourDay = newState.days.find((day) => day.name === dayName);
  const ourDayIndex = newState.days.findIndex((day) => day.name === dayName);
  const ourAppointments = ourDay.appointments;
  const ourSpots = ourAppointments.filter(
    (id) => !newState.appointments[id].interview
  );
  const numOfSpots = ourSpots.length;

  const updatedDay = { ...ourDay, spots: numOfSpots };

  newState.days = [...state.days];
  newState.days[ourDayIndex] = updatedDay;
  //console.log("Updated spots:", updatedDay);

  return newState;
}
console.log("This is state", state.days);

console.log("This is updated day", updateSpots(state, "Tuesday"));

console.log("This is state", state.days);
