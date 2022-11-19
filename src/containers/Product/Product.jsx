import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import paginate from "../../components/utils/paginate";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Navigate } from "react-router-dom";
import ViewCustomer from "../../components/Customer/ViewCustomer";
import ViewProduct from "./ViewProduct/ViewProduct";
import * as productAction from "../../store/action/index";

class Product extends Component {
  componentDidMount() {
    this.props.onInitProduct();
  }

  handlePageChange = (page) => {
    this.props.onHandleCurrentPage(page);
  };

  handleSort = (sortColumn) => {
    this.props.onSortColumn(sortColumn);
  };

  handleModalClose = () => {
    this.props.onHandleCloseModal();
  };

  handleOpenModal = () => {
    this.props.onHandleOpenModal();
  };

  handleraiseProperty = (customer) => {
    this.props.onHandleraiseProperty(customer);
  };

  handleSearch = ({ target }) => {
    this.props.onHandleSearchQuery(target.value);
  };

  render() {
    const {
      products,
      currentPage,
      pageSize,
      searchQuery,
      sortColumn,
      property,
      viewModal,
    } = this.props;

    let filtered = products;

    if (searchQuery) {
      filtered = products.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    let sortedList = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    let paginateItems = paginate(sortedList, currentPage, pageSize);
    const itemsSize = filtered.length;

    // let viewCustomer = <ViewCustomer customer={property} />;
    // if (!property) {
    //   viewCustomer = <Spinner />;
    // }

    let authNavigate = null;
    if (!this.props.isAuthenticated) {
      authNavigate = <Navigate to="/login" />;
    }

    return (
      <Auxiliary>
        {authNavigate}
        <ViewProduct
          onHandlePageChange={this.handlePageChange}
          sortColumns={sortColumn}
          onSort={this.handleSort}
          raiseProperty={this.handleraiseProperty}
          onSearch={this.handleSearch}
          searchQuery={searchQuery}
          currentPage={currentPage}
          pageSize={pageSize}
          itemsSize={itemsSize}
          paginateItems={paginateItems}
        />
        {/* <Modal show={viewModal} closeModal={this.handleModalClose}>
          {viewCustomer}
        </Modal> */}
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    sortColumn: state.product.sortColumn,
    searchQuery: state.product.searchQuery,
    sortColumn: state.product.sortColumn,
    currentPage: state.product.currentPage,
    pageSize: state.product.pageSize,
    viewModal: state.product.viewModal,
    property: state.product.property,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProduct: () => {
      dispatch(productAction.initProducts());
    },

    onHandleCurrentPage: (page) => {
      dispatch(productAction.changePage_product(page));
    },

    onSortColumn: (sortColumn) => {
      dispatch(productAction.sortColumn_category(sortColumn));
    },

    onHandleOpenModal: () => {
      dispatch(productAction.openModal_category());
    },

    onHandleCloseModal: () => {
      dispatch(productAction.closeModal_category());
    },

    onHandleraiseProperty: (customer) => {
      dispatch(productAction.setProperty_category(customer));
    },

    onHandleSearchQuery: (value) => {
      dispatch(productAction.searchQuery_category(value));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Product));
