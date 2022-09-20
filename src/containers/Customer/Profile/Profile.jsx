import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import * as actionTypes from "../../../store/action/index";
import Form from "../../../components/Form/Form";

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./Profile.css";
import withRouter from "../../../hoc/WithRouter/WithRouter";
import { Navigate } from "react-router-dom";

class Customer extends Form {
  schema = {
    id: Joi.string(),
    first_name: Joi.string().required().label("Full Name"),
    last_name: Joi.string().required().label("Last Name"),
    category_id: Joi.required().label("Category"),
    business_licenses_no: Joi.string()
      .required()
      .label("Business Licensses No"),
    plate_no: Joi.string().required().label("Plate no"),
    type_id: Joi.required().label("Type Id"),
    tel: Joi.string().required().label("Tel No"),
    city: Joi.string().required().label("City"),
    email: Joi.string().required().label("Email"),
    territory: Joi.string().required().label("Territory"),
  };

  populateCustomer = async () => {
    console.log("POPULATE_CUSTOMER");
    let customerId = this.props.params.id;
    if (customerId === "new") return;

    this.props.onFetchCustomer(customerId);
  };

  populateCategories = async () => {
    console.log("POPULATE_CATEGORY");
    this.props.onInitCategories();
  };

  populateCustomerType = async () => {
    console.log("POPULATE_CUSTOMER_TYPE");
    this.props.onInitPaymentType();
  };

  async componentDidMount() {
    await this.populateCategories();
    await this.populateCustomer();
    await this.populateCustomerType();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT_DID_UPDATE");
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        toast.error(this.props.errors);
      }
    }
  }

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  doSubmit = async () => {
    this.props.onSubmitForm(this.props.data);
  };

  isUpdated() {
    let customerUpdateRedirect = null;

    if (this.props.isCustomerUpdate) {
      toast.info("Successfuly Updated");
      customerUpdateRedirect = <Navigate to="/customers" />;
    }

    return customerUpdateRedirect;
  }

  render() {
    console.log("RENDER -");
    return (
      <Auxiliary>
        {this.isUpdated()}
        <section className="container-profile">
          {this.props.params.id === "new" ? (
            <h1>Add Customer</h1>
          ) : (
            <h1>Edit Customer</h1>
          )}

          {this.props.loading && <Spinner />}
          <form onSubmit={this.handleSubmit}>
            <section className="input-container-profile">
              {this.renderInput("First Name", "first_name")}
              {this.renderInput("Last Name", "last_name")}
              {this.renderSelect(
                "Category",
                "category_id",
                this.props.categories
              )}

              {this.renderInput("Tel", "tel")}
              {this.renderInput("City", "city")}

              {this.renderInput("Email", "email")}
              {this.renderInput("Territory", "territory")}
              {this.renderInput("Business licenses no", "business_licenses_no")}

              {this.renderInput("Plate no", "plate_no")}
              {this.renderSelect("Type id", "type_id", this.props.paymentType)}
            </section>
            <section className="button-container-profile">
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

const mapStateToProps = (state) => {
  return {
    customers: state.customers.customers,
    customer: state.customers.customer,
    categories: state.customers.categories,
    paymentType: state.customers.paymentType,
    data: state.customers.data,
    loading: state.customers.loading,
    error: state.customers.error,
    errors: state.customers.errors,
    isCustomerUpdate: state.customers.isCustomerUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCustomer: (customerId) => {
      dispatch(actionTypes.fetchCustomer(customerId));
    },
    onInitCustomers: () => {
      dispatch(actionTypes.initCustomers());
    },
    onInitCategories: () => {
      dispatch(actionTypes.initCategories());
    },
    onInitPaymentType: () => {
      dispatch(actionTypes.initPaymentType());
    },
    onHandleInputChange: (data, errors) => {
      dispatch(actionTypes.changeInput(data, errors));
    },
    onSubmitForm: (data) => {
      dispatch(actionTypes.succesSubmitForm(data));
    },
    onHandleSubmitError: (error) => {
      dispatch(actionTypes.changeError(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(Customer)));
