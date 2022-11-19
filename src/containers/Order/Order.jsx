import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import * as orderAction from "../../store/action/index";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";
import Modal from "../../components/UI/Modal/Modal";
import ViewOrder from "./ViewOrder/ViewOrder";
import paginate from "../../components/utils/paginate";
import ViewCustomer from "../../components/Customer/ViewCustomer";
import Spinner from "../../components/UI/Spinner/Spinner";

class Order extends Form {
  componentDidMount() {
    this.props.onInitOrders();
    // this.props.onInitCategories();
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
      orders,
      currentPage,
      pageSize,
      searchQuery,
      sortColumn,
      // property_: property,
      // viewModal_: viewModal,
    } = this.props;

    console.log("orders", orders);
    let filtered = orders;

    if (searchQuery) {
      filtered = orders.filter((m) =>
        m.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    let sortedList = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    let paginateItems = paginate(sortedList, currentPage, pageSize);
    const itemsSize = filtered.length;

    // let viewOrder = <ViewCustomer customer={property} />;
    // if (!property) {
    //   viewOrder = <Spinner />;
    // }

    return (
      <Auxiliary>
        <ViewOrder
          // onHandlePageChange={this.handlePageChange}
          sortColumns={sortColumn}
          // onSort={this.handleSort}
          // raiseProperty={this.handleraiseProperty}
          // onSearch={this.handleSearch}
          // searchQuery={searchQuery}
          // currentPage={currentPage}
          // pageSize={pageSize}
          itemsSize={itemsSize}
          paginateItems={paginateItems}
        />
        {/* <Modal show={viewModal} closeModal={this.handleModalClose}>
          {viewOrder}
        </Modal> */}
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    // categories_: state.customers.categories,
    // sortColumn_: state.customers.sortColumn,
    searchQuery: state.order.searchQuery,
    sortColumn: state.order.sortColumn,
    currentPage: state.order.currentPage,
    pageSize: state.order.pageSize,
    // viewModal_: state.customers.viewModal,
    // property_: state.customers.property,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitOrders: () => {
      dispatch(orderAction.initOrders());
    },

    // onInitCategories: () => {
    //   dispatch(customerAction.initCategories());
    // },

    // onHandleCurrentPage: (page) => {
    //   dispatch(customerAction.changePage(page));
    // },

    // onSortColumn: (sortColumn) => {
    //   dispatch(customerAction.sortColumn(sortColumn));
    // },

    // onHandleOpenModal: () => {
    //   dispatch(customerAction.openModal());
    // },

    // onHandleCloseModal: () => {
    //   dispatch(customerAction.closeModal());
    // },

    // onHandleraiseProperty: (customer) => {
    //   dispatch(customerAction.setProperty(customer));
    // },

    // onHandleSearchQuery: (value) => {
    //   dispatch(customerAction.searchQuery(value));
    // },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Order));
