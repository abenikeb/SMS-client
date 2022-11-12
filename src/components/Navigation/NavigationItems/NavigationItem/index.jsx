import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className="menu-title">
        <span>{props.label && props.label}</span>
      </li>
      <li>
        <NavLink to={props.to} exact={props.exact}>
          {props.img ? (
            <img src={props.img} alt="dashboard_icon" className="w-5" />
          ) : (
            <FontAwesomeIcon icon={props.icon} className="text-lg" />
          )}
          {props.page}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;
