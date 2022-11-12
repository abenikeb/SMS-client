import React from "react";
import NavigationItem from "./NavigationItem";
import dashboard_icon from "../../../assets/dashboard.svg";
import home_black from "../../../assets/home_black.svg";
import Logo from "../../Logo/Logo";
import "./NavigationItems.css";

const NavigationItems = (props) => {
  return (
    <div>
      <Logo />
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
            // img={home_black}
            icon="fa-solid fa-user-plus"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/customers"
            page="View Customer"
            // img={dashboard_icon}
            icon="fa-solid fa-users"
          />
        )}

        {/* Sales Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_order/new"
            label="Sales"
            page="Create Oder"
            icon="fa-solid fa-folder-plus"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_orders"
            page="View Order"
            icon="fa-solid fa-list"
          />
        )}

        {/* Customer Category Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_category/new"
            label="Customer Category"
            page="Add Category"
            icon="fa-solid fa-layer-group"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_category"
            page="View Category"
            icon="fa-solid fa-list"
          />
        )}

        {/* Product Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_product/new"
            label="Product"
            page="Add Product"
            icon="fa-solid fa-plus"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_product"
            page="View Product"
            icon="fa-solid fa-list"
          />
        )}

        {/* Promotion Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_promotion/new"
            label="Promotion"
            page="Add Promotion"
            icon="fa-solid fa-rectangle-ad"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_promotion"
            page="View Promotion"
            icon="fa-solid fa-list"
          />
        )}

        {/* Price Section */}
        {props.isAuthenticated && (
          <NavigationItem
            to="/add_price/new"
            label="Price"
            page="Add Price"
            icon="fa-solid fa-tag"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_price"
            page="View Price"
            icon="fa-solid fa-list"
          />
        )}
      </ul>
    </div>
  );
};

export default NavigationItems;
