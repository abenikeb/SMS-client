import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import * as actionTypes from "../../../store/action/index";

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import withRouter from "../../../hoc/WithRouter/WithRouter";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./AddOrder.css";

class AddOrder extends Component {
  schema = {
    id: Joi.string(),
    category_id: Joi.string().required().label("Category"),
    customer_id: Joi.string().required().label("Customer"),
    items: Joi.array().required().label("Items"),
  };

  populateCategories = async () => {
    this.props.onInitCategories();
  };

  populateCustomer = async () => {
    let customerId = this.props.params.id;
    if (customerId === "new") return;
    this.props.onFetchCustomer(customerId);
  };

  async componentDidMount() {
    await this.populateCategories();
    await this.populateCustomer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.category_id !== this.props.data.category_id) {
      if (this.props.data.category_id !== "") {
        this.props.onInitCustomers(this.props.data.category_id);
        this.props.onInitProductWithPrice(this.props.data.category_id);
      }
    }
    if (
      prevProps.data.items[0]?.qty !== this.props.data.items[0]?.qty ||
      prevProps.data.items[1]?.qty !== this.props.data.items[1]?.qty ||
      prevProps.data.items[2]?.qty !== this.props.data.items[2]?.qty
    ) {
      this.props.calculateTotal(this.props.data.items);
    }
  }

  validateInput = (target) => {
    let err = Joi.validate(
      { [target.name]: target.value },
      { [target.name]: this.schema[target.name] }
    );
    return err;
  };

  handleChange = ({ target }) => {
    let inputErr = this.validateInput(target);
    let errors = { ...this.props.error };
    inputErr.error !== null
      ? (errors[target.name] = inputErr.error.details[0].message)
      : delete errors[target.name];

    const data = { ...this.props.data };
    data[target.name] = target.value;

    this.props.onHandleInputChange(data, errors);
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.props.data, this.schema, options);
    console.log("this.props.data", this.props.data);
    console.log("error", error);
    return error != null ? error : {};
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    const error = this.validate();

    const errCount = Object.keys(error).length;

    if (errCount > 0) {
      for (let err of error.details) {
        errors[err.path[0]] = err.message;
      }
    }

    this.props.onHandleSubmitError(errors);
    if (errCount > 0) return false;

    this.doSubmit();
  };

  renderButton = (label, btn_class) => {
    return (
      <div>
        <Button label={label} btn_class={btn_class} />
      </div>
    );
  };

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  handleQtyChange = (e) => {
    const PLACE_HOLEDR_VALUE = e.target.attributes[1].value;
    this.props.onHandleInputChange_items(e.target.value, PLACE_HOLEDR_VALUE);
  };

  doSubmit = async () => {
    this.props.onSubmitForm(this.props.data);
  };

  isUpdated() {
    let customerUpdateRedirect = null;

    if (this.props.isOrderUpdate) {
      toast.info("Successfuly Order Crated");
      customerUpdateRedirect = <Navigate to="/view_order" />;
    }

    return customerUpdateRedirect;
  }

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
            <div className="flex flex-wrap gap-8">
              <div className="form-control-wrap">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="input-style-wrap"
                  required
                  name="category_id"
                  value={this.props.data.category_id}
                  onChange={this.handleChange}
                >
                  <option selected>Pick Customer Category</option>
                  {this.props.categories.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <label className="label">
                  {this.props.error?.category_id && (
                    <span className="label-text bg-red-400 text-white rounded-md h-8 flex justify-center items-center">
                      {this.props.error.category_id}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control-wrap">
                <label className="label">
                  <span className="label-text">Customer</span>
                </label>
                <select
                  className="input-style-wrap"
                  required
                  name="customer_id"
                  value={this.props.data.customer_id}
                  onChange={this.handleChange}
                >
                  <option selected>Pick Customer</option>
                  {this.props.customers.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <label className="label">
                  {this.props.error?.customer_id && (
                    <span className="label-text bg-red-400 text-white rounded-md w-full h-8 flex justify-center items-center">
                      {this.props.error.customer_id}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <br />
            <br />

            <div className="flex flex-wrap gap-8">
              <div className="overflow-x-auto flex-1">
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
                    {this.props.data.items.length === 0 && (
                      <div className="p-4">
                        <p>No Items Found</p>
                        <h6>PLease select the category lists</h6>
                      </div>
                    )}

                    {this.props.data.items[0] && (
                      <tr>
                        <th>{this.props.data.items[0]?.product_sku}</th>
                        <td>{this.props.data.items[0]?.price}</td>
                        <td>
                          <input
                            type="number"
                            autoFocus
                            ref={this.textInput}
                            placeholder="0"
                            value={this.props.data.items[0]?.qty}
                            onChange={this.handleQtyChange}
                            className="input input-ghost w-full max-w-xs"
                          />
                        </td>
                        <td>Total</td>
                      </tr>
                    )}

                    {this.props.data.items[1] && (
                      <tr>
                        <th>{this.props.data.items[1]?.product_sku}</th>
                        <td>{this.props.data.items[1]?.price}</td>
                        <td>
                          <input
                            type="number"
                            ref={this.textInput}
                            placeholder="1"
                            value={this.props.data.items[1]?.qty}
                            onChange={this.handleQtyChange}
                            className="input input-ghost w-full max-w-xs"
                          />
                        </td>
                        <td>Total</td>
                      </tr>
                    )}

                    {this.props.data.items[2] && (
                      <tr>
                        <th>{this.props.data.items[2]?.product_sku}</th>
                        <td>{this.props.data.items[2]?.price}</td>
                        <td>
                          <input
                            type="number"
                            ref={this.textInput}
                            placeholder="2"
                            value={this.props.data.items[2]?.qty}
                            onChange={this.handleQtyChange}
                            className="input input-ghost w-full max-w-xs"
                          />
                        </td>
                        <td>Total</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="price-container flex-1 border-dashed border-2 border-gray-500">
                <div className="price-wrap">
                  <p>Net Price</p>
                  <h6>
                    <b>{this.props.net_price}</b> ETB
                  </h6>
                </div>
                <div className="price-wrap">
                  <p>Excise Tax(10%)</p>
                  <h6>
                    <b>{this.props.excise_tax}</b> ETB
                  </h6>
                </div>
                <div className="price-wrap">
                  <p>Total After Vat(15%)</p>
                  <h6>
                    <b>{this.props.add_vat}</b> ETB
                  </h6>
                </div>
                <hr />
                <div className="price-wrap">
                  <p>Total(gross price)</p>
                  <h6>
                    <b>{this.props.gross_price}</b> ETB
                  </h6>
                </div>
              </div>
            </div>

            {/* BUTTON CLASSES */}
            <section className="button-container-profile">
              <button className="btn btn-sm" onClick={this.handleBackAction}>
                Discard
              </button>
              {this.renderButton("Submit", "btn-primary-wrap")}
            </section>
          </form>

          {/* <div className="dropdown-wr">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul tabIndex={0} className="dropdown-content dropdown-wrap-display">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
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

    net_price: state.order.net_price,
    add_vat: state.order.add_vat,
    excise_tax: state.order.excise_tax,
    gross_price: state.order.gross_price,

    data: state.order.data,
    error: state.order.error,
    errors: state.order.errors,
    loading: state.order.loading,
    isOrderUpdate: state.order.isOrderUpdate,
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

    onHandleInputChange_items: (data, PLACE_HOLEDR_VALUE) => {
      dispatch(actionTypes.changeInput_order_items(data, PLACE_HOLEDR_VALUE));
    },

    onHandleSubmitError: (errors) => {
      dispatch(actionTypes.changeError_order(errors));
    },

    calculateTotal: (itemsData) => {
      dispatch(actionTypes.calculateTotal_order(itemsData));
    },

    onSubmitForm: (data) => {
      dispatch(actionTypes.succesSubmitForm_order(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(AddOrder)));
