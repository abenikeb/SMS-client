import React from "react";
import NavigationItem from "./NavigationItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        {/* {props.isAuthenticated && (
          <NavigationItem
            to="/"
            label="My Work"
            page="Dashboard"
            img={dashboard_icon}
            exact
          />
        )} */}

        <div className="mb-4 text-black font-semibold pl-4">My Work</div>

        <li className="dashboard">
          <NavLink to="/" exact>
            <FontAwesomeIcon icon="fa-solid fa-gauge" />
            Dashboard
          </NavLink>
        </li>

        {/* Dashboard Section */}
        {/* {props.isAuthenticated && (
          <NavigationItem label="Dashboard" to="/" page="Dashboard" exact />
        )} */}

        {/* Customer Section */}
        {props.isAuthenticated && (
          <NavigationItem
            label="Customer"
            icon="fa-solid fa-rectangle-list"
            items={[
              {
                to: "/customers",
                page: "View Customer",
                icon: "fa-solid fa-rectangle-list",
              },
              {
                to: "/customer/new",
                page: "Add Customer",
                icon: "fa-solid fa-users",
              },
            ]}
          />
        )}

        {/* {props.isAuthenticated && (
          <NavigationItem
            to="/customers"
            page="View Customer"
            // img={dashboard_icon}
            icon="fa-solid fa-users"
          />
        )} */}

        {/* Sales Section */}
        {props.isAuthenticated && (
          <NavigationItem
            label="Sales"
            icon="fa-solid fa-list"
            items={[
              {
                to: "/add_order/new",
                page: "Create Oder",
                icon: "fa-solid fa-user-plus",
              },
              {
                to: "/view_order",
                page: "View Order",
                icon: "fa-solid fa-users",
              },
            ]}
          />
        )}
        {/* {props.isAuthenticated && (
          <NavigationItem
            to=fa-solid fa-list
            label="Sales"
            page="Create Oder"
            icon="fa-solid fa-folder-plus"
          />
        )}
        {props.isAuthenticated && (
          <NavigationItem
            to="/view_order"
            page="View Order"
            icon="fa-solid fa-list"
          />
        )} */}

        <div className="mb-4 text-gray-500 font-semibold pl-4">Catalog</div>

        {/* Customer Category Section */}
        {props.isAuthenticated && (
          <NavigationItem
            label="Add Category"
            icon="fa-solid fa-layer-group"
            items={[
              {
                to: "/add_category/new",
                page: "Add Category",
              },
              {
                to: "/view_category",
                page: "View Category",
              },
            ]}
          />
        )}

        {/* {props.isAuthenticated && (
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
        )} */}

        {/* Product Section */}
        {/* {props.isAuthenticated && (
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
        )} */}

        {props.isAuthenticated && (
          <NavigationItem
            label="Product"
            icon="fa-solid fa-plus"
            items={[
              {
                to: "/add_product/new",
                page: "Add Product",
              },
              {
                to: "/view_product",
                page: "View Product",
              },
            ]}
          />
        )}

        {/* Promotion Section */}
        {/* {props.isAuthenticated && (
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
        )} */}

        {props.isAuthenticated && (
          <NavigationItem
            label="Promotion"
            icon="fa-solid fa-rectangle-ad"
            items={[
              {
                to: "/add_promotion/new",
                page: "Add Promotion",
              },
              {
                to: "/view_promotion",
                page: "View Promotion",
              },
            ]}
          />
        )}

        {/* Price Section */}
        {/* {props.isAuthenticated && (
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
        )} */}

        {props.isAuthenticated && (
          <NavigationItem
            label="Price"
            icon="fa-solid fa-tag"
            items={[
              {
                to: "/add_price/new",
                page: "Add Price",
              },
              {
                to: "/view_price",
                page: "View Price",
              },
            ]}
          />
        )}
      </ul>
    </div>
  );
};

export default NavigationItems;
