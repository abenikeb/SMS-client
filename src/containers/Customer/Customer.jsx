import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";
import { getCustomers } from "../../services/fakeCustomerServices";
import { getCategories } from "../../services/fakeCategoryService";
import Modal from "../../components/UI/Modal/Modal";
import List from "./List/List";
import ViewCustomer from "../../components/Customer/ViewCustomer";
class Customer extends Form {
  state = {
    customers: [],
    categories: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "name", order: "acs" },
    viewModal: false,
  };

  componentDidMount() {
    const customers = getCustomers();
    const categories = getCategories();
    this.setState({ customers, categories });
  }

  handlePageChange = (page) => {
    this.setState((prevState, props) => {
      return {
        currentPage: page,
      };
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleModalClose = () => {
    this.setState({ viewModal: false });
  };

  handleOpenModal = () => {
    this.setState({ viewModal: true });
  };

  render() {
    return (
      <Auxiliary>
        <List
          customers={this.state.customers}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          onHandlePageChange={this.handlePageChange}
          sortColumns={this.state.sortColumn}
          onSort={this.handleSort}
          openModals={this.handleOpenModal}
        />
        <Modal show={this.state.viewModal} closeModal={this.handleModalClose}>
          <ViewCustomer />
        </Modal>
      </Auxiliary>
    );
  }
}

export default Customer;
