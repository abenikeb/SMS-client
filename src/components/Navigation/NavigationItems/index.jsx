import React from "react";
import NavigationItem from "./NavigationItem";
import dashboard_icon from "../../../assets/dashboard.svg";
import home_black from "../../../assets/home_black.svg";
import "./NavigationItems.css";

const NavigationItems = (props) => {
  return (
    <div>
      <ul className="NavigationItems">
        {/* Dashboard Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/"
            label="My Work"
            page="Dashboard"
            img={dashboard_icon}
            exact
          />
        )}

        {/* Customer Section */}
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

        {/* Sales Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_order"
            label="Sales"
            page="View Oder"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_order"
            page="Create Order"
            img={home_black}
          />
        )}

        {/* Customer Category Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_category/new"
            label="Customer Category"
            page="Add Category"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_category"
            page="View Category"
            img={dashboard_icon}
          />
        )}

        {/* Product Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_product/new"
            label="Product"
            page="Add Product"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_product"
            page="View Product"
            img={dashboard_icon}
          />
        )}

        {/* Promotion Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_promotion/new"
            label="Promotion"
            page="Add Promotion"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_promotion"
            page="View Promotion"
            img={dashboard_icon}
          />
        )}

        {/* Price Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_price/new"
            label="Price"
            page="Add Price"
            img={home_black}
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_price"
            page="View Price"
            img={dashboard_icon}
          />
        )}
      </ul>
    </div>
  );
};

export default NavigationItems;
