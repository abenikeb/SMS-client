import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "../../../components/Form/Form";
import {
  getCustomer,
  getCategories,
  saveCustomer,
  getCustomerPaymentType,
} from "../../../services/customerServices";

import WithRouter from "../../../hoc/WithRouter/WithRouter";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./Profile.css";

class Customer extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      category_id: "",
      business_licenses_no: "",
      plate_no: "",
      type_id: "",
      tel: "",
      city: "",
      email: "",
      territory: "",
      approved_by: "",
    },
    loading: false,
    categories: [],
    paymentType: [],
    error: {},
  };

  schema = {
    id: Joi.string(),
    first_name: Joi.string().required().label("Full Name"),
    last_name: Joi.string().required().label("Last Name"),

    category_id: Joi.string().required().label("Category"),
    business_licenses_no: Joi.string()
      .required()
      .label("Business Licensses No"),
    plate_no: Joi.string().required().label("Plate no"),

    type_id: Joi.string().required().label("Type Id"),
    tel: Joi.string().required().label("Tel No"),
    city: Joi.string().required().label("City"),

    email: Joi.string().required().label("Email"),
    territory: Joi.string().required().label("Territory"),
    approved_by: Joi.string().required().label("Approved By"),
  };

  populateCustomer = async () => {
    try {
      let customerId = this.props.params.id;
      if (customerId === "new") return;

      const { data: customer } = await getCustomer(customerId);

      this.setState({ data: this.mapPropsToState(customer) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error(ex.response.data.error);
        this.props.navigate("/");
      }
    }
  };

  populateCategories = async () => {
    try {
      const { data: categories } = await getCategories();
      this.setState({ categories: categories.result });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data.error);
        this.props.navigate("/");
      }
    }
  };

  populateCustomerType = async () => {
    try {
      const { data: paymentType } = await getCustomerPaymentType();
      this.setState({ paymentType });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data.error);
        this.props.navigate("/");
      }
    }
  };

  async componentDidMount() {
    await this.populateCategories();
    await this.populateCustomer();
    await this.populateCustomerType();
  }

  mapPropsToState = (customer) => {
    return {
      id: customer.id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      category_id: customer.category_id,
      business_licenses_no: customer.business_licenses_no,
      plate_no: customer.plate_no,
      type_id: customer.type_id,
      tel: customer.tel,
      city: customer.city,
      email: customer.email,
      territory: customer.territory,
      approved_by: customer.approved_by,
    };
  };

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      await saveCustomer(this.state.data);
      this.setState({ loading: false });
      toast("Successfuly Saved");
      this.props.navigate("/customers");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let error = { ...this.state.error };
        ex.response.data.map((res) => {
          let keyIndex = Object.keys(res.err)[0];
          error[res.property] = res.err[keyIndex];
        });
        this.setState({ error });
      }

      this.setState({ loading: false });
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
              {this.renderInput("First Name", "first_name")}
              {this.renderInput("Last Name", "last_name")}
              {this.renderSelect(
                "Category",
                "category_id",
                this.state.categories
              )}

              {this.renderInput("Tel", "tel")}
              {this.renderInput("City", "city")}

              {this.renderInput("Email", "email")}
              {this.renderInput("Territory", "territory")}
              {this.renderInput("Business licenses no", "business_licenses_no")}

              {this.renderInput("Plate no", "plate_no")}
              {this.renderSelect("Type id", "type_id", this.state.paymentType)}
              {this.renderInput("Approved by", "approved_by")}
            </section>
            <section className="button-container">
              <button className="btn btn-sm" onClick={this.handleBackAction}>
                Discard
              </button>
              {this.renderButton("Submit", "btn-primary-wrap")}
            </section>
          </form>
        </section>
      </Auxiliary>
    );
  }
}

export default WithRouter(Customer);
