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
    if (
      prevProps.data.items[0]?.qty !== this.props.data.items[0]?.qty ||
      prevProps.data.items[1]?.qty !== this.props.data.items[1]?.qty ||
      prevProps.data.items[2]?.qty !== this.props.data.items[2]?.qty
    ) {
      this.props.calculateTotal(this.props.data.items);
    }
  }

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  handleQtyChange = (e) => {
    const PLACE_HOLEDR_VALUE = e.target.attributes[1].value;
    this.props.onHandleInputChange_items(e.target.value, PLACE_HOLEDR_VALUE);
  };

  doSubmit = async () => {
    console.log("data", this.props.data);
    // this.props.onSubmitForm(this.props.data);
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

              <div className="price-container">
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

    net_price: state.order.net_price,
    add_vat: state.order.add_vat,
    excise_tax: state.order.excise_tax,
    gross_price: state.order.gross_price,

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

    onHandleInputChange_items: (data, PLACE_HOLEDR_VALUE) => {
      dispatch(actionTypes.changeInput_order_items(data, PLACE_HOLEDR_VALUE));
    },

    onHandleSubmitError: (error) => {
      dispatch(actionTypes.changeError_order(error));
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
