import React from "react";
import "./InterviewerListItem.scss";
const classNames = require("classnames");

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  const interviewerClass = classNames("interviewers__item-image", {
    "interviewers__item--selected": selected,
  });
  console.log("This is interview class", interviewerClass);

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {name}
    </li>
  );
}
