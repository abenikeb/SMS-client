import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";
import { getCustomers } from "../../services/fakeCustomerServices";
import { getCategories } from "../../services/fakeCategoryService";
import { saveCustomer } from "../../services/fakeCustomerServices";

import "./AddCustomer.css";

class Customer extends Form {
  state = {
    data: {
      fullName: "",
      categoryId: "",
      tel: "",
      city: "",
      email: "",
      territory: "",
      customerType: "",
      approvedBy: "",
    },
    customers: [],
    categories: [],
    error: null,
  };

  componentDidMount() {
    const customers = getCustomers();
    const categories = getCategories();
    this.setState({ customers, categories });
  }

  doSubmit = () => {
    saveCustomer(this.state.data);
  };

  render() {
    return (
      <Auxiliary>
        <section className="container">
          <h1>Add Customer</h1>
          <form onSubmit={this.handleSubmit}>
            <section className="input-container">
              {this.renderInput("Name", "fullName")}
              {this.renderSelect(
                "Category",
                "categoryId",
                this.state.categories
              )}
              {this.renderInput("Tel", "tel")}
              {this.renderInput("City", "city")}
              {this.renderInput("Email", "email")}
              {this.renderInput("Territory", "territory")}
              {this.renderInput("CustomerType", "customerType")}
              {this.renderInput("ApprovedBy", "approvedBy")}
            </section>
            <section className="button-container">
              {this.renderButton("Discard", "btn-success-ghost")}
              {this.renderButton("Submit", "btn-primary-wrap")}
            </section>
          </form>
        </section>
      </Auxiliary>
    );
  }
}

export default Customer;
