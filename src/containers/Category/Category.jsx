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
import ViewCategory from "./ViewCategory/ViewCategory";
import * as categoryAction from "../../store/action/index";

class Category extends Component {
  componentDidMount() {
    this.props.onInitCategories();
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
      categories: allCategories,
      currentPage,
      pageSize,
      searchQuery,
      sortColumn,
      property,
      viewModal,
    } = this.props;

    let filtered = allCategories;

    if (searchQuery) {
      filtered = allCategories.filter((m) =>
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
        <ViewCategory
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
    categories: state.categories.categories,
    sortColumn: state.categories.sortColumn,
    searchQuery: state.categories.searchQuery,
    sortColumn: state.categories.sortColumn,
    currentPage: state.categories.currentPage,
    pageSize: state.categories.pageSize,
    viewModal: state.categories.viewModal,
    property: state.categories.property,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => {
      dispatch(categoryAction.initCategories());
    },

    onHandleCurrentPage: (page) => {
      dispatch(categoryAction.changePage_category(page));
    },

    onSortColumn: (sortColumn) => {
      dispatch(categoryAction.sortColumn_category(sortColumn));
    },

    onHandleOpenModal: () => {
      dispatch(categoryAction.openModal_category());
    },

    onHandleCloseModal: () => {
      dispatch(categoryAction.closeModal_category());
    },

    onHandleraiseProperty: (customer) => {
      dispatch(categoryAction.setProperty_category(customer));
    },
    onHandleSearchQuery: (value) => {
      dispatch(categoryAction.searchQuery_category(value));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Category));
