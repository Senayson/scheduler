import React from 'react';
import './InterviewerListItem.scss';
const classNames = require('classnames');

export default function InterviewerListItem(props) {
const { id, name, avatar, selected, setInterviewer} = props;
const interviewerClass = classNames("interviewers__item-image", 
{"interviewers__item-image--selected": selected,
}
)
console.log('This is interview class' ,interviewerClass);

return (
<li className="interviewers__item" onClick={()=> setInterviewer(name)}>
  <img
    className={interviewerClass}
    src={avatar}
    alt={name}
  />
 {name}
</li>
)
}