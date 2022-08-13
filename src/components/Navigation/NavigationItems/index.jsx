import React from "react";
import NavigationItem from "./NavigationItem";
import dashboard_icon from "../../../assets/dashboard.svg";
import home_black from "../../../assets/home_black.svg";
import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <div>
      <ul className="NavigationItems">
        <NavigationItem
          to="/"
          label="My Work"
          page="Dashboard"
          img={dashboard_icon}
          exact
        />
        <NavigationItem
          to="/add_customer"
          label="Customer"
          page="Add Customer"
          img={home_black}
        />
        <NavigationItem
          to="/view_customer"
          page="View Customer"
          img={dashboard_icon}
        />
        <NavigationItem
          to="/add_category"
          label="Category"
          page="Add Category"
          img={home_black}
        />
        <NavigationItem
          to="/view_category"
          page="View Category"
          img={home_black}
        />
      </ul>
    </div>
  );
};

export default NavigationItems;
