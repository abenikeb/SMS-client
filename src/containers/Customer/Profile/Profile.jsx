import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "../../../components/Form/Form";
import { getCategories } from "../../../services/fakeCategoryService";
import {
  getCustomer,
  saveCustomer,
} from "../../../services/fakeCustomerServices";
import WithRouter from "../../../hoc/WithRouter/WithRouter";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./Profile.css";

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
    loading: false,
    categories: [],
    error: {},
  };

  schema = {
    _id: Joi.string(),
    fullName: Joi.string().required().label("Full Name"),
    categoryId: Joi.string().required().label("Category"),
    tel: Joi.string().required().label("Tel No"),
    city: Joi.string().required().label("City"),
    email: Joi.string().required().label("Email"),
    territory: Joi.string().required().label("Territory"),
    customerType: Joi.string().required().label("Customer Type"),
    approvedBy: Joi.string().required().label("Approved By"),
  };

  populateCustomer = async () => {
    try {
      let customerId = this.props.params.id;
      if (customerId === "new") return;

      const customer = await getCustomer(customerId);
      this.setState({ data: this.mapPropsToState(customer) });
    } catch (ex) {
      this.props.navigate("/");
      toast.error("The customer with the given Id Doesnot Found");
      // if (ex.response && ex.response.status === 404) {
      //   toast("The customer with the given Id Doesnot Found");
      //   this.props.history.push("/");
      // }
    }
  };

  async componentDidMount() {
    this.setState({ categories: getCategories() });
    await this.populateCustomer();
  }

  mapPropsToState = (customer) => {
    return {
      _id: customer._id,
      fullName: customer.fullName,
      categoryId: customer.category._id,
      tel: customer.tel,
      city: customer.city,
      email: customer.email,
      territory: customer.territory,
      customerType: customer.customerType,
      approvedBy: customer.approvedBy,
    };
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      await saveCustomer(this.state.data);
      this.setState({ loading: false });
      toast("Successfuly Saved");
      this.props.navigate("/customers");
    } catch (ex) {
      toast.error("Error");
    }
  };

  render() {
    return (
      <Auxiliary>
        <section className="container">
          <h1>Add Customer</h1>

          {this.state.loading && <Spinner />}
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

export default WithRouter(Customer);
