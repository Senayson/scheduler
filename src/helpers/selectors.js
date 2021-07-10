const { default: Appointment } = require("components/Appointment");

function getAppointmentsForDay(state, dayProvided) {
  const appointmentsArray = [];
  const statedDay = state.days.filter((day) => day.id === dayProvided);
  if (statedDay.length === 0) {
    return appointmentsArray;
  }
  const statedApp = statedDay[0].appointments.forEach((id) => {
    appointmentsArray.push(state.appointments[id]);
  });
  return appointmentsArray;
}

export { getAppointmentsForDay };
