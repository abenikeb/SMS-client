import React from "react";
import Joi from "joi-browser";
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
    error: {},
  };

  schema = {
    fullName: Joi.string().required().label("Full Name"),
    categoryId: Joi.string().required().label("Category"),
    tel: Joi.string().required().label("Tel No"),
    city: Joi.string().required().label("City"),
    email: Joi.string().required().label("Email"),
    territory: Joi.string().required().label("Territory"),
    customerType: Joi.string().required().label("Customer Type"),
    approvedBy: Joi.string().required().label("Approved By"),
  };

  componentDidMount() {
    const customers = getCustomers();
    const categories = getCategories();
    this.setState({ customers, categories });
  }

  doSubmit = () => {
    saveCustomer(this.state.data);
    alert("Success Full submited");
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
