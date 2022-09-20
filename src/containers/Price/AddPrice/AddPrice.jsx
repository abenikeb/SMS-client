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
import "./AddPrice.css";

class AddPrice extends Form {
  schema = {
    id: Joi.string(),
    name: Joi.string().required().label("Name"),
    _desc: Joi.string().required().label("Description"),
  };

  populateCategories = async () => {
    let categoryId = this.props.params.id;
    if (categoryId === "new") return;

    this.props.onFetchCategory(categoryId);
  };

  async componentDidMount() {
    await this.populateCategories();
  }

  handleBackAction = () => {
    this.props.navigate("/view_category");
  };

  doSubmit = async () => {
    this.props.onSubmitForm(this.props.data);
  };

  isUpdated() {
    let categoryUpdateRedirect = null;

    if (this.props.isCategoryUpdate) {
      toast.info("Successfuly Updated");
      categoryUpdateRedirect = <Navigate to="/view_category" />;
    }

    return categoryUpdateRedirect;
  }

  render() {
    return (
      <Auxiliary>
        {this.isUpdated()}
        <section className="container-add-product">
          {this.props.params.id === "new" ? (
            <h1>Add Price</h1>
          ) : (
            <h1>Edit Price</h1>
          )}

          {this.props.loading && <Spinner />}
          <form onSubmit={this.handleSubmit}>
            <section className="w-full">
              {this.renderInput("Name", "name")}
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
    categories: state.categories.categories,
    data: state.categories.data,
    loading: state.categories.loading,
    error: state.categories.error,
    errors: state.categories.errors,
    isCategoryUpdate: state.categories.isCategoryUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategory: (customerId) => {
      dispatch(actionTypes.getUserCategory(customerId));
    },
    onHandleInputChange: (data, errors) => {
      dispatch(actionTypes.inputChange_category(data, errors));
    },
    onSubmitForm: (data) => {
      dispatch(actionTypes.succesSubmitCategoryForm(data));
    },
    onHandleSubmitError: (error) => {
      dispatch(actionTypes.inputError_category(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(AddPrice)));
