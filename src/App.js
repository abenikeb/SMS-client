import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import DashBoard from "./containers/DashBoard/DashBoard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CustomerList from "./containers/CustomerList/CustomerList";
import AddCustomer from "./containers/AddCustomer/AddCustomer";
class App extends Component {
  render() {
    library.add(fas, far);
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add_customer" element={<AddCustomer />} />
            <Route path="/view_customer" element={<CustomerList />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
