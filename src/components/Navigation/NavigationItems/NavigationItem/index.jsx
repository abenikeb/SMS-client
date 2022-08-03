import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = () => {
  return (
    <Router>
      <li className="NavigationItem">
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/">Customer</NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/">Category</NavLink>
      </li>
    </Router>
  );
};

export default NavigationItem;
