import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./hoc/Layout/Layout";
import DashBoard from "./containers/DashBoard/DashBoard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Profile from "./containers/Customer/Profile/Profile";
import Customer from "./containers/Customer/Customer";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  render() {
    library.add(fas, far);
    return (
      <div>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/customer/:id" element={<Profile />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
