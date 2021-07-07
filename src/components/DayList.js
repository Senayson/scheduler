import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  //const {days, day, setDay} = props;
  const daysIterated = props.days.map((day, index) => {
    return (
      <DayListItem 
      key={index}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}  />
    );
  });

  return daysIterated;
  
}

