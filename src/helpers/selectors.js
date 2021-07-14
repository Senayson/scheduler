const { default: Appointment } = require("components/Appointment");

function getAppointmentsForDay(state, dayId) {
  const appointmentsArray = [];
  const statedDay = state.days.filter((day) => day.id === dayId);
  if (statedDay.length === 0) {
    return appointmentsArray;
  }
  const statedApp = statedDay[0].appointments.forEach((id) => {
    appointmentsArray.push(state.appointments[id]);
  });
  return appointmentsArray;
}

function getInterview(state, interview) {
  let intObj = null;
  if (interview) {
    intObj = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  }

  return intObj;
}

function getInterviewersForDay(state, dayId) {
  const interviewersArray = [];
  const statedDay = state.days.filter((day) => day.id === dayId);
  if (statedDay.length === 0) {
    return interviewersArray;
  }

  const statedInt = statedDay[0].interviewers.forEach((id) => {
    interviewersArray.push(state.interviewers[id]);
  });

  return interviewersArray;
}

module.exports = { getInterview, getAppointmentsForDay, getInterviewersForDay };
