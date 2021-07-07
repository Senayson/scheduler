import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  // const { interviewers, interviewer, setInterviewer } = props;
  const interviewerIterated = props.interviewers.map((interviewer) => {
    return (
      <section className="interviewers">
        {/* <h4 className="interviewers__header text--light">Interviewer</h4> */}
        <ul className="interviewers__list">
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            setInterviewer={props.setInterviewer}
          />
        </ul>
      </section>
    );
  });
  return interviewerIterated;
}
