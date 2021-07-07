import React from "react";
import "./DayListItem.scss";
const classNames = require("classnames");

export default function DayListItem(props) {
  let spots;
  const formatSpots = function () {
    if (props.spots === 0) {
      return (spots = "no spots remaining");
    }
    if (props.spots === 1) {
      return (spots = "1 spot remaining");
    }
    return (spots = `${props.spots} spots remaining`);
  };
  formatSpots();

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full.": props.spots === 0,
  });

  return (
    <li className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}
