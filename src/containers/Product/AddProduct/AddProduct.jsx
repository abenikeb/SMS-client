import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import * as actionTypes from "../../../store/action/index";
import Form from "../../../components/Form/Form";

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import withRouter from "../../../hoc/WithRouter/WithRouter";
import { Navigate } from "react-router-dom";
import "./AddProduct.css";

class AddProduct extends Form {
  schema = {
    id: Joi.string(),
    product_sku: Joi.string().required().label("Product_sku"),
    _desc: Joi.string().required().label("Description"),
  };

  // populateCategories = async () => {
  //   let categoryId = this.props.params.id;
  //   if (categoryId === "new") return;

  //   this.props.onFetchCategory(categoryId);
  // };

  // async componentDidMount() {
  //   await this.populateCategories();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        toast.error(this.props.errors);
      }
    }
  }

  handleBackAction = () => {
    this.props.navigate("/view_category");
  };

  doSubmit = async () => {
    this.props.onSubmitForm(this.props.data);
  };

  isUpdated() {
    let productUpdateReirect = null;

    if (this.props.isProductUpdate) {
      toast.info("Successfuly Updated");
      productUpdateReirect = <Navigate to="/view_product" />;
    }

    return productUpdateReirect;
  }

  render() {
    return (
      <Auxiliary>
        {this.isUpdated()}
        <section className="container-add-product">
          {this.props.params.id === "new" ? (
            <h1>Add Product</h1>
          ) : (
            <h1>Edit Product</h1>
          )}

          {this.props.loading && <Spinner />}
          <form onSubmit={this.handleSubmit}>
            <section className="w-full">
              {this.renderInput("Name", "product_sku")}
              {this.renderTextArea("Description", "_desc")}
            </section>
            <section className="button-container-add-product">
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
    products: state.product.product,
    data: state.product.data,
    loading: state.product.loading,
    error: state.product.error,
    errors: state.product.errors,
    isProductUpdate: state.product.isProductUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchCategory: (customerId) => {
    //   dispatch(actionTypes.getUserCategory(customerId));
    // },
    onHandleInputChange: (data, errors) => {
      dispatch(actionTypes.inputChange_product(data, errors));
    },
    onSubmitForm: (data) => {
      dispatch(actionTypes.succesSubmitProductForm(data));
    },
    onHandleSubmitError: (error) => {
      dispatch(actionTypes.inputError_category(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(AddProduct)));
