import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import * as actions from "./store/action/index";

import Layout from "./hoc/Layout/Layout";
import DashBoard from "./containers/DashBoard/DashBoard";
import Profile from "./containers/Customer/Profile/Profile";
import Customer from "./containers/Customer/Customer";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./containers/Logout/Logout";
import NotFound from "./containers/NotFound/NotFound";
import Category from "./containers/Category/Category";
import AddCategory from "./containers/Category/AddCategory/AddCategory";
import Product from "./containers/Product/Product";
import AddProduct from "./containers/Product/AddProduct/AddProduct";
import AddPrice from "./containers/Price/AddPrice/AddPrice";
import Price from "./containers/Price/Price";
import Promotion from "./containers/Promotion/Promotion";
import AddPromotion from "./containers/Promotion/AddPromotion/AddPromotion";
import Order from "./containers/Order/Order";
import AddOrder from "./containers/Order/AddOrder/AddOrder";

class App extends Component {
  componentDidMount() {
    this.props.onTryToSignup();
  }
  render() {
    library.add(fas, far);
    return (
      <div>
        <ToastContainer />

        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Navigate to="/login" replace /> */}
            <Route path="/" element={<DashBoard />} />

            <Route path="/customers" element={<Customer />} />
            <Route path="/customer/:id" element={<Profile />} />
            {/* ORDER */}
            <Route path="/view_order" element={<Order />} />
            <Route path="/add_order/:id" element={<AddOrder />} />
            {/* CATEGORY */}
            <Route path="/view_category" element={<Category />} />
            <Route path="/add_category/:id" element={<AddCategory />} />
            {/* PRODUCT */}
            <Route path="/view_product" element={<Product />} />
            <Route path="/add_product/:id" element={<AddProduct />} />
            {/* PRICE */}
            <Route path="/view_price" element={<Price />} />
            <Route path="/add_price/:id" element={<AddPrice />} />
            {/* PROMOTION */}
            <Route path="/view_promotion" element={<Promotion />} />
            <Route path="/add_promotion/:id" element={<AddPromotion />} />

            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onTryToSignup: () => {
      dispatch(actions.authCheckState());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
