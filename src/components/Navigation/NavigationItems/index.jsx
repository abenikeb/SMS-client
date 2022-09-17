import React from "react";
import NavigationItem from "./NavigationItem";
import dashboard_icon from "../../../assets/dashboard.svg";
import home_black from "../../../assets/home_black.svg";
import "./NavigationItems.css";

const NavigationItems = (props) => {
  return (
    <div>
      <ul className="NavigationItems">
        {props.isAuthenticated && (
          <NavigationItem
            to="/"
            label="My Work"
            page="Dashboard"
            img={dashboard_icon}
            exact
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/customer/new"
            label="Customer"
            page="Add Customer"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/customers"
            page="View Customer"
            img={dashboard_icon}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_category"
            label="Category"
            page="Add Category"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_category"
            page="View Category"
            img={home_black}
          />
        )}
      </ul>
    </div>
  );
};

export default NavigationItems;
