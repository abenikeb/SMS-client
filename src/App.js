import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "./hoc/Layout/Layout";
import DashBoard from "./containers/DashBoard/DashBoard";
import Profile from "./containers/Customer/Profile/Profile";
import Customer from "./containers/Customer/Customer";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./containers/Logout/Logout";
import auth from "./services/authService";
import NotFound from "./containers/NotFound/NotFound";

class App extends Component {
  state = {
    user: "",
  };

  async componentDidMount() {
    let user = await auth.getUserData();
    this.setState({ user });
  }

  render() {
    library.add(fas, far);
    const { user } = this.state;
    return (
      <div>
        <ToastContainer />

        <Layout user={this.state.user}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Navigate to="/login" replace /> */}
            <Route path="/" element={<DashBoard />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/customer/:id" element={<Profile />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
