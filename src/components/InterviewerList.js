import React from "react";
import PropTypes from "prop-types";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const intObj = Object.entries(props.interviewers);
  const interviewerIterated = intObj.map((interviewer) => {
    interviewer = interviewer[1];
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={(event) => props.setInterviewer(interviewer.id)}
        selected={interviewer.id === props.interviewer}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerIterated}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
