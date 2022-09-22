import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import * as actionTypes from "../../../store/action/index";
import Form from "../../../components/Form/Form";

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import withRouter from "../../../hoc/WithRouter/WithRouter";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./AddOrder.css";

class AddOrder extends Form {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  schema = {
    id: Joi.string(),
    category_id: Joi.required().label("Category"),
    customer_id: Joi.required().label("Customer"),
  };

  populateCustomer = async () => {
    let customerId = this.props.params.id;
    if (customerId === "new") return;

    this.props.onFetchCustomer(customerId);
  };

  populateCategories = async () => {
    this.props.onInitCategories();
  };

  async componentDidMount() {
    await this.populateCategories();
    await this.populateCustomer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data.category_id !== this.props.data.category_id) {
      if (this.props.data.category_id !== "") {
        this.props.onInitCustomers(this.props.data.category_id);
        this.props.onInitProductWithPrice(this.props.data.category_id);
      }
    }
  }

  // mapCategoryToCustomers = (customers) => {
  //   this.props.onInitCustomers(customers);
  // };

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  handleQtyChange = (e) => {
    console.log("Target", e);
    // console.log("textInput", this.textInput);

    this.props.onHandleInputChange_items(e.target.value);
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
  // initCustomers_order;
  render() {
    return (
      <Auxiliary>
        {this.isUpdated()}

        <section className="container-profile">
          {this.props.params.id === "new" ? (
            <h1>Create Order</h1>
          ) : (
            <h1>Edit Order</h1>
          )}

          {this.props.loading && <Spinner />}

          <form onSubmit={this.handleSubmit}>
            <section className="input-container-profile">
              {this.renderSelect(
                "Category",
                "category_id",
                this.props.categories
              )}

              {/* {this.renderInput("Last Name", "last_name")} */}

              {this.renderSelect(
                "Customer",
                "customer_id",
                this.props.customers
              )}

              {/* {this.renderSelect(
                "Category",
                "category_id",
                this.props.categories
              )} */}

              <div className="overflow-x-auto">
                <table className="table-warap">
                  <thead>
                    <tr>
                      <th>SKU</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>TABV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.items.map((prod, index) => (
                      <tr>
                        <th>{prod.product_sku}</th>
                        <td>{prod.price}</td>
                        <td>
                          <input
                            type="text"
                            ref={this.textInput}
                            placeholder="Type here"
                            value={prod.qty}
                            onChange={this.handleQtyChange}
                            className="input input-ghost w-full max-w-xs"
                          />
                        </td>
                        <td>Total</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="price-container">
                <div className="price-wrap">
                  <p>Total</p>
                  <p>500</p>
                </div>
                <div className="price-wrap">
                  <p>Excise Tax(10%)</p>
                  <p>500</p>
                </div>
                <div className="price-wrap">
                  <p>Total After Tax</p>
                  <p>500</p>
                </div>
                <div className="price-wrap">
                  <p>Vat(15%)</p>
                  <p>500</p>
                </div>
              </div>
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
    customer: state.customers.customer,
    categories: state.order.categories,
    category: state.order.category,
    customers: state.order.customers,
    product: state.order.product,

    data: state.order.data,
    loading: state.order.loading,
    error: state.order.error,
    errors: state.order.errors,
    isCustomerUpdate: state.order.isCustomerUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProductWithPrice: (categoryId) => {
      dispatch(actionTypes.initProductWithPrice(categoryId));
    },

    onInitCustomers: (category_id) => {
      dispatch(actionTypes.initCustomers_order(category_id));
    },

    onInitCategories: () => {
      dispatch(actionTypes.initCategories_order());
    },

    onHandleInputChange: (data, errors) => {
      dispatch(actionTypes.changeInput_order(data, errors));
    },

    onHandleInputChange_items: (data) => {
      dispatch(actionTypes.changeInput_order_items(data));
    },

    onHandleSubmitError: (error) => {
      dispatch(actionTypes.changeError_order(error));
    },

    // onSubmitForm: (data) => {
    //   dispatch(actionTypes.succesSubmitForm(data));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(AddOrder)));
