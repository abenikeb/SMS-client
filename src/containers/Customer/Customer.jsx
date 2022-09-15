import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import * as customerAction from "../../store/action/index";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";
import Modal from "../../components/UI/Modal/Modal";
import List from "./List/List";
import paginate from "../../components/utils/paginate";
import ViewCustomer from "../../components/Customer/ViewCustomer";
import Spinner from "../../components/UI/Spinner/Spinner";

class Customer extends Form {
  async componentDidMount() {
    try {
      this.props.onInitCustomers();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.props.navigate("/");
      }
    }

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
      customers_: allCustomers,
      currentPage_: currentPage,
      pageSize_: pageSize,
      searchQuery_: searchQuery,
      sortColumn_: sortColumn,
      property_: property,
      viewModal_: viewModal,
    } = this.props;

    let filtered = allCustomers;

    if (searchQuery) {
      filtered = allCustomers.filter((m) =>
        m.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    let sortedList = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    let paginateItems = paginate(sortedList, currentPage, pageSize);
    const itemsSize = filtered.length;

    let viewCustomer = <ViewCustomer customer={property} />;
    if (!property) {
      viewCustomer = <Spinner />;
    }
    return (
      <Auxiliary>
        <List
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
        <Modal show={viewModal} closeModal={this.handleModalClose}>
          {viewCustomer}
        </Modal>
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    customers_: state.customers.customers,
    categories_: state.customers.categories,
    sortColumn_: state.customers.sortColumn,
    searchQuery_: state.customers.searchQuery,
    sortColumn_: state.customers.sortColumn,
    currentPage_: state.customers.currentPage,
    pageSize_: state.customers.pageSize,
    viewModal_: state.customers.viewModal,
    property_: state.customers.property,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCustomers: () => {
      dispatch(customerAction.initCustomers());
    },

    onInitCategories: () => {
      dispatch(customerAction.initCategories());
    },

    onHandleCurrentPage: (page) => {
      dispatch(customerAction.changePage(page));
    },

    onSortColumn: (sortColumn) => {
      dispatch(customerAction.sortColumn(sortColumn));
    },

    onHandleOpenModal: () => {
      dispatch(customerAction.openModal());
    },

    onHandleCloseModal: () => {
      dispatch(customerAction.closeModal());
    },

    onHandleraiseProperty: (customer) => {
      dispatch(customerAction.setProperty(customer));
    },
    onHandleSearchQuery: (value) => {
      dispatch(customerAction.searchQuery(value));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Customer));
